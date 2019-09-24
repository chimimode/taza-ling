import SENTENCE from '../../static/sentence';
import Timer from './timer';
import Cheker from './cheker';

export default class Typing {
  constructor(option) {
    this.type = option.type;
    this.stage = option.stage;

    this.id = {
      sentence: 'tazaling-sentence',
      input: 'tazaling-input',
      check: 'tazaling-check'
    };

    this.state = {
      start: false
    };

    this.bind = () => {
      const timer = new Timer();
      const cheker = new Cheker(`${this.id.check}`, `${SENTENCE.sample}`);

      document.write(`
        <div id="${this.id.sentence}">${SENTENCE.sample}</div>
        <div id="${this.id.check}"></div>
        <div class="field">
          <div class="control">
            <input id="${this.id.input}" class="input is-large" type="text" placeholder="입력">
          </div>
        </div>
      `);

      const input = document.getElementById(`${this.id.input}`);

      input.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';
      }, true);

      input.addEventListener('keydown', (event) => {
        if (!this.state.start) {
          this.state.start = true;
          timer.start();
        }

        // TODO check spells
        if (event.key === 'Enter') {
          timer.end();
          timer.speed();
        }
      });

      input.addEventListener('keyup', () => {
        // event.kdy === 'Backspace' 지우는거 체크..(keyCode대신 key쓰는걸로)
        cheker.spellCheck(input.value);
      });
    };
  }

  start() {
    this.bind();
  }
}
