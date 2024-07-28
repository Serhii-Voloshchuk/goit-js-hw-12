import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.getElementById('loader');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
let lightbox;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentQuery = input.value.trim();

  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  currentPage = 1;
  totalHits = 0;
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage);
    loader.classList.add('hidden');

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    totalHits = data.totalHits;
    renderImages(data.hits);
    lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();

    if (totalHits > currentPage * 15) {
      loadMoreBtn.classList.remove('hidden');
    }
  } catch (error) {
    loader.classList.add('hidden');
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error('Error fetching images:', error);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderImages(data.hits);
    lightbox.refresh();

    if (totalHits <= currentPage * 15) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error('Error fetching more images:', error);
  }
});