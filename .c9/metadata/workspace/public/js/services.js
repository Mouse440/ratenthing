{"filter":false,"title":"services.js","tooltip":"/public/js/services.js","undoManager":{"mark":55,"position":55,"stack":[[{"start":{"row":18,"column":3},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":20,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["appServices.factory('postDataService', function(){","\tvar data = [];","","\tvar setData = function(d) {","\t\tdata = d;","\t}","","\tvar getData = function() {","\t\treturn data;","\t}","","\treturn {","\t\tsetData: setData,","\t\tgetData: getData","\t}","});"],"id":4}],[{"start":{"row":35,"column":3},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":37,"column":0},"end":{"row":42,"column":7},"action":"insert","lines":[".","    controller('CardController', ['$scope','$http','$window', function($scope,$http,$window) {","        $scope.thumbUp = function(){","            console.log(\"like!\");","        }","    }])"],"id":7}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"insert","lines":["a"],"id":8}],[{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"insert","lines":["p"],"id":9}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["p"],"id":10}],[{"start":{"row":37,"column":4},"end":{"row":38,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"remove","lines":[" "],"id":12}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"remove","lines":[" "],"id":13}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"remove","lines":[" "],"id":14}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"remove","lines":[" "],"id":15}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":14},"action":"remove","lines":["controller"],"id":16}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["f"],"id":17}],[{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["a"],"id":18}],[{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["c"],"id":19}],[{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["t"],"id":20}],[{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["o"],"id":21}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["r"],"id":22}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["y"],"id":23}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":27},"action":"remove","lines":["CardController"],"id":24}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["c"],"id":25}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["l"],"id":26}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["i"],"id":27}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"remove","lines":["i"],"id":28}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"remove","lines":["l"],"id":29}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"remove","lines":["c"],"id":30}],[{"start":{"row":37,"column":13},"end":{"row":37,"column":14},"action":"insert","lines":["t"],"id":31}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["h"],"id":32}],[{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["u"],"id":33}],[{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"insert","lines":["m"],"id":34}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["p"],"id":35}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"remove","lines":["p"],"id":36}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["b"],"id":37}],[{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":["U"],"id":38}],[{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"insert","lines":["p"],"id":39}],[{"start":{"row":37,"column":84},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":38,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":38,"column":1},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["\t"]}],[{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["\t"],"id":42}],[{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"remove","lines":["\t"],"id":43}],[{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["r"],"id":44}],[{"start":{"row":39,"column":2},"end":{"row":39,"column":3},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":39,"column":3},"end":{"row":39,"column":4},"action":"insert","lines":["t"],"id":46}],[{"start":{"row":39,"column":4},"end":{"row":39,"column":5},"action":"insert","lines":["u"],"id":47}],[{"start":{"row":39,"column":5},"end":{"row":39,"column":6},"action":"insert","lines":["r"],"id":48}],[{"start":{"row":39,"column":6},"end":{"row":39,"column":7},"action":"insert","lines":["n"],"id":49}],[{"start":{"row":39,"column":7},"end":{"row":39,"column":8},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["{"],"id":51}],[{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["}"],"id":52}],[{"start":{"row":39,"column":9},"end":{"row":41,"column":1},"action":"insert","lines":["","\t\t","\t"],"id":53}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "],"id":54}],[{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":[";"],"id":55}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":11},"action":"insert","lines":["// "],"id":56},{"start":{"row":43,"column":8},"end":{"row":43,"column":11},"action":"insert","lines":["// "]},{"start":{"row":44,"column":8},"end":{"row":44,"column":11},"action":"insert","lines":["// "]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["// "],"id":57},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"insert","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":3},"end":{"row":3,"column":11},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":39,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1462334686298,"hash":"9674df821adededa8ab4864008f1cfcc9e6500cb"}