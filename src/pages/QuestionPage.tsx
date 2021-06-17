import Image from "next/image";
import {
  Button,
  Container,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import PageTitle from "ui/components/PageTitle/PageTitle";
import {
  FormElementsContainer,
  ButtonsContainer,
} from "@styles/pages/index.style";
import useQuestion from "data/hooks/pages/useQuestion.page";
import { useEffect, useState } from "react";
import { ApiService } from "data/services/ApiService";

export default function QuestionPage() {
  const {
    numberOfQuestions,
    setNumberOfQuestions,
    numberValid,
    searchQuestions,
    error,
    loading,
    questions,
    setQuestions,
  } = useQuestion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQuestions(JSON.parse(localStorage.getItem("formData")));
    }
  }, []);


  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div>
      {questions}
      <h2>a</h2>
      {questions.map((item, index) => (
        <li key={index}>
          <h2>{item.difficulty}</h2>
        </li>
      ))}
    </div>
  );
}
