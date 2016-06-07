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
