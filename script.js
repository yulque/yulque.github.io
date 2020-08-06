/** Add any JavaScript you need to this file. */

window.onload = function() {
  var form = document.getElementById('contact');
  form.order_problem.addEventListener('click', showOrderNumber);

  function showOrderNumber() {
    form.order_number.setAttribute('type', 'text');
    form.order_number.style.display = 'block';
    document.getElementById('order_number_label').style.display = 'block';
  }
};
