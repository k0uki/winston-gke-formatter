import * as assert from 'assert';

import * as sample from '../src/index'

describe('Sample', ()=> {
    describe('my first ts test', ()=> {
        it('test', ()=> {
            console.log(sample.hello())
            assert.equal(true, true);
        });
    });
});