new Vue({
    el: '#app',
    data: {
      questions: [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          correctAnswer: 0
        },
        {
          question: 'Which planet is known as the Red Planet?',
          options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
          correctAnswer: 1
        },
        // Add more questions here
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
  