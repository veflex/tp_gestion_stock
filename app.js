/* global document*/
var app = (function app() {
    "use strict";

    var dom = {},
        count = 0,
        objectTabl = [];

    var CreateProduct = function (obj) {
        this.modif = `<button id= ${obj.ref} >Modifier</button>`;
        this.name = obj.nom;
        this.price = obj.prix;
        this.descr = obj.description;
        this.ref = obj.ref;
        this.suppr = `<button id= ${obj.ref} >Supprimer</button>`;
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
        } else {
            return count;
        }
    };

    var createProd = function () {
        count += 1;
        var newProd = new CreateProduct({
            nom: dom.nom.value,
            prix: dom.prix.value,
            description: dom.descr.value,
            ref: ref()
        });
        return newProd;
    }
    var alertIfMissingValues = function () {
        if (!dom.nom.value || !dom.prix.value || !dom.descr.value) {
            alert("vous avez oubliez de remplir un champ produit");
        } else {
            afficherNewProducs();
            objectTabl.push(createProd());
        }
    };

    var convertToArray = function convertToArray(obj) {
        var tmp = [];
        for (let prop in obj) {
            tmp.push(obj[prop]);
        }
        return tmp;
    };

    var ajouterLigneTableau = function () {
        var ligne = document.createElement("tr");
        return dom.tableau.appendChild(ligne);
    };

    var eventBtnSuppr = function () {
        dom.lastTd = document.querySelectorAll('#tbody td:nth-child(6) button');
        dom.lastTd.forEach(function (btn) {
            btn.addEventListener("click", supprimerProduct);
        });
    };

    //    var eventBtnModif = function () {
    //        dom.firstTd = document.querySelectorAll('#tbody td:first-child button');
    //        dom.firstTd.forEach(function (btn) {
    //            btn.addEventListener("click", modifProduct);
    //        });
    //    };

    var ecrireProducts = function () {
        alertIfMissingValues();
        dom.tableau.innerHTML = "";
        var i;
        for (i = 0; i < objectTabl.length; i++) {
            var ligneCree = ajouterLigneTableau();
            var propTabl = convertToArray(objectTabl[i]);
            propTabl.forEach(function (obj) {
                var newTd = document.createElement("td");
                ligneCree.appendChild(newTd).innerHTML = obj;
            });
            eventBtnSuppr();
            //            eventBtnModif();
        }
    };

    var filtrerObjectTabl = function (idSuppr) {
        var filteredTabl = objectTabl.filter(function (obj) {
            return obj.ref != idSuppr
        })
        return filteredTabl;
    }

    var supprimerProduct = function () {
        var id = this["id"];
        var btn = document.getElementById(id);
        btn.parentNode.parentNode.remove();

        window.console.log("tableau object avant");
        window.console.log(objectTabl);
        objectTabl = filtrerObjectTabl(id);
        window.console.log("tableau object apres");
        window.console.log(objectTabl);
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
        dom.tableau = document.getElementById('tbody');

        dom.creer.addEventListener("click", afficherForm);

        dom.add.addEventListener("click", ecrireProducts);

    };
    window.addEventListener("DOMContentLoaded", start);


}());
