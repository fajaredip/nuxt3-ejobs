<script setup lang="ts">
interface Job {
  id: number;
  job_name: string;
  job_level: string;
  job_location: string;
  job_education: string;
  job_salary: string;
  posted_date: string;
  status: string | null;
}

const props = defineProps<{ job: Job }>();
</script>

<template>
  <NuxtLink
    :to="`/job/detail/${props.job.id}`"
    class="p-5 text-sm bg-white rounded-md dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-slate-700"
  >
    <p class="mb-2 text-xs italic text-gray-400">{{ props.job.posted_date }}</p>
    <h2 class="text-2xl font-semibold truncate" :title="props.job.job_name">
      {{ props.job.job_name }}
    </h2>
    <p class="text-base">{{ props.job.job_level }}</p>
    <div class="flex flex-col items-start gap-2 mt-3">
      <span class="flex items-start">
        <i class="w-5 mr-2 fa-solid fa-location-dot" />
        <span>{{ props.job.job_location }}</span>
      </span>
      <span class="flex items-start">
        <i class="w-5 mr-2 fa-solid fa-graduation-cap" />
        <span>{{ props.job.job_education }}</span>
      </span>
      <span class="flex items-start">
        <i class="w-5 mr-2 fa-solid fa-sack-dollar" />
        <span>{{ props.job.job_salary }}</span>
      </span>
    </div>
  </NuxtLink>
</template>
