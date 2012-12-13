(function( $ ) {

	T5.extendInitializers(function(){
		
		function init(specs) {
			if(!specs.displayTextField) $("#" + specs.textFieldId).css("display", "none");
			var options={
				slide:function(e,u){
					$("#" + specs.textFieldId).val(u.value);
				}, 
				change:function(e,u){
					if(specs.url) {
						var sep = (specs.url.indexOf("?") >= 0) ? "&" : "?";
						$("#" + specs.zoneId).tapestryZone("update", {
							url: specs.url + sep + "slider="+u.value
						});
					}
				}
			};
	        $("#" + specs.sliderId).slider(specs.params).slider("option", options);
		}
		
		return {
			slider : init
		}
	});
	
}) ( jQuery );