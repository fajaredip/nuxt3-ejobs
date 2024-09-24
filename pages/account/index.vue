<script setup lang="ts">
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>

<template>
  <section class="text-black dark:text-white">
    <div class="container px-5 mx-auto">
			<div class="p-5 mb-5 bg-white rounded-lg dark:bg-gray-800 md:hidden">
            Profile Completion
          </div>
      <div class="flex flex-col items-center gap-5 p-5 mb-5 bg-white rounded-lg md:flex-row md:items-start dark:bg-gray-800">
        <div class="flex items-start justify-start">
          <UserAvatar class="size-36" />
        </div>
        <div class="flex flex-col items-start justify-start">
          <div class="mb-5 text-4xl text-center md:text-left">Mr. Fajar Edi Prabowo</div>
          <div class="flex flex-col items-start justify-start gap-5 mb-3 text-sm md:flex-row">
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
          <div class="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            quisquam aspernatur vero voluptas dolor nam eligendi cum amet natus
            alias ut porro sunt reprehenderit incidunt odit commodi nobis et
            repellendus. Harum quas culpa quo eaque ducimus et quam alias, sint
            reiciendis totam tempora praesentium ad, distinctio necessitatibus
            rem? Necessitatibus non debitis illo voluptatem eaque minima
            corrupti! Et veniam id fugiat. Harum corrupti voluptas maxime ab
            vero. Harum quas culpa quo eaque ducimus et quam alias, sint
            reiciendis totam tempora praesentium ad, distinctio necessitatibus
            rem? Necessitatibus non debitis illo voluptatem eaque minima
            corrupti! Et veniam id fugiat. Harum corrupti voluptas maxime ab
            vero.
          </div>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col w-full gap-5 md:w-4/5">
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Personal Information
          </div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Formal Education
          </div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Work Experience
          </div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">Course</div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">Skill</div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Achievement
          </div>
        </div>
        <div class="flex-col hidden w-1/5 gap-5 md:flex">
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">
            Profile Completion
          </div>
          <div class="p-5 bg-white rounded-lg dark:bg-gray-800">Submenu</div>
        </div>
      </div>
    </div>
  </section>
</template>
