import { useState, useMemo } from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";
import Router from "next/router";

export default function useIndex() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(""),
    numberValid = useMemo(() => {
      return ValidationService.numberOfQuestions(numberOfQuestions);
    }, [numberOfQuestions]),
    [error, setError] = useState(""),
    [searchOk, setSearchOk] = useState(false),
    [loading, setLoading] = useState(false),
    [questions, setQuestions] = useState([] as QuestionShortInterface[]);

  async function searchQuestions(numberOfQuestions: string) {
    setSearchOk(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        results: QuestionShortInterface[];
      }>("/api.php?amount=" + numberOfQuestions);
      setQuestions(data.results);
      setSearchOk(true);
      setLoading(false);
      Router.push("/QuestionPage");
    } catch (error) {
      setError("Não encontrado!" + error);
      setLoading(false);
    }
  }

  return {
    numberOfQuestions,
    setNumberOfQuestions,
    numberValid,
    searchQuestions,
    error,
    questions,
    searchOk,
    loading,
  };
}
