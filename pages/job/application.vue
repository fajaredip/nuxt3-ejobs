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
			company: "Google",
			status: "Applied",
		},
		{
			id: 2,
			job_name: "Backend Developer",
			company: "Apple Inc.",
			status: "Submit to KAM",
		},
		{
			id: 3,
			job_name: "Fullstack Developer",
			company: "Elabram Systems",
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
					class="flex flex-col justify-between p-5 bg-white rounded-lg min-h-32"
				>
					<div>{{ item.job_name }} - {{ item.company }}</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						possimus? Ex soluta repellat laborum hic alias delectus minima natus
						iste quaerat, dicta perferendis consectetur. Beatae, pariatur. Ut
						doloribus nemo minima!
					</div>
					<div class="flex justify-end w-full">
						<NuxtLink
							:to="`/job/detail/${item.id}`"
							class="px-8 py-3 text-lg text-white bg-green-600 rounded-lg hover:bg-green-700"
							>Detail</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
