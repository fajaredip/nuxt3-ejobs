<!-- eslint-disable vue/html-self-closing -->
<template>
  <header class="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow">
    <div class="container flex items-center justify-between p-4 mx-auto">
      <div class="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" class="w-40" />
        <ul class="flex items-center gap-5 ml-5">
          <li class="cursor-pointer hover:underline text-black dark:text-white">
            <i class="mr-2 fa-solid fa-briefcase"></i>
            <NuxtLink to="/job/vacancy">Job Board</NuxtLink>
          </li>
          <li class="cursor-pointer hover:underline text-black dark:text-white">
            <i class="mr-2 fa-solid fa-folder"></i>
            <NuxtLink to="/job/application">Job Application</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <button
          class="px-4 py-2 mr-2 text-white dark:text-black bg-blue-500 dark:bg-blue-700 rounded"
          @click="openSidebar"
        >
          Button 1
        </button>
        <button
          class="px-4 py-2 text-white dark:text-black bg-gray-500 dark:bg-white rounded"
          @click="toggleDarkMode"
        >
          Button 2
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

// Emit events for the sidebar
const emit = defineEmits(["toggle-sidebar"]);

// Ref to track sidebar open state
const isOpen = ref(false);

// Method to open sidebar
const openSidebar = () => {
  isOpen.value = true;
  emit("toggle-sidebar", true);
};

// Method to toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
};

// Initialize theme based on localStorage
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
</script>
