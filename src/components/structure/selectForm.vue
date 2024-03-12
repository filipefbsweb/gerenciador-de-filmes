<template>
  <labelButton :titleLabel="titleLabel" :nameInput="nameInput" />
  <select
    id="status"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @input="emitValue"
  >
    <option
      :value="option.id"
      v-for="(option, index) in optionsSelect"
      :key="index"
    >
      {{ option.text }}
    </option>
  </select>
  <p class="text-red-500 text-xs italic" v-if="inputError">
    Por favor, selecione {{ titleLabel }}
  </p>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, defineEmits, ref } from "vue";
import labelButton from "./labelButton.vue";

defineComponent({
  name: "SelectForm",
});

const inputError = ref(false);

const emit = defineEmits(["inputValue", "haveError"]);
function emitValue(value: any) {
  console.log(value.target.value);
  if (props.isRequired === true && value.target.value == "") {
    inputError.value = true;
    emit("haveError", true);
    return;
  }
  inputError.value = false;
  emit("haveError", false);
  emit("inputValue", value);
}

const props = defineProps({
  titleLabel: {
    required: true,
    type: String,
  },
  nameInput: {
    required: true,
    type: String,
  },
  optionsSelect: {
    required: true,
    type: Array,
  },
  valueInput: {
    required: false,
    type: String,
  },
  isRequired: {
    required: true,
    type: Boolean,
  },
});
</script>
