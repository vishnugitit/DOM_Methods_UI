// name
let user = document.getElementById("user");
// click
let button = document.getElementById("button");

// Image
button.addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("src", "./ganesh.jpg");
  image.setAttribute("height", "300");
  image.setAttribute("width", "300");
  image.style.marginLeft = "40px";
  document.body.appendChild(image);

  // Wishing you a blessed Vinayaka Chavithi!
  let text = document.createElement("p");
  text.style.fontFamily = "calibri";
  text.style.fontSize = "20px";
  text.style.marginLeft = "40px";
  text.innerHTML = "Wishing you a blessed Vinayaka Chavithi!";
  text.style.color = "#A52A2A";
  document.body.appendChild(text);

  // May Lord Ganesha bring joy, prosperity, and wisdom to your life.
  let text1 = document.createElement("p");
  text1.style.fontFamily = "calibri";
  text1.style.fontSize = "20px";
  text1.style.marginLeft = "40px";
  text1.innerHTML = "May Lord Ganesha bring joy, prosperity, and wisdom to your life.";
  text1.style.color = "#D2691E";
  document.body.appendChild(text1);

  // May all your obstacles be removed, and your path be filled with success.
  let text2 = document.createElement("p");
  text2.style.fontFamily = "calibri";
  text2.style.fontSize = "20px";
  text2.style.marginLeft = "40px";
  text2.style.color = "#4682B4";
  text2.innerHTML ="May all your obstacles be removed, and your path be filled with success.";
  document.body.appendChild(text2);

  // Happy Vinayaka Chavithi
  let text3 = document.createElement("p");
  text3.style.fontFamily = "calibri";
  text3.style.fontSize = "20px";
  text3.style.fontWeight = "200";
  text3.style.marginLeft = "40px";
  text3.style.color = "#483D8D";
  text3.innerHTML = "Happy Vinayaka Chavithi";
  document.body.appendChild(text3);

  // To
  let text4 = document.createElement("p");
  text4.style.fontFamily = "georgia";
  text4.style.fontSize = "20px";
  text4.style.marginLeft = "40px";
  text4.style.color = "#6B8E23";
  text4.innerHTML = `To `;
  document.body.appendChild(text4);
  
// User_input
  let text4_1 = document.createElement("p");
  text4_1.style.fontFamily = "georgia";
  text4_1.style.fontSize = "20px";
  text4_1.style.marginLeft = "40px";
  text4_1.style.color = "#DC143C";
  text4_1.innerHTML = ` ${user.value}`;
  document.body.appendChild(text4_1);

// From
  let text5 = document.createElement("p");
  text5.style.fontFamily = "georgia";
  text5.style.fontSize = "20px";
  text5.style.color = "#6B8E23";
  text5.style.marginLeft = "40px";
  text5.innerHTML = `From`;
  document.body.appendChild(text5);

// Vishnu vardhan
  let text5_1 = document.createElement("p");
  text5_1.style.fontFamily = "georgia";
  text5_1.style.fontSize = "20px";
  text5_1.style.color = "#FF6347";
  text5_1.style.marginLeft = "40px";
  text5_1.innerHTML = ` JANGAM VISHNU VARDHAN BABU`;
  document.body.appendChild(text5_1);
});
