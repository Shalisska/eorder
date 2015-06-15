(function() {
	var results;
	this.assert = function assert (value, desc) {
		var li = document.createElement('li');
		li.className = value ? 'pass' : 'fail';
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if (!value) {
			li.parentNode.parentNode.className = 'fail';
		}
		return li;
	};
	
	this.test = function test(name, fn) {
		results = document.getElementById('results');
		results = assert(true, name).appendChild(document.createElement('ul'));
		fn();
	};
})();

window.onload = function () {
	test('A test.', function() {
		assert(true, 'First assert completed');
		assert(true, 'Second assert completed');
		assert(true, 'Third assert completed');
	});
	
	test('Another test.', function() {
		assert(true, 'First test completed');
		assert(false, 'Second test failed');
		assert(true, 'Third assert completed');
	});
	
	test('Next test.', function() {
		assert(null, 'Failed');
		assert(5, 'Pass');
	});
};