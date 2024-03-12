<template>
  <div class="content lg:w-60 md:w-auto pb-5">
    <img :src="imageMovie" :alt="titleMovie" class="w-96" />
    <h1 class="text-1xl min-h-16 text-center">{{ titleMovie }}</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded-full w-full"
      @click="$router.push({ name: 'NewLocation', params: { id: idMovie } })"
      :title="'Clique para alugar o filme ' + titleMovie"
    >
      Alugar
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

defineComponent({
  name: "MovieThubmnail",
});

defineProps({
  titleMovie: String,
  imageMovie: String,
  idMovie: Number,
});
</script>
