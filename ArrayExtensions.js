/*---------------------Array Extension-----------------------------*/

Array.prototype.matchInclude = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
	source.forEach(function(x, i){
		if(x.toString().indexOf(pattern) >= 0){
			index = i;
		}
	});
	source.splice(0, index);
	return source;
}

Array.prototype.matchNext = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
	source.forEach(function(x, i){
		if(x.toString().indexOf(pattern) >= 0){
			index = i;
		}
	});
	if(source.length <= index + 1){
		source.splice(0, index);
	}else{
		source.splice(0, index + 1);
	}
	return source;
};

Array.prototype.matchPrev = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
	source.forEach(function(x, i){
		if(x.toString().indexOf(pattern) >= 0){
			index = i;
		}
	});
	source.splice(0, index - 1);
	return source;
}

Array.prototype.take = function(count){
	var arr = [];
	this.forEach(function(x, i){
		if(i + 1 > count) return;
		arr.push(x);
	});

	return arr;
}

/*---------------------------------------------------------------*/