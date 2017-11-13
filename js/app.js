/*var ul = document.getElementsByTagName('ul')[0];
var ul = document.querySelectorAll('ul')[0];
var ul = document.querySelector('ul');
var ul = document.getElementById('ul-id');
var ul = document. getElementsByClassName('ul-class')[0];
var ul = document.getElementsByName('ul-name')[0];

for (var i = 0; i < ul.children.length; i++)
console.log(ul.children[i].textContent);

var padre = ul.firstElementChild.parentElement;
var hijo = document.createElement('li');
hijo.textContent = 'item nuevo';
var hermano = padre.firstChild;

padre.insertBefore(hijo, hermano);
padre.appendChild(hijo, hermano);/*modificar y practicar*/


(prueba llegar con  otros metodos como getElementById u otro)
var padre = document.querySelector('ul');
var hijo = document.createElement('li');
hijo.textContent = 'item nuevo';

var hermano3 = padre.children[2];
padre.insertBefore(hijo, hermano3)
