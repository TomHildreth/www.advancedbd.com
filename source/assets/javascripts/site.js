import breakpoints from './vendor/breakpoints';
import navigation from './components/navigation';
import index from './pages/index';

const hidePreloader = () => {
  $('#preloader').fadeOut(1000, () => {
    $('#cover').remove();
  });
};

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();
  navigation();

  switch ($bodyId) {
    case 'index':
      index();
      break;
    default:
      break;
  }
});

window.addEventListener("load", function(){
  hidePreloader();
}, false);