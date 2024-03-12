<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 "
  >
    <div class="m-auto p-6 space-y-4 md:space-y-6 sm:p-8 w-full text-center">
      <form class="m-auto space-y-4 md:space-y-6" action="#">
        <div>
          <input-form
            :titleLabel="'CPF'"
            :nameInput="'cpf'"
            :typeInput="'text'"
            :isRequired="true"
            :placeholderInput="'000.000.000-00'"
          />
        </div>
        <div>
          <input-form
            :titleLabel="'Senha'"
            :nameInput="'password'"
            :typeInput="'password'"
            :isRequired="true"
            :placeholderInput="'Insira sua senha'"
          />
        </div>
        <buttonForm :titleButton="'Entrar'" @functionButton="login" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import { defineComponent } from "vue";

defineComponent({
  name: "LoginForm",
});

function login() {
  console.log("login");
}
</script>
