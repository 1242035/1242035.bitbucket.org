var player;
var _song_data;
$(document).ready(function() {
    perfect_scrollbar();
    player = startAutio();
    get_songs(129, 20);
    $('#show-list-button').click(function(){  
        //$('#show-list-button img').toggle(function(){$(this).attr("src","http://nhackhongloi.org/images/button-tray-down.png");},function(){$(this).attr('src','http://nhackhongloi.org/images/button-tray-up.png')});
        $('#menu-tray').toggle(); 
        
    });
    $('.items-load').click(function(){
            id = parseInt($(this).attr("id"));
            get_songs(id,20);
    });
    $('li').mouseover(function()
    {
          if ($('li:hover').length) {$('li:hover').css({'background':'green','cursor':'pointer'}); }
          else{ $('li:hover').css({'background':'green','cursor':'pointer'}); }
    });
    $('li').mouseout(function(){ $(this).css('background', 'transparent'); });
    $('#search').on("change paste keyup",function(){
			q = $('#query').val();
			if(q == 'Tìm kiếm bài hát ... '){ return;}
			else if(q.length <=3 ) {return;}
			else {get_search(q);}
	});
	$('#submitform').submit(function(){
			q = $('#query').val();
			if(q == 'Tìm kiếm bài hát ... ') return false;
			else {get_search(q)}
			return false;
	});
    
   
});
function perfect_scrollbar() {
    $('#jp_container_1').slimScroll({
        height: '450px'
    });
}
function get_search(q) {
    //alert(type + " "  + cat);
    $.ajax({
    url: 'http://nhactructuyen.com/ajax.php',
    crossDomain: true,
    type: 'POST',
    data: {q:q},
    dataType: 'json',
    success: function(data){  
        console.log(data);      
        set_random_data(data);
        //_song_data = data;
    },
    error: function (xhr, ajaxOptions, thrownError) {
        //console.log(xhr.status);
        //alert( xhr.responseText);
      }
  });
}
function get_songs(id, num) {
    //alert(type + " "  + cat);
    $.ajax({
    url: 'http://nhactructuyen.com/ajax.php',
    crossDomain: true,
    type: 'POST',
    data: {id:id,num:num},
    dataType: 'json',
    success: function(data){  
        console.log(data);      
        set_random_data(data);
        //_song_data = data;
    },
    error: function (xhr, ajaxOptions, thrownError) {
        //console.log(xhr.status);
        //alert( xhr.responseText);
      }
  });
}
function set_random_data(data) {
    player.setPlaylist(data);
}
function startAutio() {
    var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [				
		{
			artist:"Player",
			title:"Đang Tải ... ",
			mp3:encodeURI("http://www.nhackhongloi.org/upload/uploads/Musicbox-When I need you.mp3")},		
	], {
		playlistOptions: {
		autoPlay: true		},
		swfPath: "http://vndis.com/js/jplayer/Jplayer.swf",
		supplied: "mp3"				
	});
return myPlaylist;
}
