export default class Cheker {
  constructor(targetId, sentence) {
    this.id = targetId;
    this.sentence = sentence;
    this.sentenceText = this.sentence.split('');
    this.returnText = [];

    this.check = (input) => {
      const inputText = input.split('');

      // TODO 반복되는 초기화 막는 방법으로 바꿔보자
      this.returnText = [];

      inputText.forEach((element, index) => {
        this.returnText.push(`<span class="has-text-${this.sentenceText[index] === element ? 'success' : 'danger'}">${element}</span>`);
      });

      document.getElementById(`${this.id}`).innerHTML = this.returnText.join('');
    };

    this.accuracy = () => {
      console.log('percent');

      document.getElementById(`${this.id}`).append();
    };
  }

  spellCheck(input) {
    this.check(input);
  }

  accuracy() {
    this.accuracy();
  }
}
