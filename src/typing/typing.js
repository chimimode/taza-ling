import SENTENCE from '../../static/sentence';

export default class Typing {
  constructor(option) {
    this.type = option.type;
    this.stage = option.stage;

    this.id = {
      sentence: 'tazaling-sentence',
      input: 'tazaling-sentence'
    }

    this.bind = () => {
      document.write(`
        <div id="${this.id.sentence}"></div>
        <div class="field">
          <div class="control">
            <input id="${this.id.input}" class="input is-large" type="text" placeholder="Large input">
          </div>
        </div>
      `);

      // TODO events 
      const input = document.getElementById(`${this.id.input}`);

      input.addEventListener('focus', (event) => {
        console.log(event);
        event.target.style.background = 'pink';    
      }, true);

    }
  }

  start() {
    this.bind();

    console.log('start!');
  }
}
