(function(){
  
  function getJsonFromUrl(url) {
    if(!url) url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    console.log(result);
    return result;
  }

	var aFunction = function(paramName){
    var url = this.variables.$tc.execution.request.url;
    var urlObj = getJsonFromUrl(url.substring(url.indexOf('?')));
    return urlObj[paramName];
	};

	return aFunction;
})();