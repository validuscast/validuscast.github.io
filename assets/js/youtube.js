/* ==========================================================================
   YouTube videos shown on blogs.html
   --------------------------------------------------------------------------
   To add a video, copy one line into VIDEOS below.
   The id is the part after "watch?v=" in the video URL, e.g.
   https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: 'dQw4w9WgXcQ'
   Thumbnails are loaded automatically from YouTube.

   Until real ids are added, the cards below show "Coming soon" placeholders
   with our own simulation thumbnails and link to the channel.
   ========================================================================== */
var CHANNEL_URL = 'https://www.youtube.com/@validuscast';

var VIDEOS = [
  // { id: 'XXXXXXXXXXX', title: 'Your video title', date: 'Nov 2026', duration: '6:12' },
];

var PLACEHOLDERS = [
  { title: 'LM6-CastBench in 5 minutes: 450 sand-casting simulations, explained', img: 'assets/img/yt-placeholder-1.jpg', date: 'Coming soon' },
  { title: 'Point-wise MLP vs 3D U-Net: why geometry context matters', img: 'assets/img/yt-placeholder-2.jpg', date: 'Coming soon' },
  { title: 'From CAD to thermal field: our Elmer FEM pipeline', img: 'assets/img/yt-placeholder-3.jpg', date: 'Coming soon' }
];

(function () {
  var grid = document.getElementById('video-grid');
  if (!grid) return;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var html = '';
  if (VIDEOS.length) {
    VIDEOS.forEach(function (v) {
      html += '<a class="video-card reveal" href="https://www.youtube.com/watch?v=' + esc(v.id) + '" target="_blank" rel="noopener">' +
        '<div class="vthumb"><img loading="lazy" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="' + esc(v.title) + '"><span class="play" aria-hidden="true"></span></div>' +
        '<h4>' + esc(v.title) + '</h4><div class="vmeta">' + esc([v.date, v.duration].filter(Boolean).join(' · ')) + '</div></a>';
    });
  } else {
    PLACEHOLDERS.forEach(function (v) {
      html += '<a class="video-card reveal" href="' + CHANNEL_URL + '" target="_blank" rel="noopener">' +
        '<div class="vthumb"><img loading="lazy" src="' + esc(v.img) + '" alt=""><span class="play" aria-hidden="true"></span><span class="soon">Coming soon</span></div>' +
        '<h4>' + esc(v.title) + '</h4><div class="vmeta">' + esc(v.date) + ' · youtube.com/@validuscast</div></a>';
    });
  }
  grid.innerHTML = html;
  grid.querySelectorAll('.reveal').forEach(function (el) { requestAnimationFrame(function () { el.classList.add('in'); }); });
})();
