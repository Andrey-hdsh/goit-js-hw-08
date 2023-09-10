import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ***************************************************
const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe);
const VIDEO_TIME_KEY = 'videoplayer-current-time';

function localStorageValue(event) {
    localStorage.setItem('VIDEO_TIME_KEY', event.seconds);
}

player.setCurrentTime(localStorage.getItem('VIDEO_TIME_KEY')).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on("timeupdate", throttle(localStorageValue, 1000));


