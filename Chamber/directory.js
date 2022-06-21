const requesturl=  "https://eiress.github.io/WDD230/Chamber/Json/data.json";



fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    companies.forEach(displayDirectory);
    
    }); 

// getcompanies(requesturl);
  



function displayDirectory(companies){
  console.table(companies);
    let name = document.createElement('p');
    let address = document.createElement('p');
    let img = document.createElement('img');
    let phone = document.createElement('p');
    let web = document.createElement('p');
    let card = document.querySelector('.card');


    name.textContent = companies.name;
    phone.textContent = `${companies.phoneNumber}`;
    web.textContent = `${companies.website}`;
    img.setAttribute('src', `./${companies.image}`);
    console.log(`./${companies.image}`)
    img.setAttribute('alt', companies.name);
    address.textContent= companies.address;
    phone.textContent = companies.phone;

    
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(img);
    card.appendChild(phone);
    card.appendChild(web);
    //  document.querySelector('.card').appendChild(name);
}

function displayTable(companies){
    let list_row = document.createElement('tr');

    let name = document.createElement('td');
    let address = document.createElement('td');
    let img = document.createElement('img');
    let phone = document.createElement('td');
    let web = document.createElement('td');


    name.textContent = companies.name;
    phone.textContent = `${companies.phoneNumber}`;
    web.textContent = `${companies.website}`;
    img.setAttribute('src', `./${companies.image}`);
    console.log(`./${companies.image}`)
    img.setAttribute('alt', companies.name);
    address.textContent= companies.address;
    phone.textContent = companies.phone;

    list_row.appendChild(name);
    list_row.appendChild(address);
    list_row.appendChild(img);
    list_row.appendChild(phone);
    list_row.appendChild(web);
    document.querySelector('table').appendChild(list_row);
}

