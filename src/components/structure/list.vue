<template>
  <div
    class="container mx-auto max-w-screen-xl items-center justify-between px-3"
  >
    <div :class="`grid gap-4 ${stringClass.value}`">
      <div v-for="(item, index) in props.titleFields" :key="index">
        {{ item }}
      </div>
    </div>
    <div :class="`grid gap-4 ${stringClass.value}`">
      <div v-for="(field, index) in fields" :key="index">
        <div v-for="(item, index) in props.data" :key="index">
          {{ item[field] }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  defineProps,
  ref,
  reactive,
  watch,
  computed,
  onMounted,
} from "vue";
let fields = ref([]);
let widthColumn = ref("");
let stringClass = ref("");
let widthRows = ref("");
let stringClassData = ref("");

const props = defineProps({
  titleFields: {
    required: true,
    type: Array,
  },
  data: {
    required: true,
    type: Array,
  },
  amountFields: {
    required: true,
    type: Number,
  }
});

defineComponent({
  name: "listComponent",
});

onMounted(() => {
  fields.value = props.titleFields;
  widthColumn.value = props.amountFields;
  widthRows.value = props.data.length;
  stringClass.value = `grid-cols-${widthColumn.value}`;
  stringClassData.value = `grid grid-cols-${widthColumn.value} gap-4`;
});
</script>
