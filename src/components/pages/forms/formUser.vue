<template>
  <modal
    :messageModal="'Alterações salvas com sucesso!'"
    @functionModal="$router.push({ name: 'ListUsers' })"
    v-if="showModal"
  />
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <form action="#" class="space-y-8">
      <div>
        <input-form
          :titleLabel="'Nome'"
          :nameInput="'name'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'Insira seu nome'"
          :valueInput="formUser.name"
          @haveError="errorForm = $event"
          @inputValue="formUser.name = $event.target.value"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'CPF'"
          :nameInput="'cpf'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'000.000.000-00'"
          :valueInput="formUser.cpf"
          @haveError="errorForm = $event"
          @inputValue="formUser.cpf = $event.target.value"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'Senha'"
          :nameInput="'password'"
          :typeInput="'password'"
          :isRequired="true"
          :placeholderInput="'Digite uma senha'"
          :valueInput="formUser.password"
          @haveError="errorForm = $event"
          @inputValue="formUser.password = $event.target.value"
        />
      </div>
      <div>
        <selectForm
          :optionsSelect="optionsSelect"
          :titleLabel="'Status'"
          :nameInput="'status'"
          :isRequired="true"
          @inputValue="formUser.status = $event.target.value"
          @haveError="errorForm = $event"
        />
      </div>
      <div class="flex justify-between">
        <buttonForm :titleButton="'Salvar'" @functionButton="saveUser" />
        <buttonForm
          :titleButton="'Apagar'"
          @functionButton="deleteUser"
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
  ref,
  reactive,
  toRaw,
  onMounted,
} from "vue";
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import selectForm from "@/components/structure/selectForm.vue";
import Modal from "@/components/structure/modal.vue";
import router from "@/router";

defineComponent({
  name: "FormUser",
});

const props = defineProps({
  edit: {
    required: false,
    type: Boolean,
  },
});

let showModal = ref(false);

let optionsSelect = reactive([
  { id: 1, text: "Ativo" },
  { id: 0, text: "Inativo" },
]);

let formUser = reactive({
  id: "",
  name: "",
  cpf: "",
  password: "",
  status: 1,
});

let errorForm = ref(false);

function completeForm(value) {
  formUser.id = value.id;
  formUser.name = value.name;
  formUser.cpf = value.cpf;
  formUser.password = value.password;
  formUser.status = value.status;
}

function editUser() {
  let idUser = router.currentRoute.value.params.id;
  let usersLocal = JSON.parse(localStorage.getItem("users") || "[]");
  let resSearch = usersLocal.find((item) => item.id == idUser);
  completeForm(resSearch);
}

function deleteUser(data: any) {
  let users = JSON.parse(localStorage.getItem("users") || "{}");
  let userDelete = users.filter(
    (item) => item.id == router.currentRoute.value.params.id
  );
  userDelete[0].status = 0;
  updateUser(userDelete[0]);
}

function updateUser(data: any) {
  let userUpdate = JSON.parse(localStorage.getItem("users") || "{}");
  userUpdate = userUpdate.filter(
    (item) => item.id != router.currentRoute.value.params.id
  );
  userUpdate.push(data);
  localStorage.setItem("users", JSON.stringify(userUpdate));
  showModal.value = true;
}

function saveUser() {
  const data = toRaw(formUser);
  if (props.edit) {
    updateUser(data);
    return;
  }
  if (errorForm.value) return;
  let usersLocal = JSON.parse(localStorage.getItem("users") || "[]");
  data.id = usersLocal.length + 1;
  usersLocal.push(data);
  localStorage.setItem("users", JSON.stringify(usersLocal));
  showModal.value = true;
}

function saveLocalStorage() {
  let data = [
    {
      id: 1,
      name: "José",
      cpf: "780.445.402-37",
      password: "123456",
      status: 1,
    },
    {
      id: 2,
      name: "Martin",
      cpf: "744.318.881-10",
      password: "1234",
      status: 0,
    },
    {
      id: 3,
      name: "Kauê",
      cpf: "869.302.957-60",
      password: "123456",
      status: "TO",
    },
  ];

  localStorage.setItem("clients", JSON.stringify(data));
}

onMounted(() => {
  props.edit && editUser();
});
</script>
