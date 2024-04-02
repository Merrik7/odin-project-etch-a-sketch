const sketchGrid = document.querySelector('.etch-a-sketch');
const resetButton = document.querySelector('.reset-btn');

const getRandomColor = function () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const init = function (numberOfDivs) {
  for (let i = 0; i < numberOfDivs; i++) {
    const newElement = document.createElement('div');
    sketchGrid.appendChild(newElement);
    newElement.classList.add('etch-a-sketch-child');

    newElement.addEventListener('mouseover', function () {
      newElement.style.backgroundColor = getRandomColor();
    });
  }
};

const removeChildren = function (parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

init(16);

resetButton.addEventListener('click', function () {
  removeChildren(sketchGrid);
  const gridsToAdd = Number(
    prompt('Enter the new number of grids you want equal to or under 100: ')
  );

  if (gridsToAdd > 100) return;

  init(gridsToAdd * gridsToAdd);

  sketchGrid.style.setProperty(
    'grid-template-columns',
    `repeat(${gridsToAdd}, 1fr)`
  );
  sketchGrid.style.setProperty(
    'grid-template-rows',
    `repeat(${gridsToAdd}, 1fr)`
  );
});
