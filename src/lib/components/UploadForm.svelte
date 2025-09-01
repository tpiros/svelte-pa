<script lang="js">
	let uploadResult = $state('');
	let isUploading = $state(false);
	let isSuccess = $state(true);
	let showResult = $state(false);

	async function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);

		uploadResult = '';
		showResult = false;
		isSuccess = true;
		isUploading = true;

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const data = await response.json();
				const publicId = data.public_id;

				uploadResult = `Upload successful! Public ID: ${publicId}`;
				isSuccess = true;
				showResult = true;

				form.reset();
			} else {
				console.error('Failed to upload image. Status:', response.status);
				const errorText = await response.text();
				uploadResult = `Upload failed: ${response.status} ${response.statusText}. ${errorText || ''}`;
				isSuccess = false;
				showResult = true;
			}
		} catch (error) {
			console.error('An error occurred during upload:', error);

			let errorMessage = 'An unexpected error occurred during upload.';

			if (error instanceof Error) {
				errorMessage = `An error occurred: ${error.message}`;
			} else if (typeof error === 'string') {
				errorMessage = `An error occurred: ${error}`;
			}

			uploadResult = errorMessage;
			isSuccess = false;
			showResult = true;
		} finally {
			isUploading = false;
		}
	}
</script>

<form
	class="flex flex-col bg-white rounded-lg shadow p-6 mb-6"
	onsubmit={handleSubmit}
	enctype="multipart/form-data"
>
	<label class="form-control w-full max-w-xs" for="image">
		<div class="label">
			<span class="label-text">Pick a file</span>
		</div>
		<input
			bind:this={fileInput}
			id="image"
			class="file-input file-input-bordered w-full max-w-xs"
			type="file"
			name="image"
			accept="image/*"
			required
		/>
	</label>
	<button type="submit" class="btn btn-primary mt-4" disabled={isUploading}>
		{isUploading ? 'Uploading...' : 'Upload'}
	</button>
</form>

{#if showResult}
	<p class="p-2 rounded {isSuccess ? 'bg-green-100' : 'bg-red-100'}">
		{uploadResult}
	</p>
{/if}
