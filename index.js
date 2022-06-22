document.addEventListener("DOMContentLoaded", () => {

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitDetails(document.querySelector('#feedback').value);
  form.reset();
});
});
function submitDetails(rev) {
let li= document.createElement('li')
let btn= document.createElement('button');
btn.addEventListener('click', toDelete);
btn.textContent= ' Remove';
btn.style.color ="white";
btn.style.borderRadius = "12px";
btn.style.backgroundColor = "red";
li.textContent= `${rev} `;
li.appendChild(btn);
document.querySelector('#reviewed').appendChild(li)
}

function toDelete() {
  document.querySelector('li').remove();
};

// Membership form  function
function submit_form(){  
alert("Login successfully");  
}  
function create(){  
alert("Welcome To Our Community!!");  
}  
