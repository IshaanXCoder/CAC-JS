const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    // this would prevent the default function of a form ehih is sending the details to the server

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const stat = document.querySelector("#calcBMI")

    bmi = (weight/(height*height));
    console.log(bmi);

    stat.innerHTML = `Hey bruh, your BMI is ${bmi}`

})