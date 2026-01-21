let sideMenu = document.querySelector(".sideMenu")
let sideContenair = document.querySelector(".sideContenaire")
let burgerIcon = document.querySelector(".burgerIcon")
let X = document.querySelector(".X")


burgerIcon.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hi")
    sideContenair.style.display = "flex"
    sideContenair.style.width = "100vw"
    sideContenair.style.height = "100vh"
    sideContenair.style.top = "0"
    sideContenair.style.left = "0"
    sideContenair.style.padding ="15vh 2vw"
    sideContenair.style.right = "2vw"
    sideContenair.style.position = "fixed"
    sideContenair.style.backgroundColor = "#26242ba2";
    sideMenu.style.gap = "20px"
    sideMenu.style.borderRadius = "5px"
    sideMenu.style.padding = "20px 20px "
    sideMenu.style.display = "flex" 
    sideMenu.style.flexDirection = "column" ;
    sideMenu.style.width    ="100%"
    sideMenu.style.height = "100%"
    sideMenu.style.overflowY ="auto"
    sideMenu.style.backgroundColor ="white"
    X.style.display = "flex"
}
)

X.addEventListener("click", (e) =>
{
    sideContenair.style.display = "none"
    document.body.classList.add("overflow-hidden");

})

// *hero vedio 
let watch = document.querySelector(".watch")
let videoModal = document.querySelector(".videoModal")
let play = document.querySelector(".play")

watch.addEventListener("click", (e)=>
{
    videoModal.style.display = "flex";
    e.preventDefault()
})

play.addEventListener("click", (e)=>
{
    videoModal.style.display = "flex";
    e.preventDefault()
})

videoModal.addEventListener("click", ()=>
{
    videoModal.style.display = "none";
})

// *menu

let starters = document.querySelector(".starters");
let breake = document.querySelector(".breake");
let lunch = document.querySelector(".lunch");
let dinner = document.querySelector(".dinner");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");

option1.addEventListener("click", (e)=>
{
    e.preventDefault()
    console.log("hi");
    breake.style.display = "none"
    lunch.style.display = "none"
    dinner.style.display = "none"
    starters.style.display ="block"

    option1.style.borderBottom = "1px solid #ce1212"
    option2.style.borderBottom = "1px solid gray"
    option3.style.borderBottom = "1px solid gray"
    option4.style.borderBottom = "1px solid gray"
})
option2.addEventListener("click", (e)=>
{
    e.preventDefault()
    console.log("hi");
    starters.style.display = "none"
    lunch.style.display = "none"
    dinner.style.display = "none"
    breake.style.display ="block"
    option1.style.borderBottom = "1px solid gray"
    option2.style.borderBottom = "1px solid #ce1212"
    option3.style.borderBottom = "1px solid gray"
    option4.style.borderBottom = "1px solid gray"
})
option3.addEventListener("click", (e)=>
{
    e.preventDefault()
    console.log("hi");
    breake.style.display = "none"
    starters.style.display = "none"
    dinner.style.display = "none"
    lunch.style.display ="block"
    option1.style.borderBottom = "1px solid gray"
    option2.style.borderBottom = "1px solid gray"
    option3.style.borderBottom = "1px solid #ce1212"
    option4.style.borderBottom = "1px solid gray"
})
option4.addEventListener("click", (e)=>
{
    e.preventDefault()
    console.log("hi");
    breake.style.display = "none"
    lunch.style.display = "none"
    starters.style.display = "none"
    dinner.style.display ="block"
    option1.style.borderBottom = "1px solid gray"
    option2.style.borderBottom = "1px solid gray"
    option3.style.borderBottom = "1px solid gray"
    option4.style.borderBottom = "1px solid #ce1212"
})

// *book modal

let book = document.querySelector(".bookk")
let bookContainer = book.querySelector(".bookContainer");
let input = book.querySelectorAll(".in");
let smiya = book.querySelector("#Cname");
let email = book.querySelector("#Cemail");
let number = book.querySelector("#Cnumber");
let date = book.querySelector("#Cdate");
let time = book.querySelector("#Ctime");
let people = book.querySelector("#Cpeople");
let subBtn = book.querySelector("#submit");
let message = book.querySelector("#message");
let canlBtn = book.querySelector("#cancel");
let active = document.querySelector(".active")

class Resto
{
    static book = []
    constructor(name,email,number,date,time,people)
    {
        this.name = name
        this.email = email
        this.number = number
        this.date = date
        this.time = time
        this.people = people
        Resto.book.push(this)
    }
}

let ayoub = new Resto("ayoub ", "cnanc", "34567","scdqw","20:03","35")

subBtn.addEventListener("click", (e) =>
{
    // console.log("hi");
    if(smiya.value == "" || email.value == "" || number.value == "" || date.value == "" || time.value == "" || people.value == ""  )
    {
        console.log("hna");
        message.setAttribute("class", "text-danger")
        message.textContent = "fill all feilds"
        return
    }

    console.table(Resto.book);
    console.log(time.value);
    console.log(Resto.book.findIndex(e => e.time == time.value ));
    if(Resto.book.findIndex(e => e.time == time.value) != -1)
    {
        console.log("hi");
        message.setAttribute("class", "text-danger")
        message.textContent = "cant book at this time alredy taken"
    }
    else
    {
        new Resto(smiya.value,email.value,number.value,date.value,time.value,people.value);
        message.setAttribute("class", "text-success")
        message.textContent = "booked successfully"
    }




})

active.addEventListener("click",  ()=>
{
    book.style.display ="flex"
})

canlBtn.addEventListener("click" , (e)=>{
    book.style.display ="none"
})




// *testimonials

const caroussel = document.querySelectorAll(".caroussel");
let track = document.querySelectorAll(".track")
let next = document.querySelectorAll(".next")
let prev = document.querySelectorAll(".prev")
let doted = document.querySelectorAll(".doted")

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
        let slide = track.querySelectorAll(".slide");
          // this is an index of the current slide wich will be used later by other functions
        caroussel[i].cont = 1 
        if(slide.length > 0)
        {
            track.append(slide[0].cloneNode(true));
            track.prepend(slide[slide.length -1].cloneNode(true));
            track.style.transform = `translateX(-${slide[0].clientWidth}px)`

            // if carousel has doted class , add radio buttons to the carousel
            if(caroussel[i].classList.contains("doted"))
            {
                let j = 0
                while(j < slide.length)
                {
                    let radio = document.createElement("input")
                    radio.setAttribute("type","radio")
                    radio.setAttribute("data-radio",`car-radio${i}`)
                    radio.setAttribute("data-radio",`car-radio${i}`)
                    radio.setAttribute("name",`radio${i}`)
                    caroussel[i].append(radio)
                    j++;
                }
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






