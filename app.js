window.addEventListener("scroll",function(){
    const nav = this.document.getElementById("nav");

    if(this.window.scrollY){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky");
    }
    
})


const list = document.querySelectorAll("header nav .row ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",() => {
    let current = "";
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - (sectionHeight)/3)){
            current = section.getAttribute("id");
        }
    })

    list.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(current)){
            a.classList.add("active");
        }
        
    })

})



//===============//
// Counter Section//
// ===============//

  // youtube section
  let counter = 0 ;
  let id = null; 
  id = setInterval(youtube , 1);
  function youtube(){
      counter++;
        document.getElementById("Subscribers").innerHTML = counter + "k";
      if(counter == 700){
          clearInterval(id);
          id = null;
      }
  }

  // instragram section
  let counter1 = 0;
  let id1 = null;
  id1 = setInterval(instragram , 30)

  function instragram(){
      counter1 ++;
        document.getElementById("instagram").innerHTML =  counter1 + "k";
      if(counter1 == 100){
          clearInterval(id1);
          id1 = null;
      }
  }

  // drible Secttion 
  let counter2 = 0;
  let id2 = null;
  id2 = setInterval(drible , 30);

  function drible(){
      counter2++;
        document.getElementById("drib").innerHTML = counter2 + "k";
      if(counter2 == 100){
          clearInterval(id2);
          id2 = null;
      }
  }



