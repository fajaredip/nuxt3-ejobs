<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "~/components/AppHeader.vue";
import SliderAuth from "~/components/sliderAuth.vue";

const isSidebarOpen = ref(false);

function handleToggleSidebar(isOpen: boolean) {
  isSidebarOpen.value = isOpen;
}
</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <AppHeader @toggle-sidebar="handleToggleSidebar" />
    <SliderAuth :isOpen="isSidebarOpen" @toggle-sidebar="handleToggleSidebar" />
    <main class="overflow-auto grow bg-slate-300">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
