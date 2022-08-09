const requesturl=  "https://eiress.github.io/WDD230/Chamber/Json/data.json";



function displayDirectory(){
  let section = document.querySelectorAll('section');
    section.forEach((item) => {
      item.remove();
});
  let row = document.querySelectorAll('tr');
    row.forEach((item) => {
      item.remove();

    });
    
  fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(makeCards);
    console.table(companies);
        }); 

  console.log('displayDirectory');

function makeCards(companies){

    let card = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let img = document.createElement('img');
    let phone = document.createElement('p');
    let web = document.createElement('a');
    // let card = document.querySelector('.card');


    name.textContent = companies.name;
    phone.textContent = `${companies.phoneNumber}`;
    web.textContent = `${companies.website}`;
    web.setAttribute("href",companies.website);
    img.setAttribute('src', `./${companies.image}`);
    console.log(`./${companies.image}`)
    img.setAttribute('alt', companies.name);
    address.textContent= companies.Address;
    phone.textContent = companies.phone;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    document.querySelector('.card').appendChild(card);
 }
}

function displayTable(){
  let section = document.querySelectorAll('section');
    section.forEach((item) => {
      item.remove();
});
let row = document.querySelectorAll('tr');
    row.forEach((item) => {
      item.remove();

    });
  fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(makeList);
    console.table(companies);
        }); 

  console.log('displayTable');

function makeList(companies){

  console.log('displayTable');
  let section
    let list_row = document.createElement('tr');

    let name = document.createElement('td');
    let address = document.createElement('td');
    let img = document.createElement('img');
    let phone = document.createElement('td');
    let web = document.createElement('a');
    


    name.textContent = companies.name;
    phone.textContent = `${companies.phoneNumber}`;
    web.textContent = `${companies.website}`;

    address.textContent= companies.address;
    phone.textContent = companies.phone;

    list_row.appendChild(name);
    list_row.appendChild(address);
    
    list_row.appendChild(phone);
    list_row.appendChild(web);
    document.querySelector('table').appendChild(list_row);
    
 }
}

document.getElementById("myIcon").addEventListener("click", displayDirectory);
document.getElementById("myList").addEventListener("click", displayTable);

displayDirectory();
