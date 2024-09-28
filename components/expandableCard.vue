<template>
  <div
    class="relative flex before:border-l-4 before:absolute before:left-4 before:top-0 before:h-full before:last-of-type:border-none"
    :class="props.completeness ? 'before:border-blue-500' : 'before:border-gray-400'"
  >
    <div
      class="flex items-start justify-center h-full mr-3 font-extrabold text-white"
    >
      <i
        class="z-10 flex items-center justify-center rounded-full size-9 fa-solid"
        :class="
          props.completeness ? 'fa-check bg-blue-500' : 'fa-times bg-gray-400'
        "
      />
    </div>
    <div
      class="w-full mb-5 bg-white rounded-md dark:bg-gray-800"
    >
      <div
        class="flex items-center justify-between px-5 py-4 cursor-pointer "
        @click="toggleCard"
      >
        <div class="flex items-center justify-start">
          <i :class="['mr-3', props.iconClass]" />
          <span class="text-xl font-medium">{{ props.title }}</span>
        </div>
        <i
          class="fa-solid fa-angle-down"
          :class="{ 'rotate-180': isCardOpen }"
        />
      </div>
      <transition
        name="slide-fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-if="isCardOpen"
          ref="cardContent"
          class="overflow-hidden border-t border-slate-400 dark:border-gray-600"
        >
          <slot />
          <!-- Slot for dynamic content -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: "fa-solid fa-id-card",
  },
  completeness: {
    type: Boolean,
    default: false,
  },
});

const isCardOpen = ref(false);

const toggleCard = () => {
  isCardOpen.value = !isCardOpen.value;
};

// Transition hooks
const beforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.maxHeight = "0";
  htmlEl.style.opacity = "0";
};

const enter = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.transition = "all 0.3s ease";
  htmlEl.style.maxHeight = `${htmlEl.scrollHeight}px`;
  htmlEl.style.opacity = "1";
};

const leave = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.transition = "all 0.3s ease";
  htmlEl.style.maxHeight = "0";
  htmlEl.style.opacity = "0";
};
</script>
