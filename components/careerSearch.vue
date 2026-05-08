<script setup lang="ts">
const keyword = ref('')
const location = ref('')

function search() {
  const query: Record<string, string> = {}
  if (keyword.value) query.keyword = keyword.value
  if (location.value) query.location = location.value
  navigateTo({ path: '/job/vacancy', query })
}
</script>

<template>
  <div class="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6">
    <p class="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
      Find your next role
    </p>
    <div class="flex flex-col sm:flex-row gap-3">
      <div class="relative flex-1">
        <Icon name="fa6-solid:magnifying-glass" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          v-model="keyword"
          type="text"
          placeholder="Job title or keyword"
          class="w-full pl-9 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="search"
        />
      </div>
      <div class="relative flex-1">
        <Icon name="fa6-solid:location-dot" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          v-model="location"
          type="text"
          placeholder="Location"
          class="w-full pl-9 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="search"
        />
      </div>
      <button
        class="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-sm transition-colors shrink-0"
        @click="search"
      >
        Search
      </button>
    </div>
  </div>
</template>
