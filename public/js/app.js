const modal = document.querySelector(".modal")
const btn = document.querySelector(".modalTriger1")
const btn2 = document.querySelector(".modalTriger2")
const h1 = document.querySelector("h1")

btn.addEventListener( "click" , (e)=> {
e.preventDefault()
    modal.style.top = "0vh"
    modal.style.display = "flex"
    // modal.style.transform = "all 0.4s ease" 
})

btn2.addEventListener( "click" , (e)=> {
e.preventDefault()
    modal.style.top = "0vh"
    modal.style.display = "flex"
    // modal.style.transform = "all 0.4s ease" 
})

modal.onclick = () =>
{
    modal.style.top = "-150vh"
}


// carousel

const caroussel = document.querySelectorAll(".caroussel");
let track = document.querySelectorAll(".track")
let next = document.querySelectorAll(".next")
let prev = document.querySelectorAll(".prev")

// appending and prepending a copy of the first and last image

const init = ()=>
{
  // make sure that the same number of caroussels matches the number of tracks
  // if false throw a syntax error 
  if(caroussel.length != track.length)
    throw new SyntaxError("the number of carousels and their tracks does not match")

  // go through each caroussel and get there tracks and append a copy of the fisrt slide
  // and prepend a copy of the last slide and translate the track to the index 1 slide 
  // aka the first original slide
  let i = 0;
  while(caroussel[i])
  {
    let track = caroussel[i].querySelector(".track");
    if(track)
    {
      let slide = track.querySelectorAll(".slide");
      console.log(slide)
        // this is an index of the current slide wich will be used later by other functions
      caroussel[i].cont = 1 
      if(slide.length > 0)
      {
        track.append(slide[0].cloneNode(true));
        track.prepend(slide[slide.length -1].cloneNode(true));
        track.style.transform = `translateX(-${slide[0].clientWidth}px)`
      }
    }
    
    i++;
  }
}

// function for advancing forward to the next slide
const forward = (e) =>
{
  // each button should have a "data-caro" attribute wich should contain the id of the target caroussel
  if(e.currentTarget.hasAttribute("data-caro"))
    {
      // store the caroussel that we got bassed on the id
      let targetCarousel = document.querySelector(`#${e.currentTarget.getAttribute("data-caro")}`)
      // get the track of that caroussel
      let targetTrack = targetCarousel.children
      // if the current slide conter is below or equal to our slides number advance to the next slide
      if(targetCarousel.cont <= targetTrack[0].children.length-2) 
      {
        // this checks if have 
        if(targetTrack[0])
        {    
          targetCarousel.cont++;
          targetTrack[0].style.transition = "transform 0.4s ease"
          targetTrack[0].style.transform = `translateX(-${targetCarousel.cont * targetTrack[0].children[0].clientWidth}px)`
        }
      }
          console.log(targetCarousel.cont);


      targetTrack[0].addEventListener("transitionend" ,() =>
          {
            if(targetCarousel.cont >   targetTrack[0].children.length-2)
            {
              console.log("hhi");
              targetCarousel.cont = 1
              targetTrack[0].style.transition = "none"
              console.log(targetTrack[0].children[0].clientWidth)
              targetTrack[0].style.transform = `translateX(-${targetTrack[0].children[0].clientWidth}px)`
              return
            }
          })
    }
}

const previous = (e) =>
{
  console.log("prev");
  
  console.log(e.currentTarget.getAttribute("data-caro"));
  
  if(e.currentTarget.hasAttribute("data-caro"))
  {

    let targetCarousel = document.querySelector(`#${e.currentTarget.getAttribute("data-caro")}`)
    
    let targetTrack = targetCarousel.children
    console.log(targetTrack[0].children.length);

    if(targetCarousel.cont > 0) 
    {
      if(targetTrack[0] && targetTrack[0].children[0])
        {
          
          targetCarousel.cont--;
          targetTrack[0].style.transition = "transform 0.4s ease"
          targetTrack[0].style.transform = `translateX(${-targetCarousel.cont * targetTrack[0].children[0].clientWidth}px)`
        }
      }
      console.log(targetCarousel.cont);
    

    targetTrack[0].addEventListener("transitionend" ,() =>
        {
          if(targetCarousel.cont <= 0)
        { 
          targetCarousel.cont = targetTrack[0].children.length-2
          targetTrack[0].style.transition = "none"
          targetTrack[0].style.transform = `translateX(-${(targetTrack[0].children.length-2) * targetTrack[0].children[0].clientWidth}px)`
          return
        }
        })

  }
}

init()


i = 0

while(next[i])
{
  next[i].addEventListener("click", forward)
  i++
}

i= 0

while(prev[i])
{
  prev[i].addEventListener("click", previous)
  i++
}

// form
let formBtn = document.querySelector(".formBtn")
let form = document.querySelector(".form")
let client = document.querySelector("#client")
let meals = document.querySelector(".meals")
let submit = document.querySelector("#submit")
let cancel = document.querySelector("#cancel")
let time = document.querySelector("#time")
let out = document.querySelector(".out")


class Book  {
    static books = [];  
    constructor(name,meal,time)
    {
        this.meal = meal
        this.name = name
        this.time = time
        Book.books.push(this)
    }
    
}

let tmp


formBtn.addEventListener( "click" , (e)=> {
e.preventDefault()
    form.style.top = "0vh"
    form.style.display = "flex"
    modal.style.transform = "all 0.4s ease" 
})

cancel.onclick = () =>
{
    form.style.top = "-150vh"
}



submit.onclick = () =>
{
console.log(Book.books.findIndex(e => e.time == time.value ));

    if(Book.books.findIndex(e => e.time == time.value ) != -1)
    {
        out.style.color = "red"
        
        out.textContent = "cant book at this time"
    }
    else
    {
        let user = new Book(client.value, meals.value,time.value)
        out.style.color = "green"
        out.textContent = "booked"
        console.table(Book.books)
    }
    // Book.books.findIndex(e => e.name = "ayoub" )
}
