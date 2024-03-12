<template>
  <modal
    :messageModal="'Locação efetuada com sucesso'"
    @functionModal="$router.push({ name: 'ListLocations' })"
    v-if="showModal"
  />
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md min-h-full"></div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  defineProps,
  ref,
  reactive,
  toRaw,
  onMounted,
} from "vue";
import inputForm from "@/components/structure/inputForm.vue";
import buttonForm from "@/components/structure/buttonForm.vue";
import selectForm from "@/components/structure/selectForm.vue";
import Modal from "@/components/structure/modal.vue";
import router from "@/router";

defineComponent({
  name: "FormLocations",
});

let showModal = ref(false);

</script>
