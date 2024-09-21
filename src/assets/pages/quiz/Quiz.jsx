import { useCallback } from "react"; // Importa el hook useCallback de React, usado para memorizar funciones y evitar recrearlas en cada render.
import useQuizStore from "../../../stores/use-quiz-store"; // Importa el hook personalizado useQuizStore, que gestiona el estado del quiz.
import "./Quiz.css"; // Importa los estilos del archivo CSS para este componente.
import Header from "../../../components/Header/Header"; // Importa el componente Header para mostrar en la parte superior.

const Quiz = () => {
    // Desestructuración para obtener el estado del quiz y la función para incrementar el progreso desde el store.
    const { quiz, incrementQuizProgress } = useQuizStore();

    // Memoriza la función onHandleButtonNext para evitar que se recree en cada render.
    const onHandleButtonNext = useCallback(() => {
        incrementQuizProgress(); // Incrementa el progreso del quiz cuando se hace clic en el botón "Siguiente".
    }, [incrementQuizProgress]); // La función solo se recrea si incrementQuizProgress cambia.

    return (
        <>
            <Header /> {/* Renderiza el componente Header al inicio */}
            <div className="quiz-container"> {/* Contenedor principal del quiz */}
                <h1 className="quiz-header">A poner a prueba tus conocimientos</h1> {/* Encabezado del quiz */}
                <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizCompleted}%</p> {/* Muestra el progreso del quiz en porcentaje */}
                <button className="next" onClick={onHandleButtonNext}>Siguiente</button> {/* Botón para avanzar al siguiente paso del quiz */}
            </div>
        </>
    );
};

export default Quiz; // Exporta el componente para ser utilizado en otras partes de la aplicación.
