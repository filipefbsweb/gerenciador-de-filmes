<template>
  <modal
    :messageModal="'Pesquise pelo filme e clique em Alugar'"
    @functionModal="$router.push({ name: 'Movies' })"
    :showImage="true"
    v-if="showModal"
  />
  <div
    class="content w-full mx-auto max-w-screen-xl p-4 md:text-center lg:text-left"
  >
    <title-page title="Lista de locações" />
    <buttonForm
      :titleButton="'Nova locação'"
      @functionButton="showModal = true"
    />
    <list-clients />
  </div>
</template>

<script setup lang="ts">
import Modal from "@/components/structure/modal.vue";
import listUsers from "@/components/pages/lists/formUser.vue";
import titlePage from "@/components/structure/titlePage.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import { ref } from "vue";

let showModal = ref(false)
</script>
