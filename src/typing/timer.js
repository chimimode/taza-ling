export default class Timer {
  constructor() {
    this.state = {
      start: 0,
      end: 0,
      correct: 1
    };

    this.start = () => {
      this.state.start = performance.now();
    };

    this.end = () => {
      this.state.end = performance.now();
    };

    this.speed = () => {
      const seconds = (this.state.end - this.state.start) / 1000;
      return seconds / this.state.correct;
    };
  }

  set(option) {
    this.state.correct = option.correct;
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
