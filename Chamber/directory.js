const requesturl=  "https://eiress.github.io/WDD230/Chamber/Json/data.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const companies = jsonObject['companies'];
    companies.forEach(displayDirectory);
        
    }); 
  



function displayDirectory(prophet){
    let name = document.createElement('p');
    let address = document.createElement('p');
    let img = document.createElement('img');
    let phone = document.createElement('p');
    let web = document.createElement('p');

    name.textContent = prophet.name + ' '+ prophet.lastname;
    phone.textContent = `${prophet.phoneNumber}`;
    web.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(img);
    card.appendChild(pob);
    document.querySelector('.cards').appendChild(card);
}

function displayTable(prophet){
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = prophets.name + ' ' + prophet.lastname;

    let td_birthdate = document.createElement('td');
    td_birthdate.textContent = prophet.birthdate;

    list_row.appendChild(td_name);
    list_row.appendChild(td_birthdate);
    document.querySelector('table').appendChild(list_row);
}
