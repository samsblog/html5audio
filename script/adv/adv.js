$.fn.advAudio = function(options){
    options = $.extend({
        volEnables: true,
        pauseEnabled: true,
        responsiveEnabled: true,
        progressBarEnabled: true,
        volumeEnabled: true,
        color: '#f0f0f0'
    }, options);

    return this.each(function(){
        //##############MAIN Wrapper
        if(options.color !== undefined){
            $(this).wrap('<div style="background-color:'+ options.color +';" class="adv_wrp"></div>');
        }else{
            console.log('ADVError: Color is not defined.');
            return;
        }
        
        //Setting Up the HTML structure
        if(options.pauseEnabled == true){//Play Pause Button
            
            $(this).parent().append('<button class="adv_play" title="Play" class="" >Play<span class="btn">'); 
            
            $(this).parent().find('.adv_play').bind("click",function(){
                $(this).toggleClass('active');
                var audio = $(this).parent().find('audio')[0];
                

                if (audio.paused || audio.ended){
                    audio.play();
                }else{
                    audio.pause();   
                }

                if(options.progressBarEnabled == true){
                    var advProgress = $(this).parent().find('.adv_progress')[0];
                    audio.addEventListener("timeupdate",function(){
                    if (audio.currentTime > 0) {
                        value = Math.floor((100 / audio.duration) * audio.currentTime);
                    }
                        advProgress.style.width = value + "%";
                    });
                }
            });
        }
        $(this).bind('ended', function(){
            $(this).parent().find('.adv_play').removeClass('active');
        });
        if(options.responsiveEnabled == true){//Responsive Class
            $(this).parent('.adv_wrp').addClass('responsive');
        }
        
        if(options.progressBarEnabled == true){//Progressbar
            
            $(this).parent().append('<div class="adv_progressbar"><div class="adv_progress"></div></div>'); 
            
            $(this).parent().find(".adv_progressbar").each(function(){
                $(this).bind("click", function(e){
                var audio = $(this).parent().children('audio');
                var x = e.pageX;
                var progress = $(this).children('.adv_progress');
                var position = x - progress.offset().left;
                var duration = audio[0].duration;
                var percentage = 100 * position / $(this).width();
                if(percentage > 100) {
                  percentage = 100;
                }
                if(percentage < 0) {
                    percentage = 0;
                }
                progress[0].style.width = percentage + "%";
                audio[0].currentTime = duration * (percentage / 100);   
                });
            });
        }
        if(options.volumeEnabled == true){//Volume Button
            
            $(this).parent().append('<div class="adv_vol">\<span class="btn"></span><input class="adv_vol_control" min="0" value="1" max="1" step="0.1" type="range" /></div>'); 
            
            $(this).parent().find('.adv_vol').bind("click",function(){
                $(this).toggleClass('open');
            });   
            
            $(this).parent().find('.adv_vol_control').change(function(){
                console.log('change');
                var audio = $(this).parent().parent().children('audio');
                var volume = $(this);                
                audio[0].volume = volume[0].value;

            });
        }
    });                    
}