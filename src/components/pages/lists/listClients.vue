<template>
  <searchClient
    @searchName="search.name = $event"
    @searchDocumento="search.document = $event"
    @searchStatus="search.status = $event"
    @returnClients="filterClients"
    @clearSearch="resetSearch"
  />
  <div
    class="container mx-auto max-w-screen-xl items-center justify-between px-3 overflow-x-auto"
  >
    <div class="grid grid-flow-col justify-stretch">
      <div class="py-2 w-36 font-bold">Nome</div>
      <div class="py-2 w-60 font-bold">Documento</div>
      <div class="py-2 w-96 font-bold">Email</div>
      <div class="py-2 w-56 font-bold">Telefone</div>
      <div class="py-2 w-36 font-bold">Status</div>
      <div class="py-2 w-12 font-bold"></div>
    </div>

    <div>
      <div
        class="grid grid-flow-col justify-stretch"
        v-for="(item, index) in listClients"
        :key="index"
      >
        <div class="py-2 w-36">{{ item.name }}</div>
        <div class="py-2 w-60">{{ item.document }}</div>
        <div class="py-2 w-96">{{ item.email }}</div>
        <div class="py-2 w-56">{{ item.phone }}</div>
        <div class="py-2 w-36">
          {{ item.status == 1 ? "Ativo" : "Inativo" }}
        </div>
        <div class="py-2 w-12">
          <router-link :to="{ name: 'EditClients', params: { id: item.id } }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import searchClient from "@/components/pages/barSearch/searchClient.vue";
let listClients = ref([]);
let clientsFilter = reactive([]);
let search = reactive({
  name: "",
  document: "",
  status: "",
});

defineComponent({
  name: "listClientComponents",
});

function filterClients() {
  let resName = search.name != "" && clientsFilter.filter((item) => item.name == search.name);
  let resDocument = search.document != "" && clientsFilter.filter((item) => item.document == search.document);
  let resStatus = search.status != "" && clientsFilter.filter((item) => item.status == search.status);
  console.log(resName)
  if (resName) listClients.value = resName;
  if (resDocument) listClients.value = resDocument;
  if (resStatus) listClients.value = resStatus;
}

function resetSearch() {
  location.reload();
}

onMounted(() => {
  listClients.value = JSON.parse(localStorage.getItem("clients") || "[]");
  clientsFilter = listClients.value;
});
</script>
