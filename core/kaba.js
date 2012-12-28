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
		namespace: function () {
            var args = S.makeArray(arguments),
                l = args.length,
                o = null, i, j, p,
                global = (args[l - 1] === TRUE && l--);

            for (i = 0; i < l; i++) {
                p = (EMPTY + args[i]).split('.');
                o = global ? host : this;
                for (j = (host[p[0]] === o) ? 1 : 0; j < p.length; ++j) {
                    o = o[p[j]] = o[p[j]] || { };
                }
            }
            return o;
        }
	};





	function buildOneNamespace(ns){
		ns = ns || "";
		if(!!ns && "string" == typeof ns){
			var _namespace = {_kaba_namespace:ns};
			window[ns] = _namespace;
		}
	}



	_KABA.log = function (msg){
		$("div.kaba_console_div ul.kaba_console_ul").append("<li>"+msg+"</li>");
	};







	window.KABA = _KABA;
})(jQuery,undefined);