<script setup>
definePageMeta({
  layout: "landing-page",
  layoutTransition: { name: "slide-in" },
});

const user = useSupabaseUser()
const route = useRoute()

watch(user, (newUser) => {
  if (newUser && route.query.code) navigateTo('/job/vacancy')
})

const stats = [
  { value: '10,000+', label: 'Active Jobs' },
  { value: '500+', label: 'Partner Companies' },
  { value: '50,000+', label: 'Candidates Placed' },
  { value: '20+', label: 'Years of Experience' },
]

const services = [
  { icon: 'fa6-solid:user-tie', label: 'Executive Search' },
  { icon: 'fa6-solid:briefcase', label: 'Recruitment' },
  { icon: 'fa6-solid:people-group', label: 'HR Outsourcing' },
  { icon: 'fa6-solid:money-check-dollar', label: 'Payroll Service' },
  { icon: 'fa6-solid:passport', label: 'Expatriate Service' },
  { icon: 'fa6-solid:chart-line', label: 'HR Consulting' },
  { icon: 'fa6-solid:arrows-rotate', label: 'HR Restructuring' },
  { icon: 'fa6-solid:laptop', label: 'Workforce Systems' },
  { icon: 'fa6-solid:tower-broadcast', label: 'Telco Solutions' },
]

const countries = [
  { name: 'Malaysia', flag: '/cb-my.png' },
  { name: 'Indonesia', flag: '/cb-indonesia.png' },
  { name: 'Philippines', flag: '/cb-ph.png' },
  { name: 'Thailand', flag: '/cb-tha.png' },
]
</script>

<template>
  <div class="flex flex-col">

    <!-- Hero -->
    <section class="relative min-h-[32rem] flex items-center bg-[linear-gradient(135deg,#0f1f5c,#1a56db)] overflow-hidden">
      <!-- decorative blobs -->
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-700/30 rounded-full blur-2xl pointer-events-none" />

      <div class="container mx-auto px-5 py-24 flex flex-col items-center text-center text-white relative z-10">
        <span class="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
          Elabram HR Solutions
        </span>
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight max-w-2xl mb-4">
          Your Career Starts Here
        </h1>
        <p class="text-blue-200 text-lg max-w-xl mb-10">
          Connecting top talent with the right opportunities across Southeast Asia.
        </p>
        <CareerSearch />
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div class="container mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-3xl font-bold text-blue-700 dark:text-blue-400">{{ stat.value }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Jobs CTA -->
    <section class="bg-gray-50 dark:bg-gray-950 py-16">
      <div class="container mx-auto px-5 flex flex-col items-center text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Browse Open Positions</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          Explore hundreds of opportunities across industries and locations.
        </p>
        <NuxtLink
          to="/job/vacancy"
          class="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
        >
          View All Jobs
        </NuxtLink>
      </div>
    </section>

    <!-- About + Services -->
    <section class="bg-[linear-gradient(135deg,#0f1f5c,#1a56db)] text-white py-16">
      <div class="container mx-auto px-5 grid md:grid-cols-2 gap-12 items-start">

        <!-- About -->
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 class="text-3xl font-bold mb-4">About Elabram</h2>
          <p class="text-blue-100 leading-relaxed mb-8">
            Elabram HR Solution focuses on human resources solutions, covering every HR need — from manpower and temporary staff to payroll, permanent placement, executive search, and expatriate services.
          </p>

          <!-- Countries -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="country in countries"
              :key="country.name"
              class="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm"
            >
              <img :src="country.flag" :alt="country.name" class="w-6 h-4 object-cover rounded-sm" />
              <span>{{ country.name }}</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div>
          <span class="inline-block px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 class="text-3xl font-bold mb-6">Our Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="service in services"
              :key="service.label"
              class="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-3 py-3 text-sm"
            >
              <Icon :name="service.icon" class="text-blue-300 shrink-0" />
              <span>{{ service.label }}</span>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex items-center gap-3 mt-8">
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <img src="/icon-facebook.svg" alt="Facebook" class="w-5" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <img src="/icon-linkedin.svg" alt="LinkedIn" class="w-5" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <img src="/icon-instagram.svg" alt="Instagram" class="w-5" />
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <img src="/icon-youtube.svg" alt="YouTube" class="w-5" />
            </a>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
