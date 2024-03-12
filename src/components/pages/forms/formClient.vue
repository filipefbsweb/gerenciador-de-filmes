<template>
  <modal
    :messageModal="'Alterações salvas com sucesso!'"
    @functionModal="$router.push({ name: 'ListClients' })"
    v-if="showModal"
  />
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <form action="#" class="space-y-8">
      <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <input-form
            :titleLabel="'Nome'"
            :nameInput="'name'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'Insira seu nome'"
            :valueInput="formClient.name"
            @haveError="errorForm = $event"
            @inputValue="formClient.name = $event.target.value"
          />
        </div>
        <div>
          <input-form
            :titleLabel="'Sobrenome'"
            :nameInput="'surname'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'Insira seu sobrenome'"
            :valueInput="formClient.surname"
            @haveError="errorForm = $event"
            @inputValue="formClient.surname = $event.target.value"
          />
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <input-form
            :titleLabel="'Documento'"
            :nameInput="'document'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'000.000.000-00'"
            :valueInput="formClient.document"
            @haveError="errorForm = $event"
            @inputValue="formClient.document = $event.target.value"
          />
        </div>
        <div>
          <input-form
            :titleLabel="'Celular'"
            :nameInput="'phone'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'(00) 00000-0000'"
            :valueInput="formClient.phone"
            @haveError="errorForm = $event"
            @inputValue="formClient.phone = $event.target.value"
          />
        </div>
      </div>
      <div>
        <input-form
          :titleLabel="'E-mail'"
          :nameInput="'email'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'endereco@endereco.com'"
          :valueInput="formClient.email"
          @haveError="errorForm = $event"
          @inputValue="formClient.email = $event.target.value"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'Cep'"
          :nameInput="'cep'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'00000-000'"
          :valueInput="formClient.cep"
          @haveError="errorForm = $event"
          @inputValue="formClient.cep = $event.target.value"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'Endereço'"
          :nameInput="'adrress'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'Insira o endereço'"
          :inputDisabled="cepNotFound"
          :valueInput="formClient.adrress"
          @haveError="errorForm = $event"
          @inputValue="formClient.adrress = $event.target.value"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'Bairro'"
          :nameInput="'district'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'Insira o bairro'"
          @haveError="errorForm = $event"
          :inputDisabled="cepNotFound"
          @inputValue="formClient.district = $event.target.value"
          :valueInput="formClient.district"
        />
      </div>
      <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <input-form
            :titleLabel="'Cidade'"
            :nameInput="'city'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'Insira a cidade'"
            @haveError="errorForm = $event"
            :inputDisabled="cepNotFound"
            @inputValue="formClient.city = $event.target.value"
            :valueInput="formClient.city"
          />
        </div>
        <div>
          <input-form
            :titleLabel="'Estado'"
            :nameInput="'state'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'Insira o estado'"
            @haveError="errorForm = $event"
            :inputDisabled="cepNotFound"
            @inputValue="formClient.state = $event.target.value"
            :valueInput="formClient.state"
          />
        </div>
      </div>
      <div class="flex justify-between">
        <buttonForm :titleButton="'Salvar'" @functionButton="saveClient" />
        <buttonForm
          :titleButton="'Apagar'"
          @functionButton="deleteClient"
          :deleteButton="true"
          v-if="edit"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  defineProps,
  watch,
  ref,
  reactive,
  toRaw,
  onMounted,
} from "vue";
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import Modal from "@/components/structure/modal.vue";
import CEP from "@/services/cepService";
import router from "@/router";

defineComponent({
  name: "FormClient",
});

const props = defineProps({
  edit: {
    required: false,
    type: Boolean,
  },
});

let formClient = reactive({
  id: "",
  name: "",
  surname: "",
  document: "",
  phone: "",
  email: "",
  cep: "",
  adrress: "",
  district: "",
  city: "",
  state: "",
  status: 1,
});

let showModal = ref(false);
let errorForm = ref(true);
let cepNotFound = ref(true);
const search = new CEP();

async function searchCep() {
  let cep = "";
  if (formClient.cep.search("-")) {
    cep = formClient.cep.replace("-", "").replace(".", "");
  }
  if (cep.length != 8) return;

  const res: any = await search.searchCep(cep);

  if (res.erro) {
    cepNotFound.value = false;
    return;
  }

  formClient.adrress = res.logradouro;
  formClient.district = res.bairro;
  formClient.city = res.localidade;
  formClient.state = res.uf;
  cepNotFound.value = false;
}

watch(
  () => formClient.cep,
  () => {
    searchCep();
  }
);

function completeForm(value: any) {
  if (value === null) return;
  formClient.id = value.id;
  formClient.name = value.name;
  formClient.surname = value.surname;
  formClient.document = value.document;
  formClient.phone = value.phone;
  formClient.email = value.email;
  formClient.cep = value.cep;
  formClient.adrress = value.adrress;
  formClient.district = value.district;
  formClient.city = value.city;
  formClient.state = value.state;
  formClient.status = value.status;
}

function editClient() {
  let idClient = router.currentRoute.value.params.id;
  let clientsLocal = JSON.parse(localStorage.getItem("clients") || "[]");
  let resSearch = clientsLocal.find((item) => item.id == idClient);
  completeForm(resSearch);
}

function saveEditClient() {
  const data = toRaw(formClient);
  let clientsLocal = JSON.parse(localStorage.getItem("clients") || "[]");
  let idNewUser = clientsLocal.length + 1;
  data.id = idNewUser;
  clientsLocal.push(data);
  localStorage.setItem("clients", JSON.stringify(clientsLocal));
  showModal.value = true;
}

function deleteClient(data: any) {
  let clients = JSON.parse(localStorage.getItem("clients") || "{}");
  let clientDelete = clients.filter(
    (item) => item.id == router.currentRoute.value.params.id
  );
  clientDelete[0].status = 0;
  updateCliente(clientDelete[0]);
}

function updateCliente(data: any) {
  let clientUpdate = JSON.parse(localStorage.getItem("clients") || "{}");
  clientUpdate = clientUpdate.filter(
    (item) => item.id != router.currentRoute.value.params.id
  );
  clientUpdate.push(data);
  localStorage.setItem("clients", JSON.stringify(clientUpdate));
  showModal.value = true;
}

function saveClient() {
  const data = toRaw(formClient);
  if (props.edit) {
    updateCliente(data);
    return;
  }

  if (errorForm.value) return;
  let clientsLocal = JSON.parse(localStorage.getItem("clients") || "[]");
  let idNewUser = clientsLocal.length + 1;
  data.id = idNewUser;
  clientsLocal.push(data);
  localStorage.setItem("clients", JSON.stringify(clientsLocal));
  showModal.value = true;
}

function saveLocalStorage() {
  let data = [
    {
      id: 1,
      name: "José",
      surname: "Caio Geraldo Nascimento",
      document: "780.445.402-37",
      email: "jose_caio_nascimento@guiamaritimo.com.br",
      phone: "(67) 98363-3254",
      cep: "79063-480",
      adrress: "Rua Ucy Nagamine",
      district: "Universitário",
      city: "Campo Grande",
      state: "MS",
      status: 1,
    },
    {
      id: 2,
      name: "Martin",
      surname: "Benedito Henry Cavalcanti",
      document: "744.318.881-10",
      email: "martin-cavalcanti98@multieventos.art.br",
      phone: "(84) 98102-1986",
      cep: "59065-390",
      adrress: "Rua Presidente Pamplona",
      district: "Candelária",
      city: "Natal",
      state: "RN",
      status: 0,
    },
    {
      id: 3,
      name: "Kauê",
      surname: "Pedro Kauê Aragão",
      document: "869.302.957-60",
      email: "kaue_aragao@lht.com.br",
      phone: "(63) 98197-7492",
      cep: "77023-122",
      adrress: "Quadra 812 Sul Alameda 3",
      district: "Plano Diretor Sul",
      city: "Palmas",
      state: "TO",
      status: 1,
    },
  ];

  localStorage.setItem("clients", JSON.stringify(data));
}

onMounted(() => {
  props.edit && editClient();
});
</script>
