

        // =======Variables Globales======
        let iconos = []
        let selecciones = []

        let puntaje; 
        function actualizarPuntaje(){
            let divPuntaje = document.getElementById('puntaje');
            divPuntaje.textContent = 'Puntaje: ' + puntaje;
            console.log('actualizarPuntaje fue llamada, puntaje' + puntaje);
        }    
        generarTablero()

        // ========Los iconos estan dandos por una librería llamada Font Awesome, por lo que se debe tener acceso a internet para poder visualizar los iconos.=======
        function cargarIconos() {
            iconos = [
                '<img src="img/totalplay-tv.png" class="imagen-card"></img>',
                '<img src="img/75megas.png" class="imagen-card"></img>',
                '<img src="img/150megas.png" class="imagen-card"></img>',
                '<img src="img/300megas .png" class="imagen-card"></img>',
                '<img src="img/600Megas.png" class="imagen-card"></img>',
                '<img src="img/1000Megas.png" class="imagen-card"></img>',
                '<img src="img/totalplay-tv.png" class="imagen-card"></img>',
                '<img src="img/wifi-pro.png" class="imagen-card"></img>',
            ]
        }

        function generarTablero() {
            puntaje = 0; //Inicializar puntjae
            actualizarPuntaje(); //Actualizar puntaje en la pantalla
            cargarIconos()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 12; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones)
                selecciones = []
            }
        }

        function deseleccionar(selecciones) {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    trasera1.style.background = "plum"
                    trasera2.style.background = "plum"
                    puntaje += 1000; 
                    actualizarPuntaje();
                }
            }, 1000);
        }

        // =======Sistema de Puntaje========

     