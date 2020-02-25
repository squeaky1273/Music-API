const Artist = require('../models/artist');
const Song = require('../models/song');

module.exports = function (app) {
    // CREATE Song
    app.post("/posts/:postId/songs", function (req, res) {
        const song = new Song(req.body);
        song
            .save()
            .then(song => {
                return Promise.all([
                    Artist.findById(req.params.postId)
                ]);
            })
            .then(([artist, user]) => {
                artist.songs.unshift(song);
                return Promise.all([
                    artist.save()
                ]);
            })
            .then(post => {
                res.redirect(`/posts/${req.params.artistId}`);
            })
            .catch(err => {
                console.log(err);
            });
    });
};