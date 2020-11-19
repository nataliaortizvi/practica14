class ContactosList{
    constructor(contact){
        this.contact = contact;
    }

    render(){
        let component = document.createElement('div');
        component.className = 'lista';

        let infonom = document.createElement('div');
        infonom.className = 'infonom';
        infonom.innerHTML = (
            this.contact.nombre
        );

        let infonum = document.createElement('div');
        infonum.className = 'infonum';
        infonum.innerHTML = (
            this.contact.telefono
        );

        let bterase = document.createElement('button');
        bterase.classname = 'borrarbt';
        bterase.innerHTML = (
            'Borrar'
        );

        bterase.addEventListener('click', ()=>{
            auth.onAuthStateChanged(
                (user)=>{
                    const database = firebase.database();
                    database.ref('usuarios/'+user.uid+'/contactos/'+this.contact.id).set(null);
                }
            );
            
        });

        component.appendChild(infonom);
        component.appendChild(infonum);
        component.appendChild(bterase);

        return component;
    }

}