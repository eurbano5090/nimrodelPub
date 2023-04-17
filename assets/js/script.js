function mostrar(){ 
    document.querySelector("#comunica").style.display="block"}
function mostrar2(){ 
        document.querySelector("#reserva").style.display="block"}



$(document).ready(function(){
    $("#comunica").submit(function(evento){
        evento.preventDefault();

  var name=$("#name").val();
  var mail=$("#correo").val();
  var phone=$("#phone").val();
  var motivo=$("#motivo").val();
  var textarea1=$("#hora").val();
  var textarea=$("#textarea1").val();
  console.log(phone)

   if(name==""){
    console.log(name)
    alert('el campo nombre no  puede estar vacio')
  }else if(mail=="" || mail==null){
    alert('el campo correo es obligatorio')
  }else if(phone==""){
    alert('el campo telefono es obligatorio')
  }else if(motivo==""){
    alert('el campo fecha es necesario')
  }else if(textarea=="" ){
    alert('el campo hora es obligatorio')
  }

   $("#comunica").submit(function(){
    alert('Muchas Gracias '+ name +' Hemos registrado sus '+
    motivo +' y enviaremos una respuesta al correo ' + mail

     +'. Gracias por preferirnos.')
    });

    })
})


 $(document).ready(function(){
  $("#reserva").submit(function(evento){
    evento.preventDefault();

  var nombre=$("#nombre").val();
  var correo=$("#email").val();
  var telefono=$("#telefono").val();
  var fecha=$("#fecha").val();
  var hora=$("#hora").val();
  var asistentes=$("#cant_asistentes").val();
  console.log(telefono)

  if(nombre==""){
    console.log(nombre)
    alert('el campo nombre no  puede estar vacio')
  }else if(correo=="" || correo==null){
    alert('el campo correo es obligatorio')
  }else if(telefono==""){
    alert('el campo telefono es obligatorio')
  }else if(fecha==""){
    alert('el campo fecha es necesario')
  }else if(hora=="" ){
    alert('el campo hora es obligatorio')
  }else if(asistentes==""){
    alert('el campo cantidad de asistentes es obligatorio')
  }

  $("#reserva").submit(function(){
    alert('Estimado '+nombre +' agradecemos confirmar con nosotros. Hemos registrado '+
     asistentes+' asistentes, Se ha enviado el codigo de confirmacion al correo ' + correo
     +'. Gracias por preferirnos.')})

     
    
    })


});

  
