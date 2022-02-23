

function search(){
    let inputValue = document.getElementById('input-form').value;
    fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(response => response.json())
        .then(data => console.log(data))
    console.log(inputValue);
}

