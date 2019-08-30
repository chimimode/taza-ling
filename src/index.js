import Typing from '../src/typing';
import 'bulma/css/bulma.css';

export default class TazaLing {
    constructor(option) {
        this.type = option.type;
        this.stage = option.stage;

        this.button = () => {
            document.write(`
                <section class="section">
                    <div class="container">
                        <a class="button is-primary is-rounded is-large">시작하기!</a>
                    </div>
                </section>
            `);
        };

        this.bind = () => {
            document.write(`
            <section class="section">
                start
            </section>
            `);
        };
    }

    practice() {
        console.log(SENTENCE.sample);
    }
}

const tazaling = new TazaLing({
    option: {
        type: 'sample',
        stage: 1
    }
});
//console.log(document.getElementById('sample'))
tazaling.practice();
tazaling.button();
//tazaling.bind();
