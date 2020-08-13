//Contact Us page
//order_problem showing / not showing

//Index.html -------------------------------------------------------
function getItem(elem, title, price, itemNo, detail) {
  let saleEd = document.getElementById('container');
  let item = document.createElement('div');

  item.setAttribute('class', `filterDiv ${elem}`);
  let img = new Image();
  img.src = `images/${elem}${itemNo}.jpg`;
  item.appendChild(img);

  let desc = document.createElement('div');
  desc.setAttribute('class', 'product-bottom');
  desc.innerHTML = `<h5>${title} ${elem}</h5><h6>${detail}</h6><h6>${price}</h6><h6>${elem} </h6>`;

  item.appendChild(desc);
  saleEd.appendChild(item);
}
function filterSelect(choice) {
  let titleBoxEl = document.getElementById('title-box');
  titleBoxEl.innerHTML = `<h3>${choice}</h3>`;
  let item = document.getElementsByClassName('filterDiv');
  if (choice === 'all') {
    choice = '';
  }
  for (let i = 0; i < item.length; i++) {
    removeClass(item[i], 'show');
    if (item[i].className.indexOf(choice) > -1) {
      addClass(item[i], 'show');
    }
  }
}

//show filtered element.
function addClass(ele, name) {
  let i, arr1, arr2;
  arr1 = ele.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      ele.className += ' ' + arr2[i];
    }
  }
}

//hide element that are not selected
function removeClass(ele, name) {
  let i, arr1, arr2;
  arr1 = ele.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  ele.className = arr1.join(' ');
}

function showOrderNumber() {
  let form = document.getElementById('contact');
  form.order_number.setAttribute('type', 'text');
  form.order_number.style.display = 'block';
  document.getElementById('order_number_label').style.display = 'block';
}
function deleteOrderNumber() {
  let form = document.getElementById('contact');
  form.order_number.setAttribute('type', 'hidden');
  document.getElementById('order_number_label').style.display = 'none';
}
//Contacts ----------------------------------------------------------
//side menu showing current category
window.onload = function() {
  let form = document.getElementById('contact');
  if (form) {
    form['order_problem'].addEventListener('click', showOrderNumber);
    form.comment.addEventListener('click', deleteOrderNumber);
    form.question.addEventListener('click', deleteOrderNumber);
  }
  let btnContainer = document.getElementById('menu-bar');
  if (btnContainer) {
    let btns = btnContainer.getElementsByClassName('btn');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }

  //req10. All images are downsized(under 500KB).
  let saleEd = document.getElementById('container');
  if (saleEd) {
    getItem('bag', 'Navy', '$30', '1', 'comfortable navy color echo bag');
    getItem('bag', 'Ivory', '$25', '2', 'comfortable ivory color echo bag');
    getItem('sticker', 'Sunflower', '$7', '1', 'a cat with sunflower');
    getItem('sticker', 'Big Laptop', '$7', '2', 'easily removable sticker for laptop');
    getItem('sticker', 'Pond', '$7', '3', 'chilling cat in a pond');
    getItem('sticker', 'Travel Cat', '$7', '4', 'traveling items with a cat');
    getItem('sticker', 'Bike Cat', '$7', '5', 'a cat going to a picnic');
    getItem('sticker', 'Nature Cat', '$7', '6', 'a cat in a nature');
    getItem('sticker', 'Camping Cat', '$7', '7', 'camping items with a cat');
    getItem('sticker', 'Picnic Cat', '$7', '8', 'a cat in the Wonderland');
    filterSelect('all');
  }
};
