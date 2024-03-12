<template>
  <div class="flex flex-col mt-3 items-center w-full">
    <!-- Help text -->
    <span class="text-sm text-gray-700">
      Página
      <span class="font-semibold text-gray-700">{{ currentPage }}</span> de
      <span class="font-semibold text-gray-700">{{ totalPages }}</span>
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
      <!-- Buttons -->
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        @click="previousPage"
        :disabled="currentPage < 2 && true"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </button>
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        @click="nextPage"
        :disabled="totalPages <= 10 && true"
      >
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

defineProps({
  nextPage: { required: false },
  previousPage: { required: false },
  currentPage: { require: false, type: Number },
  totalPages: { require: false, type: Number },
});

defineComponent({
  name: "ComponentPagination",
});
</script>
