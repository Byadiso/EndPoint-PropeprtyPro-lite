import { uploader} from './cloudinaryConfig';


const cloudinaryHandler = (req, res,next) => {

	if(req.file) {
		const file = dataUri(req).content;
		return uploader.upload(file)
			.then((result) => {
				const image = result.url;
				result.tags.push('screenshot');
				result.public_id = 'api/screen';
				req.Image_url = image;
				next();
			// eslint-disable-next-line no-unused-vars
			}).catch((err) => res.status(400, error).json({ message: 'someting went wrong while processing your request'}));
	}
};

export {cloudinaryHandler};