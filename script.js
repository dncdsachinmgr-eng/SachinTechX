/* =========================================
   SACHINTECHX — MAIN JAVASCRIPT
========================================= */


/* =========================================
   WELCOME SCREEN
========================================= */

const welcomeMessage = "WELCOME IN SACHINTECHX";

const subtitleMessage =
    "Your journey into technology starts here.";


const welcomeText =
    document.getElementById("welcome-text");

const welcomeSubtitle =
    document.getElementById("welcome-subtitle");

const welcomeScreen =
    document.getElementById("welcome-screen");

const homePage =
    document.getElementById("home-page");


let welcomeIndex = 0;

let subtitleIndex = 0;


/* =========================================
   TYPE WELCOME MESSAGE
========================================= */

function typeWelcome() {

    if (welcomeIndex < welcomeMessage.length) {

        welcomeText.textContent +=
            welcomeMessage.charAt(welcomeIndex);

        welcomeIndex++;

        setTimeout(typeWelcome, 80);

    } else {

        setTimeout(typeSubtitle, 500);

    }

}


/* =========================================
   TYPE SUBTITLE
========================================= */

function typeSubtitle() {

    if (subtitleIndex < subtitleMessage.length) {

        welcomeSubtitle.textContent +=
            subtitleMessage.charAt(subtitleIndex);

        subtitleIndex++;

        setTimeout(typeSubtitle, 45);

    } else {

        setTimeout(showHome, 1800);

    }

}


/* =========================================
   SHOW HOME PAGE
========================================= */

function showHome() {

    welcomeScreen.classList.add("fade-out");


    setTimeout(function () {

        welcomeScreen.style.display = "none";

        homePage.classList.add("show");

        startMatrix();

    }, 1000);

}


/* =========================================
   EXPLORE BUTTON
========================================= */

function openExplore() {

    window.location.href = "explore.html";

}


/* =========================================
   MATRIX ANIMATION
========================================= */

function startMatrix() {

    const canvas =
        document.getElementById("matrix");

    if (!canvas) return;


    const ctx =
        canvas.getContext("2d");


    let width =
        window.innerWidth;

    let height =
        window.innerHeight;


    canvas.width = width;

    canvas.height = height;


    const characters =
        "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


    const fontSize = 16;


    let columns =
        Math.floor(width / fontSize);


    let drops =
        new Array(columns).fill(1);


    function drawMatrix() {

        ctx.fillStyle =
            "rgba(0, 0, 0, 0.08)";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.fillStyle =
            "#00ff88";

        ctx.font =
            fontSize + "px monospace";


        for (
            let i = 0;
            i < drops.length;
            i++
        ) {

            const character =
                characters.charAt(
                    Math.floor(
                        Math.random() *
                        characters.length
                    )
                );


            ctx.fillText(
                character,
                i * fontSize,
                drops[i] * fontSize
            );


            if (
                drops[i] * fontSize >
                canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }


            drops[i]++;

        }

    }


    setInterval(
        drawMatrix,
        45
    );


    /* =====================================
       RESIZE MATRIX
    ===================================== */

    window.addEventListener(
        "resize",
        function () {

            width =
                window.innerWidth;

            height =
                window.innerHeight;


            canvas.width =
                width;

            canvas.height =
                height;


            columns =
                Math.floor(
                    width / fontSize
                );


            drops =
                new Array(columns)
                    .fill(1);

        }
    );

}


/* =========================================
   WEBSITE START
========================================= */

window.addEventListener(
    "load",
    function () {

        setTimeout(
            typeWelcome,
            700
        );

    }
);
