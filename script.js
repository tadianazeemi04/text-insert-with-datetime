function inserttext() {

    let enteredText = document.getElementById('enter-text').value;
    let enteredResult = document.getElementById('entered-result');
    let empty = document.getElementById('word-empty');

    enteredText.innerHTML = "";
    empty.innerHTML = "";

    if (enteredText === '') {
        empty.innerHTML = "Please enter text";
        empty.style.color = "red";
        empty.style.opacity = "1";
    }
    else {
        let today = new Date();
        let format = today.toLocaleString();

        document.getElementById('time').innerHTML = format;
        enteredResult.innerHTML = `| ${enteredText}` + `<br>`;
        // enteredResult.style.color = "green";
        enteredResult.style.opacity = "1";
        document.getElementById('time').opacity = "1";
    }
    document.getElementById('enter-text').value = "";
}