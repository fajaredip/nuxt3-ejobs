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
      <Icon name="fa6-regular:envelope" class="text-gray-500" />
    </span>

    <!-- Input Field -->
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
      @input="updateValue"
    >
  </div>
</template>

<style scoped></style>
