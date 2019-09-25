export default class Cheker {
  constructor(sentence) {
    this.sentence = sentence;
    this.sentenceArray = this.sentence.split('');

    this.id = {
      typing: ''
    };

    this.state = {
      correct: 0
    };

    this.result = {
      size: this.sentence.length,
      correct: 0,
      accuracy: 0,
      text: []
    };

    this.check = (input) => {
      const inputArray = input.split('');

      // TODO 반복되는 초기화 막는 방법으로 바꿔보자
      this.result.text = [];

      inputArray.forEach((element, index) => {
        if (this.sentenceArray[index] === element) {
          this.result.text.push(`<span class="has-text-success">${element}</span>`);

          this.result.correct += 1;
        } else {
          this.result.text.push(`<span class="has-text-danger">${element}</span>`);
        }
      });
    };

    this.typing = (input) => {
      const inputArray = input.split('');
      // TODO 반복되는 초기화 막는 방법으로 바꿔보자
      this.result.text = [];

      inputArray.forEach((element, index) => {
        this.result.text.push(`<span class="has-text-${this.sentenceArray[index] === element ? 'success' : 'danger'}">${element}</span>`);
        // console.log(this.result.text)
      });
    };

    this.accuracy = () => {
      this.result.accuracy = this.state.correct / this.sentence.length;

      return this.result;
    };
  }

  spellCheck(input) {
    this.check(input);
  }

  typing(targetId, input) {
    console.log(`id:${targetId}`);
    this.id.typing = targetId;

    this.typing(input);
  }

  accuracy() {
    this.accuracy();
  }
}
