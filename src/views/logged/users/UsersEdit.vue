<template>
  <title-page title="Edição de usuário" />

  <form-user :edit="true"/>
</template>

<script setup lang="ts">
import titlePage from "@/components/structure/titlePage.vue";
import formUser from "@/components/pages/forms/formUser.vue";
</script>
