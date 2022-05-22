const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');
    const myItem = input.value;
    input.value = "";


   listItem.textContent = myItem;
   listBtn.textContent = "X";
    listItem.appendChild(listBtn);

    list.appendChild(listItem);


    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
  });