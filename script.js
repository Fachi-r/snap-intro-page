
// ----------------------------------------------------------------
// Menu Toggling functions
const menuOpen = document.querySelector(".menu_icon");
const menuClose = document.querySelector(".menu_close_icon");
const navigation = document.querySelector(".navigation");

menuOpen.onclick = () => {
   navigation.classList.add("open");
};
menuClose.onclick = () => {
   navigation.classList.remove("open");
};

// ----------------------------------------------------------------
// Accordion Code
const buttons = document.querySelectorAll(".accordion_button");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
         accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
         accordionContent.style.opacity = 1;
         accordionContent.style.visibility = "visible";
      } else {
         accordionContent.style.maxHeight = 0;
         accordionContent.style.opacity = 0;
         accordionContent.style.visibility = "hidden";
      }
   });
});


// ----------------------------------------------------------------
// Setting mobile || desktop images based on screen size
const images = document.querySelectorAll("img");
let media = window.matchMedia("(min-width: 700px)");
// Window is greater than [width] 👆
let aspectRatio = window.innerWidth / window.innerHeight;


function setImgSrc(_aspectRatio, _media) {
   if (_media.matches || _aspectRatio < 0.5) {
      images.forEach((image) => {
         const newImageSrc = image.src.replace("mobile", "desktop");
         image.src = newImageSrc;
      });
   } else {
      images.forEach((image) => {
         const newImageSrc = image.src.replace("desktop", "mobile");
         image.src = newImageSrc;
      });
   }
}

setImgSrc(aspectRatio, media);
// Add a listener to update images on resize
media.addEventListener("change", () => {
   let newAspectRatio = window.innerWidth / window.innerHeight;
   setImgSrc(newAspectRatio, media);
   console.log("Ratio changed to => ", newAspectRatio);
});

