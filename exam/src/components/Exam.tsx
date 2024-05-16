import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, List, Typography } from "@mui/material";
import React, { useState } from "react";
import questions from "../questions.js";
import Answers from "./Answers.js";

export const Exam: React.FC<{ onExamFinish(): void }> = ({
  onExamFinish,
}): React.ReactNode => {
  const [turn, setTrun] = useState<number>(0);
  function incTurn(step: number) {
    const newTurn = turn + step;
    if (newTurn >= questions.length || newTurn < 0) return;
    setTrun(newTurn);
  }

  return (
    <Card
      sx={{
        minWidth: 600,
        maxWidth: 800,
        marginTop: 10,
        minHeight: 300,
        justifyItems: "center",
      }}
    >
      <CardContent>
        <Typography
          sx={{ display: "grid", justifyContent: "center" }}
          variant="h5"
        >
          {questions[turn].text}
        </Typography>
        <List>
          <Answers currentQ={turn} nextQ={() => incTurn(1)} />
        </List>
      </CardContent>
      <Box sx={{ marginLeft: 3 }}>
        <Button disabled={turn <= 0} onClick={() => incTurn(-1)}>
          <Typography variant="subtitle2">previous</Typography>
        </Button>
        <Button
          disabled={turn >= questions.length - 1}
          onClick={() => incTurn(1)}
        >
          <Typography variant="subtitle2">next</Typography>
        </Button>
        {turn >= questions.length - 1 && (
          <Button
            onClick={() => onExamFinish()}
            sx={{ display: "inline-flex", marginLeft: 10 }}
          >
            Finished
          </Button>
        )}
      </Box>
    </Card>
  );
};
