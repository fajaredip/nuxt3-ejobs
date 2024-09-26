<template>
  <section class="text-black dark:text-white">
    <div class="container px-5 mx-auto">
      <div class="p-5 mb-5 bg-white rounded-lg dark:bg-gray-800 md:hidden">
        Profile Completion
      </div>
      <div
        class="flex flex-col items-center gap-8 p-5 mb-5 bg-white rounded-lg md:flex-row md:items-start dark:bg-gray-800"
      >
        <div class="relative flex items-start justify-start min-w-fit">
          <UserAvatar class="rounded-lg size-36" />
          <span
            class="absolute flex items-center justify-center p-2 text-xs text-white bg-blue-500 border-4 border-white rounded-full cursor-pointer dark:border-gray-800 top-3 -right-4 hover:bg-blue-600"
          >
            <i class="fa-solid fa-camera" />
          </span>
        </div>
        <div class="flex flex-col items-start justify-start">
          <div class="mb-5 text-3xl text-center md:text-left">
            Mr. Fajar Edi Prabowo
          </div>
          <div
            class="flex flex-col items-start justify-start gap-5 mb-3 text-sm md:flex-row"
          >
            <span>
              <i class="mr-2 fa-solid fa-location-dot" />
              <span>Jakarta, Indonesia</span>
            </span>
            <span>
              <i class="mr-2 fa-solid fa-envelope" />
              <span class="break-all">fajaredip@gmail.com</span>
            </span>
            <span>
              <i class="mr-2 fa-solid fa-mobile-screen-button" />
              <span>+62 812 3456 7890</span>
            </span>
          </div>
          <div class="text-sm">test adding mem_about_,me</div>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col w-full md:w-4/5">
          <PersonalInformation :completeness="completeness.personal_information" />
          <FormalEducation :completeness="completeness.formal_education" />
          <WorkExperience :completeness="completeness.work_experience" />
          <Course :completeness="completeness.course" />
          <Skill :completeness="completeness.skill" />
          <Achievement :completeness="completeness.achievement" />
        </div>
        <div class="flex-col hidden w-1/5 gap-5 md:flex">
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Profile Completion
          </div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">Submenu</div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">Navigation</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FormalEducation from "~/components/account/formalEducation.vue";
import PersonalInformation from "~/components/account/personalInformation.vue";
import WorkExperience from "~/components/account/workExperience.vue";
import Course from "~/components/account/course.vue";
import Skill from "~/components/account/skill.vue";
import Achievement from "~/components/account/achievement.vue";

definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});

const completeness = {
  achievement: true,
  course: true,
  cv: true,
  formal_education: true,
  percentage: "90%",
  personal_information: true,
  photo: true,
  skill: false,
  video: true,
  work_experience: true,
};
</script>
