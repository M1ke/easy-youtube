# Easy Youtube

A simple helper object to get the latest YouTube video from a channel.

## Usage

```js
easyYoutube.setKey('YOUR_KEY');
easyYoutube.loadVideoLatest('Channel_id_here', function(html){
	$('#your-video').html(html); // html = '' if no vidoes or an error occured
});
```

## Future development

* Add ability to find channel by user name
* Improved handling options for longer lists of videos
* Abstracted search method helpers