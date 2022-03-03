const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
fs = require('fs');
var command =
    ffmpeg('./video/sample-5s.mp4')
        // ./video/JOCHI - Google Chrome 2021-09-21 12-41-51.mp4
        .on('end', function (files) {
            console.log('screenshots were saved as ' + files);
        })
        .on('error', function (err) {
            console.log('an error happened: ' + err.message);
        })
        .screenshots({
            timestamps: [3],
            filename: 'thumbnail-at-%s-seconds.png',
            folder: './thumbs',
            size: '320x240'
        });
        ////
        /////
        //////
        ///////
        ////////
        /*mostly found stack overflow ffmpeg function */
// const express = require('express');
// // const ffmpeg = require('ffmpeg')
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5000;
// app.use('/public', express.static(path.join(__dirname, 'public')));
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffmpeg = require('fluent-ffmpeg');
// ffmpeg.setFfmpegPath(ffmpegPath);
// const proc = new ffmpeg('./video/sample-5s.mp4')
//     .takeScreenshots({
//         count: 1,
//         timemarks: ['600'] // number of seconds
//     }
//     , '/public', function () {
//         console.log('screenshots were saved')
//     });