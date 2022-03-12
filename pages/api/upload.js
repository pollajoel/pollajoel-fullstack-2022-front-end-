import nextConnect from 'next-connect';
import multer from 'multer';
import absoluteUrl from 'next-absolute-url';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('file'));

apiRoute.post((req, res) => {
    const { origin } = absoluteUrl(req)
    const url_image = `${req.files[0]}`;
  res.status(200).json(
    { 
        data: 'success',
        files: req.files[0],
        //url: url_image
    }
    )
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};