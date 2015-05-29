var easyYoutube = (function(){
	var singleton = {};

	var width = 560
		,height = 315
		,key = ''
		,baseUrl = 'https://www.googleapis.com/youtube/v3/';

	function getFirstVideo(response){
		if (!response.items || response.items.length<1){
			return false;
		}
		return response.items[0];
	}

	function showVideo(video, callback){
		var url = '', html = ''
		if (video){
			url = 'https://www.youtube.com/embed/'+video.id.videoId;
        	html = '<iframe width="'+width+'" height="'+height+'" src="'+url+'" frameborder="0" allowfullscreen></iframe>';
        }
        callback.call(null, html);
	}

	singleton.loadVideoLatest = function(channelId, callback){
		var url = baseUrl+'search?key='+key+'&channelId='+channelId+'&part=id&order=date&maxResults=1';
		console.log(url);
		$.getJSON(url, function(response){
			console.log(response);
			var video = getFirstVideo(response);
			showVideo(video, callback);
		});
	};

	singleton.setDimension = function(setWidth, setHeight){
		width = setWidth;
		height = setHeight;
		return this;
	};

	singleton.setKey = function(setKey){
		key = setKey;
	};

	return singleton;
})();
