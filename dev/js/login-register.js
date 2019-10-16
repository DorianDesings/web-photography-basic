const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

if (topbar)
    topbar.addEventListener('click', (e) => {
        if (e.target.parentElement.dataset.type != undefined) {
            if (e.target.parentElement.dataset.type == 'login') {
                loginModal.classList.add('lightbox--show')
            } else if (e.target.parentElement.dataset.type == 'register') {
                registerModal.classList.add('lightbox--show')
            }
        }
    })

if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            loginModal.classList.remove('lightbox--show')
        }
    })
}

if (registerModal) {
    registerModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            registerModal.classList.remove('lightbox--show')
        }
    })
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.button.blur()
        }, 200);
        console.log('SEND');
    })
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.button.blur()
        }, 200);
        console.log('SEND');
    })
}
