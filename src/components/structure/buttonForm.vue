<template>
  <button
    @click.prevent="emitFunction"
    class="text-white font-bold py-2 px-4 rounded-full mb-10"
    :class="deleteButton ? 'bg-red-700 hover:bg-red-800' : 'bg-blue-500 hover:bg-blue-700'"
  >
    {{ titleButton }}
  </button>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, defineEmits } from "vue";

defineComponent({
  name: "buttonForm",
});

const emit = defineEmits(["functionButton"]);
function emitFunction() {
  emit("functionButton");
}

const props = defineProps({
  titleButton: {
    required: true,
    type: String,
  },
  deleteButton: {
    required: false,
    type: Boolean,
  },
});
</script>
