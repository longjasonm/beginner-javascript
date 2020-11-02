// select all buttons
const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// handle the click
function handleCardButtonClick(e) {
  const card = e.currentTarget.parentElement;
  const MODAL_IMAGE_WIDTH = 500;

  modalOuter.classList.add('open');

  modalInner.innerHTML = `
    <img src="${card
      .querySelector('img')
      .src.replace('200', MODAL_IMAGE_WIDTH)}" />
    <p>${card.dataset.description}</p>
  `;
}

function closeTheModal(e) {
  if (modalOuter.classList.contains('open')) {
    modalOuter.classList.remove('open');
    modalInner.innerHTML = ``;
  }
}

// loop over them adding event listener
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

// event listener for open modal
modalOuter.addEventListener('click', function (e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeTheModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTheModal();
  }
});
