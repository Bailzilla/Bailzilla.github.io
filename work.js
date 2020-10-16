//add a function to 'add an exercise' to replace repeated calls
// declare varialbles: elements and random number

let rando = Math.floor(Math.random() * arr.length)
console.log(rando)

//document.getElementsByClassName('button')

exer=>exer.addEventListener('click', document.getElementById('work').innerHTML += exer[rando])


          const psh = document.getElementById('push')


          document.getElementById('push').addEventListener('click', (id) =>{ document.getElementById('work').innerHTML += " ~" + id[rando] })

          const pll = document.getElementById('pull')
          pll.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + pull[rando] })

          const ant = document.getElementById('anterior')
          ant.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + anterior[rando] })

          const pos = document.getElementById('posterior')
          pos.addEventListener('click', () => { document.getElementById('work').innerHTML += " ~" + posterior[rando] })


  
          //API call for random quote

  fetch("https://type.fit/api/quotes")
  .then(response => response.json())
    .then(data => document.getElementById('quote').innerHTML=(data[Math.floor(Math.random() * data.length)].text))



