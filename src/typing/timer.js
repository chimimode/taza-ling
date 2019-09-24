export default class Timer {
  constructor() {
    this.state = {
      start: 0,
      end: 0,
      sentence: '',
      input: ''
    };

    this.start = () => {
      console.log('start');
      this.state.start = performance.now();
    };

    this.end = () => {
      console.log('end');
      this.state.end = performance.now();

      this.speed();
    };

    this.speed = () => {
      console.log(`speed : ${this.state.end - this.state.start} milliseconds`);
    };
  }

  set(option) {
    this.state.sentence = option.sentence;
    this.state.input = option.input;
  }

  start() {
    this.start();
  }

  end() {
    this.end();
  }

  speed() {
    this.speed();
  }
}
