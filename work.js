//add a function to 'add an exercise' to replace repeated calls
// declare varialbles: elements and random number

let rando = Math.floor(Math.random() * push.length)
console.log(rando)

//document.getElementsByClassName('button')

exer=>exer.addEventListener('click', document.getElementById('work').innerHTML += exer[rando])


const psh = document.getElementById('push')
  psh.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + push[Math.floor(Math.random() * push.length)] })

  const pll = document.getElementById('pull')
  pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + pull[Math.floor(Math.random() * pull.length)] })

  const ant = document.getElementById('anterior')
  ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + anterior[Math.floor(Math.random() * anterior.length)] })

  const pos = document.getElementById('posterior')
  pos.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + posterior[Math.floor(Math.random() * posterior.length)] })


//API call for random quote

  fetch("https://type.fit/api/quotes")
  .then(response => response.json())
    .then(data => document.getElementById('quote').innerHTML=(data[Math.floor(Math.random() * data.length)].text))



