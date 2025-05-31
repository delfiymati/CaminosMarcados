let esVisible = false;
function mostrarocultar() {
    const menu = document.getElementById("menu")

    if (esVisible == false) {
        menu.style.display = "block";
        esVisible = true;

    } else {
        menu.style.display = "none";
        esVisible = false;
    }
}

let animales = [
    {
        Nombre: "Rufino",
        Imagen: "rufino.jpg",
        Descripcion: "Con esos ojitos curiosos y orejas traviesas, Rufino llegó para robarse todos los corazones.Es un perrito juguetón, leal y siempre listo para una buena aventura… o una siesta bajo el sol. ¡Su ternura es solo el comienzo!",
        Edad: 2,
        Meses: 0,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "No castrado",
        Dondeesta: "Con Nosotros",
        Personal: " Hola, soy Rufino.Me gusta correr sin rumbo y detenerme solo cuando encuentro un gesto amable. Soy inquieto, curioso, y tengo una alegría que se contagia.A veces me distraigo con una hoja, otras con una mirada. No entiendo de prisas, pero sí de cariño. Si me das tiempo, juegos y un poco de ternura, te voy a seguir con el corazón.No soy de quedarme en cualquier lugar… pero si me elijo, será para siempre."
    },
    {
        Nombre: "Yuna",
        Imagen: "yuna.jpg",
        Descripcion: "Con su mirada profunda y su andar tranquilo, Yuna conquista a todos sin decir una palabra.Es curiosa, leal y siempre está lista para acompañarte, ya sea en una tarde de juegos o un paseo.Su mirada tierna lo dice todo… es imposible no enamorarse de ella.",
        Edad: 4,
        Meses: 0,
        Sexo: "Hembra",
        Vacunas: "completadas",
        Operaciones: "No castrada",
        Dondeesta: "Con Nosotros",
        Personal: "Hola, soy Yuna. Llevo el sol en la lengua y la alegría en la mirada. Me gusta correr detrás de todo lo que se mueve, pero también quedarme cerca cuando el mundo se pone lento. Soy de esas que siempre están listas para jugar, pero que también saben quedarse en silencio cuando alguien necesita compañía. Si me das tu tiempo, tu voz suave y un poco de espacio para ser feliz, yo te devuelvo mi lealtad entera. Porque donde me siento querida, me quedo."

    },
    {
        Nombre: "Milo",
        Imagen: "milo.jpg",
        Descripcion: "Pequeño en tamaño pero gigante en personalidad, Milo es pura energía y picardía. Siempre alerta, siempre curioso, y siempre listo para robarte una sonrisa. Con él, la diversión está garantizada.",
        Edad: 0,
        Meses: 6,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "No castrado",
        Dondeesta: "Familia de Transito",
        Personal: " Hola, soy Milo. Parezco chiquito, pero tengo un corazón enorme y lleno de ganas de dar amor. Miro todo con ojos atentos, como si tratara de entender el mundo antes de lanzarme a él.  A veces soy tímido al principio, pero si me hablás suave y me das un poco de confianza, vas a ver cómo empiezo a seguirte a todos lados. Soy un compañero tranquilo, curioso y muy leal. Si me elegís, no solo vas a tener un perro, vas a tener a alguien que siempre va a estar para vos."
    },
    {
        Nombre: "Lala",
        Imagen: "lala.jpg",
        Descripcion: "Lala es puro amor envuelto en patitas cortas y mirada tierna. Tranquila, sabia y con una dulzura que derrite corazones, es de esas compañeras que siempre están ahí, dando calma, cariño… y esperando una caricia más.",
        Edad: 7,
        Meses: 0,
        Sexo: "Hembra",
        Vacunas: "completadas",
        Operaciones: "Castrada",
        Dondeesta: "Con Nosotros",
        Personal: "Hola, soy Lala. Soy de andar despacito, como quien ya aprendió a tomarse la vida con calma. Me gusta mirar desde abajo con estos ojitos que lo dicen todo, y aunque al principio parezco seria, tengo un corazón suave y lleno de ternura. No necesito mucho para ser feliz: una camita tibia, tus manos con cariño y una rutina tranquila. Si buscás compañía sincera y constante, puede que seamos el uno para el otro."
    },
    {
        Nombre: "Rocco",
        Imagen: "Rocco.jpg",
        Descripcion: "Con esos ojos que hipnotizan y una presencia que no pasa desapercibida, Rocco es energía, nobleza y carácter. Siempre atento, siempre leal, tiene un corazón gigante y una mirada que habla sin decir una sola palabra.",
        Edad: 5,
        Meses: 0,
        Sexo: "Macho",
        Vacunas: "completadas",
        Operaciones: "Castrado",
        Dondeesta: "Con Nosotros",
        Personal: "Hola, soy Rocco. Con estos ojos te miro directo al alma. Soy intenso, sí, pero también muy noble. Me gusta estar atento a todo, aprender rápido y conectar con las personas de verdad. Necesito alguien que me dé tiempo, guía y mucho amor, porque yo devuelvo todo eso multiplicado. Si estás buscando un compañero leal, con energía pero también con ternura, capaz que nos estábamos esperando hace rato."
    },
    {
        Nombre: "Nayla",
        Imagen: "Nayla.jpg",
        Descripcion: "Curiosa, inquieta y con una ternura que derrite, Nayla está lista para conquistar el mundo (o al menos todos los corazones). Su mirada lo dice todo: pura dulzura, valentía y ganas de jugar sin parar.",
        Edad: 0,
        Meses: 3,
        Sexo: "Hembra",
        Vacunas: "Primer vacuna aplicada",
        Operaciones: "No Castrada",
        Dondeesta: "Familia de Transito",
        Personal: " ¡Hola! Soy Nayla, una perrita con muchas ganas de encontrar una familia. Soy juguetona, curiosa y muy dulce. Me encanta explorar y recibir mimos, y si me adoptás, te prometo lealtad y amor del bueno. Estoy lista para crecer a tu lado. ¡Dame una oportunidad y llevame a casa!"
    },

];

function mostraranimales() {
    let tarjeta = "";
    animales.forEach((animal) => {
        tarjeta += `<div  class="tarjeta" >
                       <img src="imagenes/${animal.Imagen}" alt="${animal.nombre}" />
                       <div class="texto">
                        <h2>${animal.Nombre}</h2>
                        <p>${animal.Descripcion}</p>

                       </div>
                       <div class="flecha">
                            <button type="button" onclick="redireccionperro('${animal.Nombre}')">
                                <img src="imagenes/flecha.png" alt="ver mas">
                            </button>
                       </div>
                    </div>`;
    });

    document.getElementById("perros").innerHTML = tarjeta
}

function redireccionperro(nombre) {
    localStorage.setItem("animalSeleccionado", nombre)
    window.location.href = "perrodetalle.html"
}

function cargarPerro() {
    const perroName = localStorage.getItem("animalSeleccionado");

    const newPerro = animales.filter((animal) => animal.Nombre == perroName);
    console.log(newPerro[0])
    document.getElementById("edad").innerHTML = newPerro[0].Edad;
    document.getElementById("meses").innerHTML = newPerro[0].Meses;
    document.getElementById("sexo").innerHTML = newPerro[0].Sexo;
    document.getElementById("vacunas").innerHTML = newPerro[0].Vacunas;
    document.getElementById("operaciones").innerHTML = newPerro[0].Operaciones;
    document.getElementById("dondeesta").innerHTML = newPerro[0].Dondeesta;
    document.getElementById("personal").innerHTML = newPerro[0].Personal;
    document.getElementById("nomperro").innerHTML = newPerro[0].Nombre;

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
let perrosOriginales = [...animales];

function filtrar1(filtro, valor, tipo) {
    if (tipo !== "perro") return;

    let f = valor.value;
    animales = perrosOriginales.slice();

    if (filtro === "Edad") {
        const edad = parseInt(f);
        if (edad === 1) {
            animales = animales.filter(perro =>
                perro.Meses !== "" && !isNaN(perro.Meses) &&
                perro.Meses > 0 && perro.Meses <= 6
            );
        } else if (edad === 2) {
            animales = animales.filter(perro =>
                perro.Edad !== "" && !isNaN(perro.Edad) &&
                perro.Edad >= 1 && perro.Edad <= 2
            );
        } else if (edad === 3) {
            animales = animales.filter(perro =>
                perro.Edad !== "" && !isNaN(perro.Edad) &&
                perro.Edad >= 3 && perro.Edad <= 6
            );
        } else if (edad === 4) {
            animales = animales.filter(perro =>
                perro.Edad !== "" && !isNaN(perro.Edad) &&
                perro.Edad >= 7
            );
        }
    }

    if (filtro === "Sexo") {
        animales = animales.filter(perro =>
            perro.Sexo &&
            perro.Sexo.trim().toLowerCase() === f.toLowerCase()
        );
    }

    mostraranimales();
}



let animales1 = [
    {
        Nombre: "Gina",
        Imagen: "Gina.jpg",
        Descripcion: "Con su elegancia natural y esos ojos que todo lo observan, Gina es puro misterio y encanto felino. Independiente, curiosa y con una personalidad única, llega silenciosa… y se queda para siempre en tu corazón.",
        Edad: 2,
        Meses: 0,
        Sexo: "Hembra",
        Vacunas: "Completas",
        Operaciones: "No Castrada",
        Dondeesta: "Familia de Transito",
        Personal: " Hola, soy Gina. Me gusta llegar en silencio y quedarme donde me siento en casa.Con mis ojos todo lo observo, y aunque parezca distante, solo estoy esperando encontrar a quien sepa mirar más allá. Soy curiosa, independiente y dueña demi propio mundo, pero cuando confío, me entrego con esa lealtad que solo los gatos sabemos dar. No me hace falta maullar fuerte para que me noten, porque mi presencia habla por sí sola. Si me das un rincón cálido, algo de tiempo y mucho cariño, tal vez te elija… y si lo hago, vas a descubrir que una vez que llego, me quedo para siempre.",
    },
    {
        Nombre: "Teo",
        Imagen: "teo.jpg",
        Descripcion: "Dueño de una mirada intensa y un estilo único, Teo combina elegancia felina con una pizca de misterio. Parece serio, pero cuando se relaja… ¡es puro mimo y ronroneo!",
        Edad: 1,
        Meses: 0,
        Sexo: "Macho",
        Vacunas: "Completas",
        Operaciones: "Castrado",
        Dondeesta: "Con nosotros",
        Personal: "¡Hola! Soy Teo. Sí, ese que te está mirando con cara de “¿y vos quién sos?”. No te preocupes, no es desconfianza, es curiosidad... mucha. Me gusta observarlo todo, escuchar hasta el más mínimo sonido, y decidir si vale la pena moverme de donde estoy cómodo. Soy juguetón, algo travieso, y tengo un talento especial para hacer reír incluso cuando no estoy intentando hacerlo. Si te gano con la mirada, ya está: vamos a llevarnos bien. Solo necesito una familia que entienda que mi energía es parte de mi encanto, y que cada maullido mío es una invitación a conocernos un poco más.",
    },
    {
        Nombre: "Keyla",
        Imagen: "Keyla.jpg",
        Descripcion: "Dueña de una mirada que impone y una elegancia natural, Keyla no necesita esforzarse para ser el centro de atención. Tranquila, observadora y con alma de reina,es la compañera perfecta para quienes saben apreciar el arte de vivir despacito… y con estilo.",
        Edad: 3,
        Meses: 0,
        Sexo: "Hembra",
        Vacunas: "Completas",
        Operaciones: "Esterilizada",
        Dondeesta: "Con nosotros",
        Personal: "Hola, soy Keyla. No necesito hacer ruido para que me notes, porque mi porte habla por sí solo. Tengo la calma de quien ha aprendido a observar antes de actuar, y la ternura de una gata que, cuando decide confiar, se entrega por completo. Me gusta descansar en superficies tibias, mirar por la ventana y hacerte compañía sin invadirte. No soy de grandes alardes, pero si me das un hogar donde reine la tranquilidad, voy a convertir cada rincón en un lugar más cálido. Soy la compañera perfecta para tardes de silencio y noches de ronroneo.",
    },
    {
        Nombre: "Oliver",
        Imagen: "Oliver.jpg",
        Descripcion: "Con sus ojazos atentos y pelaje de fuego, Oliver es pura curiosidad y ternura. Siempre listo para explorar, observar y sorprender, tiene un encanto único que mezcla travesura y dulzura a partes iguales. ¡Un verdadero pequeño gran explorador!",
        Edad: 0,
        Meses: 6,
        Sexo: "Macho",
        Vacunas: "Primer vacuna aplicada",
        Operaciones: "No Castrado",
        Dondeesta: "Con nosotros",
        Personal: "¡Hola! Me llamo Oliver y sí, soy ese pelirrojo que te está mirando con cara de “¿me llevás a casa?”. Soy chiquito todavía, pero tengo el corazón grande y muchas ganas de que alguien me elija. Me encanta explorar, jugar con todo lo que se mueva (¡y con lo que no también!), y si me das un poco de confianza, enseguida me acomodo en tu regazo. Soy de los que se meten en cajas, en mochilas, y en tu vida sin pedir permiso. Solo quiero crecer sabiendo que tengo un hogar donde me quieran como soy: curioso, dulce y lleno de energía."
    },
    {
        Nombre: "Timoteo",
        Imagen: "Timoteo.jpg",
        Descripcion: "Una bolita de ternura con mirada curiosa y cara de travieso profesional. Timoteo está listo para robar corazones, ¡y tal vez algún juguete también!",
        Edad: 0,
        Meses: 2,
        Sexo: "Macho",
        Vacunas: "No vacunado",
        Operaciones: "No Castrado",
        Dondeesta: "Familia de Transito",
        Personal: "¡Hola! Me llamo Timoteo, pero me podés decir Timo si ya me querés. Soy chiquito, sí... muy chiquito. Recién empiezo a conocer el mundo, y todo me parece enorme, suave y un poco misterioso. Me gusta perseguir sombras, esconderme detrás de las patas de los sillones y quedarme dormido en cualquier lugar donde haya calorcito y cariño. Todavía estoy aprendiendo a ser gato: a saltar sin caerte, a ronronear con intención, y a confiar de a poco. Solo necesito un lugar donde crecer con amor, y alguien que me cuide como parte de su manada."
    },
    {
        Nombre: "Menta",
        Imagen: "Menta.jpg",
        Descripcion: "Con esos ojos de asombro eterno y ese pelito de nube elegante, Menta parece salida de un cuento mágico. Curiosa, dulce y siempre atenta... ¡imposible no enamorarse de ella!",
        Edad: 0,
        Meses: 3,
        Sexo: "Hembra",
        Vacunas: "Primer vacuna aplicada",
        Operaciones: "No Castrada",
        Dondeesta: "Familia de Transito",
        Personal: "¡Miau! Soy Menta, una gatita curiosa, juguetona y muy amorosa. Tengo un pelaje suavecito y rayado, y unos ojazos que te van a enamorar al instante. Me encanta acurrucarme, mirar todo desde lo alto y hacer la croqueta en mantas suaves como esta rosada de lunares. Si estás buscando una compañera fiel, divertida y llena de ternura, ¡soy tu match perfecto! Me gusta jugar con pelotitas, dormir en lugares soleados y, por supuesto, ¡las caricias detrás de las orejas! Estoy lista para encontrar una familia que me ame tanto como yo los voy a amar."
    }
]

function mostraranimales1() {
    let tarjeta = "";
    animales1.forEach((animal) => {
        tarjeta += `<div  class="tarjeta" >
                       <img src="imagenes/${animal.Imagen}" alt="${animal.nombre}" />
                       <div class="texto">
                        <h2>${animal.Nombre}</h2>
                        <p>${animal.Descripcion}</p>
                       </div>
                       <div class="flecha">
                            <button type="button" onclick="redirecciongato('${animal.Nombre}')">
                                <img src="imagenes/flecha.png" alt="ver más">
                            </button>
                       </div>
                    </div>`;
    });

    document.getElementById("gatos").innerHTML = tarjeta
}

function redirecciongato(nombre) {
    localStorage.setItem("animalSeleccionado", nombre)
    window.location.href = "gatodetalle.html"
}

function cargarGato() {
    const gatoName = localStorage.getItem("animalSeleccionado");

    const newGato = animales1.filter((animal) => animal.Nombre == gatoName);
    console.log(newGato[0])
    document.getElementById("edad").innerHTML = newGato[0].Edad;
    document.getElementById("meses").innerHTML = newGato[0].Meses;
    document.getElementById("sexo").innerHTML = newGato[0].Sexo;
    document.getElementById("vacunas").innerHTML = newGato[0].Vacunas;
    document.getElementById("operaciones").innerHTML = newGato[0].Operaciones;
    document.getElementById("dondeesta").innerHTML = newGato[0].Dondeesta;
    document.getElementById("personal").innerHTML = newGato[0].Personal;
    document.getElementById("nomgato").innerHTML = newGato[0].Nombre;

    const img = document.getElementById("imggatos");
    img.src = "imagenes/" + newGato[0].Nombre + '.jpg';
    img.alt = newGato[0].Nombre;
    const img2 = document.getElementById("imggatos2");
    img2.src = "imagenes/" + newGato[0].Nombre + '2.jpg';
    img2.alt = newGato[0].Nombre;
    const img3 = document.getElementById("imggatos3");
    img3.src = "imagenes/" + newGato[0].Nombre + '3.jpg';
    img3.alt = newGato[0].Nombre

}
let gatosOriginales = [...animales1];
function filtrar(filtro, valor, tipo) {
    console.log("filtro activado");

    if (tipo == "gato") {
        let f = valor.value;
        console.log("valor recibido:", f);

        animales1 = gatosOriginales.slice();

        if (filtro == "Edad") {
            if (f == 1) {
                animales1 = animales1.filter(gato => gato.Meses > 0 && gato.Meses <= 6);
            }
            if (f == 2) {
                animales1 = animales1.filter(gato => gato.Edad >= 1 && gato.Edad <= 2);
            }
            if (f == 3) {
                animales1 = animales1.filter(gato => gato.Edad >= 3 && gato.Edad <= 6);
            }
            if (f == 4) {
                animales1 = animales1.filter(gato => gato.Edad >= 7);
            }
        }

        if (filtro == "Sexo") {
            if (f == "Macho") {
                animales1 = animales1.filter(gato => gato.Sexo === "Macho");
            }
            if (f == "Hembra") {
                animales1 = animales1.filter(gato => gato.Sexo === "Hembra");
            }
        }

        console.log("resultado filtrado:", animales1);
        mostraranimales1();
    }
}
