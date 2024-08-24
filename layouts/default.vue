<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <AppHeader />
    <main class="grow overflow-auto bg-slate-300">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
