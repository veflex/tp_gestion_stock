var app = (function app() {
    "use strict";

    var dom = {},
        count = 0;

    var afficherForm = function () {
        dom.form.classList.toggle("is-active")
    }
    var recupValues = function () {
        if (dom.nom || dom.prix || dom.descr === null) {
            alert("vous avez oubliez de remplir un champ produit")
        }
        count++;
    }

    var ref = function () {
        if (count < 10) {
            return "00" + count
        } else if (count < 100) {
            return "0" + count
        } else return count
    }




    var start = function () {
        dom.creer = document.getElementById('createProduct');
        dom.form = document.getElementById('form');
        dom.add = document.getElementById('addProduct');
        dom.nom = document.getElementById('prodName');
        dom.prix = document.getElementById('prodPrice');
        dom.descr = document.getElementById('prodDescr');


        dom.creer.addEventListener("click", afficherForm);

        dom.add.addEventListener("click", recupValues)

    };
    window.addEventListener("DOMContentLoaded", start);


}());
