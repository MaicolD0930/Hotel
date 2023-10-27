function ShowForm(){
    document.getElementById("TFORM").style.display="flex";

}

function HideForm(){
    document.getElementById("TFORM").style.display="none";
}




function Reserva(){
    var Cd = parseInt(document.getElementById("10").value);
    var V1 = document.getElementById("13");
    var S1 = document.getElementById("11");
    var S2 = document.getElementById("12");
    var Btn = document.getElementById("Btnn");
    var Mensaje = document.getElementById("SUB");
    var MTotal = document.getElementById("TOTAL");
    var Total=0, Opc = V1.value;

        //  1 Identificacion
    var Ide = document.getElementById("1").value;
    
        //  2 Nombre
    var Nom = document.getElementById('2');
    var TIPO_TEXTO = /^[a-zA-Z]+$/;

        //  3 Fecha
    const Fch = document.getElementById('3').value;
    const Fech = new Date(Fch);
    const Ano = Fech.getFullYear();

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
                if(parseInt(EDAD) < 18 ){
                    var MEdad = document.getElementById('eda');
                    MEdad.textContent ="Es menor de Edad: "+ EDAD + " Años";
                }
                else if (parseInt(EDAD) >= 18 ){
                    var MEdad = document.getElementById('eda');
                    MEdad.textContent = "Su Edad es "+ EDAD + " Años";
                }
                
                    if(Eml.value.trim() === '')
                        alert("!! El campo Email Esta Vacio !!");
                    else if(!TIPO_EMAIL.test(Eml.value))
                        alert("El email es incorrecto");
                    else{
                        if(isNaN(parseInt(Tel)))
                            alert("!! El campo Celular es obligatorio !!");
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


                                    if(isNaN(Cd))
                                        alert("No se puede calcular el valor a pagar, MINIMO debe ingresar la cantidad de noches");
                                        else{
                                            Btn.addEventListener("click", function() {
                                                if (S1.checked && S2.checked) {
                                                    Total=Total*Cd + 200000 ;
                                                    Mensaje.innerHTML = "Total: " + Total;
                                                    Total =Total + Total*0.19;
                                                    MTotal.innerHTML = Total;
                                                }
                                                else if(S1.checked ){
                                                    Total=Total*Cd + 150000;
                                                    Mensaje.innerHTML = "Total: " + Total;
                                                    Total =Total + Total*0.19;
                                                    MTotal.innerHTML = Total;
                                                }
                                                else if (S2.checked){
                                                    Total=Total*Cd + 50000;
                                                    Mensaje.innerHTML = "Total: " + Total;
                                                    Total =Total + Total*0.19;
                                                    MTotal.innerHTML = Total;
                                                }
                                                else{
                                                    Total=Total*Cd;
                                                    Mensaje.innerHTML = "Total: " + Total;
                                                    Total =Total + Total*0.19;
                                                    MTotal.innerHTML = Total;
                                                }
                                            });
                                        }
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




