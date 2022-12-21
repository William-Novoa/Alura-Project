/* Athor: William Novoa - Author URI: https://github.com/William-Novoa*/

/* ----------------------
     Change Body Theme
---------------------- */
const input = document.querySelector("input");
const body = document.querySelector("body");
const textarea = document.querySelector("textarea");
const a = document.querySelector("a");

const toggleThemeMode = () => {
    body.classList.toggle("dark");
    textarea.classList.toggle("dark");
    a.classList.toggle("dark");
};
input.onchange = toggleThemeMode;


/* -----------------------------------------
     Funcion ocultar y mostrar elementos
----------------------------------------- */
function display() {
     document.getElementById("output-data").style.display = "none";
     document.getElementById("copy-btn").style.display = "block";
     document.getElementById("sidebar-output").style.display = "block";
}

/* ------------------------
     Funcion "Encriptar"
------------------------ */
function encrypted() {
     display();
     
     var text = document.getElementById("txtArea").value;
     var letter = text.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
     var div = document.getElementById("output-data");

     if (text == "") {
          confirm("No se encontro algun texto...");
          document.getElementById("output-data").style.display = "block";
          document.getElementById("copy-btn").style.display = "none";
     } else if (document.getElementById("sidebar-output") !== "") {
          document.getElementById("sidebar-output").innerHTML = letter;
     }
}

/* ---------------------------
     Funcion "Desencriptar"
--------------------------- */
function desencrypt() {
     display();

     var text = document.getElementById("txtArea").value;
     var letter = text.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

     if (text == "") {
          confirm("No se encontro algun texto...");
          document.getElementById("output-data").style.display = "block";
          document.getElementById("copy-btn").style.display = "none";
     } else if (document.getElementById("sidebar-output") !== "") {
          document.getElementById("sidebar-output").innerHTML = letter;
     }
}

function copy() {
     let cptext = document.getElementById("sidebar-output");
     cptext.select();
     document.execCommand("copy");
}
