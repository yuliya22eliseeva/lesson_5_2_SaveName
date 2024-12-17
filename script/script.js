const input = document.getElementById('item');
const addNameBtn = document.getElementById('addNameBtn');
const ul = document.querySelector('ul');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

addNameBtn.addEventListener('click', ()=>{
  const nameText = input.value.trim ();
  if (nameText === "") return;
  itemsArray.push(input.value.trim());
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
})

data.forEach(item => {
  liMaker(item);
})
