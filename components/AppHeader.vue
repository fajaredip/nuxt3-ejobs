<!-- eslint-disable vue/html-self-closing -->
<template>
  <header class="sticky top-0 z-40 bg-white shadow dark:bg-gray-800">
    <nav class="container flex items-center justify-between p-5 mx-auto">
      <div class="flex items-center justify-between flex-grow gap-5">
        <div class="flex items-center gap-5">
          <img :src="logoSrc" alt="Logo" class="flex-shrink-0 w-40" />
          <ul class="flex items-center gap-10 ml-7">
            <NuxtLink to="/job/vacancy">
              <li
                class="flex items-center text-black cursor-pointer dark:text-white"
              >
                <i class="mr-2 fa-solid fa-briefcase"></i>
                <span class="hidden lg:block">Job Board</span>
              </li>
            </NuxtLink>
            <NuxtLink to="/job/application">
              <li
                class="flex items-center text-black cursor-pointer dark:text-white"
              >
                <i class="mr-2 fa-solid fa-folder"></i>
                <span class="hidden lg:block">Job Application</span>
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
      <div class="hidden">
        <button
          class="px-4 py-2 text-white bg-blue-800 rounded dark:text-black dark:bg-blue-400"
          @click="openSidebar"
        >
          Button 1
        </button>
      </div>
      <div>
        <UserAvatar @update-theme="updateTheme" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from "vue";

// Emit events for the sidebar
const emit = defineEmits(["toggle-sidebar"]);

// Ref to track sidebar open state
const isOpen = ref(false);
const appliedTheme = ref("");

// Method to open sidebar
const openSidebar = () => {
  isOpen.value = true;
  emit("toggle-sidebar", true);
};

const updateTheme = (theme: string) => {
  appliedTheme.value = theme;
};

const logoSrc = computed(() =>
  appliedTheme.value === "dark" ? "/logo-dark.svg" : "/logo.png"
);
</script>
