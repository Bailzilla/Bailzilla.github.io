const psh = document.getElementById('push')
let rPush = Math.floor(Math.random() * push.length);
psh.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + push[rPush] })

const pll = document.getElementById('pull')
pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + pull[1] })

const ant = document.getElementById('anterior')
ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + anterior[1] })

const pos = document.getElementById('posterior')
pos.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + posterior[1] })