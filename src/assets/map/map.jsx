import Header from "../../components/Header/Header"; // Importa el componente Header de la ruta especificada
import "./map.css"; // Importa el archivo de estilos CSS para este componente
import React, { useEffect, useRef } from 'react'; // Importa React y los hooks useEffect y useRef

// Componente principal para el lienzo de hojas que caen
const FallingLeavesCanvas = () => {
  const canvasRef = useRef(null); // Crea una referencia para el elemento canvas

  useEffect(() => { // Hook que se ejecuta después de que el componente se monta
    const canvas = canvasRef.current; // Obtiene el elemento canvas a través de la referencia
    const ctx = canvas.getContext('2d'); // Obtiene el contexto 2D del canvas
    const particles = []; // Array para almacenar las partículas (hojas)
    let spawnTimer = 0; // Temporizador para controlar la creación de partículas
    const spawnInterval = 50; // Aumenta el intervalo de tiempo entre la creación de nuevas partículas (de 30 a 50)
    const maxParticles = 100; // Establece el número máximo de partículas en el canvas
    const gravityStrength = 10; // Fuerza de gravedad para atraer las partículas hacia el ratón
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, out: false }; // Objeto para rastrear la posición del ratón

    // Función para redimensionar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth; // Establece el ancho del canvas
      canvas.height = window.innerHeight; // Establece la altura del canvas
    };

    // Función para manejar el movimiento del ratón
    const onMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY, out: false }; // Actualiza la posición del ratón
    };

    // Función para manejar cuando el ratón sale del área del canvas
    const onMouseOut = () => {
      mouse.out = true; // Marca que el ratón ha salido del canvas
    };

    // Función para crear una nueva partícula
    const createParticle = () => {
      if (particles.length < maxParticles) { // Verifica si el número de partículas es menor que el máximo
        const isBright = Math.random() > 0.5; // Determina aleatoriamente si la partícula es brillante o no
        particles.push({ // Agrega una nueva partícula al array
          x: mouse.x, // Posición X inicial en la posición del ratón
          y: mouse.y, // Posición Y inicial en la posición del ratón
          // Reduce las velocidades para hacer que las partículas se muevan más lentamente
          xv: isBright ? 4 * Math.random() - 2 : 6 * Math.random() - 3, // Velocidad horizontal más lenta
          yv: isBright ? 4 * Math.random() - 2 : 6 * Math.random() - 3, // Velocidad vertical más lenta
          color: isBright
            ? `rgb(255, ${Math.floor(200 * Math.random())}, ${Math.floor(80 * Math.random())})` // Color brillante aleatorio
            : 'rgb(255, 255, 255)', // Color blanco para partículas no brillantes
          size: isBright ? 5 + 10 * Math.random() : 1, // Tamaño aleatorio de la partícula
          alpha: 1, // Opacidad inicial de la partícula
        });
      }
    };

    // Función para actualizar la posición y estado de las partículas
    const updateParticles = () => {
      particles.forEach((p, index) => { // Itera sobre cada partícula
        if (!mouse.out) { // Si el ratón no ha salido del canvas
          const dx = mouse.x - p.x; // Calcula la diferencia en X
          const dy = mouse.y - p.y; // Calcula la diferencia en Y
          const distance = Math.max(100, dx * dx + dy * dy); // Calcula la distancia al ratón
          const attraction = gravityStrength / distance; // Calcula la atracción hacia el ratón
          p.xv = (p.xv + attraction * dx) * 0.99; // Actualiza la velocidad X
          p.yv = (p.yv + attraction * dy) * 0.99; // Actualiza la velocidad Y
        }
        p.x += p.xv; // Actualiza la posición X de la partícula
        p.y += p.yv; // Actualiza la posición Y de la partícula
        p.alpha *= 0.99; // Reduce la opacidad de la partícula para simular desvanecimiento

        // Elimina partículas que han desvanecido
        if (p.alpha <= 0.01) particles.splice(index, 1);
      });
    };

    // Función para dibujar las partículas en el canvas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
      particles.forEach((p) => { // Itera sobre cada partícula
        ctx.globalAlpha = p.alpha; // Establece la opacidad de la partícula
        ctx.fillStyle = p.color; // Establece el color de la partícula
        ctx.beginPath(); // Comienza un nuevo camino para el dibujo
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI); // Dibuja un círculo para la partícula
        ctx.fill(); // Rellena el círculo
      });
    };

    // Función principal de animación
    const animate = (timestamp) => {
      if (!mouse.out) { // Si el ratón no ha salido del canvas
        spawnTimer += timestamp ? timestamp / 16 : 0; // Incrementa el temporizador de creación de partículas
        while (spawnTimer > spawnInterval) { // Crea nuevas partículas según el temporizador
          createParticle(); // Crea una nueva partícula
          spawnTimer -= spawnInterval; // Reduce el temporizador
        }
      }

      updateParticles(); // Actualiza la posición de las partículas
      drawParticles(); // Dibuja las partículas en el canvas
      requestAnimationFrame(animate); // Solicita la siguiente animación
    };

    resizeCanvas(); // Inicializa el tamaño del canvas
    window.addEventListener('resize', resizeCanvas); // Escucha cambios en el tamaño de la ventana
    document.addEventListener('mousemove', onMouseMove); // Escucha el movimiento del ratón
    document.addEventListener('mouseout', onMouseOut); // Escucha cuando el ratón sale del canvas
    requestAnimationFrame(animate); // Comienza la animación

    // Cleanup: elimina los listeners al desmontar el componente
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []); // Dependencias vacías para que se ejecute solo al montar y desmontar

  return (
    <canvas
      ref={canvasRef} // Asocia el canvas a la referencia
      style={{
        position: 'absolute', // Posición absoluta para cubrir toda la pantalla
        top: 0, // Posición superior en 0
        left: 0, // Posición izquierda en 0
        width: '100%', // Ancho completo
        height: '100%', // Altura completa
        pointerEvents: 'none', // Permite que los eventos pasen a través del lienzo
      }}
    />
  );
};

// Componente principal que contiene el mapa y el lienzo de hojas
const Map = () => {
  return (
    <>
      <Header /> 
      <div className="App"> 
        <h1>MAPA</h1> 
        <div className="scroll-box"> 
          <p>
            Desarrollo de una aplicación web interactiva que busca concientizar sobre problemáticas ambientales en Yumbo, utilizando un entorno virtual con un NPC de diálogos predeterminados. El proyecto se enfocará en la implementación de funcionalidades que permitan la interacción del usuario y la simulación de escenarios que reflejen el impacto ambiental.
          </p>
          <p>Aquí puedes añadir más texto para que el cuadro necesite desplazarse.</p>
          <p>Puedes seguir añadiendo más texto para demostrar cómo funciona el desplazamiento dentro del cuadro.</p>
          <p>Continuar agregando más contenido aquí.</p>
        </div>
      </div>
      <FallingLeavesCanvas /> 
    </>
  );
};

export default Map; // Exporta el componente Map como predeterminado
