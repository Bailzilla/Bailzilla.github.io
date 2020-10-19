const push = [
    'dip',
    'banded dip',
    'push-up',
    'wide grip push-up',
    'diamond push-up',
    'cobra push-up',
    'overhead press'
]

const pull = [
    'pull-up',
    'inverted row',
    'bent over row',
    'chin-up',
    'hang clean',
    'snatch',
    'curl'
]

const anterior = [
    'squat',
    'lunge',
    'bulgarian squat',
    'side lunge',
    'step-up',
    'thruster',
    'pistol'
]

const posterior = [
    'deadlift',
    'hip hinge',
    'good morning',
    'RDL',
    'Superman',
    'reverse hyper',
    'swing'
]

fetch("https://type.fit/api/quotes")
.then(response => response.json())
  .then(data => document.getElementById('quote').innerHTML=(data[Math.floor(Math.random() * data.length)].text))