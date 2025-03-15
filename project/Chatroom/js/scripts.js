const email = document.querySelector('#email').value;

const hashMail = md5(email.trim().ToLowerCase());
const url = `https://en.gravatar.com/${hashMail}.json`;