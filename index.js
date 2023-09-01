// load data
const handleCatagory = async () =>{
    // console.log("ggggJ")
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const tabContainer = document.getElementById("tab-container");

        data.data.forEach((category) => {
            const div = document.createElement('div');
            div.innerHTML =`
            <a onclick="handleId('${category.category_id}')" class="tab">${category.category}</a> 
            `;
            tabContainer.appendChild(div);
        // console.log(category);
    });

 
 
    console.log(data.data);
};
const handleId = async (categoryId) => {
    const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}
    `);
    const data = await res.json();
    data.data.forEach((card) => {
        console.log("card");
    }); 
    console.log(data);
};
handleCatagory();