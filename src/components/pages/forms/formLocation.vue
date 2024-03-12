<template>
  <modal
    :messageModal="'Locação efetuada com sucesso'"
    @functionModal="$router.push({ name: 'ListLocations' })"
    v-if="showModal"
  />
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md min-h-full">
    <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      <div>
        <input-form
          :titleLabel="'Nome'"
          :nameInput="'name'"
          :typeInput="'text'"
          :isRequired="true"
          :inputDisabled="true"
          :valueInput="userLocation.name"
          :placeholderInput="''"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'CPF'"
          :nameInput="'cpf'"
          :typeInput="'text'"
          :isRequired="true"
          :inputDisabled="true"
          :valueInput="userLocation.cpf"
          :placeholderInput="''"
        />
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      <div>
        <input-form
          :titleLabel="'Nome do filme'"
          :nameInput="'movieName'"
          :typeInput="'text'"
          :isRequired="true"
          :inputDisabled="true"
          :valueInput="userLocation.movieName"
          :placeholderInput="''"
        />
      </div>
      <div>
        <input-form
          :titleLabel="'Status'"
          :nameInput="'status'"
          :typeInput="'text'"
          :isRequired="true"
          :inputDisabled="true"
          :valueInput="userLocation.status"
          :placeholderInput="''"
        />
      </div>
    </div>
    <buttonForm
      :titleButton="'Salvar'"
      @functionButton="saveLocation"
      class="mt-2"
    />
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
import Movies from "@/services/moviesService.ts";
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import selectForm from "@/components/structure/selectForm.vue";
import Modal from "@/components/structure/modal.vue";
import router from "@/router";

defineComponent({
  name: "FormLocations",
});

const moviesService = new Movies();

let detailsMovie = reactive([]);
let userLocation = reactive({
  id: 0,
  name: "",
  cpf: "",
});
let showModal = ref(false);

async function searchDetailsMovies() {
  let idMovies = router.currentRoute.value.params.id;
  const res = await moviesService.searchDetailsMovie(idMovies);
  detailsMovie.push(res);
}

function saveLocation() {
  console.log("Teste");
}

function completeFields(data) {
  userLocation.id = data.id;
  userLocation.name = data.name;
  userLocation.cpf = data.cpf;
}

onMounted(() => {
  searchDetailsMovies();
  completeFields(JSON.parse(localStorage.getItem("userLogged")));
});
</script>
