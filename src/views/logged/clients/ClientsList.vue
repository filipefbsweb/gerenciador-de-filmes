<template>
  <div
    class="content w-full mx-auto max-w-screen-xl p-4 md:text-center lg:text-left"
  >
    <title-page title="Clientes" />
    <buttonForm
      :titleButton="'Cadastrar cliente'"
      @functionButton="$router.push({ name: 'AddClients' })"
    />
    <list-clients />
  </div>
</template>

<script setup lang="ts">
import titlePage from "@/components/structure/titlePage.vue";
import listClients from "@/components/pages/lists/listClients.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
</script>
