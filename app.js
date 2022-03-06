function updateValue(e) {
    console.log(e.target.value.length)
    const btn = document.getElementById('button')
    let string = '';
    if (e.target.value.length === 0) string = 'Just paste your grubby text!'
    else string = 'Your formatted text has been converted to plain text!'
    btn.innerHTML = string
}
const textarea = document.getElementById('textarea')
textarea.onkeyup = updateValue