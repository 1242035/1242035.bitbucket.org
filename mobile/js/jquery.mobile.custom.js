
$(document).ready(function(){
    NTTLoad.init();
	NTTPopup.init();
	NTTSearch.init();
	NTTTab.init();
	NTTNav.init();
	if($('.fn-expand').length)
		$('.fn-expand').click(function(){
			var box = $(this).attr('expand-box'), css = $(this).attr('expand-class'), des = $(this).attr('expand-desc'), html = $(this).html();
			des = des && des.split('|') || ['Xem thêm','Rút gọn'];
			if($('#'+box).hasClass(css)){
				$('#'+box).removeClass(css);
				$(this).html(html.replace(des[0],des[1]).replace('icon-dropdown','icon-rutgon'));
			} else {
				$('#'+box).addClass(css);
				$(this).html(html.replace(des[1],des[0]).replace('icon-rutgon','icon-dropdown'));
			}
			return false;
		});
	if($('.fn-tab').length)
		$('.fn-tab').click(function(){
			var box = $(this).attr('tab-content');
			box = box.split(',');
			$('#'+box[0]).removeClass('none');
			for(var i=1; i<box.length; i++) $('#'+box[i]).addClass('none');
			return false;
		});	
});
NTTLoad = {
        _URL:'http://nhactructuyen.com/mobile.php',
        _DATATYPE: 'json',
        _METHOD:'POST',
        _DATA:{},
        _TAB:1,
        init:function(){
            var _this= this;
            _this.load(_this._TAB, 20);
            _this.show();
        },
        load:function(type, num){
            
            var _this = this;
             $.ajax({
                url: 'http://nhactructuyen.com/mobile.php',
                type:'POST',
                crossDomain:true,
                data: {num:num,type:type},
                dataType:'json',
                success: function(data){  
                    _this._DATA = data;
                    console.log(data);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log('status : ' + xhr.status);
                    console.log('error : ' + thrownError);
                }
            }); 
        },
        show:function(){
            var _this = this;
            $.each(_this._DATA,function(index , item ){
                    _this.buildHtml(item);
            });
        },
        buildHtml:function(item){
            tag  = '<a href='  + item.url  + ' class="content-items">';
			tag += '<img src=' + item.img + ' alt='+ item.title + ' class="album-img" width="72" height="72">';
			tag +=	'<h3>'      + item.title   + '</h3>';
			tag +=	'<h4>'      + item.artist + '</h4></a>';
            $('#fnBodyContent').append(tag);
        }
};
NTTNav = {
	init:function(){
		var _this = this;
		$('.fn-body-mask').on('click',function(){
			_this.show()
			return false;
		});
		$('.fn-nav-show').on('click',function(){
			_this.show();
			NTTSearch.close();
			return false;
		});
	},
	show:function(){
		var nav =  $('#fnNav');
		if(nav.hasClass('none')){
			nav.removeClass('none');
			$('#fnWrapper').addClass('slideshowing').css('height',$('#fnNav').height()+'px');
		} else {
			this.hide();
		}
		return this;
	},
	hide:function(){
		$('#fnNav').addClass('none');
		$('#fnWrapper').removeClass('slideshowing').css('height','auto');
	}
};

var NTTTab = {
	init:function(){
		if($('.fn-tab').length>0) {
			$('.fn-tab').on('click',function(){
				$('.fn-tab').removeClass('active');
				var box = $(this).addClass('active').attr('tab-content');
				box = box.split(',');
				$('#'+box[0]).removeClass('none');
				for(var i=1; i<box.length; i++) $('#'+box[i]).addClass('none');
				return false;
			});
		}
	}
};
var NTTSearch = {
	init:function(){
		var _this = this;
		$('#fnSearchReset').on('click',function(){
			$('#q').val('');
			$('#q')[0].focus();
			return false;
		});
		$('#fnSearchSubmit').on('click',function(){
			var k = $('#q').val();
			if(k.length>1) {
				$('#frmSearch').submit();
			}
			return false;
		});
		$('#frmSearch').on('submit',function(){
			var k = $('#q').val();
			if(k.length>1) {
				this.submit();
			}
			return false;
		});
		
	},
	close:function(){
		$('#fnSuggestContainer').addClass('none');
		$('#fnSuggest').addClass('none');
		$('#fnSuggestHistory').addClass('none');
		$('.fnSuggestClear').addClass('none');
		$('#fnSearchReset').addClass('none');
		$('#fnBody').removeClass('none');
	}
	
};

var NTTMsgBox = {
	show:function(msg, error, only){
		$('#fnMsgError').html(msg);
		NTTPopup.show($('#fnMsgBox'), only);
	}
};
var NTTDevice = {
	isiOS:function(){
		var iOS = false,
		iDevice = ['iPad', 'iPhone', 'iPod'];
		for ( var i = 0; i < iDevice.length ; i++ ) {
			if( navigator.platform === iDevice[i] ){
				iOS = true;
				break;
			}
		}
		return iOS;
	}
};
var NTTPopup = {
	init:function(){
		$('.fnCloseBox').on('click', function(){
			var only = $(this).attr('close-only') || false;
			NTTPopup.close($('#'+$(this).attr('close-box')), only);
			return false;
		});
	},
	close:function(box, only){
		box.addClass('none');
		if(!only){
			$('#fnWrapper').removeClass('none');
			$('#fnPopup').addClass('none');
		}
	},
	show:function(box, only){
		$('#fnWrapper').addClass('none');
		$('#fnPopup').removeClass('none');
		if(only){
			$('#fnPopup').children().addClass('none');
		}
		box.removeClass('none');
	}
};

function getUid() {
	return 'xxxxxxxxxxxx'.replace(/[x]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	}).toUpperCase();
}

String.prototype.stripViet = function() {
    var replaceChr = String.prototype.stripViet.arguments[0];
    var stripped_str = this;
    var viet = [];
    i = 0;
    viet[i++] = new Array('a', "/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/g");
    viet[i++] = new Array('o', "/ó|ò|ỏ|õ|ọ|ơ|ớ|ờ|ở|ỡ|ợ|ô|ố|ồ|ổ|ỗ|ộ/g");
    viet[i++] = new Array('e', "/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g");
    viet[i++] = new Array('u', "/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g");
    viet[i++] = new Array('i', "/í|ì|ỉ|ĩ|ị/g");
    viet[i++] = new Array('y', "/ý|ỳ|ỷ|ỹ|ỵ/g");
    viet[i++] = new Array('d', "/đ/g");
    for (var i = 0; i < viet.length; i++) {
        stripped_str = stripped_str.replace(eval(viet[i][1]), viet[i][0]);
        stripped_str = stripped_str.replace(eval(viet[i][1].toUpperCase().replace('G', 'g')), viet[i][0].toUpperCase());
    }
    if (replaceChr) {
        return stripped_str.replace(/[\W]|_/g, replaceChr).replace(/\s/g, replaceChr).replace(/^\-+|\-+$/g, replaceChr);
    } else {
        return stripped_str;
    }
};
