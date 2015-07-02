function in_array(value, array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] == value) return true;
  }
  return false;
};

function retina_cr(retina) {
  var arr = []
  arr.push({size: '1', img_size: retina.x1});
  arr.push({size: '1.5', img_size: retina.x15});
  arr.push({size: '2', img_size: retina.x2});
  arr.push({size: '3', img_size: retina.x3});
  return arr;
};

function dest_cr(dir, width, retina) {  
  var width_r;
  
  if(width == 0) {
    width_r = '';
  } else {
    width_r = width;
  }
  
  var src = dir + '/**/*@' + retina.img_size + '.png';
  var dest = 'spec/sprite' + width_r + '/sprite@' + retina.size;
  
  return {src: src, dest: dest};
};

function dest_build(dir, dests) {
  var array = [];
  for (var k=0; k<dests.length; k++) {
    var dest = dests[k];
    var item = retina_cr(dest.retina);    

    for(var j=0; j<dest.width.length; j++) {
      var width_r = dest.width[j];
      var arr = [];

      if(!(in_array(width_r, width_arr))) {
        width_arr.push(width_r);
      }

      for(var i=0; i<item.length; i++) {
        arr.push(dest_cr(dir, width_r, item[i]));
      }

      var obj = {width: width_r, arr};
      array.push(obj);
    }
  }
  return array;
};

function width_cr(width, array) {
  var a = [];
  
  a.push(width);
  for(var i=0; i<array.length; i++) {
    a = a.concat(array[i]);
  }
  return a;
};


//-------------//
var width_arr = [];

function in_array(value, array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] == value) return true;
  }
  return false;
};


var workmap = {
	img_dir: 'workmap',
	dest: [{
		width: ['0'],
		retina: { x1: '202', x15: '303', x2: '404', x3: '606'}
	}, {
		width: ['991'],
		retina: { x1: '126', x15: '189', x2: '252', x3: '378'}
	}, {
		width: ['767'],
		retina: { x1: '86', x15: '129', x2: '172', x3: '258'}
	}]
};
	
var action_controls = {
	img_dir: 'sprite/action-order-controls',
	dest: [{
		width: ['0', '991', '767'],
		retina: { x1: '202', x15: '303', x2: '404', x3: '606'}
	}]
};



var dest_obj = {
		width: ['0', '991', '767', '2'],
		retina: { x1: '202', x15: '303', x2: '404', x3: '606'}
	}


function retina_cr(retina) {
  var arr = []
  arr.push({size: '1', img_size: retina.x1});
  arr.push({size: '1.5', img_size: retina.x15});
  arr.push({size: '2', img_size: retina.x2});
  arr.push({size: '3', img_size: retina.x3});    
  return arr;
};


function dest_cr(dir, width, retina) {  
  var width_r;
  
  if(width == 0) {
    width_r = '';
  } else {
    width_r = width;
  }
  
  var src = dir + '/**/*@' + retina.img_size + '.png';
  var dest = 'spec/sprite' + width_r + '/sprite@' + retina.size;
  
  return {src: src, dest: dest};
};



function dest_build(dir, dests) {
  var array = [];
  for (var k=0; k<dests.length; k++) {
    var dest = dests[k];
    var item = retina_cr(dest.retina);    

    for(var j=0; j<dest.width.length; j++) {
      var width_r = dest.width[j];
      var arr = [];

      if(!(in_array(width_r, width_arr))) {
        width_arr.push(width_r);
      }

      for(var i=0; i<item.length; i++) {
        arr.push(dest_cr(dir, width_r, item[i]));
      }

      var obj = {width: width_r, arr};
      array.push(obj);
    }
  }
  return array;
};

function width_cr(array) {
  var a = [];
  for(var i=0; i<array.length; i++) {
    a = a.concat(array[i]);
  }
  return a;
};

var sprite_arr = [workmap, action_controls];

function sprite_cr (arr) {
  var spr_arr = [];
  var arr_main;
  
  for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    
    spr_arr.push(dest_build(elem.img_dir, elem.dest));
    
    //console.log(dest_build(elem.img_dir, elem.dest));
  };
  
  //console.log(spr_arr);
  var spr_array = width_cr(spr_arr);
  var w_build = width_build(width_arr, spr_array);
  
  //console.log(spr_array);
  console.log(w_build);
  
};

function width_build(width, array) {
  var arr = [];
  
  for(var i=0; i<width.length; i++) {
    var arr_w = [];
    var w = width[i];
    
    for(var j=0; j<array.length; j++) {
      var ar = array[j];
      if(w == ar.width) {
        arr_w = arr_w.concat(ar.arr);
      }
    }
    //console.log(arr_w);
    arr.push(arr_w);
    
    var arr_o = [];
    for(var j=0; j<arr_w.length; j++) {
      for(var x=(j+1); x<(arr_w.length-1); x++) {
        if(arr_w[j].dest == arr_w[x].dest) {
          var g = arr_w.splice(x, 1);
          //console.log(g);
          arr_o.push(g);
        }
        console.log(arr_o);
      }
      //arr_o.push(arr_w[j]);
    }
    //console.log(arr_o);
  }
  //console.log(arr);
};



console.log(sprite_cr(sprite_arr));













































