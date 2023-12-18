"use strict";(()=>{function s(){let e=document.querySelector("body"),t=document.createElement("modal");t.setAttribute("id","modal");let l=document.createElement("div");l.classList.add("fixed","left-0","top-0","flex","h-full","w-full","items-center","justify-center","bg-black","bg-opacity-50","py-10"),t.appendChild(l);let a=document.createElement("div");a.classList.add("max-h-full","w-full","max-w-xl","overflow-y-auto","sm:rounded-2xl","bg-white"),l.appendChild(a);let o=document.createElement("div");o.classList.add("w-full"),a.appendChild(o);let r=document.createElement("div");r.classList.add("m-8","my-20","max-w-[400px]","mx-auto"),o.appendChild(r);let d=document.createElement("div");d.classList.add("mb-8","text-center"),r.appendChild(d);let m=document.createElement("h1");m.classList.add("mb-4","text-3xl","font-extrabold"),m.textContent="BattleShip Game",d.appendChild(m);let i=document.createElement("p");i.classList.add("text-gray-600"),i.textContent="Embark on an epic naval adventure, a thrilling Battleship game that pits you against an intelligent opponent in a strategic battle for naval supremacy.",d.appendChild(i);let u=document.createElement("div");u.classList.add("space-y-4"),r.appendChild(u);let n=document.createElement("button");n.classList.add("p-3","bg-black","rounded-full","text-white","w-full","font-semibold"),n.textContent="Start Game",n.addEventListener("click",g),u.appendChild(n),e?.appendChild(t)}function g(){let e=document.querySelector("body"),t=document.getElementById("modal");e?.removeChild(t)}function p(){let e=[];for(let t=0;t<10;t++){e[t]=[];let l="";for(let a=0;a<10;a++)e[t][a]=0,l+=e[t][a]+" "}return e}function f(){return{placeShip(e,t,l,a){if(l.row===a.row&&c(l.row,l.col)&&c(a.row,a.col))for(let o=l.col;o<=a.col;o++)e[l.row][o].innerHTML="#";else if(l.col===a.col&&c(l.row,l.col)&&c(a.row,a.col))for(let o=l.row;o<=a.row;o++)e[o][l.col].innerHTML="#"},receiveAttack(e,t){t[e.row][e.col]==="#"?t[e.row][e.col]="X":t[e.row][e.col]===0&&(t[e.row][e.col]="O")},sunkAllShips(e){for(let t=0;t<10;t++)for(let l=0;l<10;l++)if(e[t][l]==="#")return!1;return console.log("All ships sunk!"),!0}}}function c(e,t){return e>=0&&e<10&&t>=0&&t<10}var w=p();function y(){let e=document.querySelector("body"),t=document.createElement("h1");t.style.fontFamily="Pixelify Sans, Rubik Broken Fax",t.textContent="BattleShip",t.classList.add("text-5xl","font-extrabold","text-center","mb-10","mt-10"),e?.appendChild(t);let l=document.createElement("div");l.setAttribute("id","gameLayout"),l.classList.add("flex","w-full","h-full","gap-10","p-10"),e?.appendChild(l);let a=document.createElement("div");a.setAttribute("id","playerBoard"),a.classList.add("grid","column-gap-0","border-2","border-black","mx-auto","my-auto"),b(a),l.appendChild(a);let o=document.createElement("div");o.setAttribute("id","computerBoard"),o.classList.add("grid","column-gap-0","border-2","border-black","mx-auto","my-auto"),b(o),l.appendChild(o)}function b(e){w.forEach((t,l)=>{t.forEach((a,o)=>{let r=document.createElement("div");r.classList.add("w-10","h-10","border-2","border-black"),r.setAttribute("id",`${l}${o}`),r.innerHTML="",e.appendChild(r)}),e.style.gridTemplateColumns="repeat(10, [col-start] 1fr [col-end])"})}function x(){return{length:0,hits:0,sunk:!1,hit(){this.hits+=1},isSunk(){this.hits===this.length&&(this.sunk=!0)}}}document.addEventListener("DOMContentLoaded",function(){s(),y();let e=f(),t=document.getElementById("playerBoard"),l=x().length=5,a={row:0,col:0},o={row:0,col:4};e.placeShip(t,l,a,o)});})();
