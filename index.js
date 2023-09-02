// load data
const handleCatagory = async () => {
  // console.log("ggggJ")
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <a onclick="handleId('${category.category_id}')" class="tab">${category.category}</a> 
            `;
    tabContainer.appendChild(div);
    // console.log(category);
  });

//   console.log(data.data);
};
const handleId = async (categoryId) => {
//   console.log(categoryId);
  const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}
    `);
  const data = await res.json();

  const cardContainer = document.getElementById("card-container");
  const cardContainer1 = document.getElementById("card-container1");

  cardContainer.innerHTML = "";
  cardContainer1.innerHTML = "";
  if (data.data && data.data.length > 0) {
    data.data.forEach((card) => {
         
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img class="h-40 w-72" src="${card.thumbnail}" alt="Shoes" /></figure>
  <div class="card-description flex">
    <div class="img">
    <img src="${card.profile_picture}" alt="">
    
    </div>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
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

    // cardContainer.appendChild(data.data.length === 0 ? section :div )
    // const category = 0;
    // category?"no data":cardContainer.appendChild(div);

    console.log(card);
  }
};

// console.log(data);

handleId("1000");
handleCatagory();
