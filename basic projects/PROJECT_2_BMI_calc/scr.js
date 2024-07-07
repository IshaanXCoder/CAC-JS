const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    // this would prevent the default function of a form ehih is sending the details to the server

    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const s = document.querySelector("#calcBMI")
    const f = document.querySelector("#FirstName").value
    const l = document.querySelector("#LastName").value

    const bmi = (10000*(w/(h*h))).toFixed(2);

    console.log(`Weight is ${w}`);
    console.log(`Height is ${h}`);
    console.log(`BMI is ${bmi}`);

    s.innerHTML = `Hey ${f} ${l}, your BMI is ${bmi}`

})