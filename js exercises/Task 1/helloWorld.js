function showMessage() {
    const element = document.body.querySelector('#message');
    if(element.textContent == '')
    {
        element.textContent = 'Hello World!'
    }
    else{
        element.textContent = ''
    }
}


document.body.querySelector('#btn').addEventListener("click",() => showMessage())