function useless(callback) {return callback();}

var text = 'Domo arigato!';

test('Arig', function() {
	assert(useless(function() {return text;}) === text, 'Works - ' + text);
});

//порядок объявления функции и ее настоящее имя
function isNimble() {return true;}
test('isNimble', function() {
	assert(typeof window.isNimble === 'function', 'defined');
	assert(isNimble.name === 'isNimble', 'it has name');
});

var canFly = function() {return true;}
test('canFly', function() {
	assert(typeof window.canFly === 'function', 'defined');
	assert(canFly.name === '', 'it has no name');
});

window.isDeadly = function() {return true}
test('isDeadly', function() {
	assert(typeof window.isDeadly === 'function', 'defined');
	assert(isDeadly.name === '', 'it has no name');
});

function outer() {
	test('inner before', function() {
		assert(typeof inner === 'function', 'func in scope before declaration');
	});
	
	function inner() {}
	
	test('inner after', function() {
		assert(typeof inner === 'function', 'func in scope after declaration');
		assert(window.inner === undefined, 'func not in global scope');
	});
}

outer();

test('inner global', function() {
	assert(window.inner === undefined, 'func not in global scope');
});

window.wieldSword = function swingsSword() {return true;}
test('swingsSword', function() {
	assert(window.wieldSword.name === 'swingsSword', 'swingsSword is real name');
});