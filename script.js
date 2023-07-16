const accessKey = "vX5gKhacCgIpRwZZGA_Buh5lvmtBKoQIsfS5R7Sh-j4"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn")
const showMoreBtn = document.getElementById("show-more-btn");
const searchResult = document.getElementById("search-result");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${keyword}&client_id=${accessKey}`;
     
    const response = await fetch(url);
    const data = await response.json();
    
     

    const results = data.results;
    if(page ===1){
        
        searchResult.innerHTML ="";
       
    }
    showMoreBtn.style.display = "block"

    results.map((result) =>{
      
        showMoreBtn.style.display = "block"
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    
     showMoreBtn.style.display = "block"
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
    

})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})