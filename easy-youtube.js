var easyYoutube=(function(){
	var width=560,height=315;

	function showVideo(response,callback){
	    if (response.data && response.data.items){
	        var items=response.data.items;
	        if (items.length>0){
	            var item=items[0]
	            	,videoid='http://www.youtube.com/embed/'+item.id
	            	,html='<iframe width="'+width+'" height="'+height+'" src="'+videoid+'" frameborder="0" allowfullscreen></iframe>';
	            callback.call(null,html);
	        }
	    }
	}

	var cls={};

	cls.loadVideoLatest=function(user,callback){
		$.getJSON('https://gdata.youtube.com/feeds/api/users/'+user+'/uploads?max-results=1&orderby=published&v=2&alt=jsonc',function(response){
			showVideo(response,callback);
		});
	};

	cls.setDimension=function(setWidth,setHeight){
		width=setWidth;
		height=setHeight;
		return this;
	}

	return cls;
})();