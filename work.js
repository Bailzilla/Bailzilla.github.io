const psh = document.getElementById('push')
psh.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + push[1] })

const pll = document.getElementById('pull')
pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + pull[1] })

const ant = document.getElementById('anterior')
ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + anterior[1] })