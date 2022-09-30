// Image Tab Filter function
var filterList = document.querySelectorAll('.filter-list');
var galleryList = document.querySelectorAll('.gallery-list figure');

filterList.forEach(function (list) {
  list.addEventListener('click',function () {
    var activeList = document.querySelector('.active-list');
    activeList.classList.remove('active-list');
    list.classList.add('active-list');
    var listAttr = list.getAttribute('data-list');
    galleryList.forEach(function (imgList) {
      var imgAttr = imgList.getAttribute('data-img');
      if (listAttr === imgAttr || listAttr === 'all') {
        imgList.classList.remove('hide-content');
      } else {
        imgList.classList.add('hide-content');
      }
    })
  })
})























