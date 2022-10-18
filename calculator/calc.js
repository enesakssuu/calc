

window.onload = function () {
    var numbers = document.querySelectorAll(".btn");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            let clicked_number = this.getAttribute("data-value");
            document.getElementById("islem").value += clicked_number;
        }, false);
    }

    var operators = document.querySelectorAll(".btnop");
    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function () {

        }, false);
    }
    //! btnest : eşittir
    document.getElementById("btnest").addEventListener("click", function () {

    }, false);
    //! btndlt : C-CE
    document.getElementById("btdlt").addEventListener("click", function () {

    }, false);





};



