function ShowForm(){
    document.getElementById("TFORM").style.display="flex";

}

function HideForm(){
    document.getElementById("TFORM").style.display="none";
}

//HREF BOTONES
var Prueb2 = document.getElementById("");

Prueb2.addEventListener("click", function() {
    window.location.href = "/index.html";
  });




function Reserva(){
    var Cd = document.getElementById("10");
    var V1 = document.getElementById("13");
    var Sv = document.getElementById("Extra");
    var S1 = document.getElementById("11");
    var S2 = document.getElementById("12");
    var Btn = document.getElementById("Btnn");
    var Mensaje = document.getElementById("SUB");
    var MTotal = document.getElementById("TOTAL");
    var Total=0, Opc = V1.value, Opc2 = Sv.value;

        //  1 Identificacion
    var Ide = document.getElementById("1").value;
    
        //  2 Nombre
    var Nom = document.getElementById('2');
    var TIPO_TEXTO = /^[a-zA-Z]+$/;

        //  3 Fecha
    const Fch = document.getElementById('3').value;
    const Fech = new Date(Fch);
    const Ano = Fech.getFullYear();

        //  8 Fecha Entrada
    const   FechaEntrada = document.getElementById("8").value;
    const   F_E = new Date(FechaEntrada);

        //  9 Fecha Salida
    const   FechaSalida  = document.getElementById("9").value;
    const   F_S = new Date(FechaSalida);


        //  5 Correo Electronico
    var Eml = document.getElementById('5');
    var TIPO_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //  6 Telefono
    var Tel=document.getElementById("6").value;


        //Inicio de Validaciones
    if(isNaN(parseInt(Ide)))
    alert("!! El campo Identificacion esta vacio !!");
    else if(Ide.length > 12)
    alert("!! La identificacion es mayor a 12 caracteres !!");
    else{
        if(Nom.value.trim() === '')
        alert("!! El Campo Nombre esta vacio !!")
        else if(!TIPO_TEXTO.test(Nom.value))
        alert("!! El Campo Nombre solo puede Contrener Letras !!");
        else{
            if(!Ano){   
            alert("!! Ingrese la fecha de nacimiento !!")
            }
            else{
                var EDAD = 2023 - Ano ;
                if(parseInt(EDAD) === 0 ){
                    alert("!! Fecha de nacimiento incorrecta !!")
                }
                else if(parseInt(EDAD) > 1 & parseInt(EDAD) < 18 ){
                    alert("!! Usted es menor de edad !!")
                    var MEdad = document.getElementById('eda');
                    MEdad.textContent ="Es menor de Edad: "+ EDAD + " Años";
                }
                else if (parseInt(EDAD) >= 18 ){
                    var MEdad = document.getElementById('eda');
                    MEdad.textContent = "Su Edad es "+ EDAD + " Años";
                }
                
                    if(Eml.value.trim() === '')
                        alert("!! El campo Email Esta Vacio  !!");
                    else if(!TIPO_EMAIL.test(Eml.value))
                        alert("El email es incorrecto");
                    else{
                        if(isNaN(parseInt(Tel)))
                            alert("!! El campo Celular es obligatorio (**Recuerde solo se aceptan numeros**)!!");
                        else if(Tel.length > 10)
                            alert("!! El numero de celular no puede exceder 10 digitos !!")
                        else{
                            if(isNaN(parseInt(Tel)))
                                alert("!! El campo Celular es obligatorio !!");
                            else if(Tel.length > 10)
                                alert("!! El numero de celular no puede exceder 10 digitos !!")
                            else{
                                if(Opc==="defecto" | Opc=="HBT"){
                                    alert("Debe Seleccionar una de las habitaciones!!!")
                                }
                                else{
                                    if (Opc === "HB1") {
                                        Total= 500000;
                                    } else if (Opc === "HB2") {
                                        Total= 300000;
                                    } else if (Opc === "HB3") {
                                        Total= 100000;
                                    }

                                    if(F_E <= F_S ){
                                        if(F_E - F_S != 0){
                                            var CDias = F_S - F_E;
                                            var TiempoDia = 1000*60*60*24;
                                            var TDias = CDias / TiempoDia;
                                            Cd.textContent="Dias a Hospedarse: "+ TDias;
                                            var PreTotal= Total;
                                            Total=PreTotal*TDias;
                                        }else{ 
                                            alert("Usted debe de hospedarse minimo 1 dia")
                                        }
                                    }else{
                                        alert("!! La Fecha de Entrada y Salida son erroneas !!");
                                    }

                                    if(Opc2 === "SV1"){
                                        Total=PreTotal*TDias + 150000;
                                    }else if(Opc2 === "SV2"){
                                        Total=PreTotal*TDias + 50000;
                                    }else if(Opc2 === "SV4"){
                                        Total=PreTotal*TDias +200000;
                                    }else if(Opc2 === "Sv3"){
                                        Total=PreTotal*TDias;
                                    }
                                    Mensaje.innerHTML= Total;
                                    MTotal.innerHTML = Total*0.19;
                                }
                            }   
                        }
                    }
                }
        }
    }
}


         //Variables de las habitaciones
var select = document.getElementById("13");
var imagen = document.getElementById("img1");
var imagen2= document.getElementById("img2");
var imagen3= document.getElementById("img3");
var imagen4= document.getElementById("img4");
var Ssv = document.getElementById("Extra");
var imagenesS1= document.getElementById("imgs1");
var imagenesS2= document.getElementById("imgs2");

        //Funcion para Ocultar
Ssv.addEventListener("change", function () {
    if(Ssv.value === "SDefecto"){
        imagenesS1.style.display="none";
        imagenesS2.style.display="none";
    }
    else if(Ssv.value === "SVTodos"){
        imagenesS1.style.display="inline-block";
        imagenesS2.style.display="inline-block";
    }
    else if(Ssv.value === "SV4"){
        imagenesS1.style.display="inline-block";
        imagenesS2.style.display="inline-block";
    }
    else if(Ssv.value === "SV1"){
        imagenesS1.style.display="inline-block";
        imagenesS2.style.display="none";
    }
    else if(Ssv.value === "SV2"){
        imagenesS1.style.display="none";
        imagenesS2.style.display="inline-block";
    }
});

        //Funcion para Ocultar/Mostrar imagenes
select.addEventListener("change", function () {
    if(select.value === "HBT"){
        imagen.style.display= "inline-block";
        imagen2.style.display= "inline-block";
        imagen3.style.display= "inline-block";
        imagen4.style.display= "inline-block";
    }
    else if (select.value === "HB1") {
        imagen.style.display = "block";
        imagen.style.textAlign= "center";

        imagen4.style.display = "none";
        imagen2.style.display = "none";
        imagen3.style.display = "none";
    } 
    else if(select.value === "HB2"){
        imagen2.style.display = "block";
        imagen2.style.textAlign= "center";

        imagen4.style.display = "none";
        imagen.style.display = "none";
        imagen3.style.display = "none";
    }
    else if(select.value === "HB3"){
        imagen3.style.display = "block";
        imagen3.style.textAlign= "center";

        imagen4.style.display = "none";
        imagen2.style.display = "none";
        imagen.style.display = "none";
    }
    else if(select.value === "HB4"){
        imagen4.style.display = "block";
        imagen4.style.textAlign= "center";

        imagen3.style.display = "none";
        imagen2.style.display = "none";
        imagen.style.display = "none";
    }
    else{
        imagen.style.display = "none";
        imagen2.style.display = "none";
        imagen3.style.display = "none";
        imagen4.style.display = "none";
    }
});




