//CONSTANTES
const database = firebase.database();
const auth = firebase.auth();

const btlogout = document.getElementById('btlogout');
const myname = document.getElementById('myname');
const addbt = document.getElementById('addbt');
const contactos = document.getElementById('contactos');

//para saber quien entro
auth.onAuthStateChanged(
    (user)=>{
            //lectura de contactos
            database.ref('usuarios/'+user.uid+'/contactos').on('value', function(data){
                contactos.innerHTML='';
                data.forEach(
                    contact => {
                        let valor = contact.val();
                        console.log(valor);
                        let fila = new ContactosList(valor);
                        contactos.appendChild(fila.render());
                    }
                );
            });
        

        if(user == null){
            window.location.href = 'login.html';
        }else{
            database.ref('usuarios/'+user.uid).once(
                'value',
                (data)=>{
                    let userDB = data.val();
                    myname.innerHTML = userDB.nombre;
                }
            ); 
        }
    }
);

//boton del logout
btlogout.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href = 'login.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});

//boton para añadir un nuevo contacto
addbt.addEventListener('click', ()=>{
    window.location.href = 'agregar.html';
});