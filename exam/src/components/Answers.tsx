import { ListItemButton } from "@mui/material";
import Questions from "../questions.js";
import React, { useContext } from "react";
import ExamContext from "../store/Exam_Context_Store.js";

const questionsWithRandomizedAnswers = Questions.map((question) => ({
  ...question,
  answers: [...question.answers].sort(() => 0.5 - Math.random()),
}));

const Answers: React.FC<{
  currentQ: number;
  nextQ(): void;
}> = ({ currentQ, nextQ }) => {
  const { answers, handleAnswer } = useContext(ExamContext);

  const currentQuestion = questionsWithRandomizedAnswers?.[currentQ];
  return currentQuestion.answers.map((answer) => {
    const selectedAnswer = answers.find(
      (answer) => answer.QuestionId === currentQuestion.id
    );
    return (
      <ListItemButton
        selected={answer === (selectedAnswer?.text ?? "undefind")}
        key={answer}
        onClick={() => {
          nextQ();
          handleAnswer({ QuestionId: currentQuestion.id, text: answer });
        }}
      >
        {answer}
      </ListItemButton>
    );
  });
};
export default Answers;
