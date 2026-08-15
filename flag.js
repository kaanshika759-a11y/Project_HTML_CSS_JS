// Stars container
const stars = document.getElementById("stars");


// 90 stars create karna
for (let i = 0; i < 90; i++) {

    const star = document.createElement("span");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    stars.appendChild(star);
}



// Button ko select karna
const jaiBtn =
    document.getElementById("jaiBtn");


// Button click hone par
jaiBtn.addEventListener("click", function () {

    alert("🇮🇳 Jai Hind! Happy Independence Day!");

});