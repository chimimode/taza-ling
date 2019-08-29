import SENTENCE from '../static/sentence';
import 'bulma/css/bulma.css';

export default class TazaLing {
    constructor(option) {
        this.type = option.type;
        this.stage = option.stage;
    }

    practice() {
        console.log(SENTENCE.sample);
    }

    bind() {
        document.getElementById('sample').innerHTML = `
        <div class="control">
            <button class="button is-primary">Submit</button>
        </div>`;
    }
}

var tazaling = new TazaLing({
    option: {
        type: 'sample',
        stage: 1
    }
});
//console.log(document.getElementById('sample'))
tazaling.practice();
tazaling.bind();

