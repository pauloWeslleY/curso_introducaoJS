$(() => {
   $('[data-toggle="popover"]').popover();
});


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
let popoverList = popoverTriggerList.map((popoverTriggerEl) => {
   return new bootstrap.Popover(popoverTriggerEl);
});
