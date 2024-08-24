<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "~/components/AppHeader.vue";
import SliderAuth from "~/components/SliderAuth.vue";

const isSidebarOpen = ref(false);

function handleToggleSidebar(isOpen: boolean) {
  isSidebarOpen.value = isOpen;
}
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <AppHeader @toggle-sidebar="handleToggleSidebar" />
    <SliderAuth :isOpen="isSidebarOpen" @toggle-sidebar="handleToggleSidebar" />
    <main class="grow overflow-auto bg-slate-300">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
