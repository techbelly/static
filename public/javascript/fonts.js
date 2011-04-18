WebFontConfig = {
  custom: { families: ['Alternate Gothic No.3', 'Clarendon FS Medium', 'Proxima Nova Light', 'Proxima Nova Semibold', 'Stub Serif FS', 'Stub Serif FS'],
  urls: [ 'http://f.fontdeck.com/s/css/tEGvGvL6JlBfPjTgf2p9URd+sJ0/' + window.location.hostname + '/5502.css' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();