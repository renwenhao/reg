//数字+字母 数字+特殊字符 数字+字母+特殊字符 8 -16位 只包含三种中任意一种

function testExpress(str){
	var a = /(\B){8,16}/g;
	var b = /[a-zA-Z]/;
	var c = /[^a-zA-Z\d\s]/;
	var d = /\d/;
	
	var n = 0;
	
	if(b.test(str)){
		n++;
	}
	if(c.test(str)){
		n++;
	}
	if(d.test(str)){
		n++;
	}
	if(a.test(str)){
		
		if(d.test(str)){
			if(n>=2){
				return true;
			}
			return false;
		}
		return false;
	}
	return false;
}