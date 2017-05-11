/*---------------------Array Extension-----------------------------*/

Array.prototype.matchInclude = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
	source.splice(0, index);
	return source;
}

Array.prototype.matchNext = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
	source.splice(0, index + 1);
	return source;
};

Array.prototype.matchPrev = function(pattern){
	var source = Object.assign([], this);
	var index = source.indexOf(pattern);
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