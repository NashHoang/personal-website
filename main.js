const poof = document.querySelectorAll("div")[2];
console.log(poof);
let dropButton = document.querySelector("button");
let box = document.querySelectorAll("div")[4];
console.log(box);
const flowers = document.getElementById("hubBar"); 
console.log(flowers);

dropButton.onclick = function() {
    document.getElementById("hubBar").classList.toggle("show");
    poof.style.display = 'none';
    box.style.height = '600px';
    flowers.style.width = '500px';
    dropButton.style.display = "none";
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbut')) {
      var dropdowns = document.getElementsByClassName("content");
      var i;
      poof.style.display = 'flex';
      dropButton.style.display = 'flex';
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    

  }






















