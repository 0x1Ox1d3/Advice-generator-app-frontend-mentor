document.getElementById("newadvice").addEventListener('click', getQuote)


async function getQuote(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const advice = await response.json()
    console.log(advice)
    document.getElementById("adviceid").innerHTML = `Advice #${advice.slip.id}`
    document.getElementById("advicecontent").innerHTML = `&#8220;${advice.slip.advice}&#8221;`
    
}