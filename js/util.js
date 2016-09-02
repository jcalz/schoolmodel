 function add(x,y) {return x+y;}
 
 function arrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// convert currency to a rounded string
function money(val, plusSign) {
          var sign = val<0;
          var abs = Math.round(Math.abs(val));
          var suffix = '';
          if (abs>999) {
             abs=Math.round(abs/1000);
             suffix='K';
          }
          if (abs>999) {
             abs=Math.round(abs/100)/10;
             suffix='M';
          }
          if (abs>999) {
             abs=Math.round(abs/100)/10;
             suffix='G';
          }
	  if (plusSign === undefined) {plusSign = '+';}
	  if (plusSign === false) {plusSign = '';}
          return ((abs==0)?'':(sign?'-':plusSign))+'$'+abs+suffix;
        }

          var entityMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;',
          '`': '&#x60;',
          '=': '&#x3D;'
        };
      
     
        function escapeHtml (string) {
          return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
            return entityMap[s];
          });
        }

        function println(elem, str) {
            elem.innerHTML += escapeHtml(str).replace(/\n/g, "<br>") + "<br>";
        };


		function compare(a,b) {
		  if (a < b) return -1;
		  if (a > b) return 1;
		  return 0;
		}
		
		function sum(arr) {
		  return arr.reduce(function(a,b){return a+b;},0);
		}
		
		
		function queryParams() {
		var a = window.location.search.substr(1).split('&'); 
		if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2);
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    
		}
		
		// f should map [key,value] to [key, value]
		function objectMap(obj, f) {
		
		  var ret = {};
		  Object.keys(obj).map(function(k){return [k, obj[k]];}).map(f).forEach(function(kv){ ret[kv[0]]=kv[1]; });
		  return ret;
		
		}
		
		function caseInsensitiveQueryParams() {
		  return objectMap(queryParams(), function(kv){return [kv[0].toLowerCase(),kv];});
		}
