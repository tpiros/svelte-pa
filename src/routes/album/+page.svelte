<script lang="js">
	import CloudinaryImage from '$lib/components/CloudinaryImage.svelte';

	let { data } = $props();
	const photos = $derived(data.photos);
</script>

<div class="m-2 space-y-4">
	<h1 class="text-5xl font-bold">Photo Album</h1>
	<p class="m-2">This page shows how to display images uploaded to your Cloudinary account.</p>
	<div class="m-2">
		Please note that the following defaults are being used:
		<ul class="list-disc list-inside">
			<li>
				Images tagged as
				<code class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">
					myphotoalbum-svelte
				</code>
				are displayed.
			</li>
			<li>
				Images are transformed using the following transformations:
				<code
					class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm whitespace-normal overflow-auto break-words"
				>
					width=400
				</code>,
				<code
					class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm whitespace-normal overflow-auto break-words"
				>
					height=400
				</code>
				and
				<code
					class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm whitespace-normal overflow-auto break-words"
				>
					crop=crop
				</code>.
			</li>
			<li>
				Please note that Cloudinary automatically applies both
				<code class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">f_auto</code>
				and
				<code class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">q_auto</code>
				to the images.
			</li>
		</ul>
	</div>

	{#if photos.length > 0}
		<div class="flex flex-wrap -mx-4">
			{#each photos as photo (photo.public_id)}
				<div class="lg:w-1/3 md:w-1/2 w-full p-4">
					<CloudinaryImage
						src={photo.public_id}
						width={400}
						height={400}
						radius={50}
						alt="Uploaded photo"
						class="shadow-md rounded-md"
					/>
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-xl p-4">
			No photos to list. Please make sure that you have uploaded some images using this app.
		</p>
	{/if}
</div>
