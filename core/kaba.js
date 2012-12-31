(function($,undefined) {

	var 
	_KABA = {};
	_KABA.version = "0.0.1";



	_KABA.now = function(){
		var _now = new Date();
		var timestampStr = _now.getYear()+"-"+_now.getMonth()+"-"+_now.getDay();
		return timestampStr;
	};


	_KABA.namespace = function(ns){
            var 
                l = args.length,
                o = null, i, j, p,
                host = window;
                p = ns.split('.');
                for (j = (host[p[0]] === o) ? 1 : 0; j < p.length; ++j) {
                    o = o[p[j]] = o[p[j]] || { };
                }
            return o;
	};




	_KABA.log = function (msg){
		$("div.kaba_console_div ul.kaba_console_ul").append("<li>"+msg+"</li>");
	};







	window.KABA = _KABA;
})(jQuery,undefined);