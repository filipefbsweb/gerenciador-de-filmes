<template>
  <label
    :for="props.nameInput"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >{{ props.titleLabel }}</label
  >
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

defineComponent({
  name: "LabelButton",
});

const props = defineProps({
  titleLabel: {
    required: true,
    type: String,
  },
  nameInput: {
    required: true,
    type: String,
  },
});
</script>
