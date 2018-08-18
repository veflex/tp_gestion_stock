/* global document*/
var app = (function app() {
    "use strict";

    var dom = {},
        count = 0;

    var CreateProduct = function (obj) {
        this.name = obj.nom;
        this.price = obj.prix;
        this.descr = obj.description;
        this.ref = obj.ref;
    };

    var afficherForm = function () {
        dom.form.classList.toggle("is-active");
    };
    var afficherNewProducs = function () {
        dom.newProds.classList.add("is-active");
    };

    var ref = function () {
        if (count < 10) {
            return "00" + count;
        } else if (count < 100) {
            return "0" + count;
        } else return count;
    };

    var alertIfMissingValues = function () {
        if (!dom.nom.value || !dom.prix.value || !dom.descr.value) {
            alert("vous avez oubliez de remplir un champ produit")
        } else {
            count++;
            return new CreateProduct({
                nom: dom.nom.value,
                prix: dom.prix.value,
                description: dom.descr.value,
                ref: ref()
            });
        }

    };

    const convertToArray = function convertToArray(obj) {
        const tmp = [];
        for (let prop in obj) {
            tmp.push(obj[prop]);
        }
        return tmp;
    };

    var ecrireProducts = function () {
        var prodTableau = convertToArray(alertIfMissingValues())
        afficherNewProducs();
        prodTableau.forEach(function (elem) {
            dom.newProds.innerHTML += elem + "<br>";
        })
    };






    var start = function () {
        dom.creer = document.getElementById('createProduct');
        dom.form = document.getElementById('form');
        dom.add = document.getElementById('addProduct');
        dom.nom = document.getElementById('prodName');
        dom.prix = document.getElementById('prodPrice');
        dom.descr = document.getElementById('prodDescr');
        dom.newProds = document.getElementById('newProds');
        dom.prodList = document.getElementById('products');



        dom.creer.addEventListener("click", afficherForm);

        dom.add.addEventListener("click", ecrireProducts)

    };
    window.addEventListener("DOMContentLoaded", start);


}());
