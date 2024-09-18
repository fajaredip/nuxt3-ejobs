<script setup lang="ts">
	import FilterApp from "~/components/application/filter.vue";
	import StatusApp from "~/components/application/status.vue";

	definePageMeta({
		layout: "default",
		layoutTransition: {
			name: "slide-in",
		},
	});

	const applicationData = [
		{
			id: 1,
			job_name: "Frontend Developer",
			job_level: "Staff/Officer",
			job_location: "Kuala Lumpur, Malaysia",
			job_education: "Bachelor",
			job_salary: "MYR 4.000 - 5.000",
			posted_date: "Posted on Aug 20, 2021",
			status: "Applied",
		},
		{
			id: 2,
			job_name: "Backend Developer",
			job_level: "Junior Executive",
			job_location: "Surabaya, Indonesia",
			job_education: "Diploma/Undergraduate",
			job_salary: "IDR 4.000.000 - 5.000.000",
			posted_date: "Posted on Dec 20, 2022",
			status: "Submit to KAM",
		},
		{
			id: 3,
			job_name: "Fullstack Developer",
			job_level: "Business Unit Head",
			job_location: "All, China",
			job_education: "High School/Vocational",
			job_salary: "USD 7.000 - 8.000",
			posted_date: "Posted on Jan 2, 2022",
			status: "Submit to Client",
		},
	];
</script>

<template>
	<div class="container mx-auto">
		<div class="flex items-start justify-start w-full gap-8">
			<div class="sticky top-0 hidden w-1/5 md:block">
				<div class="flex flex-col gap-4">
					<FilterApp />
					<StatusApp />
				</div>
			</div>
			<div class="flex flex-col w-full gap-4 md:w-4/5">
				<div
					v-for="item in applicationData"
					:key="item.id"
					class="flex justify-between p-5 bg-white rounded-lg min-h-32"
				>
					<div class="flex flex-col items-start justify-between grow">
						<div class="text-xl font-semibold">{{ item.job_name }}</div>
						<div class="text-base">{{ item.job_level }}</div>
						<div class="flex items-center justify-between w-full">
							<div class="w-1/3">{{ item.job_location }}</div>
							<div class="w-1/3">{{ item.job_education }}</div>
							<div class="w-1/3">{{ item.job_salary }}</div>
						</div>
					</div>
					
					<div class="flex flex-col items-end justify-between">
						<div class="text-sm italic text-gray-400">{{ item.posted_date }}</div>
						<NuxtLink
							:to="`/job/detail/${item.id}`"
							class="px-6 py-2 text-lg text-white bg-green-600 rounded-lg w-fit hover:bg-green-700"
							>Detail</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
