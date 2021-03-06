//CONSTANTES
const database = firebase.database();
const auth = firebase.auth();

const nom = document.getElementById('name');
const num = document.getElementById('numbers');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btregistro = document.getElementById('btregistro');

var isSigninUp = false;

auth.onAuthStateChanged(
    (user)=>{
        if(user == null){

        }else{
            if(isSigninUp){
                //depositar datos
                let userDB = {
                    id: user.uid,
                    nombre: nom.value,
                    telefono: num.value,
                    contra: password.value,
                    correo: mail.value
                };
                //comprobacion de claves iguales
                if(password.value == repassword.value){
                    database.ref('usuarios/'+userDB.id).set(userDB).then(
                        ()=>{
                            window.location.href = 'index.html';
                        }
                    );
                }
            }else{
                //si entra a signup y hay usuario lo devuelve
                window.location.href = 'index.html';
            }
        }
    }
);


btregistro.addEventListener('click', ()=>{
    isSigninUp = true;
    if(password.value == repassword.value){
        //subir datos de new user
        auth.createUserWithEmailAndPassword(mail.value, password.value);
    }else{
        alert('las contraseñas no coinciden');
    }
    
});