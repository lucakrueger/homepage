function recaptchaCallback(token) {
    window.captchaToken = token
    document.getElementById('submit').removeAttribute('disabled')
}

function submitContact() {
    fetch('https://luca-krueger.com/contactreq', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            captcha: window.captchaToken,
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            request: document.getElementById('request').value
        })
    }).then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    })
}