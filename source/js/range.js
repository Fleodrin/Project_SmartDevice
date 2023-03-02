const slider = document.querySelector('.range__scale');

const buttonReset = document.querySelector('.filter__button-reset');

const minValue = document.querySelector('.filter__group-price-input--min');
const maxValue = document.querySelector('.filter__group-price-input--max');

const valueList = [minValue, maxValue];

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1000,
  },
  cssPrefix: 'range__',
  start: [0, 900],
  connect: true,
  step: 1,
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => value,
  }
});

slider.noUiSlider.on('slide', (values, handle) => {
  valueList[handle].value = values[handle];
});

const setRangeSlider = (index, value) => {
  const arr = [null, null];
  arr[index] = value;
  slider.noUiSlider.set(arr);
}

valueList.forEach((element, index) => {
  element.addEventListener('input', (element) => {
    setRangeSlider(index, element.currentTarget.value)
  })
})

buttonReset.addEventListener('click', () => {
  slider.noUiSlider.reset();
});
