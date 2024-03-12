<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="/" class="flex items-center">
          <img
            :src="Images.GFLogo"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <router-link
            v-if="!logado"
            :to="{ name: 'Login' }"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >Entrar</router-link
          >
          <button
            v-if="logado"
            @click="logout"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Sair
          </button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="showMenuMobile = !showMenuMobile"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          :class="!showMenuMobile ? 'hidden' : ''"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <router-link
                :to="{ name: 'ListMovies' }"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Filmes</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'ListLocations' }"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Locação</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'ListClients' }"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Clientes</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'ListUsers' }"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Usuários</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Images from "@/images";
import router from "@/router";
import { defineComponent, onMounted, ref } from "vue";

let logado = ref(false);
let showMenuMobile = ref(false);

defineComponent({
  name: "AppHeader",
});

function logout() {
  localStorage.removeItem("token");
  location.reload();
}

onMounted(() => {
  if (localStorage.getItem("token")) {
    logado.value = true;
  }
});
</script>
