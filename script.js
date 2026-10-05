document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       BRANCH PAGE DIGITAL DOOR
    ========================= */

    const branchDoor =
        document.querySelector(".branch-door");


    if (branchDoor) {

        setTimeout(function () {

            branchDoor.classList.add("open");

        }, 300);

    }



    /* =========================
       AI TOOLS SEARCH
    ========================= */

    const searchInput =
        document.getElementById("toolSearch");

    const categories =
        document.querySelectorAll(".category");

    const toolCards =
        document.querySelectorAll(".tool-box");

    const noResults =
        document.getElementById("noResults");


    function filterTools() {

        if (!searchInput) {
            return;
        }


        const searchText =
            searchInput.value
            .toLowerCase()
            .trim();


        const activeCategory =
            document
            .querySelector(".category.active")
            ?.dataset.category || "all";


        let visibleTools = 0;


        toolCards.forEach(function (card) {

            const name =
                card.dataset.name
                .toLowerCase();

            const category =
                card.dataset.category;


            const matchesSearch =
                name.includes(searchText);


            const matchesCategory =
                activeCategory === "all" ||
                category === activeCategory;


            if (
                matchesSearch &&
                matchesCategory
            ) {

                card.style.display =
                    "block";

                visibleTools++;

            } else {

                card.style.display =
                    "none";

            }

        });


        if (noResults) {

            if (visibleTools === 0) {

                noResults.style.display =
                    "block";

            } else {

                noResults.style.display =
                    "none";

            }

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTools
        );

    }


    categories.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                categories.forEach(
                    function (item) {

                        item.classList
                            .remove("active");

                    }
                );


                button.classList
                    .add("active");


                filterTools();

            }
        );

    });



    /* =========================
       MATRIX RAIN
    ========================= */

    const canvas =
        document.getElementById("matrix");


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        const characters =
            "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        const fontSize = 16;


        let columns;

        let drops;


        function resizeMatrix() {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;


            columns =
                Math.ceil(
                    canvas.width /
                    fontSize
                );


            drops =
                Array(columns).fill(1);

        }


        resizeMatrix();


        window.addEventListener(
            "resize",
            resizeMatrix
        );


        function drawMatrix() {

            ctx.fillStyle =
                "rgba(2,4,3,0.08)";


            ctx.fillRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            ctx.fillStyle =
                "#00ff88";


            ctx.font =
                fontSize +
                "px monospace";


            for (
                let i = 0;
                i < columns;
                i++
            ) {

                const text =
                    characters[
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    ];


                ctx.fillText(
                    text,
                    i * fontSize,
                    drops[i] * fontSize
                );


                if (
                    drops[i] *
                    fontSize >
                    canvas.height
                    &&
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

    }

});