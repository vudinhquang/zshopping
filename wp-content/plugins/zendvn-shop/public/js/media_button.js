jQuery(function($){
	$(document).ready(function(){
        $('#zendvn-sp-zsproduct-button').click(open_media_window);
        zendvn_sp_remove_image('#zendvn-sp-zsproduct-show-images');
        display('#zendvn-sp-zsproduct-show-images');
    });	
    
	function open_media_window(e){
        e.preventDefault();
		if(this.window === undefined){
			this.window = wp.media({
					title: 'Insert pictures for product',
					library: {type: 'image'},
					multiple: true,
					button: {text: 'Insert pictures'}			
                });	
            var self = this;
			this.window.on('select', function(){
                var imgs = self.window.state().get('selection').toJSON();

                zendvn_sp_insert_image('#zendvn-sp-zsproduct-show-images', imgs);
                display('#zendvn-sp-zsproduct-show-images');
                zendvn_sp_remove_image('#zendvn-sp-zsproduct-show-images');
			});	
		}
        this.window.open();
		return false;
    }

    function display(img_content) {
        number = $(img_content).find("*").length;
        if(number > 1) {
            $(img_content).show();
        } else {
            $(img_content).hide();
        }
    }
    
	function zendvn_sp_remove_image(img_content){
		$(img_content + ' a.remove-img').on("click", function(){
			
			var elemt;
			elemt = $(this).parents("div.content-img");
			$(elemt).fadeOut('slow',function(){
                $(this).remove();
                display('#zendvn-sp-zsproduct-show-images');
            });
        });
    }
    
	//zendvn-sp-zsproduct-show-images
	function zendvn_sp_insert_image(img_content, imgs){
		if($(imgs).length > 0){
			$.each(imgs, function(key, obj){
				var imgUrl =  obj.url;
				var newImg = '';
				
				newImg += '<div class="content-img">';
				newImg += '<img width="100" height="100"';
				newImg += '	src="' + imgUrl + '">';
				newImg += '<div>';
				newImg += '	<a class="remove-img">Remove</a>';
				newImg += '</div>';
				newImg += '<div class="div-ordering">';
				newImg += '	<input type="text" value="1" class="ordering"';
				newImg += '		name="zendvn-sp-zsproduct-img-ordering[]"> <input type="hidden"';
				newImg += '		name="zendvn-sp-zsproduct-img-url[]"';
				newImg += '		value="' + imgUrl + '">';
				newImg += '</div>';
				newImg += '</div>';
				
				$(newImg).insertBefore(img_content + " .clr");
			});
		}
	}
});