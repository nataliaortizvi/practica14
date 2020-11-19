//CONSTANTES
const database = firebase.database();
const auth = firebase.auth();

const mail = document.getElementById('mail');
const password = document.getElementById('password');
const btlogin = document.getElementById('btlogin');

auth.onAuthStateChanged(
    (user)=>{
        if(user == null){

        }else{
            windor.location.href = 'index.html';
        }
    }
);

btlogin.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(mail.value, password.value).then(
        (data)=>{
            window.location.href = 'index.html';
        }
    ).catch(
        (error)=>{
            alert(error);
        }
    );
});