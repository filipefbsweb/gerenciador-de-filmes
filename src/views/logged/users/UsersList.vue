<template>
  <div
    class="content w-full mx-auto max-w-screen-xl p-4 md:text-center lg:text-left"
  >
    <title-page title="Usuários" />
    <buttonForm :titleButton="'Cadastrar usuário'" @functionButton="$router.push({ name: 'AddUser' })" />
    <list-users />
  </div>
</template>

<script setup lang="ts">
import titlePage from "@/components/structure/titlePage.vue";
import listUsers from "@/components/pages/lists/listUsers.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
</script>
