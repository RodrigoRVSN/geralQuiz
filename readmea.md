export default function useIndex() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(""),
    [totalNumber, setTotalNumber] = useState(""),
    numberValid = useMemo(() => {
      return ValidationService.numberOfQuestions(numberOfQuestions);
    }, [numberOfQuestions]),
    [error, setError] = useState(""),
    [searchOk, setSearchOk] = useState(false),
    [loading, setLoading] = useState(false),
    [questions, setQuestions] = useState([] as QuestionShortInterface[]),
    [score, setScore] = useState([]),
    [selected, setSelected] = useState([]),
    [submitted, setSubmitted] = useState(false);

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
    } catch (error) {
      setError("Não encontrado!" + error);
      setLoading(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(questions));
  }, [questions]);

  return {
    numberOfQuestions,
    setNumberOfQuestions,
    numberValid,
    searchQuestions,
    error,
    questions,
    setQuestions,
    searchOk,
    loading,
    score,
    setScore,
    selected,
    setSelected,
    submitted,
    setSubmitted,
  };
}
