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
    class="p-5 bg-white rounded-md dark:bg-gray-800 text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
  >
    <p class="italic text-gray-400 text-xs mb-2">{{ props.job.posted_date }}</p>
    <h2 class="text-2xl font-semibold truncate" :title="props.job.job_name">
      {{ props.job.job_name }}
    </h2>
    <p class="text-base">{{ props.job.job_level }}</p>
    <div class="flex flex-col items-start gap-2 mt-3">
      <span>
        <i class="mr-2 fa-solid fa-location-dot w-5" />
        <span>{{ props.job.job_location }}</span>
      </span>
      <span>
        <i class="mr-2 fa-solid fa-graduation-cap w-5"></i>
        <span>{{ props.job.job_education }}</span>
      </span>
      <span>
        <i class="mr-2 fa-solid fa-sack-dollar w-5"></i>
        <span>{{ props.job.job_salary }}</span>
      </span>
    </div>
  </NuxtLink>
</template>
