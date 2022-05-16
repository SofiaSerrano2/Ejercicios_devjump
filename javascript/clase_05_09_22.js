function crearGato(nombre,edad){
    let gato={
        nombre:nombre,
        edad:edad,
        // get meow:function ()
        get meow (){  //Lo busque por internet pero hay que preguntar o no sé si lo vemos más adelante
            return `Nombre es ${this.nombre} y edad ${this.edad}`
        }
    }
    for (let clave in gato) {
        
            const element = gato[clave];
            document.write(`Elemento es del tipo ${typeof (element)} `)
            if(typeof (element)!="function"){
                document.write(`${clave} : ${element} <br>`);
            }
            else{
                // document.write(`${gato.meow()}`) me funciona pero no sé otra manera de llamar al metodo 
                // document.write(gato["clave"]) aparece null
                document.write(element) //Me aparece pero porque le cambie el function por get 
                
            }
    }
}
crearGato("Marcos",20)

