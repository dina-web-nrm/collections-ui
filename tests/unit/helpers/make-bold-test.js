import { makeBold } from '../../../helpers/make-bold';
import { module, test } from 'qunit';

module('Unit | Helper | make bold');

test('Make entire string bold', function(assert) {
    let result = makeBold([42]);
    assert.equal(
        result.string,
        '<span class="make-bold ">42</span>'
    );
});

test('Match part of string', function(assert) {
    let result = makeBold(['test String'], {match: 'string'});
    assert.equal(
        result.string,
        'test <span class="make-bold ">String</span>'
    );
});

test('Match part of string and highlight', function(assert) {
    let result = makeBold(['test String'], {match: 'string', highlight: true});
    assert.equal(
        result.string,
        'test <span class="make-bold highlight">String</span>'
    );
});

test('Highlight entire string', function(assert) {
    let result = makeBold(['test String'], {highlight: true});
    assert.equal(
        result.string,
        '<span class="make-bold highlight">test String</span>'
    );
});
