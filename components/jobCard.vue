<template>
	<div>
		<div
			class="flex justify-between p-5 bg-white rounded-lg dark:bg-gray-800 min-h-32"
			:class="props.job.status ? 'rounded-b-none' : ''"
		>
			<div
				class="flex flex-col items-start justify-between text-black grow dark:text-white"
			>
				<div class="text-xl font-semibold">
					{{ props.job.job_name }}
				</div>
				<div class="text-base">{{ props.job.job_level }}</div>
				<div class="flex items-center justify-between w-full">
					<div class="w-1/3 truncate">
						{{ props.job.job_location }}
					</div>
					<div class="w-1/3 truncate">
						{{ props.job.job_education }}
					</div>
					<div class="w-1/3 truncate">
						{{ props.job.job_salary }}
					</div>
				</div>
			</div>

			<div class="flex flex-col items-end justify-between">
				<div class="text-sm italic text-gray-400">
					{{ props.job.posted_date }}
				</div>
				<NuxtLink
					:to="`/job/detail/${props.job.id}`"
					class="px-6 py-2 text-lg text-white bg-green-600 rounded-lg w-fit hover:bg-green-700"
					>Detail</NuxtLink
				>
			</div>
		</div>
		<div
			v-if="props.job.status"
			class="px-5 py-2 text-sm text-white rounded-b-lg"
			:class="{
				'bg-[#0584d3]': props.job.status === 'Applied',
				'bg-[#4d5963]': props.job.status === 'Submit to KAM',
				'bg-[#ffc107]': props.job.status === 'Submit to Client',
				'bg-[#eb5f26]': props.job.status === 'Interviewed',
        'bg-[#8950fc]': props.job.status === 'Offering',
        'bg-[#f44336]': props.job.status === 'Rejected',
        'bg-[#4caf50]': props.job.status === 'Hired',
			}"
		>
			{{ props.job.status }}
		</div>
	</div>
</template>

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
