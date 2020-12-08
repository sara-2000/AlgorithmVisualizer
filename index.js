const newArray = document.querySelector("#new");
const bubbleSortButton = document.querySelector("#bubbleSort");
const section = document.querySelector("section");

let array = [];
let barsPresent = false;

newArray.onclick = makeBars;
bubbleSortButton.onclick = bubbleSort;

function makeBars() {
    section.innerHTML = "";
    let div = document.createElement("div");
    section.append(div);
    array = [];
    for (let i = 0; i < 200; i++) {
        array.push(generateRandomNumber(10, 210));
        let internalDiv = document.createElement("div");
        div.append(internalDiv);
        internalDiv.style.height = `${3 * array[i]}px`;
        internalDiv.classList.add("arrayBars");
    }
    barsPresent = true;
}

function bubbleSort() {
    if (!barsPresent)
        makeBars();
    barsPresent = false;
    const animations = bubbleSortHelper();
    const arrayBars = document.querySelectorAll(".arrayBars");
    setTimeout(() => {
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 !== 2 && i % 4 !== 3);
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? "red" : "teal";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 0.1);
            } else {
                const [barIdx, newHeight] = animations[i];
                console.log(arrayBars[barIdx]);
                const barStyle = arrayBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = `${3 * newHeight}px`;
                }, i * 0.1);
            }
        }
    }, 0.3);
}

const bubbleSortHelper = () => {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            animations.push([i, j]);
            animations.push([i, j]);
            if (array[i] > array[j]) {
                animations.push([i, array[j]]);
                animations.push([j, array[i]]);
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            } else {
                animations.push([i, array[i]]);
                animations.push([j, array[j]]);
            }
        }
    }
    return animations;
}



function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function checkSorting() {
//     jarray.sort(function (a, b) { return a - b });
//     if (array.length !== jarray.length) { console.log("false"); }
//     for (let k = 0; k < 200; k++) {
//         if (array[k] !== jarray[k]) { console.log("false"); return; }
//     }

//     console.log("true");
//     return;
// }
