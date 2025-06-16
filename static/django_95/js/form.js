'use strict';
{
  window.addEventListener('load', () => {
    // Add a wrapper div, for CSS, around non-'multiple' <select> elements.
    document.querySelectorAll('select:not(select[multiple])').forEach(function (el) {
      var wrap = document.createElement('div');
      wrap.classList.add('select-wrap');
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
    });

    // Add a 'btn' class to various links.
    // Using JavaScript here avoids the need to override multiple template files
    // etc. solely to add a 'btn' class.
    document.querySelectorAll(`.object-tools .addlink, .historylink,
    .deletelink, .viewsitelink, .selector-add, .selector-remove,
    .selector-chooseall, .selector-clearall, .datetimeshortcuts a,
    .calendar-shortcuts a, .calendar-cancel a, .calendarnav-previous,
    .calendarnav-next, .timelist a`).forEach(function (el) {
      el.classList.add('btn');
    });

    // Replace fieldset headings with legends.
    document.querySelectorAll('.fieldset-heading').forEach(function (el) {
      var legend = document.createElement('legend');
      legend.innerHTML = el.innerHTML;
      el.parentNode.appendChild(legend);
      el.remove();
    });

    // Add window-related classes to calendar and clock elements (which are
    // created in DateTimeShortcut.js).
    document.querySelectorAll('.calendarbox, .clockbox').forEach(function (el) {
      el.classList.add('window');
    });
    document.querySelectorAll('.calendar').forEach(function (el) {
      el.classList.add('window__pane');
    });
  });
}
