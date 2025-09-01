<script lang="js">
	import { PUBLIC_CLOUDINARY_TAG, PUBLIC_CLOUDINARY_UPLOAD_PRESET } from '$env/static/public';
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget
	uploadPreset={PUBLIC_CLOUDINARY_UPLOAD_PRESET}
	let:open
	let:isLoading
	options={{
		sources: ['local', 'url'],
		tags: [PUBLIC_CLOUDINARY_TAG],
		resourceType: 'image',
		clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'tiff']
	}}
>
	<button class="btn btn-primary" on:click={() => open()} disabled={isLoading}>
		Open the widget
	</button>
</CldUploadWidget>
