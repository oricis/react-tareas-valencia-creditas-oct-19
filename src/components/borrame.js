



const juan = {
    nombre:'juan',
    getNombre : ()=> {
        console.log(this);

        return this.nombre
    }
}


const pepe = {
  nombre: 'pepe',
  getNombre : juan.getNombre
};

console.log(pepe.getNombre());
