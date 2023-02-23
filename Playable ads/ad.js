window.onload = function (event) {


    let planet = document.querySelector(".planet")
    let pointer = document.querySelector(".pointer")
    let tap = document.querySelector(".tap")
    let explosions = document.querySelector("#explo")
    let explosions2 = document.querySelector("#explo-2")

    let stageThree = document.querySelector(".ad-2")
    let stageTwo = document.querySelector(".ad-3")
    
    planet.addEventListener("click", explode)
    tap.addEventListener("click", explode)

    function explode() {
        pointer.style.display = "none"
        tap.style.display = "none"
        planet.style.display= "none"

        explosions.classList.toggle('active-explosion')
        explosions2.classList.toggle('active-explosion')
        setTimeout(() => {
            explosions.classList.remove('active-explosion')
            explosions2.classList.remove('active-explosion')
        }, 300)

        setTimeout( function secondexplosion() {
                    planet.style.display = "block"
                    planet.style.top = "600px"
                    planet.style.right = "350px"
            
                    explosions.style.top = "520px"
                    explosions.style.right = "260px"
            
                    explosions2.style.top = "460px"
                    explosions2.style.right = "200px"
        }, 2000);

        lastStage()
    }


    function lastStage() {
        setTimeout(() => {
            stageThree.style.display = "block"
        }, 5000);
    }


}
