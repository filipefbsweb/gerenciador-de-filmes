<template>
  <div
    class="flex justify-center items-center w-full h-full top-0 fixed bg-black bg-opacity-60"
  >
    <div
      class="grid h-screen place-items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center items-center w-full max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-10 md:p-5 grid place-items-center">
            <img :src="Images.Checked" v-if="!showImage"/>
            {{ Images.checked }}
            <h3
              class="mb-5 mt-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              {{ messageModal }}
            </h3>
            <button-form
              :titleButton="'Continuar'"
              @functionButton="$emit('functionModal')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps  } from "vue";
import Images from "@/images";
import buttonForm from "@/components/structure/buttonForm.vue";

defineComponent({
  name: "ModalComponent",
});

defineProps({
  messageModal: {
    required: true,
    type: String,
  },
  showImage: {
    require: false,
    type: Boolean
  }
});
</script>
