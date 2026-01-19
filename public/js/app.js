const modal = document.querySelector(".modal")
const btn = document.querySelector(".modalTriger1")
const h1 = document.querySelector("h1")

btn.addEventListener( "click" , (e)=> {
e.preventDefault()
    modal.style.top = "0vh"
    modal.style.display = "flex"
    // modal.style.transform = "all 0.4s ease" 
})


modal.onclick = () =>
{
    modal.style.top = "-150vh"
}