<script setup lang="ts"></script>

<template>
  <div class="flex flex-col w-full h-screen">
    <AppHeader />
    <main class="h-screen py-5 overflow-auto grow bg-slate-300 dark:bg-black">
      <NuxtPage />
    </main>
  </div>
</template>
