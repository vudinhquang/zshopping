jQuery(document).ready(function($){
	$('#add_to_cart').click(function(e){
		var dataObj = {
            "action"	: "add_to_cart",
            "value"		: $(this).attr('product-id'),
            "security"	: security_code,
        };
		$.ajax({
			url			: ajaxurl,
			type		: "POST",
			data		: dataObj,
			dataType	: "text",
			success		: function(data, status, jsXHR){
                            $(".detail-cart span.number_product").text(data);

                            $(".detail-cart .alert-cart").show('slow');
						}
		});
	});

	//=============================================
	// CAP NHAT GIO HANG
	//==============================================
	$(".update-product").on('click',function(){
		var productID 	= $(this).attr('product-id');
		var price		= $(this).attr('product-price');
		var quality		= $('#price-' + productID).val();
		
		var linkUpdate  = this;
		var dataObj = {
				"action"	: "update_cart",
				"value"		: productID,
				"security"	: security_code,
				"price"		: price,
				"quality"	: quality
			};
		$.ajax({
			url			: ajaxurl,
			type		: "POST",
			data		: dataObj,
			dataType	: "text",
			success		: function(data, status, jsXHR){
							$(linkUpdate).parent().prev().html(data);
										
							$('#zendvn_sp_cart_table .show-alert').removeClass()
																.addClass('show-alert')
																.addClass('cart-update')
																.html('Item updated');
							total();
						}
		});
	});

	//=============================================
	// XOA SAN PHAM TRONG GIO HANG
	//==============================================
	$(".remove-product").on('click',function(){
		var linkDelete  = this;
		
		var productID 	= $(this).attr('product-id');
		var dataObj = {
				"action"	: "delete_cart",
				"value"		: productID,
				"security"	: security_code
			};
		
		$.ajax({
			url			: ajaxurl,
			type		: "POST",
			data		: dataObj,
			dataType	: "text",
			success		: function(data, status, jsXHR){	
							$(linkDelete).parents('tr').hide('800').queue(function(){
								$(this).remove();
								total();
							});	
				
							$('#zendvn_sp_cart_table .show-alert').removeClass()
																 .addClass('show-alert')
																 .addClass('cart-delete')
																 .html('Item updated');
							
						}
		});
	});

	//=============================================
	// TOTAL
	//==============================================
	total();
	function total(){
		var total_pay = 0;
		$("td.money-pay").each(function(index, obj){
			total_pay = total_pay + parseInt($(obj).text());
		});
		total_pay = accounting.formatMoney(total_pay, "$ ", 2, ".",",");
		$("#total .pay").text(total_pay);
	}
});
