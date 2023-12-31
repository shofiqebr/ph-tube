const handleCatagory = async () => {

  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");

  data.data?.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <a onclick="handleId('${category.category_id}')" class="tab">${category.category}</a> 
            `;
    tabContainer.appendChild(div);
  
  });

};
const handleId = async (categoryId) => {
  
  const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}
    `);
   

  const data = await res.json();

  const cardContainer = document.getElementById("card-container");
  const cardContainer1 = document.getElementById("card-container1");
  
  cardContainer.innerHTML = "";
  cardContainer1.innerHTML = "";
  if (data?.data && data?.data?.length > 0) {
    data?.data.forEach((card) => {
      
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img class="h-40 w-72" src="${card?.thumbnail}" alt=""/>
  </figure>
  ${
    card?.others?.posted_date
      ? `<p class="absolute bottom-36 md:right-16 right-7 bg-black rounded-md text-white lg:right-4 text-sm">${getHoursAndMinutes(card?.others?.posted_date)}</p>`
      : ''
  }
  <div class="card-description flex">
    <div class="img">
    <img class="w-12 h-12 rounded-full m-5" src="${card?.authors[0]?.profile_picture}" alt="">

    
    </div>
  <div class="card-body">
    <h2 class="card-title text-lg pt-4">${card?.title.slice(0,10)}</h2>
    <p class="flex">${card?.authors[0]?.profile_name.slice(0,12)} ${
      card?.authors[0]?.verified
        ? 
        '<img class="w-8" src="https://logowik.com/content/uploads/images/check-mark-badge6475.logowik.com.webp" alt="Verified Badge">'
        : ''
    }
    </p>
    <p class="text-sm text-gray-500">Views: ${card?.others?.views || 0}</p>
    <p class="absolute bottom-2 right-2 text-sm text-gray-500">
    


  </div>
</div>
      </div>
        `;
      cardContainer.appendChild(div);
    });
  } else {
    const section = document.createElement("section");
    section.innerHTML = `
    <div class="no-data h-96 flex flex-col justify-center items-center">
    <img class="w-24" src="images/Icon.png" alt="">
    <h1 class="text-center font-bold text-xl ">Oops!! Sorry, There is no <br> content here</h1>
  </div>
    `;

    cardContainer1.appendChild(section);

  
  }
};


function getHoursAndMinutes(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);

  return `${hours}hrs ${minutes}min ago`;
}

handleId("1000");
handleCatagory();
