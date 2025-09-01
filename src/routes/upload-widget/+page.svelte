<script lang="ts">
	import UploadWidget from '$lib/components/UploadWidget.svelte';
</script>

<div class="m-2 space-y-4">
	<h1 class="text-5xl font-bold">Upload (Upload Widget)</h1>
	<p class="m-2">
		This example shows how to integrate the Cloudinary Upload Widget into a Svelte 5 application.
	</p>
	<div class="m-2">
		Please note that the following defaults are being used:
		<ul class="list-disc list-inside">
			<li>The upload source is limited to the local filesystem or to a remote URL.</li>
			<li>
				The
				<code class="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">myphotoalbum-svelte</code>
				tag gets added to all photos uploaded via this method (this is used in the photo album to retrieve
				images).
			</li>
			<li>Only images can be uploaded.</li>
		</ul>
	</div>

	<UploadWidget />
</div>
