window.onload = function () {
    let btn = document.querySelector("#datos");

    const changeColor = () => {
        if (btn.style.color == "red") {
            btn.style.color = "blue"
        } else {
            btn.style.color = "red"
        }
    }

    btn.onclick = function () {
        changeColor();
    }

}