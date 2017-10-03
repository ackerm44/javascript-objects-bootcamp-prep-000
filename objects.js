var playlist = {new Object({Fruition : 'I Don\'t Mind'});}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]: songTitle} )
}


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}
