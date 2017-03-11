'use strict';

export default function Debuger() {
     'ngInject';

    return {
        log: log
    };

    function log (fire, msg) {
        if (fire) {
            console.log('Debuger: ', msg);
        }
    }   
}