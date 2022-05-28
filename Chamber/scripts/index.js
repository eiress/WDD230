let usDate = document.querySelector(".date");
let datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
let now = new Date();
let fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
let fulldateUK = new Intl.DateTimeFormat("en-UK", {	dateStyle: "full" }).format(now);
// long, medium, short options ... try them

usDate.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

let currentdate = document.lastModified;
document.querySelector('span').textContent = currentdate;

console.log(currentdate);

