import React, { createContext, useState } from "react";

type ExamContex = {
  answers: Answer[];
  handleAnswer: any;
};

type Answer = {
  QuestionId: string;
  text: string;
};
const ExamContext = createContext<ExamContex>({
  answers: [
    {
      QuestionId: "undefined",
      text: "undefined",
    },
  ],
  handleAnswer: () => {},
});

export default ExamContext;

export const ExamContextProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  function handleClickAnswer(answer: Answer) {
    const doesAnswerExist = selectedAnswers.some(
      (item) => item.QuestionId === answer.QuestionId
    );

    if (!doesAnswerExist) {
      setSelectedAnswers((prev) => [
        ...prev,
        { QuestionId: answer.QuestionId, text: answer.text },
      ]);
      return;
    }

    setSelectedAnswers((selectedAnswers) =>
      selectedAnswers.map((selectedAnswer) =>
        selectedAnswer.QuestionId === answer.QuestionId
          ? { ...selectedAnswer, text: answer.text }
          : selectedAnswer
      )
    );
  }

  return (
    <ExamContext.Provider
      value={{
        answers: selectedAnswers,
        handleAnswer: handleClickAnswer,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};
