<!-- eslint-disable vue/html-self-closing -->
<template>
  <header class="sticky top-0 z-40 bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-between p-4 mx-auto">
      <div class="flex items-center gap-5">
        <img :src="logoSrc" alt="Logo" class="w-40" />
        <ul class="flex items-center gap-5 ml-5">
          <li class="text-black cursor-pointer hover:underline dark:text-white">
            <i class="mr-2 fa-solid fa-briefcase"></i>
            <NuxtLink to="/job/vacancy">Job Board</NuxtLink>
          </li>
          <li class="text-black cursor-pointer hover:underline dark:text-white">
            <i class="mr-2 fa-solid fa-folder"></i>
            <NuxtLink to="/job/application">Job Application</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <button
          class="px-4 py-2 mr-2 text-white bg-blue-800 rounded dark:text-black dark:bg-blue-400"
          @click="openSidebar"
        >
          Button 1
        </button>
        <button
          class="px-4 py-2 text-white bg-gray-500 rounded dark:text-black dark:bg-white"
          @click="toggleDarkMode"
        >
          <i class="fa-regular" :class="isDarkMode ? 'fa-moon' : 'fa-sun'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed, onMounted } from "vue";

// Emit events for the sidebar
const emit = defineEmits(["toggle-sidebar"]);

// Ref to track sidebar open state
const isOpen = ref(false);
const isDarkMode = ref(false);

// Method to open sidebar
const openSidebar = () => {
  isOpen.value = true;
  emit("toggle-sidebar", true);
};

const logoSrc = computed(() =>
  isDarkMode.value ? '/logo-dark.svg' : '/logo.png'
);

// Method to toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    if (import.meta.client) {
      localStorage.theme = 'light';
    }
    isDarkMode.value = false;
  } else {
    html.classList.add('dark');
    if (import.meta.client) {
      localStorage.theme = 'dark';
    }
    isDarkMode.value = true;
  }
};

// Initialize theme based on localStorage
onMounted(() => {
  if (import.meta.client) {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      isDarkMode.value = true;
    } else {
      document.documentElement.classList.remove('dark');
      isDarkMode.value = false;
    }
  }
});
</script>
