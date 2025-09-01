import { json, error } from '@sveltejs/kit';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_SECRET } from '$env/static/private';
import {
	PUBLIC_CLOUDINARY_API_KEY,
	PUBLIC_CLOUDINARY_CLOUD_NAME,
	PUBLIC_CLOUDINARY_TAG
} from '$env/static/public';

cloudinary.config({
	cloud_name: PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: PUBLIC_CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET
});

export const POST = async ({ request }) => {
	try {
		const formData = await request.formData();
		const file = formData.get('image');

		if (!file) {
			throw error(400, 'No image file provided');
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const result = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{
						tags: [PUBLIC_CLOUDINARY_TAG]
					},
					function (uploadError, uploadResult) {
						if (uploadError || !uploadResult) {
							reject(uploadError);
							return;
						}
						resolve(uploadResult);
					}
				)
				.end(buffer);
		});

		const { public_id } = result;

		return json({ public_id });
	} catch (err) {
		console.error('Upload error:', err);
		throw error(500, 'Failed to upload image');
	}
};
