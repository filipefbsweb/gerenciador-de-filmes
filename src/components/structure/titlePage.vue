<template>
  <h1
    class="mt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-500"
  >
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

defineProps({
  title: {
    required: true,
    type: String,
  },
});

defineComponent({
  name: "TitlePageComponent",
});
</script>
