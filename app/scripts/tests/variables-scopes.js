test('Before outer', function(){
	assert(typeof outer === 'function', 'outer() is in scope');
	assert(typeof inner === 'function', 'inner() is in scipe');
	assert(typeof a === 'number', 'a is in scope');
	assert(typeof b === 'number', 'b is in scope');
	assert(typeof c === 'number', 'c is in scope');
});

function outer() {
	
	test('Inside outer, before a', function(){
		assert(typeof outer === 'function', 'outer() is in scope');
		assert(typeof inner === 'function', 'inner() is in scipe');
		assert(typeof a === 'number', 'a is in scope');
		assert(typeof b === 'number', 'b is in scope');
		assert(typeof c === 'number', 'c is in scope');
	});
	
	var a = 1;
	
	test('Inside outer, after a', function(){
		assert(typeof outer === 'function', 'outer() is in scope');
		assert(typeof inner === 'function', 'inner() is in scipe');
		assert(typeof a === 'number', 'a is in scope');
		assert(typeof b === 'number', 'b is in scope');
		assert(typeof c === 'number', 'c is in scope');
	});
	
	function inner() {}
	
	var b = 2;
	
	test('Inside outer, after inner() and b', function(){
		assert(typeof outer === 'function', 'outer() is in scope');
		assert(typeof inner === 'function', 'inner() is in scipe');
		assert(typeof a === 'number', 'a is in scope');
		assert(typeof b === 'number', 'b is in scope');
		assert(typeof c === 'number', 'c is in scope');
	});
	
	if (a == 1) {
		
		var c = 3;
		
		test('Inside outer, inside if', function(){
			assert(typeof outer === 'function', 'outer() is in scope');
			assert(typeof inner === 'function', 'inner() is in scipe');
			assert(typeof a === 'number', 'a is in scope');
			assert(typeof b === 'number', 'b is in scope');
			assert(typeof c === 'number', 'c is in scope');
		});	
	}
	
	test('Inside outer, outside if', function(){
		assert(typeof outer === 'function', 'outer() is in scope');
		assert(typeof inner === 'function', 'inner() is in scipe');
		assert(typeof a === 'number', 'a is in scope');
		assert(typeof b === 'number', 'b is in scope');
		assert(typeof c === 'number', 'c is in scope');
	});	
	
}
outer();

test('After outer', function(){
		assert(typeof outer === 'function', 'outer() is in scope');
		assert(typeof inner === 'function', 'inner() is in scipe');
		assert(typeof a === 'number', 'a is in scope');
		assert(typeof b === 'number', 'b is in scope');
		assert(typeof c === 'number', 'c is in scope');
	});	