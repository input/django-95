'use strict';
{
  window.addEventListener('load', () => {
    let startMenu = document.querySelector('#start-menu');

    document.querySelector('#btn__start').addEventListener('click', function (ev) {
      ev.stopPropagation();
      startMenu.classList.toggle('hide');
    });

    document.addEventListener('click', function () {
      startMenu.classList.add('hide');
    });
  });
}
