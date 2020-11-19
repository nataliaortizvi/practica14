//CONSTANTES
const database = firebase.database();
const auth = firebase.auth();

const atrasbt = document.getElementById('atrasbt');
const nom = document.getElementById('name');
const num = document.getElementById('numbers');
const agregarbt = document.getElementById('agregarbt');

//volver a la página principal
atrasbt.addEventListener('click', ()=>{
    window.location.href= 'index.html';
});

//funcion
postear = () => {
    //si no escribe nada en un campo
    if(nom.value == ''){
        alert('Hay un campo vacio');
        return;
    }
    if(num.value == ''){
        alert('Hay un campo vacio');
        return;
    }

    //value de variables
    auth.onAuthStateChanged(
        (user)=>{

            let referencia = database.ref('usuarios/'+user.uid+'/contactos').push(); 
            let n = nom.value;
            let t = num.value;  
            let i = referencia.key;
        
            //objeto con el contacto
            let contact = {
                nombre: n,
                telefono: t,
                id: i
            }
        
            referencia.set(contact).then(
                ()=>{
                    window.location.href = 'index.html';
                }
            );
        }
    );
}

//accion de agregar contactos
agregarbt.addEventListener('click', postear);
