<template>
	<div class="w-full p-5 text-black bg-white rounded-lg dark:bg-gray-800 dark:text-white">
		<div class="flex items-center justify-between mb-3 text-lg font-semibold">
			Filter
			<i class="cursor-pointer fa-solid fa-arrows-rotate" />
		</div>
		<div class="mb-3 text-sm">
			<label for="sortBy">Sort by</label>
			<select
				id="sortBy"
				name=""
				class="w-full p-4 py-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 focus:ring focus:ring-blue-200 focus:border-blue-500"
			>
				<option value="">All</option>
				<option value="1">Newest</option>
				<option value="2">Oldest</option>
				<option value="3">Updated</option>
				<option value="4">Recruitment Process</option>
			</select>
		</div>
		<div class="text-sm">
			<label for="status">Status</label>
			<select
				id="status"
				name=""
				class="w-full p-4 py-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 focus:ring focus:ring-blue-200 focus:border-blue-500"
			>
				<option value="">All</option>
				<option value="1">Applied</option>
				<option value="2">Submit to KAM</option>
				<option value="3">Submit to Client</option>
				<option value="4">Interviewed</option>
				<option value="5">Offering</option>
				<option value="6">Rejected</option>
				<option value="7">Hired</option>
			</select>
		</div>
	</div>
</template>
