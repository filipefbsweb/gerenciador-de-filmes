<template>
  <loading v-show="setLoading" />
  <app-header />
  <router-view></router-view>
  <app-footer />
</template>

<script setup lang="ts">
import Loading from "@/components/structure/loading.vue";
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const setLoading = computed(() => store.state.loading);

function AddAdmin() {
  let hasUsers = JSON.parse(localStorage.getItem("users") || "[]");

  let userAdmin = [
    {
      id: 1,
      name: "Admin",
      cpf: "123123123",
      password: "12324",
      status: 1,
    },
  ];

  if (hasUsers.length < 1) {
    localStorage.setItem("users", JSON.stringify(userAdmin));
  }
}

onMounted(() => {
  AddAdmin();
});
</script>
