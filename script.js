
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const phoneCards = document.getElementById('phoneCards');

searchButton.addEventListener('click', () => {
  
    const searchText = searchInput.value;
    console.log(searchText);
    searchPhones(searchText);
});



function searchPhones(searchTerm) {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
          if (data.status && Array.isArray(data.data)) {
              displayPhones(data.data);
          } else {
              console.error('Phones data is not an array:', data);
          }
      })
      .catch(error => {
          console.error('Error fetching phones:', error);
      });
}


function displayPhones(phones) {
  phoneCards.innerHTML = '';
  if (!Array.isArray(phones)) {
      console.error('Phones data is not an array:', phones);
      return;
  }
  phones.forEach((phone, index) => {
      const phoneCard = document.createElement('div');
      phoneCard.classList.add('phone-card');
      console.log(phone);
      phoneCard.innerHTML = `
        <img src="${phone.image}" alt="">
        <h3>${phone.phone_name}</h3>
      `;

      phoneCards.appendChild(phoneCard);
  });
}


// function showPopup(phoneIndex, phone) {
//   console.log('phone:', phone);
//   const popupWidth = 400;
//   const popupHeight = 400;
//   const left = (window.innerWidth - popupWidth) / 2;
//   const top = (window.innerHeight - popupHeight) / 2;
//   const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

//   const popupContent = `
//     <html>
//       <head>
//         <title>Phone Details</title>
//         <style>
//           body { font-family: Arial, sans-serif; }
//           img { max-width: 100%; height: auto; }
//         </style>
//       </head>
//       <body>
//         <button onclick="window.close()">Close</button>
//         <h2>${phone.phone_name}</h2>
//         <img src="${phone.image}" alt="${phone.phone_name}">
//         <p>Brand: ${phone.brand}</p>
//         <p>Slug: ${phone.slug}</p>
//       </body>
//     </html>
//   `;

//   const popupWindow = window.open('', '_blank', popupFeatures);
//   popupWindow.document.open();
//   popupWindow.document.write(popupContent);
//   popupWindow.document.close();

//    // Disable the main window
//    popupWindow.focus();
// }


// let popupWindow = null;

// function showPopup(phoneString) {
//   const phone = JSON.parse(phoneString);

//   const popupWidth = 400;
//   const popupHeight = 400;
//   const left = (window.innerWidth - popupWidth) / 2;
//   const top = (window.innerHeight - popupHeight) / 2;
//   const popupFeatures = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

//   const popupContent = `
//     <html>
//       <head>
//         <title>Phone Details</title>
//         <style>
//           body { font-family: Arial, sans-serif; }
//           img { max-width: 100%; height: auto; }
//         </style>
//       </head>
//       <body>
//         <button onclick="window.close()">Close</button>
//         <h1>hii</h1>
//         <h2>${phone.phone_name}</h2>
//         <img src="${phone.image}" alt="${phone.phone_name}">
//         <p>Brand: ${phone.brand}</p>
//         <p>Slug: ${phone.slug}</p>
//       </body>
//     </html>
//   `;

//   const popupWindow = window.open('', '_blank', popupFeatures);
//   popupWindow.document.open();
//   popupWindow.document.write(popupContent);
//   popupWindow.document.close();
// }
  
