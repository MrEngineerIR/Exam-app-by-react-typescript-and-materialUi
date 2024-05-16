import { ThemeProvider } from "@emotion/react";
import { Exam } from "./components/Exam";
import { Container, colors, createTheme } from "@mui/material";
import { ExamContextProvider } from "./store/Exam_Context_Store";
import { ExamResult } from "./components/ExamResult";
import { useState } from "react";
import questions from "./questions";
const ExamTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: colors.blue[700],
            "& .MuiSlider-thumb": {
              color: colors.blue[700],
            },
            "& .MuiSlider-rail": {
              color: colors.blue[700],
            },
            "& .MuiSlider-track": {
              color: colors.blue[700],
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: colors.blue[300],
          },
        },
      },
    },
  },
});

export default function App() {
  const [examFinished, setExamFinished] = useState<boolean>(false);
  return (
    <ThemeProvider theme={ExamTheme}>
      <Container maxWidth="md">
        <ExamContextProvider>
          {examFinished ? (
            <ExamResult />
          ) : (
            <Exam onExamFinish={() => setExamFinished(true)} />
          )}
        </ExamContextProvider>
      </Container>
    </ThemeProvider>
  );
}
