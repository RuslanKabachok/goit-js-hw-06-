const counterValue = 0;
const refs = {
  decrementButtonEl: document.querySelector('button[data-action="decrement"]'),
  incrementButtonEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

const increaseValue = () => {
  console.log('click');
};
const decreaseValue = () => {};

refs.decrementButtonEl.addEventListener('click', increaseValue);
refs.incrementButtonEl.addEventListener('click', decreaseValue);
