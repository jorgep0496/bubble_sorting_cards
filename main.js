var arrCards = [];

let drawButton = document.querySelector("#drawButton");
let sortButton = document.querySelector("#sortButton");

const drawCard = (number, symbol, color) => {
    var mainCard = document.createElement("div");
    mainCard.classList.add("card");

    if (number == 1) {
        let ace = "A";
        mainCard.innerHTML = `
        <div class="row">
            <div class="col-md cardHeader ml-2 ${color}">
                <span>${symbol}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md cardBody text-center mb-2 ${color}">
                <span>${ace}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md cardFooter mr-2 ${color}">
                <span>${symbol}</span>
            </div>
        </div>
    `;
    } else if (number == 13) {
        let king = "K";
        mainCard.innerHTML = `
        <div class="row">
                <div class="col-md cardHeader ml-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardBody text-center mb-2 ${color}">
                    <span>${king}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardFooter mr-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
        `;
    } else if (number == 12) {
        let queen = "Q";
        mainCard.innerHTML = `
        <div class="row">
                <div class="col-md cardHeader ml-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardBody text-center mb-2 ${color}">
                    <span>${queen}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardFooter mr-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
        `;
    } else if (number == 11) {
        let prince = "J";
        mainCard.innerHTML = `
        <div class="row">
                <div class="col-md cardHeader ml-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardBody text-center mb-2 ${color}">
                    <span>${prince}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md cardFooter mr-2 ${color}">
                    <span>${symbol}</span>
                </div>
            </div>
        `;
    } else {
        mainCard.innerHTML = `
        <div class="row">
            <div class="col-md cardHeader ml-2 ${color}">
                <span>${symbol}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md cardBody text-center mb-2 ${color}">
                <span>${number}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md cardFooter mr-2 ${color}">
                <span>${symbol}</span>
            </div>
        </div>
    `;
    }
    return mainCard;
}
let cardContainer = document.querySelector(".cardContainer");

drawButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    let userNumber = document.querySelector("#userNumber").value;

    for (let i = 1; i <= userNumber; i++) {
        let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
        let suit = ["♠", "♣", "♥", "♦"];
        let randomCard = Math.floor(Math.random() * cardValue.length);
        let randomSuit = Math.floor(Math.random() * suit.length);

        if (randomSuit == 2 || randomSuit == 3) {
            suitColor = "red";
        } else {
            suitColor = "black";
        }
        cardContainer.appendChild(drawCard(cardValue[randomCard], suit[randomSuit], suitColor));
        arrCards.push({ "number": cardValue[randomCard], "symbol": suit[randomSuit], "color": suitColor });
    }

});

let cardContainer2 = document.querySelector(".cardContainer2");

sortButton.addEventListener("click", () => {
    let newArrCards = arrCards.slice();
    bubbleSort(newArrCards);
});

const bubbleSort = (arr) => {
    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].number > arr[index + 1].number) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                for (let j = 0; j < arr.length; j++) {
                    let cardContainer2 = document.querySelector(".cardContainer2");
                    cardContainer2.appendChild(drawCard(arr[j].number, arr[j].symbol, arr[j].color));
                    if (j == arr.length - 1) {
                        let br = document.createElement("br");
                        cardContainer2.appendChild(br);
                    }
                }
            }
            index++;
        }
        wall--;
    }
    return arr;
};