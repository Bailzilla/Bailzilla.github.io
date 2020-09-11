const work = document.getElementById('push')
work.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + push[1] })

const pll = document.getElementById('pull')
pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " " + pull[1] })