<template>
	<div class="w-full p-5 bg-white rounded-lg">
		<div class="mb-3 text-lg font-semibold">Get to know your journey</div>
		<div class="mb-3">
			<div class="status applied">Applied</div>
			<div class="text-sm">You have applied for the job.</div>
		</div>
		<div class="mb-3">
			<div class="status kam">Submit to KAM</div>
			<div class="text-sm">You have been submitted to KAM.</div>
		</div>
		<div class="mb-3">
			<div class="status client">Submit to Client</div>
			<div class="text-sm">You have been submitted to client.</div>
		</div>
		<div class="mb-3">
			<div class="status interviewed">Interviewed</div>
			<div class="text-sm">You have been interviewed by client.</div>
		</div>
		<div class="mb-3">
			<div class="status offering">Offering</div>
			<div class="text-sm">You have been offered by client.</div>
		</div>
		<div class="mb-3">
			<div class="status rejected">Rejected</div>
			<div class="text-sm">You did not pass the process.</div>
		</div>
		<div>
			<div class="status hired">Hired</div>
			<div class="text-sm">You are hired for the job.</div>
		</div>
	</div>
</template>

<style scoped>
.status {
  padding: 6px 10px;
  border-radius: 8px;
  color: #fff;
  width: fit-content;
  font-size: 12px;
  margin-bottom: .25rem;
}

.status.applied {
  background-color: #0584d3;
}

.status.kam {
  background-color: #4d5963;
}

.status.client {
  background-color: #ffc107;
}

.status.interviewed {
  background-color: #eb5f26;
}

.status.offering {
  background-color: #8950fc;
}

.status.rejected {
  background-color: #f44336;
}

.status.hired {
  background-color: #4caf50;
}
</style>