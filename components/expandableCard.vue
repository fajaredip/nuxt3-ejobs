<template>
  <div class="bg-white rounded-lg cursor-pointer dark:bg-gray-800">
    <div class="flex items-center justify-start p-5" @click="toggleCard">
      <i :class="['mr-3', props.iconClass]" />
      <span class="text-xl font-medium">{{ props.title }}</span>
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
        class="overflow-hidden border-t border-black dark:border-gray-600"
      >
        <slot />
        <!-- Slot for dynamic content -->
      </div>
    </transition>
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
  htmlEl.style.transition = 'all 0.3s ease';
  htmlEl.style.maxHeight = `${htmlEl.scrollHeight}px`;
  htmlEl.style.opacity = "1";
};

const leave = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.transition = 'all 0.3s ease';
  htmlEl.style.maxHeight = "0";
  htmlEl.style.opacity = "0";
};
</script>
