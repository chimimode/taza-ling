import SENTENCE from './sentence';
import 'bulma/css/bulma.css';

class test {

}

class TazaLing {
    constructor(option) {
        this.type = option.type;
        this.stage = option.stage;
    }

    practice() {
        return SENTENCE.sample;
    }
}

console.log(SENTENCE);
