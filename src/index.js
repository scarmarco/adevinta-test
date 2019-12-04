const accordion = {
  init: function() {
    const accordionTriggers = document.querySelectorAll("dt");
    accordionTriggers.forEach(elm => {
      elm.addEventListener("click", this.handleClick);
    });
  },
  handleClick: function(evt) {
    const trigger = evt.target;
    const content = trigger.nextElementSibling;
    trigger.classList.toggle("is-active");
    content.classList.toggle("is-open");
  }
};

window.addEventListener("load", () => {
  accordion.init();
});
