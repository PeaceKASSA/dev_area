const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQDFLEknMnvvulBgX_1Tx6LGTxBaeFOhoCJVo72y-Ao2yzmaui2EU4MHoX0CJ3sxHU4h28l8mRGB6Wfrgmjm_W9IwgJTWoJOELwHbFLJU_vhbTpsOOh_8ah25x_zqJU57mBtGGnHAAxx3MkPWcPKFddLpFqlU9lMl2DYh95qFcNis7PM4wPAEhd7HoD5YKLN7Com5i7gXt6aHn6vwVPM_JYF7BMKaCs73ekbSAaGG2w7UXAFtwlRerBKy_g6zHYhw9GLtBFUVgW7GbmUzpNrBnde4bK6bu0bGoHQr6sih8WN3l4bcuHdqrpDPuCSBcO1ZaiR62oLSIG6BTdO5uKrqLGasA";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}
/*
spotifyApi.getUser('314svi4ml3d6w7gyl66hevkbrlvu')
  .then(function(data) {
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
*/
// Get the authenticated user
spotifyApi.getMe()
  .then(function(data) {
//    console.log('Some information about the authenticated user', data.body);
    spotifyApi.getUserPlaylists(data.body.id)
      .then(function(data) {
//        console.log('Retrieved playlists', data.body);
//        console.log('Try to find the first', data.body.items[1].id);
      },function(err) {
        console.log('Something went wrong!', err);
      });
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*spotifyApi.searchTracks('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });
  */

spotifyApi.getMyCurrentPlaybackState()
  .then(function(data) {
    if (data.body && data.body.is_playing) {
      console.log("User is currently playing something! ", /*data.body.item.artists[0].id*/);
      spotifyApi.getRecommendations({
          min_energy: 0.4,
          seed_artists: data.body.item.artists[0].id,//['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
          min_popularity: 50
        })
        .then(function(data) {
          let recommendations = data.body;
          console.log(recommendations);
        }, function(err) {
          console.log("Something went wrong!", err);
        });
    } else {
      console.log("User is not playing anything, or doing so in private.");
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

spotifyApi.getMyCurrentPlaybackState()
  .then(function(data) {
    if (data.body && data.body.is_playing) {
      console.log("User is currently playing something!");
      spotifyApi.getArtistTopTracks(data.body.item.artists[0].id, 'BJ')
      .then(function(data) {
          console.log(data.body);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    } else {
      console.log("User is not playing anything, or doing so in private.");
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function(data) {
    console.log('Artist albums', data.body);
  },
  function(err) {
    console.error(err);
  }
);

spotifyApi.getUserPlaylists('314svi4ml3d6w7gyl66hevkbrlvu')
  .then(function(data) {
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
  });

spotifyApi.addTracksToPlaylist('2DAGzZzYk7yD0wuKG7yWZS', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });*/