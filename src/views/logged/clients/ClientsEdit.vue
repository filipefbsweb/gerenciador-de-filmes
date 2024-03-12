<template>
  <title-page title="Edição de cliente" />

  <form-client :edit="true"/>
</template>

<script setup lang="ts">
import titlePage from "@/components/structure/titlePage.vue";
import formClient from "@/components/pages/forms/formClient.vue";
</script>
