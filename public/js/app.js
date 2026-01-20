let sideMenu = document.querySelector(".sideMenu")
let sideContenair = document.querySelector("#sideContenair")
let burgerIcon = document.querySelector(".burgerIcon")
let X = document.querySelector(".X")


burgerIcon.addEventListener("click", (e) => {
    console.log("hi")
    sideContenair.style.display = "flex"
    sideContenair.style.width = "100vw"
    sideContenair.style.height = "100vh"
    sideContenair.style.top = "0"
    sideContenair.style.left = "0"
    sideContenair.style.padding ="15vh 2vw"
    sideContenair.style.right = "2vw"
    sideContenair.style.position = "absolute"
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
})