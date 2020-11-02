// Make a div
const divOne = document.createElement('div');
// add a class of wrapper to it
divOne.classList.add('wrapper');
// put it into the body
document.body.append(divOne);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two, three" in them
list.innerHTML = `
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
`;
// put that list into the above wrapper
divOne.append(list);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src =
  'https://photos.puppyspot.com/7/listing/601297/photo/4917021_medium.jpg';
// set the width to 250
myImg.setAttribute('width', '250');
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
divOne.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const innerDiv = document.createElement('div');
innerDiv.innerHTML = `
<p>I'm Paragraph One</p>
<p>I'm Paragraph Two</p>
`;
// put this div before the unordered list from above
list.insertAdjacentElement('beforebegin', innerDiv);
// add a class to the second paragraph called warning
const secondP = innerDiv.lastElementChild;
// const secondP = innerDiv.children[1];
secondP.classList.add('warning');
// remove the first paragraph
const firstP = innerDiv.firstElementChild;
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.innerHTML = `

            <h2>${name} &mdash; ${age}</h2>
            <p>They are ${height} and ${age} years old. In "Dog Years" this person is ${
    age * 7
  }. That would be a tall dog!</p>
    `;
  return cardDiv;
  // have that function return html that looks like this:
  // <div class="playerCard">
  //   <h2>NAME — AGE</h2>
  //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  // </div>
}

// make a new div with a class of cards
const cardContainer = document.createElement('div');
cardContainer.classList.add('cards');

// make 4 player cards using generatePlayerCard

const cardOne = generatePlayerCard('Stephanie', 38, '66in');
const cardTwo = generatePlayerCard('Caleb', 8, '48in');
const cardThree = generatePlayerCard('Claire', 6, '40in');
const cardFour = generatePlayerCard('Caroline', 3, '36in');

// append those cards to the div
cardContainer.append(cardOne, cardTwo, cardThree, cardFour);
// put the div into the DOM just before the wrapper element
divOne.insertAdjacentElement('beforebegin', cardContainer);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteButton = document.createElement('button');
deleteButton.classList.add('deleteBtn');
deleteButton.innerText = `Delete This Card`;

const allCards = cardContainer.childNodes;
allCards.forEach(function (el) {
  const tempDelBtn = deleteButton.cloneNode(true);
  el.append(tempDelBtn);
  // select all the buttons!
  // make out delete function
  function deleteThaCard() {
    const card = this.parentElement;
    card.remove();
  }

  const deleteBtn = el.lastElementChild;
  deleteBtn.onclick = deleteThaCard;
});
// loop over them and attach a listener
