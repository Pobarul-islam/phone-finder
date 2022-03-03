// search btn
const searchBtn = () => {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((phone) => displayPhone(phone.data));
};

const displayPhone = (data) => {
  const phoneCard = document.getElementById("phone-container");
   if (data == 0) {
     const failedText = (document.getElementById("phone-information").innerHTML = `${'<span class="faileText"><h3>Please try again</h3></span>'}`);
     
   } else {
     console.log("show result");
   }

  data.forEach((data) => {
    // phoneCard.innerHTML = "";
    const div = document.createElement("div");

    div.innerHTML = `<div class="card">
<img class="w-50 imgBox" src="${data.image}" /> <div class="card-textBox">
<h5>${data.phone_name}</h5>
<h6>${data.brand}</h6>
<p class="card-text">
Some quick example text to build on the card title and make up the bulk of the card's
content. </p>

<a id='detailsBtn' onclick="loadPhoneDetails('${data.slug}')" href="#" class="btn btn-primary">Details</a>
</div>
</div>`;

    phoneCard.appendChild(div);
  });
};

const loadPhoneDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDetails(data.data));
  console.log(url);
};

const setDetails = (info) => {
  document.getElementById("phone-information").innerHTML = `





<div class = "mt-3 mx-auto w-50">
<img class ="infoImg w-50" src = "${info.image}"/>
<div class="mx-auto mt-4">
<h2>Main Futures</h2>
<table class = "mt-3 p-2">
 
  <tr>
  
    <td>Name:</td>
    <td>${info.name}</td>
   
  </tr>
  <tr>
    <td>Brand:</td>
    <td>${info.brand}</td>
   
  </tr>
  <tr>
    <td>Id:</td>
    <td>${info.slug}</td>
    
  </tr>
  <tr>
    <td>Release</td>
    <td>${info.releaseDate}</td>
    
  </tr>
  <tr>
    <td>Storage</td>
    <td>${info.mainFeatures.storage}</td>
    
  </tr>
  <tr>
    <td>Display Size</td>
    <td>${info.mainFeatures.displaySize}</td>
    
  </tr>
  <tr>
    <td>ChipSet</td>
    <td>${info.mainFeatures.chipSet}</td>
    
  </tr>
  <tr>
    <td>Memory</td>
    <td>${info.mainFeatures.memory}</td>
    
  </tr>
  <tr>
    <td>Sensors</td>
    <td>${info.mainFeatures.sensors}</td>
    
  </tr>
  <tr>
    <td>WLAN</td>
    <td>${info.others.WLAN}</td>
    
  </tr>
  <tr>
    <td>Bluetooth</td>
    <td>${info.others.Bluetooth}</td>
    
  </tr>
  <tr>
    <td>GPS</td>
    <td>${info.others.GPS}</td>
    
  </tr>
  <tr>
    <td>NFC</td>
    <td>${info.others.NFC}</td>
    
  </tr>
  <tr>
    <td>Radio</td>
    <td>${info.others.Radio}</td>
    
  </tr>
  <tr>
    <td>USB</td>
    <td>${info.others.USB}</td>
    
  </tr>
</table>

</div>

</div>
  `;
};
