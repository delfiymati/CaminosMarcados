let esVisible = false;
function mostrarocultar() {
    const menu= document.getElementById("menu")

    if(esVisible == false) {
        menu.style.display = "block" ;
        esVisible = true;

    } else {
        menu.style.display = "none";
        esVisible = false;
    }
}

const animales = [
    {
        Nombre: "Rufino",
        Imagen: "rufino.jpg",
        Descripcion: "Con esos ojitos curiosos y orejas traviesas, Rufino llegó para robarse todos los corazones.Es un perrito juguetón, leal y siempre listo para una buena aventura… o una siesta bajo el sol. ¡Su ternura es solo el comienzo!",
        Edad: 2,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "No castrado",
        Dondeesta: "Con Nosotros",
        Personal:" Hola, soy Rufino.Me gusta correr sin rumbo y detenerme solo cuando encuentro un gesto amable. Soy inquieto, curioso, y tengo una alegría que se contagia.A veces me distraigo con una hoja, otras con una mirada. No entiendo de prisas, pero sí de cariño. Si me das tiempo, juegos y un poco de ternura, te voy a seguir con el corazón.No soy de quedarme en cualquier lugar… pero si me elijo, será para siempre."
    },
    {
        Nombre: "Yuna",
        Imagen: "yuna.jpg",
        Descripcion: "Con su mirada profunda y su andar tranquilo, Yuna conquista a todos sin decir una palabra.Es curiosa, leal y siempre está lista para acompañarte, ya sea en una tarde de juegos o un paseo.Su mirada tierna lo dice todo… es imposible no enamorarse de ella.",
        Edad: 4 ,
        Sexo: "Hembra",
        Vacunas: "completadas",
        Operaciones: "No castrada",
        Dondeesta: "Con Nosotros",
        Personal:"Hola, soy Yuna. Llevo el sol en la lengua y la alegría en la mirada. Me gusta correr detrás de todo lo que se mueve, pero también quedarme cerca cuando el mundo se pone lento. Soy de esas que siempre están listas para jugar, pero que también saben quedarse en silencio cuando alguien necesita compañía. Si me das tu tiempo, tu voz suave y un poco de espacio para ser feliz, yo te devuelvo mi lealtad entera. Porque donde me siento querida, me quedo."

    },
    {
        Nombre: "Milo",
        Imagen: "milo.jpg",
        Descripcion: "Pequeño en tamaño pero gigante en personalidad, Milo es pura energía y picardía. Siempre alerta, siempre curioso, y siempre listo para robarte una sonrisa. Con él, la diversión está garantizada.",
        Edad: 6,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "No castrado",
        Dondeesta: "Familia de Transito",
        Personal:" Hola, soy Milo. Parezco chiquito, pero tengo un corazón enorme y lleno de ganas de dar amor. Miro todo con ojos atentos, como si tratara de entender el mundo antes de lanzarme a él.  A veces soy tímido al principio, pero si me hablás suave y me das un poco de confianza, vas a ver cómo empiezo a seguirte a todos lados. Soy un compañero tranquilo, curioso y muy leal. Si me elegís, no solo vas a tener un perro, vas a tener a alguien que siempre va a estar para vos."
    },
    {
        Nombre: "Lala",
        Imagen: "lala.jpg",
        Descripcion:"Lala es puro amor envuelto en patitas cortas y mirada tierna. Tranquila, sabia y con una dulzura que derrite corazones, es de esas compañeras que siempre están ahí, dando calma, cariño… y esperando una caricia más.",
        Edad: 7,
        Sexo: "Hembra",
        Vacunas: "completadas",
        Operaciones: "Castrada",
        Dondeesta: "Con Nosotros",
        Personal:"Hola, soy Lala. Soy de andar despacito, como quien ya aprendió a tomarse la vida con calma. Me gusta mirar desde abajo con estos ojitos que lo dicen todo, y aunque al principio parezco seria, tengo un corazón suave y lleno de ternura. No necesito mucho para ser feliz: una camita tibia, tus manos con cariño y una rutina tranquila. Si buscás compañía sincera y constante, puede que seamos el uno para el otro."
    },
    {
        Nombre: "Rocco",
        Imagen: "Rocco.jpg",
        Descripcion:"Con esos ojos que hipnotizan y una presencia que no pasa desapercibida, Rocco es energía, nobleza y carácter. Siempre atento, siempre leal, tiene un corazón gigante y una mirada que habla sin decir una sola palabra.",
        Edad: 5,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "Castrado",
        Dondeesta: "Con Nosotros",
        Personal: "Hola, soy Rocco. Con estos ojos te miro directo al alma. Soy intenso, sí, pero también muy noble. Me gusta estar atento a todo, aprender rápido y conectar con las personas de verdad. Necesito alguien que me dé tiempo, guía y mucho amor, porque yo devuelvo todo eso multiplicado. Si estás buscando un compañero leal, con energía pero también con ternura, capaz que nos estábamos esperando hace rato."
    },
    {
        Nombre: "Nayla",
        Imagen: "Nayla.jpg",
        Descripcion:"Curiosa, inquieta y con una ternura que derrite, Nayla está lista para conquistar el mundo (o al menos todos los corazones). Su mirada lo dice todo: pura dulzura, valentía y ganas de jugar sin parar.",
        Edad: 3,
        Sexo: "Hembra",
        Vacunas: "Primer vacuna aplicada",
        Operaciones: "No Castrada",
        Dondeesta: "Familia de Transito",
        Personal: " ¡Hola! Soy Nayla, una perrita con muchas ganas de encontrar una familia. Soy juguetona, curiosa y muy dulce. Me encanta explorar y recibir mimos, y si me adoptás, te prometo lealtad y amor del bueno. Estoy lista para crecer a tu lado. ¡Dame una oportunidad y llevame a casa!"
    },
    
];

function mostraranimales() {
    let tarjeta = "";
    animales.forEach ((animal) => {
        tarjeta += `<div  class="tarjeta" >
                       <img src="imagenes/${animal.Imagen}" alt="${animal.nombre}" />
                       <div class="texto">
                        <h2>${animal.Nombre}</h2>
                        <p>${animal.Descripcion}</p>
                        <p>${animal.Edad}</p>
                        <p>${animal.Sexo}</p>
                       </div>
                       <div class="flecha">
                            <button type="button" onclick="redireccion('${animal.Nombre}')">
                                <img src="imagenes/flecha.png" alt="ver más">
                            </button>
                       </div>
                    </div>`;
    });

    document.getElementById("perros").innerHTML = tarjeta
}

function redireccion(nombre){
    localStorage.setItem("animalSeleccionado", nombre)
    window.location.href="perrodetalle.html"
}

function cargarPerro(){
    const perroName = localStorage.getItem("animalSeleccionado");

    const newPerro = animales.filter((animal) => animal.Nombre==perroName);
    console.log(newPerro[0])
    document.getElementById("edad").innerHTML = newPerro[0].Edad;
    document.getElementById("sexo").innerHTML = newPerro[0].Sexo;
    document.getElementById("vacunas").innerHTML = newPerro[0].Vacunas;
    document.getElementById("operaciones").innerHTML = newPerro[0].Operaciones;
    document.getElementById("dondeesta").innerHTML = newPerro[0].Dondeesta; 
    document.getElementById("personal").innerHTML = newPerro[0].Personal;
   
    const img = document.getElementById("img");
    img.src = "imagenes/" + newPerro[0].Nombre + ".jpg";
    img.alt = newPerro[0].Nombre;
    const img2 = document.getElementById("img2");
    img2.src = "imagenes/" + newPerro[0].Nombre + '2.jpg';
    img2.alt = newPerro[0].Nombre;
    const img3 = document.getElementById("img3");
    img3.src = "imagenes/" + newPerro[0].Nombre + '3.jpg';
    img3.alt = newPerro[0].Nombre;
}
const animales = [
    {
        Nombre: "Gina",
        Imagen: "Gina.jpg",
        Descripcion:"Con su elegancia natural y esos ojos que todo lo observan, Gina es puro misterio y encanto felino. Independiente, curiosa y con una personalidad única, llega silenciosa… y se queda para siempre en tu corazón.",
        Edad: 2,
        Sexo: "Hembra",
        Vacunas: "Compeltas",
        Operaciones: "No Castrada",
        Dondeesta: "Familia de Transito",
        Personal: " Hola, soy Gina. Me gusta llegar en silencio y quedarme donde me siento en casa.Con mis ojos todo lo observo, y aunque parezca distante, solo estoy esperando encontrar a quien sepa mirar más allá. Soy curiosa, independiente y dueña demi propio mundo, pero cuando confío, me entrego con esa lealtad que solo los gatos sabemos dar. No me hace falta maullar fuerte para que me noten, porque mi presencia habla por sí sola. Si me das un rincón cálido, algo de tiempo y mucho cariño, tal vez te elija… y si lo hago, vas a descubrir que una vez que llego, me quedo para siempre."
    }
    { 
        Nombre: "Teo",
        Imagen: "teo.jpg",
        Descripcion:"Dueño de una mirada intensa y un estilo único, Teo combina elegancia felina con una pizca de misterio. Parece serio, pero cuando se relaja… ¡es puro mimo y ronroneo!",
        Edad: 1,
        Sexo: "Macho",
        Vacunas: "Compeltas",
        Operaciones: "Castrado",
        Dondeesta: "Con nosotros",
        Personal:"¡Hola! Soy Teo. Sí, ese que te está mirando con cara de “¿y vos quién sos?”. No te preocupes, no es desconfianza, es curiosidad... mucha. Me gusta observarlo todo, escuchar hasta el más mínimo sonido, y decidir si vale la pena moverme de donde estoy cómodo. Soy juguetón, algo travieso, y tengo un talento especial para hacer reír incluso cuando no estoy intentando hacerlo. Si te gano con la mirada, ya está: vamos a llevarnos bien. Solo necesito una familia que entienda que mi energía es parte de mi encanto, y que cada maullido mío es una invitación a conocernos un poco más."
    }


