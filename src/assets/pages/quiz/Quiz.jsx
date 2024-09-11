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
                <h1 className="quiz-header">Hola</h1>
                <p className="quiz-progress">Progreso del Quiz: {quiz.percentageQuizCompleted}%</p>
                <button onClick={onHandleButtonNext}>Siguiente</button>
            </div>
        </>
    );
};

export default Quiz;
