const dreapta = document.querySelector(".sageata-dreapta-par");
const stanga = document.querySelector(".sageata-stanga-par");
const allHair = document.querySelectorAll(".imagine-par");

const allEyes = document.querySelectorAll(".imagine-ochi");
const dreaptaOchi = document.querySelector(".sageata-dreapta-ochi");
const stangaOchi = document.querySelector(".sageata-stanga-ochi");

const allNose = document.querySelectorAll(".imagine-nas");
const dreaptaNas = document.querySelector(".sageata-dreapta-nas");
const stangaNas = document.querySelector(".sageata-stanga-nas");

const allMouth = document.querySelectorAll(".imagine-gura");
const dreaptaGura = document.querySelector(".sageata-dreapta-gura");
const stangaGura = document.querySelector(".sageata-stanga-gura");
let i=0;

const FunctionDreapta = (list) =>{
        i++;
        if(i === list.length){
            i=0;
            list[i].classList.remove("ascunde");
            list[i].classList.add("arata")
            list[list.length - 1].classList.remove("arata");
            list[list.length - 1].classList.add("ascunde")
        }else{
            list[i-1].classList.remove("arata");
            list[i-1].classList.add("ascunde");
            list[i].classList.remove("ascunde");
            list[i].classList.add("arata");
        }
    
}
const FunctionStanga = (list) =>{
    console.log(i)
    i--;
    if(i === -1){
        i=list.length -1;
        list[i].classList.remove("ascunde");
        list[i].classList.add("arata");
        list[0].classList.remove("arata");
        list[0].classList.add("ascunde");
    }else if(i === list.length - 1){
        list[0].classList.remove("arata");
        list[0].classList.add("ascunde");
        list[i].classList.remove("ascunde");
        list[i].classList.add("arata");
    }else{
        list[i+1].classList.remove("arata");
        list[i+1].classList.add("ascunde");
        list[i].classList.remove("ascunde");
        list[i].classList.add("arata");
    }
    console.log("stanga>>>", i);
}
dreapta.addEventListener("click", () => {
    FunctionDreapta(allHair);
})

stanga.addEventListener("click", () => {
    FunctionStanga(allHair);
})

dreaptaOchi.addEventListener("click", () => {
    FunctionDreapta(allEyes);
})

stangaOchi.addEventListener("click", () => {
    FunctionStanga(allEyes);
})

dreaptaNas.addEventListener("click", () =>{
    FunctionDreapta(allNose);
})
stangaNas.addEventListener("click", () =>{
    FunctionStanga(allNose);
})

dreaptaGura.addEventListener("click", () =>{
    FunctionDreapta(allMouth);
})
stangaGura.addEventListener("click", () =>{
    FunctionStanga(allMouth);
})
// console.log("1" === 1);