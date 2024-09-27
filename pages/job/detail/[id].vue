<script setup lang="ts">
	import { useRoute } from "nuxt/app";

	const route = useRoute();
	const id = route.params.id;

	definePageMeta({
		layout: "default",
		layoutTransition: {
			name: "slide-in",
		},
	});
</script>

<template>
	<section
		class="container flex gap-5 px-5 mx-auto overflow-visible text-slate-800 dark:text-white"
	>
		<div class="flex flex-col w-full gap-5 xl:w-4/5">
			<div
				class="flex flex-col items-start justify-between p-5 bg-white rounded-lg dark:bg-gray-800"
			>
				<div
					class="flex flex-col-reverse items-start justify-between w-full mb-3 lg:flex-row lg:mb-5"
				>
					<p class="mb-3 text-4xl font-semibold">
						Assistant Manager Sales {{ id }}
					</p>
					<div
						class="flex flex-row-reverse items-center gap-5 mb-3 xl:mb-0"
					>
						<div class="flex items-center gap-2">
							26 <i class="fa-regular fa-eye" />
						</div>
						<div
							class="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-gray-300 rounded-lg dark:bg-gray-600 whitespace-nowrap"
						>
							<img
								src="/cb-indonesia.png"
								class="size-4"
								alt=""
							/>
							INDONESIA JOB
						</div>
					</div>
				</div>
				<div
					class="flex flex-col items-start justify-between w-full gap-2 mb-7 xl:flex-row xl:w-fit xl:gap-10 xl:mb-0"
				>
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-location-dot w-7 lg:w-5" />
						Probolinggo, Indonesia
					</div>
					<div
						class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
					>
						<span class="w-7 lg:w-5">IDR</span>
						10.000.000 - 15.000.000
					</div>
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-briefcase w-7 lg:w-5" />
						2 - 7 years
					</div>
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-graduation-cap w-7 lg:w-5" />
						Bachelor
					</div>
				</div>
				<div class="flex gap-5 xl:hidden">
					<button
						class="px-10 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
					>
						Apply
					</button>
					<NuxtLink to="/job/application">
						<button
							class="px-10 py-2 font-medium text-blue-200 rounded-lg bg-slate-400 hover:bg-slate-600"
						>
							Back
						</button>
					</NuxtLink>
				</div>
			</div>
			<div
				class="flex flex-col items-start justify-between p-5 bg-white rounded-lg dark:bg-gray-800"
			>
				<div class="mb-5">
					<div class="relative flex items-center w-full mb-4">
						<span class="flex-shrink mr-4 text-2xl font-semibold"
							>Job Description</span
						>
						<div
							class="flex-grow border-t border-slate-400 dark:border-white"
						/>
					</div>
					<ol class="pl-5 list-decimal">
						<li>
							Minimum graduated from reputable university,
							Bachelor degree in Information Technology or related
							field
						</li>
						<li>
							More than 5 years experiences in software
							development using Microsoft Technology (Vue Js.,
							React Js., JavaScript, Flutter, C#)
						</li>
						<li>Strong in Front end</li>
						<li>Currently not studying</li>
						<li>
							Have experience in Microservices, .Net, VB6, Ms SQL,
							etc
						</li>
						<li>
							Able to write SQL statements (Queries, DML, DDL)
						</li>
						<li>Good RDBMS concept</li>
						<li>Have knowledge to the integration with API</li>
						<li>
							Good knowledge of version control systems such as
							Git
						</li>
						<li>
							Good problem-solving skills and debugging skills
						</li>
						<li>
							Willing to work on 6-month contract (Potential
							extension subject to performance evaluation)
						</li>
						<li>
							Willing to work onsite from Client Office at Pulomas
							Jakarta Timur.
						</li>
					</ol>
				</div>
				<div class="mb-5">
					<div class="relative flex items-center w-full mb-4">
						<span class="flex-shrink mr-4 text-2xl font-semibold"
							>Requirement</span
						>
						<div
							class="flex-grow border-t border-slate-400 dark:border-white"
						/>
					</div>
					<ol class="pl-5 list-decimal">
						<li>
							Minimum graduated from reputable university,
							Bachelor degree in Information Technology or related
							field
						</li>
						<li>
							More than 5 years experiences in software
							development using Microsoft Technology (Vue Js.,
							React Js., JavaScript, Flutter, C#)
						</li>
						<li>Strong in Front end</li>
						<li>Currently not studying</li>
						<li>
							Have experience in Microservices, .Net, VB6, Ms SQL,
							etc
						</li>
						<li>
							Able to write SQL statements (Queries, DML, DDL)
						</li>
					</ol>
				</div>
				<div class="mb-5">
					<div class="relative flex items-center w-full mb-4">
						<span class="flex-shrink mr-4 text-2xl font-semibold"
							>Additional Requirement</span
						>
						<div
							class="flex-grow border-t border-slate-400 dark:border-white"
						/>
					</div>
					<ol class="pl-5 list-decimal">
						<li>
							Minimum graduated from reputable university,
							Bachelor degree in Information Technology or related
							field
						</li>
						<li>
							More than 5 years experiences in software
							development using Microsoft Technology (Vue Js.,
							React Js., JavaScript, Flutter, C#)
						</li>
						<li>Strong in Front end</li>
						<li>Currently not studying</li>
						<li>
							Have experience in Microservices, .Net, VB6, Ms SQL,
							etc
						</li>
						<li>
							Able to write SQL statements (Queries, DML, DDL)
						</li>
					</ol>
				</div>
				<div>
					<div class="relative flex items-center w-full mb-4">
						<span class="flex-shrink mr-4 text-2xl font-semibold"
							>Job Information</span
						>
						<div
							class="flex-grow border-t border-slate-400 dark:border-white"
						/>
					</div>
					<ol class="pl-5 list-decimal">
						<li>
							Minimum graduated from reputable university,
							Bachelor degree in Information Technology or related
							field
						</li>
						<li>
							More than 5 years experiences in software
							development using Microsoft Technology (Vue Js.,
							React Js., JavaScript, Flutter, C#)
						</li>
						<li>Strong in Front end</li>
						<li>Currently not studying</li>
						<li>
							Have experience in Microservices, .Net, VB6, Ms SQL,
							etc
						</li>
						<li>
							Able to write SQL statements (Queries, DML, DDL)
						</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="hidden xl:block xl:w-1/5">
			<div class="sticky top-0 flex flex-col gap-3">
				<button
					class="w-full px-10 py-5 text-xl font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
				>
					Apply
				</button>
				<NuxtLink to="/job/application">
					<button
						class="w-full px-10 py-3 font-medium text-blue-200 rounded-lg bg-slate-400 hover:bg-slate-600"
					>
						Back
					</button>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
