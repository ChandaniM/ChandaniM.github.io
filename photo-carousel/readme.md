// // const container = document.querySelectorAll(".gallery-container");
// // console.log(container, "@@@@@@@@@@")

// // for (let index = 0; index < container.length; index++) {
// //     const element = container[index].children;
// //     console.log(element, "#####")

// //     // Add a mouseover event listener to each element
// //     for (let i = 0; i < element.length; i++) {
// //         element[i].addEventListener("click", function () {
// //             // Your event handling code here
// //             console.log("Mouseover - Element:", element[i]);
// //             element[i].style.right = "30em";
// //             element[i].style.transform = "rotate(0deg)"
// //             element[i].style.zIndex = "1"
// //             setTimeout(function () {
// //                 element[i].style.right = "10em"; // Revert to the original style
// //             }, 3000);
// //         });
// //     }
// // }
// let childElement =  document.querySelectorAll('.image-container');
// let imageUrls = [
//     "./images/img-1.jpeg",
//     "./images/img-2.jpeg",
//     "./images/img-3.jpeg",
//     "./images/img-4.jpeg",
//     "./images/img-5.png",
// ];
// let zIndex = 1;

// childElement.forEach((element , index)=>{
//     let img = document.createElement("img");
//     img.setAttribute("src", imageUrls[index]);
//     img.setAttribute('class' , "image")
//     element.appendChild(img);

//     element.addEventListener("click", () => {
//         zIndex++; // Increment z-index by 1 
//       element.style.right = "30em"
//       element.style.zIndex =  zIndex.toString();
//       element.style.transform = "rotate(0deg)"
//       });  

//       setTimeout(() => {
//       element.style.right = "10em"
//     }, 10);
// })