document.addEventListener("DOMContentLoaded", () => {
    var conText = document.getElementById("constructionText");

    const originalText = conText.innerText;

    conText.innerText = "";

    for (let i = 0; i < originalText.length; i++) {
        console.log(originalText.length);
        setTimeout(() => {
            conText.innerText = conText.innerText + originalText.charAt(i);
        }, 100 * i);
    }
})