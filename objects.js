var playlist = new Object({Alanis Morisette: 'Ironic', Jewel: "You were meant for me"});

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]: songTitle} )
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist; 
  return playlist; 
}