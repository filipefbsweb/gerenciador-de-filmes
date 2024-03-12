<template>
  <loading v-show="setLoading" />
  <app-header />
  <router-view></router-view>
  <app-footer />
</template>

<script setup>
import Loading from "@/components/structure/loading.vue";
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const setLoading = computed(() => store.state.loading);
</script>
