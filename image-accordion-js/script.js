const items = document.querySelectorAll(".item"); // Select all elements with the class "item"

// Define an array of image URLs
let imageUrls = [
  "./images/img-1.jpeg",
  "./images/img-2.jpeg",
  "./images/img-3.jpeg",
  "./images/img-4.jpeg",
  "./images/img-5.png",
];

items.forEach((item, index) => {

  let img = document.createElement("img");
  img.setAttribute("src", imageUrls[index]);
  // Set a fixed width and object-fit for the images
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';

  item.appendChild(img);

  // Set initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener("mouseover", () => {
    item.style.flex = "9"; // Expand the item
  });

  item.addEventListener("mouseout", () => {
    item.style.flex = "1"; // Contract the item
  });
  
   // Add a touchstart event listener for touch screens 
   item.addEventListener("touchstart", () => {
    item.style.flex = "9"; // Expand the item
  });

  // Add a touchend event listener for touch screens
  item.addEventListener("touchend", () => {
    item.style.flex = "1"; // Contract the item
  });
});
