<template>
  <labelButton :titleLabel="titleLabel" :nameInput="nameInput" />
  <input
    :type="typeInput"
    :id="nameInput"
    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    :placeholder="placeholderInput"
    :disabled="inputDisabled"
    :value="valueInput"
    @blur="emitValue"
    @input.prevent="nameInput == 'cep' && searchCepApi"
  />
  <p class="text-red-500 text-xs italic" v-if="inputError">
    Por favor, preenche o campo {{ titleLabel }}
  </p>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, defineEmits, ref } from "vue";
import labelButton from "./labelButton.vue";

defineComponent({
  name: "InputForm",
});

const inputError = ref(false);

const emit = defineEmits(["inputValue", "haveError"]);
function emitValue(value: any) {
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
  typeInput: {
    required: true,
    type: String,
  },
  placeholderInput: {
    required: true,
    type: String,
  },
  inputDisabled: {
    required: false,
    type: Boolean,
  },
  isRequired: {
    required: true,
    type: Boolean,
  },
  valueInput: {
    required: false,
    type: String,
  },
});
</script>
