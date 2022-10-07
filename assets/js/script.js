// Image Tab Filter function
var filterList = document.querySelectorAll('.filter-list');
var galleryList = document.querySelectorAll('.gallery-list figure');
var galleryImage = document.querySelectorAll('.gallery-list img');
var modal = document.querySelector('.modalDiv');
var modalImage = document.querySelector('.modalDiv img');
var cancelBtn = document.querySelector('.cancel-btn a');

filterList.forEach(function (list) {
  list.addEventListener('click', function () {
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
    });
  });
});

// image function
galleryImage.forEach(function (image) {
  image.addEventListener('click', function () {
    var imageSource = image.src;
    modalImage.src = imageSource;
    modal.classList.remove('hide-content');
    document.documentElement.classList.add('removeScroll');
  });
});

// modal function
modal.addEventListener('click',function (e) {
  if (e.target == modal || e.target == modal.children[0].children[0]) {
    modal.classList.add('hide-content');
    document.documentElement.classList.remove('removeScroll');
 }
});
























