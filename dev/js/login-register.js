const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const registerModal = document.getElementById('register-modal')

const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

if (topbar) {
    topbar.addEventListener('click', (e) => {
        if (e.target.parentElement.dataset.type != undefined) {
            if (e.target.parentElement.dataset.type == 'login') {
                loginModal.classList.add('lightbox--show')
            }
        }
    })
}

if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            loginModal.classList.remove('lightbox--show')
        }
    })
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}
