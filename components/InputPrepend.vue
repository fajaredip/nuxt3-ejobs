<!-- eslint-disable vue/html-self-closing -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const updateValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };

    return {
      updateValue,
    };
  },
});
</script>

<template>
  <div class="relative flex items-center">
    <!-- Prepend Icon -->
    <span
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <i :class="icon" class="text-gray-500"></i>
    </span>

    <!-- Input Field -->
    <input
      type="text"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      class="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 w-full"
    />
  </div>
</template>

<style scoped></style>
