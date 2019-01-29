
	function listaEstudiantes(){
		var tabla = "";
		tabla += '<table border="1">';
		tabla += '<tr>';
		tabla += '<th>CODIGO</th>';
		tabla += '<th>NOMBRE</th>';
		tabla += '<th>NOTA</th>';
		tabla += '<th>EDITAR</th>';
		tabla += '<th>ELEMINAR</th>';
		tabla += '</tr>';
		
		for(var i = 0; i < localStorage.length; i++){
			var identi1 = localStorage.key(i); //identificando
			var estudi = $.parseJSON(localStorage.getItem(identi1));//convirtiendo en cadena de caracteres
			tabla += '<tr>';
			tabla += '<td>'+estudi.id+'</td>';
			tabla += '<td>'+estudi.nombre+'</td>';
			tabla += '<td>'+estudi.nota+'</td>';
			tabla += '<td><button onclick="EditarNota(\''+estudi.id+'\');">Editar</button></td>';
			tabla += '<td><button onclick="EliminarNota(\''+estudi.id+'\');">Eliminar</button></td>';
			tabla += '</tr>';
		}
		
		tabla += "</table>";
		$("#mostrar").html(tabla);
	}
	
	function EditarNota(id){
		var nota1;
		
		for(var i=0;i<localStorage.length;i++){
			var codigo1 = localStorage.key(i);
			
			if(codigo1 == id){
				nota1 = $.parseJSON(localStorage.getItem(codigo1));
				
				//devuelve el valor en los input's
				$("#id").val(nota1.id);
				$("#nombre").val(nota1.nombre);
				$("#nota").val(nota1.nota);
			}
		}
	}
	
	function EliminarNota(id){
		localStorage.removeItem(id);
		listaEstudiantes();
	}
	
	///////// --------- BOTON GUARDAR ------------
	$(document).ready(function(){
		$("#registrar").click(function(){
			var id = $("#id").val();
			var nombre = $("#nombre").val();
			var nota = $("#nota").val();
			
			var estudiante = {
				id: id,
				nombre: nombre,
				nota: nota
			};
			
			localStorage.setItem(id,JSON.stringify(estudiante));
			listaEstudiantes();
			limpiar();
		});
		
		function limpiar(){
			$("#id").val("");
			$("#nombre").val("");
			$("#nota").val("");
		}
		
		//---------- BOTON PROMEDIO ---------
		$("#promedio").click(function(){
			var total = localStorage.length;
			var suma=0;
			
			for(var i = 0; i<total; i++){
				var codigo = localStorage.key(i);
				var notasEstu = $.parseJSON(localStorage.getItem(codigo));
				suma += parseFloat(notasEstu.nota);
			};
			var promedio = suma/total;
			alert("El Promedio es: "+promedio);
		});
		
		//------------- BOTON NOTA MAYOR -------------
		$("#notaMayor").click(function(){
			var total = localStorage.length;
			var mayor11;
			
			for(var i=0; i<total;i++){
				var codigo = localStorage.key(i);
				var notaMay = $.parseJSON(localStorage.getItem(codigo));
				if(notaMay.nota>codigo){
					mayor11 = parseFloat(notaMay.nota);
				}
			};
			alert("La Nota Mayor es:"+mayor11);
		});
		
		//--------------- BOTON NOTA MENOR ----------------
		$("#notaMenor").click(function(){
			var totalMenor = localStorage.length;
			var menor11;
			
			for(var i=0;i<localStorage.length;i++){
				var codigo1= localStorage.key(i);
				var notaMenor = $.parseJSON(localStorage.getItem(codigo1));
				var nota1 = parseFloat(notaMenor.nota);
				
				if(notaMenor.nota<codigo1){
					menor11 = nota1;
				}
			};
			alert("La Nota Menor es: "+menor11);
		});
		
		listaEstudiantes();
	});
	