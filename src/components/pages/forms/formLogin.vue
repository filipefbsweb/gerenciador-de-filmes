<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
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
            :valueInput="user.document"
            @haveError="errorForm = $event"
            @inputValue="user.document = $event.target.value"
          />
        </div>
        <div>
          <input-form
            :titleLabel="'Senha'"
            :nameInput="'password'"
            :typeInput="'password'"
            :isRequired="true"
            :placeholderInput="'Insira sua senha'"
            :valueInput="user.password"
            @haveError="errorForm = $event"
            @inputValue="user.password = $event.target.value"
          />
        </div>
        <p class="text-red-500 text-xs italic" v-if="inputError">
          Não conseguimos validar seu usuário e/ou senha
        </p>
        <buttonForm :titleButton="'Entrar'" @functionButton="login" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import { defineComponent, reactive, ref, onMounted } from "vue";
import router from "@/router";

let user = reactive({
  document: "",
  password: "",
});

let inputError = ref(false)

let errorForm = ref(false);

defineComponent({
  name: "LoginForm",
});

function verifyUserLocal() {
  let users = JSON.parse(localStorage.getItem("users"));
  users = users.find(
    (userItem) =>
      userItem.cpf === user.document &&
      userItem.password === user.password &&
      userItem.status == 1
  );
  if (users != undefined) {
    localStorage.setItem("userLogged", JSON.stringify(users));
    localStorage.setItem("token", JSON.stringify({ token: "12345" }));
    location.reload();
  } else {
    inputError.value = true
  }
}

function verifyLogged() {
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token").length != 0
  )
    router.push({ name: "ListMovies" });
}

function login() {
  if (errorForm.value) return;
  verifyUserLocal();
}

onMounted(() => {
  verifyLogged();
});
</script>
