var acc = document.getElementsByClassName("accordion");
var i;
var acc2 = document.getElementsByClassName("accordion2");
var j;

for (i = 0; i < acc.length; i++) {
    // console.log(acc[i]);
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
};

// for (j = 0; j < acc2.length; j++){
//     acc[j].onclick = function(){
//         for (i = 0; i < acc.length; i++) {
//             // console.log(acc[i]);
//             // acc[i].onclick = function(){
//             this.classList.toggle("active");
//             this.nextElementSibling.classList.toggle("show");
//             // }
//         };
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }

// for (i = 0, j=0; i < acc.length && j < acc2.length; i++, j++) {
//     // console.log(acc[i]);
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// };


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}