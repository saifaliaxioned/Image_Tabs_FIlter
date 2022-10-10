// Image Tab Filter function
var filterList = document.querySelectorAll('.filter-list');
var galleryList = document.querySelectorAll('.gallery-list figure');
var galleryImage = document.querySelectorAll('.gallery-list img');
var modal = document.querySelector('.modalDiv');
var modalImage = document.querySelector('.modalDiv img');
var cancelBtn = document.querySelector('.cancel-btn a');
var prevBtn = document.querySelector('.prevBtn a');
var nextBtn = document.querySelector('.nextBtn a');
var activeList = document.querySelector('.active-list');
var currentIndex;

filterList.forEach(function (list) {
  list.addEventListener('click', function () {
    activeList.classList.remove('active-list');
    list.classList.add('active-list');
    var listAttr = list.getAttribute('data-list');
    galleryList.forEach(function (imgList) {
      var imgAttr = imgList.getAttribute('data-img');
      if (listAttr === imgAttr || listAttr === 'all') {
        imgList.classList.remove('hide-content');
      } else {
        imgList.classList.add('hide-content');
      };
    });
  });
});

// Image function
galleryImage.forEach(function (image, i) {
  image.index = i;
  image.addEventListener('click', function () {
    currentIndex = image.index
    var imageSource = image.src;
    modalImage.src = imageSource;
    modal.classList.remove('hide-content');
    document.documentElement.classList.add('removeScroll');
    image.parentElement.parentElement.classList.add('active-list');
  });
});

// Modal function
modal.addEventListener('click', function (e) {
  if (e.target === modal || e.target === modal.children[0].children[0]) {
    modal.classList.add('hide-content');
    document.documentElement.classList.remove('removeScroll');
  };
});

// slider function
nextBtn.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex > galleryList.length - 1) {
    currentIndex = 0;
  }
  slider();
});
prevBtn.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryList.length - 1;
  }
  slider();
});
function slider() {
  activeList.classList.remove('active-list');
  galleryList[currentIndex].classList.add('active-list');
  modalImage.src = galleryImage[currentIndex].src;
  console.log(modalImage);
}

// Escape key function
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    modal.classList.add('hide-content');
    document.documentElement.classList.remove('removeScroll');
  };
});

























