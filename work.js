const psh = document.getElementById('push')
psh.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + push[Math.floor(Math.random() * push.length)] })

const pll = document.getElementById('pull')
pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + pull[Math.floor(Math.random() * pull.length)] })

const ant = document.getElementById('anterior')
ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + anterior[Math.floor(Math.random() * anterior.length)] })

const pos = document.getElementById('posterior')
pos.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + posterior[1] })