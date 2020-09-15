const psh = document.getElementById('push')
let rPush = Math.floor(Math.random() * push.length);
psh.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + push[rPush] })

const pll = document.getElementById('pull')
let rPull = Math.floor(Math.random() * pull.length);
pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + pull[rPull] })

const ant = document.getElementById('anterior')
ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + anterior[1] })

const pos = document.getElementById('posterior')
pos.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + posterior[1] })