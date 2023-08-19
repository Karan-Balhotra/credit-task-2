new Vue({
    el: '#app',
    data: {
      questions: [
        {
          question: 'What is a Web- development language?',
          options: ['HTML', 'JAVA', 'GO', 'C++'],
          correctAnswer: 0
        },
        {
          question: 'Which one is the language used for styling purpose?',
          options: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON'],
          correctAnswer: 1
        },
        
      ],
      currentQuestionIndex: 0,
      score: 0
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      }
    },
    methods: {
      selectOption(selectedIndex) {
        if (selectedIndex === this.currentQuestion.correctAnswer) {
          this.score++;
        }
        
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.currentQuestionIndex = null;
        }
      }
    }
  });
  