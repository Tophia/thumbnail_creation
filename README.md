# thumbnail_creation
# index.js file for the thumbnail creation of image which comes in a set of json format. Thumbnails created and saved to public folder

# app.js file for creating thumbnails for videos ffmpeg is used and we should mention the timestamp (seconds to take screenshot), size, file name,folder 

# imageSharp.js file will create thumbnails using npm package sharp (Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.) and images are uploaded using multer

# we can run those files separately by -- node imageSharp.js, node index.js and node app.js