import { getUniqueRandomNumbers } from './modules/util.js';

const searchInput = document.querySelector('.search__input');
const searchForm = document.querySelector('.search__form');
const galleryBox = document.querySelector('.gallery__list');
const magicButton = document.querySelector('.search__random-button');

const PHOTOS_COUNT = 6;

const showPhotos = (photos) => {
  galleryBox.innerHTML = '';
  const randomIndexes = getUniqueRandomNumbers(0, 29, PHOTOS_COUNT);
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    const photo = photos[randomIndexes[i]];
    const item = `<li class="gallery__item"><img src=${photo.urls.regular} alt=''></li>`;
    galleryBox.innerHTML += item;
  }
};

const getData = async (word) => {
  const response = await fetch(`https://api.unsplash.com/search/photos/?query=${word}&per_page=30`, {
    method: 'GET',
    headers: {
      Authorization: 'Client-ID RWZNAOIYcdKL8YHwEDluQVb5ue4GGm0w7hBM01D8LzU',
    },
  });

  console.log(response)

  const data = await response.json();
  const photos = data.results;
  showPhotos(photos);
};

const getAndShowRandomData = async () => {
  searchInput.value = '';
  const response = await fetch('https://api.unsplash.com/photos/random/?count=30&content_filter=high', {
    method: 'GET',
    headers: {
      Authorization: 'Client-ID RWZNAOIYcdKL8YHwEDluQVb5ue4GGm0w7hBM01D8LzU',
    },
  });

  const data = await response.json();
  showPhotos(data);
};

document.addEventListener('DOMContentLoaded', () => {
  getAndShowRandomData();
});

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const searchWord = searchInput.value;
  getData(searchWord);
});

magicButton.addEventListener('click', getAndShowRandomData);

const openPhoto = (evt) => {
  if (evt.target.nodeName.toLowerCase() !== 'img') {
    return;
  }
  window.open(evt.target.src);
}

galleryBox.addEventListener('click', openPhoto);
