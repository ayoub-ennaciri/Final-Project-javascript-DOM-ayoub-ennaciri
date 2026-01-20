let sideMenu = document.querySelector(".sideMenu")
let sideContenair = document.querySelector("#sideContenair")
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









