function recaptchaCallback(token) {
    fetch('https://luca-krueger.com/legalcaptcha', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
            captcha: token,
        })
    }).then(response => {
        response.json().then((body) => {
            if(body.success == true) updateBindings(['address', 'postal'], body)
        })
    })
}