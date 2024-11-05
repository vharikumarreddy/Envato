let wishlist = document.getElementById("wishlist")
wishlist.addEventListener("click", () => {
    console.log("Wishlist added");
});

let startnow = document.getElementById("startnow");

startnow.addEventListener("click",()=>{
    console.log("startnow")
    window.open("https://elements.envato.com/", "_blank");
})

const shuffleimages = document.getElementsByClassName("shuffleimages");

let childdiv = shuffleimages

