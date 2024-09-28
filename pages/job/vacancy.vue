<template>
  <section class="container px-5 mx-auto text-black dark:text-white">
    <div class="w-full mb-5">
      <h1 class="text-2xl font-semibold">Popular Jobs</h1>
      <p class="mb-5 text-sm">Take a look at today trending job!</p>
      <div
        class="flex flex-col items-center justify-start w-full gap-5 md:flex-row"
      >
        <PopularJobCard
          v-for="item in applicationData"
          :key="item.id"
          :job="item"
          class="w-full md:w-[calc(33.333%-0.85rem)]"
        />
      </div>
    </div>
    <div class="flex items-start justify-start w-full gap-5">
      <div class="sticky top-0 hidden w-1/5 lg:block">
        <div class="flex flex-col gap-4">
          <div class="p-5 bg-white rounded-md dark:bg-gray-800">Filter</div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-4 lg:w-4/5">
        <JobCard v-for="item in applicationData" :key="item.id" :job="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import JobCard from "~/components/jobCard.vue";
import PopularJobCard from "~/components/popularJobCard.vue";

definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});

const applicationData = [
  {
    id: 1,
    job_name: "Frontend Developer Vac",
    job_level: "Staff/Officer",
    job_location: "Kuala Lumpur, Malaysia",
    job_education: "Bachelor",
    job_salary: "MYR 4.000 - 5.000",
    posted_date: "Posted on Aug 20, 2021",
    status: "Hired",
  },
  {
    id: 2,
    job_name:
      "Senior Manager, Brand and Marketing (5 star Casino and Resort) Based in the Philippines",
    job_level: "Junior Executive",
    job_location: "Surabaya, Indonesia",
    job_education: "Diploma/Undergraduate",
    job_salary: "IDR 4.000.000 - 5.000.000",
    posted_date: "Posted on Dec 20, 2022",
    status: null,
  },
  {
    id: 3,
    job_name: "Fullstack Developer Vac",
    job_level: "Business Unit Head",
    job_location: "All, China",
    job_education: "High School/Vocational",
    job_salary: "USD 7.000 - 8.000",
    posted_date: "Posted on Jan 2, 2022",
    status: "Offering",
  },
];
</script>
