<template>
  <div class="container mx-auto p-4">
    <titlePage :title="'Login'" />
    <p
      class="mb-0 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
    >
      Insira seu usuário e senha para continuar.<br />
    </p>
    <div class="flex justify-center mt-8">
      <form-login />
    </div>
  </div>
</template>

<script setup lang="ts">
import titlePage from "@/components/structure/titlePage.vue";
import formLogin from "@/components/pages/forms/formLogin.vue";
import { defineComponent } from "vue";

defineComponent({
  name: "ScreenLogin",
});
</script>
