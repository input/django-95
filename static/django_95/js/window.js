'use strict';
{
  window.addEventListener('load', () => {
    let windows = document.querySelectorAll('.window');

    windows.forEach(function (el) {
      doClick(el);
      doDrag(el);
    });

    // Handle window click.
    function doClick(el) {
      el.addEventListener('click', function () {
        setSelected(el);
      });
    }

    // Handle window drag.
    function doDrag(el) {
      let titleBar = el.querySelector('.window__title-bar');

      titleBar.addEventListener('mousedown', function (ev) {
        if (!(ev.target.classList.contains('btn__close')) &&
            !(ev.target instanceof HTMLAnchorElement)) {
          let shiftX = ev.clientX - el.getBoundingClientRect().left;
          let shiftY = ev.clientY - el.getBoundingClientRect().top;

          el.style.position = 'absolute';
          el.style.zIndex = 1000;
          // document.body.append(el);

          moveAt(ev.pageX, ev.pageY);

          // Move the el at (pageX, pageY) coordinates taking initial shifts
          // into account.
          function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
          }

          function onMouseMove(ev) {
            moveAt(ev.pageX, ev.pageY);
          }

          // Move the el on mousemove.
          document.addEventListener('mousemove', onMouseMove);

          // Drop the el, remove unneeded handlers.
          el.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
          };
        }
      });

      el.ondragstart = function () {
        return false;
      };
    }

    // Set the selected window.
    let i = 2;
    function setSelected(el) {
      if (!el.classList.contains('selected')) {
        windows.forEach((w) => w.classList.remove('selected'));
        el.classList.add('selected');
        el.style.zIndex = i;
        i++;
      }
    }

    // Handle window close button click.
    document.querySelectorAll('.btn__close').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.stopPropagation();
        el.closest('.window').classList.add('hide');
      });
    });
  });
}
