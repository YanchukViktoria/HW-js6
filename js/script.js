/* 
*Task 1*/
let container = document.getElementById("marquee-container");
let n = 10;
while (n > 0) {
    let p = document.createElement("p");
    p.classList.add("marquee");
    p.textContent = n;
    container.appendChild(p);
    n--
}

/* 
*task 2 */
let containerSec = document.getElementById("marquee-containerSec");
for(let i = 1; i<21; i++)
    if (i % 2 === 0) {
        let psec = document.createElement("p");
        psec.classList.add("marquee");
        psec.textContent = i;
        containerSec.appendChild(psec);
    };


/* 
*Task 3 */
let containerThird = document.getElementById("marquee-containerThird");
for (let i = 1; i < 11; i++){
    let pthird = document.createElement("p");
    pthird.classList.add("marquee");
    pthird.textContent = i*7;
    containerThird.appendChild(pthird);
};

/* 
*Task 4 */

let arr = [1, 2, 3, 4, 5];
let i = 0;
let containerTForth = document.getElementById("marquee-containerForth");
while (i < arr.length) {
    let pfourth = document.createElement("p");
    pfourth.classList.add("marquee");
    pfourth.textContent = arr[i];
    containerTForth.appendChild(pfourth);
    i++
}

/* 
*Task 5 */

let arrsec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let containerTFifth = document.getElementById("marquee-containerFifth");
for (let i = 1; i < arrsec.length; i++){
    if (i != 7) {
        let pfifth = document.createElement("p");
        pfifth.classList.add("marquee");
        pfifth.textContent = i;
        containerTFifth.appendChild(pfifth);
    }else {
        break;
    }
}

/* 
*Task 6 */
let containerTSixth = document.getElementById("marquee-containerSixth");
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let input = document.querySelector("input").value;

    for (let i = 1; i < input; i++){
        let psixth = document.createElement("p");
        psixth.classList.add("marquee");
        psixth.textContent = i;
        containerTSixth.appendChild(psixth);
    }
})

/* 
*Task 7 */

let t = 1;
let containerTSeventh = document.getElementById("marquee-containerSeventh");
while (t <= 21) {
    if (t % 3 === 0) {
        t++;
        continue; 
    }
    let pseventh = document.createElement("p");
    pseventh.classList.add("marquee");
    pseventh.textContent = t;
    containerTSeventh.appendChild(pseventh);
    t++; 
}