// função dentro de outra função 

const fn = () => console.log('euba')

setInterval(fn, 1000)
setInterval(() => console.log('oiii'), 1000)