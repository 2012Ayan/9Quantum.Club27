/* =========================================================
   CLASS BOYS HQ
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   THE 14 BOYS
========================================================= */

const boys = [

    {
        name: "Ayan",
        nickname: "Unbothered.Aura"
    },

    {
        name: "Mallahat",
        nickname: "Palla Gi Balla"
    },

    {
        name: "Azan",
        nickname: "Donda"
    },

    {
        name: "Tayyab",
        nickname: "Kela"
    },

    {
        name: "Sufi",
        nickname: "Roboboy"
    },

    {
        name: "Salahudin",
        nickname: "Salu"
    },

    {
        name: "Qadir",
        nickname: "Philospher Thinker"
    },

    {
        name: "Abdullah Mozam",
        nickname: "Moza"
    },

    {
        name: "Talha",
        nickname: "Rafale, Jameel Ashraf Ka Jahaz"
    },

    {
        name: "Ubaid",
        nickname: "Nerd"
    },

    {
        name: "Mohsin",
        nickname: "Paragon chapri"
    },

    {
        name: "Aarib",
        nickname: "Aarbi Ghori"
    },

    {
        name: "Huzaifa",
        nickname: "Shifo"
    },

    {
        name: "Saad",
        nickname: "The Big Giant Chocolate Human Eater"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const leaderboardBody =
    document.getElementById("leaderboardBody");

const leaderboard =
    document.getElementById("leaderboard");

const leaderboardButton =
    document.getElementById("leaderboardButton");

const leaderboardTopButton =
    document.getElementById("leaderboardTopButton");

const funFactButton =
    document.getElementById("funFactButton");

const homeButton =
    document.querySelector('.nav-item[href="#home"]');


/* =========================================================
   RENDER LEADERBOARD
========================================================= */

function renderLeaderboard() {

    if (!leaderboardBody) {

        console.error(
            "Leaderboard body was not found."
        );

        return;
    }


    leaderboardBody.innerHTML = "";


    boys.forEach((boy, index) => {

        const row =
            document.createElement("div");


        row.className =
            "leaderboard-row";


        row.innerHTML = `

            <div class="rank">
                ${index + 1}
            </div>

            <div class="boy-name">
                ${boy.name}
            </div>

            <div class="boy-vibe">
                ${boy.nickname}
            </div>

        `;


        leaderboardBody.appendChild(row);

    });


    console.log(
        `${boys.length} boys loaded into leaderboard.`
    );
}


/* =========================================================
   OPEN LEADERBOARD
========================================================= */

function openLeaderboard() {

    if (!leaderboard) {

        console.error(
            "Leaderboard section was not found."
        );

        return;
    }


    leaderboard.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    leaderboard.classList.add(
        "highlight"
    );


    setTimeout(() => {

        leaderboard.classList.remove(
            "highlight"
        );

    }, 1500);


    if (leaderboardButton) {

        leaderboardButton.classList.add(
            "active"
        );

    }


    if (homeButton) {

        homeButton.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   LEADERBOARD BUTTON
========================================================= */

if (leaderboardButton) {

    leaderboardButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openLeaderboard();

        }
    );

}


/* =========================================================
   VIEW ALL BUTTON
========================================================= */

if (leaderboardTopButton) {

    leaderboardTopButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openLeaderboard();

        }
    );

}


/* =========================================================
   HOME BUTTON
========================================================= */

if (homeButton) {

    homeButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


            homeButton.classList.add(
                "active"
            );


            if (leaderboardButton) {

                leaderboardButton.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   FUN FACTS
========================================================= */

const funFacts = [

    "Fun fact: Faris is Gay.",

    "Fun fact: Saad bache khata hai."

];


let currentFunFact = 0;


/* =========================================================
   SHOW FUN FACT
========================================================= */

function showFunFact() {

    const oldPopup =
        document.querySelector(
            ".fun-fact-popup"
        );


    if (oldPopup) {
        oldPopup.remove();
    }


    const popup =
        document.createElement("div");


    popup.className =
        "fun-fact-popup";


    popup.innerHTML = `

        <div class="fun-fact-card">

            <button
                class="fun-fact-close"
                type="button"
            >
                ×
            </button>


            <div class="fun-fact-icon">
                ✦
            </div>


            <div class="fun-fact-label">
                FUN FACT
            </div>


            <div class="fun-fact-text">
                ${funFacts[currentFunFact]}
            </div>

        </div>

    `;


    document.body.appendChild(
        popup
    );


    requestAnimationFrame(() => {

        popup.classList.add(
            "show"
        );

    });


    currentFunFact++;


    if (
        currentFunFact >=
        funFacts.length
    ) {

        currentFunFact = 0;

    }


    const closeButton =
        popup.querySelector(
            ".fun-fact-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                closeFunFact(popup);

            }
        );

    }


    popup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === popup
            ) {

                closeFunFact(popup);

            }

        }
    );

}


/* =========================================================
   CLOSE FUN FACT
========================================================= */

function closeFunFact(popup) {

    popup.classList.remove(
        "show"
    );


    setTimeout(() => {

        if (popup.parentNode) {

            popup.remove();

        }

    }, 200);

}


/* =========================================================
   FUN FACT BUTTON
========================================================= */

if (funFactButton) {

    funFactButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showFunFact();

        }
    );

}


/* =========================================================
   ESCAPE = CLOSE POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const popup =
                document.querySelector(
                    ".fun-fact-popup"
                );


            if (popup) {

                closeFunFact(
                    popup
                );

            }

        }

    }
);


/* =========================================================
   KEYBOARD SHORTCUT
   L = LEADERBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key.toLowerCase() === "l" &&
            !event.ctrlKey &&
            !event.altKey &&
            !event.metaKey
        ) {

            const active =
                document.activeElement;


            if (
                active &&
                (
                    active.tagName === "INPUT" ||
                    active.tagName === "TEXTAREA"
                )
            ) {

                return;

            }


            openLeaderboard();

        }

    }
);


/* =========================================================
   BUTTON PRESS EFFECT
========================================================= */

document
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "mousedown",
            () => {

                button.classList.add(
                    "pressed"
                );

            }
        );


        button.addEventListener(
            "mouseup",
            () => {

                button.classList.remove(
                    "pressed"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.classList.remove(
                    "pressed"
                );

            }
        );

    });


/* =========================================================
   START
========================================================= */

renderLeaderboard();


console.log(
    "================================"
);

console.log(
    "CLASS BOYS HQ LOADED"
);

console.log(
    "Class size: 14"
);

console.log(
    "Leaderboard: READY"
);

console.log(
    "Fun Facts: READY"
);

console.log(
    "================================"
);