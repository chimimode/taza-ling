import Typing from './typing/typing';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bulma/css/bulma.css';

export default class TazaLing {
  constructor(option) {
    this.type = option.type;
    this.stage = option.stage;

    this.bind = () => {
      document.write(`<div id="tazaling"></div>`);
    };
  }

  start() {
    this.bind();

    const typing = new Typing({
      type: this.type,
      stage: this.stage
    });
    typing.start();
  }
}

const tazaling = new TazaLing({
  type: 'sample',
  stage: 1
});

tazaling.start();
