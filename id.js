 //  LAYOUT
 let layout = document.createElement("div");
 layout.style.border = "2px solid black";
 layout.style.borderRadius = "20px";
 layout.style.height = "370px";
 layout.style.width = "240px";
 layout.style.margin = "40px";
 layout.style.background = "#FFF0F5";
 document.body.appendChild(layout);

 //  TATA
 logo = document.createElement("img");
 logo.setAttribute("src", "./logo.jpg");
 logo.setAttribute("height", "50");
 logo.setAttribute("width", "50");
 logo.style.margin = " 5px 95px";
 layout.appendChild(logo);

 // TATA CONSULTANCY SERVICES
 let heading = document.createElement("p");
 heading.innerHTML = "TATA CONSULTANCY SERVICES";
 heading.style.fontSize = "18px";
 heading.style.fontFamily = "calibri";
 heading.style.fontWeight = "bolder";
 heading.style.textAlign = "center";
 heading.style.margin = "0px 0px";
 layout.appendChild(heading);

 //   profile
 let image = document.createElement("img");
 image.setAttribute("src", "./Resume.jpg");
 image.style.border = "2px solid black";
 image.style.borderRadius = "75px";
 image.setAttribute("height", "120");
 image.style.margin = "5px 60px";
 layout.appendChild(image);

 //   Candiate_Name

 let profile = document.createElement("h2");
 profile.innerHTML = "VISHNU VARDHAN";
 profile.style.margin = "0px";
 profile.style.fontFamily = "calibri";
 profile.style.fontWeight = "bolder";
 profile.style.textAlign = "center";
 layout.appendChild(profile);

 //   Card No
 let card = document.createElement("pre");
 card.innerHTML = "      Card No     152700";
 card.style.fontFamily = "calibri";
 card.style.textAlign = "center";
 card.style.margin = "0px";
 layout.appendChild(card);

 // Associate No
 let Associate = document.createElement("pre");
 Associate.innerHTML = "Associate No  351527";
 Associate.style.fontFamily = "calibri";
 Associate.style.textAlign = "center";
 Associate.style.margin = "0px";
 layout.appendChild(Associate);

 // Blood Group
 let Group = document.createElement("pre");
 Group.innerHTML = "Blood Group      O+";
 Group.style.fontFamily = "calibri";
 Group.style.textAlign = "center";
 Group.style.margin = "0px";
 layout.appendChild(Group);

 // Tata Consultancy Services Ltd
 let TATA = document.createElement("pre");
 TATA.innerHTML = "Tata Consultancy Services Ltd";
 TATA.style.fontWeight = "bolder";
 TATA.style.fontFamily = "calibri";
 TATA.style.textAlign = "center";
 TATA.style.margin = "0px";
 layout.appendChild(TATA);

 // Address
 let Address = document.createElement("p");
 Address.innerHTML =
   "TCS Deccan Pardk, Hitech City, Hyderabad 500081, India";
 Address.style.fontFamily = "calibri";
 Address.style.textAlign = "center";
 Address.style.margin = "0px";
 layout.appendChild(Address);