(function($){
	
	(function(){
		if (typeof window.JSON === 'undefined') {
			var obj = 
			$("<meta>", {
				'http-equiv' : 'X-UA-Compatible',
				'content'    : 'IE=edge'
			});
			$("title").insertBefore(obj);
		}
	}());
	
	$.fn.serializeObject = (function() {
		var obj = {},
			array = this.serializeArray();
		$.each(array, function() {
			if (obj[this.name] !== undefined) {
				if (!obj[this.name].push) {
					obj[this.name] = [obj[this.name]];
				}
				obj[this.name].push(this.value || '');
			}
			else {
				obj[this.name] = this.value || '';
			}
		});
		return obj;
	});
	
	$.fn.tblToJsonObj = (function(jsonObj) {
		var json = JSON.stringify(jsonObj);
		return json;
	});
	
	$.fn.jsonSubmit = (function(obj) {
		var that = this;
		var formObj = { domains: null, url: null },
			form    = obj || {};
		formObj = $.extend(formObj, form);
		var array = this.generateArray(formObj);
		//发送input
		$.each(array, (function(i) {
			var k = array[i].selector.replace(/#/, ''),
				v = array[i].find("*").serializeObject(),
				t = [];
			//t[k] = v;
			t[k] = JSON.stringify(v);	
			var input = $("<input>", {
				"name": k,
				"value": JSON.stringify(JSON.parse(t[k])),
				"type": "hidden"
			});
			that.append(input);
		}));

		that.submit();
	});
	
	// 根据id创建jQuery对象
	$.fn.generateObject = (function(id) {
		if (!document.getElementById(id) || typeof id === 'undefined') {
			var generateFailException = (function() {
				this.message ="Error: id: '" + id + "' 不存在";
			});
			throw new generateFailException();
		}
		return $("#" + id);
	});
	
	// 根据domains集合里的id生成jQuery对象
	$.fn.generateArray = (function(formObj) {
		var domains = formObj.domains,
		      array = [];
		try {
			for (var x in domains) {
				array.push(this.generateObject(domains[x]));
			}
		}
		catch (e) {
			alert(e.message);
			return false;
		}
		return array;
	});
	
	$.fn.mapToJson = (function(str) {
		if (typeof String.prototype.trim !== 'function') {
			String.prototype.trim = (function() {
				return this.replace(/^\s+|\s+$/g, '');
			});
		}
		str = str.replace(/\{*\}*/g, '') || {};
		// 分割成数组
		var properties = str.split(","),
			obj = {}
			;
		for (var i = 0, l = properties.length;
				 i < l; i++) {
			var tup = properties[i].split('=');
			var key = tup[0].trim(),
				value = tup[1].trim();
			obj[key] = value;
		}
		obj = JSON.stringify(obj) || obj;
		obj = JSON.parse(obj) || obj;
		return obj;
	})
	
	$.fn.autoFillForm = (function(obj) {
		
		if (obj.json === 'undefined' || obj.json == '' || obj.json == null) {
			throw { 
				name: "obj.json", 
				desc: "undefined or null", 
				_line: "100", 
			};
		}

		var $json = $.fn.mapToJson(obj.json);

		for (var k in $json) {
			if ( $json.hasOwnProperty.call($json, k) ) {
				$("<input>", {
					"type"   : "text",
					"name"   : k,
					"value"  : $json[k]
				}).appendTo(this);
			}
		}
		// 换行
		$("<br>").insertAfter("input");
	})
})($)