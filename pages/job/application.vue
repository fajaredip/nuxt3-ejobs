<template>
	<section class="container px-5 mx-auto">
		<div class="flex items-start justify-start w-full gap-8">
			<div class="sticky top-0 hidden w-1/5 lg:block">
				<div class="flex flex-col gap-4">
					<FilterApp />
					<StatusApp />
				</div>
			</div>
			<div class="flex flex-col w-full gap-4 lg:w-4/5">
				<JobCard 
					v-for="item in applicationData"
					:key="item.id"
					:job="item"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import FilterApp from "~/components/application/filter.vue";
	import StatusApp from "~/components/application/status.vue";
	import JobCard from '~/components/jobCard.vue';

	definePageMeta({
		layout: "default",
		layoutTransition: {
			name: "slide-in",
		},
	});

	const applicationData = [
		{
			id: 1,
			job_name: "Frontend Developer Application",
			job_level: "Staff/Officer",
			job_location: "Kuala Lumpur, Malaysia",
			job_education: "Bachelor",
			job_salary: "MYR 4.000 - 5.000",
			posted_date: "Posted on Aug 20, 2021",
			status: "Applied",
		},
		{
			id: 2,
			job_name: "Backend Developer Application",
			job_level: "Junior Executive",
			job_location: "Surabaya, Indonesia",
			job_education: "Diploma/Undergraduate",
			job_salary: "IDR 4.000.000 - 5.000.000",
			posted_date: "Posted on Dec 20, 2022",
			status: "Submit to KAM",
		},
		{
			id: 3,
			job_name: "Fullstack Developer Application",
			job_level: "Business Unit Head",
			job_location: "All, China",
			job_education: "High School/Vocational",
			job_salary: "USD 7.000 - 8.000",
			posted_date: "Posted on Jan 2, 2022",
			status: "Submit to Client",
		},
	];
</script>
