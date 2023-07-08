const lugares = [
    { nombre: "Playa del Sol", visitas: 300, calificacion: 4 },
    { nombre: "Montaña del Águia", visitas: 1200, calificacion: 7 },
    { nombre: "Bosque Verde", visitas: 100, calificacion: 2 }
  ];
  
  // Filtrar lugares con más de 250 visitas
  const lugaresPopulares = lugares.filter(lugar => lugar.visitas > 250);
  
  // Aumentar la calificación en +1 para lugares populares
  const lugaresMejorados = lugaresPopulares.map(lugar => ({
    ...lugar,
    calificacion: lugar.calificacion + 1
  }));
  
  // Calcular la calificación media de los lugares mejorados
  const calificacionMedia = lugaresMejorados.reduce(
    (total, lugar) => total + lugar.calificacion,
    0
  ) / lugaresMejorados.length;
  
  // Obtener el elemento del HTML donde se mostrará el resultado
  const resultadoElement = document.getElementById("resultado");
  
  // Crear elementos HTML para cada lugar mejorado y agregarlos al resultadoElement
  lugaresMejorados.forEach(lugar => {
    const lugarElement = document.createElement("div");
    lugarElement.innerHTML = `
      <p><strong>Nombre:</strong> ${lugar.nombre}</p>
      <p><strong>Visitas:</strong> ${lugar.visitas}</p>
      <p><strong>Calificación:</strong> ${lugar.calificacion}</p>
      <hr>
    `;
    resultadoElement.appendChild(lugarElement);
  });
  
  // Mostrar la calificación media en el resultadoElement
  const calificacionMediaElement = document.createElement("p");
  calificacionMediaElement.innerHTML = `<strong>Calificación media:</strong> ${calificacionMedia}`;
  resultadoElement.appendChild(calificacionMediaElement);