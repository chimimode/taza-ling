import SENTENCE from '../static/sentence';

export default class Typing {
  constructor() {

    this.bind = () => {
      document.write(`
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="Large input">
        </div>
      </div>
      `);
    }
  }
}
