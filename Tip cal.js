let button = document.getElementById('button')

button.addEventListener('click',itemButton)

function itemButton(a){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    alert(`$ ${input1*input2}`)
}


