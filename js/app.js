// // alert("app.js");
// //1. get the element with id=my_h1
// const my_h1=document.getElementById("my_h1");//<h1 id="my_h1">..</h1>
// //2. create element of type h2
// const h2=document.createElement("h2");
// h2.innerText="Dynamically added ";
// //3. append the h2 element after the my_h1
// my_h1.appendChild(h2);

// function changeColor(){
//     let color=document.getElementById("color").value;
//     console.log(color);
//     h2.style.color=color;    
// }


const lb_1 = document.getElementById("ul");

function addhobby(){
    let hobbies = document.getElementById("hobby").value;
    let textbox1 = document.createElement("li");
    textbox1.appendChild(document.createTextNode(hobbies));
    lb_1.appendChild(textbox1);
}