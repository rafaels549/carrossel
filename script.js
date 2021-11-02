 var a= document.querySelector("#items")
 a.addEventListener("wheel", event =>
 {
     if(event.detaY > 0)
     {
          event.target.scrollBy(300, 0)
     }
     else{
        event.target.scrollBy(-300,0)
     }
 })