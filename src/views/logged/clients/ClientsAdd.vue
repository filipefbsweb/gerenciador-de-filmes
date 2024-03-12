<template>
  <titlePage :title="'Novo cliente'" />
  <p
    class="mb-0 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
  >
    Preencha os dados abaixo para efetuar seu cadastro.<br />
    <span class="italic">Lembre-se, todos os campos são obrigatórios</span>
  </p>
  <form-client :edit="false" />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import formClient from "@/components/pages/forms/formClient.vue";
import titlePage from "@/components/structure/titlePage.vue";

defineComponent({
  name: "AddClient",
});
</script>
