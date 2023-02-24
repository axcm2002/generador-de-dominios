/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronombres = ["the", "our"];
  var adj = ["great", "amazing", "big", "fantastic", "fabulous"];
  var noun = ["horse", "turttle", "cat", "dog"];

  function junte() {
    for (let i = 0; i < adj.length; i++) {
      for (let b = 0; b < noun.length; b++) {
        for (let a = 0; a < pronombres.length; a++) {
          console.log("www." + pronombres[i] + adj[b] + noun[a] + ".com");
        }
      }
    }
  }
  junte();

  console.log("Hello Rigo from the console!");
};
