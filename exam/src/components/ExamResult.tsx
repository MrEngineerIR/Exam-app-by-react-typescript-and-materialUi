import { List, ListItem, Paper, Typography, colors } from "@mui/material";
import React, { useContext } from "react";
import Questons from "../questions";
import ExamContext from "../store/Exam_Context_Store";
export const ExamResult: React.FC<{}> = ({}): React.ReactNode => {
  const { answers } = useContext(ExamContext);
  type Answer = {
    QuestionId: string;
    text: string;
  };
  const trueAnswerd = answers.filter((answer) =>
    Questons.find((question) => answer.text === question.answers[0])
  );

  return (
    <Paper sx={{ display: "grid", justifyItems: "center" }}>
      <Typography sx={{ backgroundColor: colors.amber[500] }} variant="h1">
        Exam Finished
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginBottom: 3 }}
      >{`You answer ${answers.length} question and ${trueAnswerd.length} of them was true`}</Typography>
      <Typography variant="subtitle2">{`your score is :${Math.round(
        (trueAnswerd.length / Questons.length) * 100
      )}%`}</Typography>
      <List>
        {Questons.map((question) => {
          return (
            <ListItem key={question.text} sx={{ display: "block" }}>
              <Typography variant="h6">{` Answer of\n:(${question.text}) is:`}</Typography>

              <Typography variant="subtitle1">{question.answers[0]}</Typography>
              <Typography variant="subtitle2">{`your answer was :${
                answers.find((answer) => answer.QuestionId === question.id)
                  ?.text ?? "you didnt answerd this question"
              }`}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
