<template>
  <form class="flex flex-col mt-3 items-center w-full">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <input-form
          :titleLabel="'Nome'"
          :nameInput="'name'"
          :typeInput="'text'"
          :isRequired="true"
          :placeholderInput="'Nome do cliente'"
          @inputValue="search.name = $event.target.value"
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <input-form
          :titleLabel="'Documento'"
          :nameInput="'document'"
          :typeInput="'text'"
          :isRequired="false"
          :placeholderInput="'Busque pelo CPF'"
          @inputValue="search.document = $event.target.value"
        />
      </div>
      <div class="w-full md:w-1/3 px-3">
        <selectForm
          :optionsSelect="optionsSelect"
          :titleLabel="'Status'"
          :nameInput="'status'"
          :isRequired="false"
          @inputValue="search.status = $event.target.value"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6 gap-2">
      <buttonForm :titleButton="'Buscar'" @functionButton="searchClient" />
      <buttonForm :titleButton="'Limpar'"
      @functionButton="functionClearSearch" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, defineEmits, reactive } from "vue";
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import selectForm from "@/components/structure/selectForm.vue";

let emitSearch = defineEmits([
  "searchName",
  "searchDocumento",
  "searchStatus",
  "returnClients",
  "clearSearch",
]);

let search = reactive({
  name: "" as string,
  document: "" as string,
  status: "",
});

let optionsSelect = reactive([
  {},
  { id: 1, text: "Ativo" },
  { id: 0, text: "Inativo" },
]);

function searchClient() {
  search.name != "" && emitSearch("searchName", search.name);
  search.document != "" && emitSearch("searchDocumento", search.document);
  search.status != "" && emitSearch("searchStatus", search.status);
  emitSearch("returnClients");
}

function functionClearSearch(){
    emitSearch("clearSearch");
}

defineComponent({
  name: "SearchClient",
});
</script>
