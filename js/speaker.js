/**
 * Speaker class
 *
 * @date 29.01.2012 02:26
 */
function Speaker(speakerContId){

	this.speakerContId=speakerContId;
	// Container speaker
	this.$cont=$('#'+speakerContId);
	// jplayer container for the speaker
	this.$jp=this.$cont.find('.speakerJPlayer');

	this.setJPlayer();
	this.bindElements();

}

Speaker.prototype.setJPlayer=function(){
	var t=this;

	this.$jp.jPlayer({
		supplied:'mp3',
		swfPath:'js/jplayer/jplayer.swf',
		solution:'flash,html',
		// If ua is ff with vers. 3.6, set the wmode "window" (required)
		wmode:($.browser.mozilla && $.browser.version.slice(0,3)=='3.6')
			? 'window' : 'opaque',
		ready:function(){
			var 
				$mediaFile=t.$cont.find(':input[name="mediaFile"]'),
				$autoPlay=t.$cont.find(':input[name="autoPlay"]');

			// Set the media file
			$(this).jPlayer('setMedia',{mp3:$mediaFile.val()});

			// Play if the auto play is true
			if($autoPlay.val()==='true')
				$(this).jPlayer('play');
		}
		/*
		play:function(e){},
		progress:function(e){},
		pause:function(e){},
		ended:function(e){}
		,errorAlerts:true
		*/
	});

}

Speaker.prototype.bindElements=function(){
	var t=this;

	this.$cont.find('a.player').click(function(){
		t.$jp.jPlayer('play');

		return false;
	});

	/**
	 * On play
	 */
	t.$jp.bind($.jPlayer.event.play,function(e){
		// Pause all intances except this one before playing
		$(this).jPlayer('pauseOthers');

		t.updateSpeakerImg(e,'play');
	});

	/**
	 * On ended
	 */
	t.$jp.bind($.jPlayer.event.ended,function(e){
		t.updateSpeakerImg(e,'ended');
	});

	/**
	 * On pause(STOPPED AFTER PAUSED)
	 */
	t.$jp.bind($.jPlayer.event.pause,function(e){
		// Stop after paused
		$(this).jPlayer('stop');
		t.updateSpeakerImg(e,'pause');
	});
}

Speaker.prototype.updateSpeakerImg=function(e,status){
	var
		// The current media file in progress
		curMediaFile=e.jPlayer.status.src,
		// The current image assosioted with the current media file
		$curSpeakerImg=this.$cont.find('img');

	if(status=='play')
		$curSpeakerImg.attr('src','../images/speaker/speakerPlaying.png');
	else
		$curSpeakerImg.attr('src','../images/speaker/speakerPlay.png');
}
