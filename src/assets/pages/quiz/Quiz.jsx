import { useCallback } from "react";
import useQuizStore from "../../../stores/use-quiz-store";
import "./Quiz.css";
import Header from "../../../components/Header/Header";

const Quiz = () => {
    const { quiz, incrementQuizProgress } = useQuizStore();

    const onHandleButtonNext = useCallback(() => {
        incrementQuizProgress();
    }, [incrementQuizProgress]);

    return (
        <>
            <Header />
            <div className="quiz-container">
                <h1 className="quiz-header">A poner a prueba tus conocimientos</h1>
                <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizCompleted}%</p>
                <button className="next" onClick={onHandleButtonNext}>Siguiente</button>
            </div>
        </>
    );
};

export default Quiz;
