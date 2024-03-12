<template>
  <div
    class="container mx-auto max-w-screen-xl items-center justify-between px-3 overflow-x-auto"
  >
    <div class="grid grid-flow-col justify-stretch">
      <div class="py-2 w-60 font-bold">Nome</div>
      <div class="py-2 w-60 font-bold">Documento</div>
      <div class="py-2 w-36 font-bold">Status</div>
      <div class="py-2 w-12 font-bold"></div>
    </div>
    <div v-if="listUsers.value != []">
      <div>
        <div
          class="grid grid-flow-col justify-stretch"
          v-for="(item, index) in listUsers"
          :key="index"
        >
          <div class="py-2 w-60">{{ item.name }}</div>
          <div class="py-2 w-60">{{ item.cpf }}</div>
          <div class="py-2 w-36">
            {{ item.status == 1 ? "Ativo" : "Inativo" }}
          </div>
          <div class="py-2 w-12">
            <router-link :to="{ name: 'EditUser', params: { id: item.id } }">
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
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
let listUsers = ref([]);

defineComponent({
  name: "listUsersComponent",
});

onMounted(() => {
  listUsers.value = JSON.parse(localStorage.getItem("users") || "[]");
});
</script>
