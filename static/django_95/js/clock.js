'use strict';
{
  window.addEventListener('load', () => {
    function setClock() {
      let date = new Date();
      let hour = date.getHours() % 12 || 12;
      let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
      let period = (date.getHours() >= 12) ? 'PM' : 'AM';

      document.querySelector('#clock').innerText = `${hour}:${minute} ${period}`;

      let t = setTimeout(function () {
        setClock()
      }, 1000);
    }
    setClock();
  });
}
