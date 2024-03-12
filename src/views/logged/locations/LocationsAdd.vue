<template>
  <titlePage :title="'Nova locação'" />
  <p
    class="mb-0 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
  >
    Confirme os dados abaixo para efeutas a locação<br />
    <span class="italic">Lembre-se, todos os campos são obrigatórios</span>
  </p>
  <form-location />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import formLocation from "@/components/pages/forms/formLocation.vue";
import titlePage from "@/components/structure/titlePage.vue";

defineComponent({
  name: "AddLocation",
});
</script>
