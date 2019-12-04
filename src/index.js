const accordion = {
  init: function() {
    const accordionTriggers = document.querySelectorAll("dt");
    accordionTriggers.forEach(elm => {
      elm.addEventListener("click", this.handleClick);
      elm.setAttribute("data-before", "+");
    });
  },
  handleClick: function(evt) {
    const trigger = evt.target;
    const content = trigger.nextElementSibling;
    trigger.classList.toggle("is-active");
    content.classList.toggle("is-open");

    if (trigger.classList.contains("is-active")) {
      trigger.setAttribute("data-before", "-");
    } else {
      trigger.setAttribute("data-before", "+");
    }
  }
};

window.addEventListener("load", () => {
  accordion.init();
});
