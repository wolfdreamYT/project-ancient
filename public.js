function devCheck() {
    console.log("Current files:");
    console.log("index.html");
    console.log("pisa-cath.html");
    console.log("pisa.html");
    console.log("roman-forum.html");
    console.log("soon.html");
    console.log("st-mark-bas.html");
    console.log("st-marks.html");
    console.log("st-peter-bas.html");
    console.log("trevi-fountain.html");
    console.log("vittorio.html");
    console.log("announcements.html");
    console.log("colosseum.html");
    console.log("david.html");
    console.log("doge-pal.html");
    console.log("gallery.html");
    console.log("gimignano.html");
    console.log("app.js");
    console.log("private.js");
    console.log("rome.json");
    console.log("private.css");
    console.log("styles.css");
    console.log("global.css");
    console.log("login.html");
}

(function(){

    const form = document.getElementById('loginForm');
    const err = document.getElementById('error');

    const REDIRECT_BASE = 'https://www.wolfstudios.ca/dev';

    const CREDENTIALS = {
        username: 'admin',
        password: 'devwolfstudios2025$',
        devId: '803918-AAB1-4C9F-9D2E-1234567890AB'
    };

    form.addEventListener('submit', function(e){
        e.preventDefault();
        err.style.display = 'none';
        err.textContent = '';

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value; 
        const devId = document.getElementById('devId').value.trim();

        if (!username || !password || !devId) {
            err.textContent = 'Please enter username, password, and developer ID.';
            err.style.display = 'block';
            return;
        }

        if (
            username !== CREDENTIALS.username ||
            password !== CREDENTIALS.password ||
            devId !== CREDENTIALS.devId
        ) {
            err.textContent = 'Invalid credentials.';
            err.style.display = 'block';
            return;
        }

        const params = new URLSearchParams({
            user: username,
            devId: devId
        });

        const target = REDIRECT_BASE + '?' + params.toString();

        try {
            sessionStorage.setItem('loggedInUser', username);
            sessionStorage.setItem('developerId', devId);
        } catch (e) {}

        window.location.href = target;
    });
})();