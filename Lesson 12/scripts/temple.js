const requesturl= "https://eiress.github.io/WDD230/Lesson%2012/Json/temple.json"

// function displayDirectory(){
//     let section = document.querySelectorAll('section');
//       section.forEach((item) => {
//         item.remove();
//   });
//     let row = document.querySelectorAll('tr');
//       row.forEach((item) => {
//         item.remove();
  
//       });
async function getComps(URL){
  const response = await fetch(URL);
  if(response.ok){
      const jsonObject = await response.json();
      const company = jsonObject["companies"];
      company.forEach(makeCards);
      // company.forEach(displayList);
      console.table(response);


  
  };

};
// };  
//     fetch(requesturl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonObject) {
//       const companies = jsonObject['companies'];
//       companies.forEach(makeCards);
//       console.table(companies);
//           }); 


  
getComps(requesturl);

    function makeCards(companies){

        let card = document.createElement('section');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let history = document.createElement('p');
        let address = document.createElement('p');
        let img = document.createElement('img');
      
    
    
        name.textContent = `${companies.name}`;
        phone.textContent = `${companies.phone}`;
        img.setAttribute('src', companies.image);
        img.setAttribute('class' , '')
        console.log(`./${companies.image}`)
        img.setAttribute('alt', companies.name);
        address.textContent= `${companies.Address}`;
        phone.textContent = `${companies.phone}`;
    
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(history);
        document.querySelector('.card').appendChild(card);
     }
    // makeCards();