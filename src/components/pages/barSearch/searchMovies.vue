<template>
  <p class="text-center mb-2 mt-10">Faça uma busca pelo filme desejado</p>
  <form class="flex flex-col mt-3 items-center w-full">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <input-form
          :titleLabel="'Título'"
          :nameInput="'title'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'Insira o título do filme'"
          @inputValue="search.title = $event.target.value"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <input-form
          :titleLabel="'Ano'"
          :nameInput="'year'"
          :typeInput="'text'"
          :isRequired="false"
          :placeholderInput="'Faça filtro pelo ano'"
          @inputValue="search.year = $event.target.value"
        />
      </div>
    </div>
    <buttonForm :titleButton="'Buscar'" @functionButton="makeSearch" />
  </form>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, defineEmits, reactive } from "vue";
import inputForm from "../../structure/inputForm.vue";
import buttonForm from "../../structure/buttonForm.vue";

let emitSearch = defineEmits(["searchTitle", "searchYear", "returnMovies"]);

const search = reactive({
  title: "" as string,
  year: 0 as number,
});

function makeSearch() {
  emitSearch("searchTitle", search.title);
  emitSearch("searchYear", search.year);
  emitSearch("returnMovies");
}

defineProps({
  nextPage: { required: false },
  previousPage: { required: false },
  currentPage: { require: false, type: Number },
  totalPages: { require: false, type: Number },
});

defineComponent({
  name: "SearchMovies",
});
</script>
