async function signupFormHandler(event) {
    event.preventDefault();

    // const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();

    // console.log(email, password)
    if (email && password) {
        const response = await fetch('api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success')
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#sign-up-btn').addEventListener('click', signupFormHandler);