class YesNo {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

        getInfo () {
        return {
            id: 'YesNo',
            name: 'Yes/No',
            blocks: [
                {
                    opcode: 'yesno',
                    blockType: 'reporter',
                    text: 'yes or no',
                    arguments: {}
                }
            ]
        };
    }

    yesno (args) {
        //return args.TEXT.charAt(args.LETTER_NUM);
        return fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(response => response.answer);
    }
}
Scratch.extensions.register(new YesNo());
