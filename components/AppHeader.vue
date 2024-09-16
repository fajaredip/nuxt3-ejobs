<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		data() {
			return {
				isOpen: false,
			};
		},
		methods: {
			openSidebar() {
				this.$emit("toggle-sidebar", true);
			},
		},
	});
</script>

<!-- eslint-disable vue/html-self-closing -->
<template>
	<header class="sticky top-0 z-40 bg-white shadow">
		<div class="container flex items-center justify-between p-4 mx-auto">
			<div class="flex items-center gap-5">
				<img src="/logo.png" alt="Logo" class="w-40" />
				<ul class="flex items-center gap-5 ml-5">
					<li class="cursor-pointer hover:underline">
						<i class="mr-2 fa-solid fa-briefcase"></i>
						<NuxtLink to="/job/vacancy">Job Board</NuxtLink>
					</li>
					<li class="cursor-pointer hover:underline">
						<i class="mr-2 fa-solid fa-folder"></i>
						<NuxtLink to="/job/application">Job Application</NuxtLink>
					</li>
				</ul>
			</div>
			<div>
				<button
					class="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
					@click="openSidebar"
				>
					Button 1
				</button>
				<button class="px-4 py-2 text-white bg-gray-500 rounded">
					Button 2
				</button>
			</div>
		</div>
	</header>
</template>
