/* =========================================
   SACHINTECHX
   MAIN JAVASCRIPT
========================================= */


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
        Math.floor(
            width / fontSize
        );


    let drops =
        new Array(columns).fill(1);


    function draw() {

        ctx.fillStyle =
            "rgba(0,0,0,0.08)";

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
        draw,
        45
    );


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
   WELCOME SCREEN
========================================= */

function startWelcome() {

    const welcomeScreen =
        document.getElementById(
            "welcome-screen"
        );


    const welcomeText =
        document.getElementById(
            "welcome-text"
        );


    const subtitle =
        document.getElementById(
            "welcome-subtitle"
        );


    const homePage =
        document.getElementById(
            "home-page"
        );


    if (
        !welcomeScreen ||
        !welcomeText ||
        !subtitle ||
        !homePage
    ) {

        return;

    }


    const title =
        "WELCOME IN SACHINTECHX";


    const sub =
        "Your journey into technology starts here.";


    let i = 0;

    let j = 0;


    function typeTitle() {

        if (i < title.length) {

            welcomeText.textContent +=
                title.charAt(i);

            i++;

            setTimeout(
                typeTitle,
                75
            );

        } else {

            setTimeout(
                typeSubtitle,
                500
            );

        }

    }


    function typeSubtitle() {

        if (j < sub.length) {

            subtitle.textContent +=
                sub.charAt(j);

            j++;

            setTimeout(
                typeSubtitle,
                40
            );

        } else {

            setTimeout(
                showHome,
                1600
            );

        }

    }


    function showHome() {

        welcomeScreen.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                welcomeScreen.style.display =
                    "none";

                homePage.classList.add(
                    "show"
                );

            },
            1000
        );

    }


    setTimeout(
        typeTitle,
        700
    );

}


/* =========================================
   AI CHAT
========================================= */

function sendMessage() {

    const input =
        document.getElementById(
            "chat-input"
        );


    const messages =
        document.getElementById(
            "chat-messages"
        );


    if (
        !input ||
        !messages
    ) {

        return;

    }


    const text =
        input.value.trim();


    if (!text) return;


    /* USER MESSAGE */

    const userMessage =
        document.createElement(
            "div"
        );


    userMessage.className =
        "message user-message";


    userMessage.innerHTML = `
        <span class="message-label">
            YOU
        </span>

        <p>
            ${escapeHTML(text)}
        </p>
    `;


    messages.appendChild(
        userMessage
    );


    input.value = "";


    messages.scrollTop =
        messages.scrollHeight;


    /* DEMO AI RESPONSE */

    setTimeout(
        function () {

            const aiMessage =
                document.createElement(
                    "div"
                );


            aiMessage.className =
                "message ai-message";


            aiMessage.innerHTML = `
                <span class="message-label">
                    AI
                </span>

                <p>
                    I'm ready to help.
                    This AI interface is currently
                    running in demo mode.
                </p>
            `;


            messages.appendChild(
                aiMessage
            );


            messages.scrollTop =
                messages.scrollHeight;

        },
        700
    );

}


/* =========================================
   SECURITY
========================================= */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================
   ENTER KEY FOR CHAT
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            document.activeElement &&
            document.activeElement.id ===
            "chat-input"
        ) {

            sendMessage();

        }

    }
);


/* =========================================
   START
========================================= */

window.addEventListener(
    "load",
    function () {

        startMatrix();

        startWelcome();

    }
);
