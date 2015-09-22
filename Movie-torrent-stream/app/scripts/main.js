var client = new WebTorrent();
var magnetUri = 'magnet:?xt=urn:btih:544EA0BD1CDB80794CCF862A1270469AB5323F71&dn=automate+the+boring+stuff+with+python+practical+programming+for+total+beginners+1st+edition+2015+pdf+epub+mobi+gooner&tr=udp%3A%2F%2Ftracker.istole.it%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337';

client.add(magnetUri, function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)

  torrent.files.forEach(function (file) {
    // Display the file by appending it to the DOM. Supports video, audio, images, and
    // more. Specify a container element (CSS selector or reference to DOM node).
    file.appendTo('body')
  })
})