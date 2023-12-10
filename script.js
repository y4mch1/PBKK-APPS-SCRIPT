const scriptURL = 'https://script.google.com/macros/s/AKfycbzII0yIxcfuIis5jbk6WnZkttoYKFJtM11Zo3XyZNnKzI7MuzHazkuSao-pUTzlxnGc/exec'

const form = document.forms['regist-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima kasih telah mendaftar!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})