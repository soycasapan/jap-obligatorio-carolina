const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
// JSON precargado para usar en carrito, que fue reemplazado por el del "desafiate" 
//const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
// Agrego JSON de paises para seleccionar en pagina de carrito
const PAISES = "https://raw.githubusercontent.com/millan2993/countries/master/json/countries.json";

var showSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function() {
    document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url) {
    var result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

//Funcion para que figure el nombre de usuario en la esquina superior izquierda

document.addEventListener("DOMContentLoaded", EscribirUsuario);

function EscribirUsuario() {
    if (sessionStorage.getItem('user') == null) {
        NombreDeUsuario = "Registrate!";
    } else {
        NombreDeUsuario = sessionStorage.getItem('user');
    }
    document.getElementById("logged").textContent = NombreDeUsuario;
};

//Funcion para eliminar datos de usuario

function olvidarUsuario() {
    sessionStorage.removeItem('user', NombreDeUsuario);
};

//Funcion para mandar al login al usuario si no esta registrado

document.addEventListener("DOMContentLoaded", check);

function check() {
    url = window.location.pathname;
    file = url.substring(url.lastIndexOf('/') + 1);
    if (file != 'login.html' && (sessionStorage.getItem('user')) == null) {
        window.location = 'login.html'
    };
}