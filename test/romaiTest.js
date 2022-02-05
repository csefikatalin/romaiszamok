const { test } = QUnit

QUnit.module('római számok', function (h) {
  
  
    test('létezik-e? ', function (assert) {
    assert.ok(romai, 'létezik a romai ')
  })
  test('függvény-e? ', function (assert) {
    assert.ok(typeof romai === 'function', 'létezik a romai és  fvény')
  })
  test('üres bemenet', function (assert) {
    assert.equal(romai(), '')
  })
  test('1-->I', function (assert) {
    assert.equal(tizalattiak(1), 'I')
  })
  test('2-->II', function (assert) {
    assert.equal(tizalattiak(2), 'II')
  })
  test('3-->III', function (assert) {
    assert.equal(tizalattiak(3), 'III')
  })
  test('4-->IV', function (assert) {
    assert.equal(tizalattiak(4), 'IV')
  })
  test('5-->V', function (assert) {
    assert.equal(tizalattiak(5), 'V')
  })
  test('6-->VI', function (assert) {
    assert.equal(tizalattiak(6), 'VI')
  })
  test('9-->IX', function (assert) {
    assert.equal(tizalattiak(9), 'IX')
  })
  test('10-->X', function (assert) {
    assert.equal(tizalattiak(10), 'X')
  })
  test('38-->XXXVIII', function (assert) {
    assert.equal(romai(38), 'XXXVIII')
  })
  test('19-->XIX', function (assert) {
    assert.equal(romai(19), 'XIX')
  })
  test('24-->XXIV', function (assert) {
    assert.equal(romai(24), 'XXIV')
  })
})
