if(!window.ZADS){ZADS=(function(){var _w=window,_url="http://b.123c.vn/rda/?callback=window.parent.ZADS.fillSlot&zids=",_timeExpire=1000*60*60*24,_logging=false;function _l(e){if(_logging){if(_w.console){_w.console.log(e)}else{if(_w.Debug&&_w.Debug.writeln){_w.Debug.writeln(e)}}}}return{_dt:{},_rtype:[],_listItem:[],_objCurrItem:{},_listRs:[],_jsversion:"1.2.5",_total:0,_firstLoad:true,_domain:{stc:"http://st.123c.vn",rnd:"http://b.123c.vn/rd/",rnd_js:"http://b.123c.vn/rd.js",za:"http://t.123c.vn/ztrk",za_js:"http://st.123c.vn/js/za.js"},_tagInfos:[{localName:"zads-zone",xmlns:"z2"}],log:function(e){if(_logging){_l(e)}},createIframe:function(e,zid,w,h){try{var b=document.createElement("iframe");b.id=zid;b.width=w.toString();b.height=h.toString();b.vspace="0";b.hspace="0";b.allowTransparency="true";b.scrolling="no";b.marginWidth="0";b.marginHeight="0";b.frameBorder="0";b.style.border="0";if(w<=0){b.style.display="none"}e&&e.appendChild(b);return b}catch(ex){_l("can not create element:"+elm+","+ex.message)}},insertContent:function(iframe,data){try{if(iframe){var k=iframe.contentWindow?iframe.contentWindow.document:iframe.contentDocument;-1!=navigator.userAgent.indexOf("Firefox")&&k.open("text/html","replace");k.write(data),k.close()}}catch(ex){_l("can not insert content into iframe:"+ex.message)}},resize:function(iframe){try{var f=document.getElementById(iframe);if(f){if(f.Document&&f.Document.body.scrollHeight){f.height=f.Document.body.scrollHeight;f.style.height=f.Document.body.scrollHeight}else{if(f.contentDocument&&f.contentDocument.body.scrollHeight){f.height=f.contentDocument.body.scrollHeight;f.style.height=f.contentDocument.body.scrollHeight}else{if(f.contentDocument&&f.contentDocument.body.offsetHeight){f.height=f.contentDocument.body.offsetHeight;f.style.height=f.contentDocument.body.offsetHeight}}}}}catch(ex){_l("Can not resize iframe:"+ex.message)}},fillSlot:function(data){ZADS._dt=data.data;ZADS._total=data.total},fillData:function(el,len,data){var isLoad=false;for(var i=0;i<len;i++){if(el[i].getAttribute("z2-group-zone")){var zid=el[i].getAttribute("z2-zoneid");if(zid!=null&&zid!=undefined){var width=el[i].getAttribute("z2-width");if(zid in data){var cache=ZADS.storage.get(zid);if(cache){var json=ZADS.parseJSON(cache)}var listdata=data[zid];var item=null;var currTime=new Date().getTime();for(var m=0;m<listdata.length;m++){var diffTime=json?(currTime-json[listdata[m].id]):0;try{var validTime=listdata[m].tmshow!=undefined&&(listdata[m].tmshow>diffTime)&&(listdata[m].tmshow>0)}catch(e){}if(!validTime){if(!ZADS.contains(ZADS._listItem,listdata[m].id)){ZADS._objCurrItem[zid]=listdata[m].id;ZADS._listItem.push(listdata[m].id);item=listdata[m];ZADS.setClientData(zid,listdata[m].id,json);break}}}if(item==null){continue}isLoad=true;if(el[i].getAttribute("z2-method")!=null&&el[i].getAttribute("z2-method")!=undefined&&el[i].getAttribute("z2-method")=="inline"){ZADS._rtype.push(zid);var divId="zadDiv_"+zid;el[i].innerHTML="<div id='"+divId+"'></div>";var parentdiv=document.getElementById(divId);if(item.itype==2){ZADS.createIframe(parentdiv,"zadIFrame_"+zid,0,0);ZADS.M3.fillAdContent(zid,item.ztype,item.zposition,item.zcollapse,item.zexpandw,item.zexpandh,item.zwidth,item.zheight,item.zduration,item.zhtml+item.iimp)}else{ZADS.M3.loadAd(parentdiv,item,zid,item.zhtml+item.iimp)}}else{ZADS.createIframe(el[i],zid,width,0);var script='<script type="text/javascript">if(window.attachEvent){window.onload=new function(){window.parent.ZADS.resize(\''+zid+"')}}else {window.onload=function(){window.parent.ZADS.resize('"+zid+"')}}\x3c/script>";ZADS.insertContent(document.getElementById(zid),item.zhtml+item.iimp+script)}}else{_l("No Data")}}}}if(isLoad){var iframe=document.getElementById("zads");iframe&&iframe.parentNode.removeChild(iframe)}},contains:function(a,obj){for(var i=0;i<a.length;i++){if(a[i]===obj){return true}}return false},setClientData:function(zid,id,data){var currTime=new Date().getTime();if(data){data[id]=currTime;ZADS.storage.put(zid,ZADS.serialize(data),_timeExpire,true)}else{var objLocalData={};objLocalData[id]=currTime;ZADS.storage.put(zid,ZADS.serialize(objLocalData),_timeExpire,true)}},removeItem:function(item,arr){var arrNew=[];if(typeof arr=="object"||typeof arr=="array"){for(var i=0;i<arr.length;i++){if(item!==arr[i]){arrNew.push(arr[i])}}}ZADS._listCurrItem=arrNew;return arrNew},randAds:function(data){if(typeof data=="object"){for(var zid in data){try{var cache=ZADS.storage.get(zid);if(cache){var json=ZADS.parseJSON(cache)}var listdata=data[zid];var item=null;var currTime=new Date().getTime();for(var m=0;m<listdata.length;m++){var diffTime=json?(currTime-json[listdata[m].id]):0;try{var validTime=listdata[m].tmshow!=undefined&&(listdata[m].tmshow>diffTime)&&(listdata[m].tmshow>0);if(!validTime){if(!ZADS.contains(ZADS._listItem,listdata[m].id)){ZADS._objCurrItem[zid]=listdata[m].id;ZADS._listItem.push(listdata[m].id);item=listdata[m];ZADS.setClientData(zid,listdata[m].id,json);break}}}catch(e){}}if(item==null||listdata.length<=1){continue}var embed=item.zhtml+item.iimp;if(ZADS.contains(ZADS._rtype,zid)){if(item.itype==2){ZADS.M3.fillAdContent(zid,item.ztype,item.zposition,item.zcollapse,item.zexpandw,item.zexpandh,item.zwidth,item.zheight,item.zduration,embed)}else{var parentdiv=document.getElementById("zadDiv_"+zid);ZADS.M3.loadAd(parentdiv,item,zid,embed)}}else{var script='<script type="text/javascript">if(window.attachEvent){window.onload=new function(){window.parent.ZADS.resize(\''+zid+"')}}else {window.onload=function(){window.parent.ZADS.resize('"+zid+"')}}\x3c/script>";ZADS.insertContent(document.getElementById(zid),embed+script)}if(ZADS._listItem.length>=ZADS._total){ZADS._listItem=[];ZADS._firstLoad=false}}catch(e){_l("rand:"+e)}}}},process:function(){if(document.body){var elements=ZADS.DOM.getElements(document.body,this._tagInfos[0].xmlns,this._tagInfos[0].localName)}if(typeof elements!="undefined"&&elements.length>0){var hasInlineAds=false;var group_zone=[],l=elements.length;for(var i=0;i<l;i++){if(elements[i].getAttribute("z2-group-zone")){if(elements[i].getAttribute("z2-rendered")!="true"){var zid=elements[i].getAttribute("z2-zoneid");if(zid!=null&&zid!=undefined){group_zone.push(zid)}elements[i].setAttribute("z2-rendered","true")}}else{if(elements[i].getAttribute("z2-rendered")!="true"){var method=elements[i].getAttribute("z2-method");if(method!=null&&method!=undefined&&method=="inline"){ZADS.M2.setupAdDiv(elements[i]);hasInlineAds=true}else{ZADS.M1.XD.init();ZADS.M2.setupAdDiv(elements[i]);hasInlineAds=true}elements[i].setAttribute("z2-rendered","true")}}}if(hasInlineAds==true){ZADS.M2.loadAds()}if(group_zone.length>0){ZADS.createIframe(document.body,"zads",0,0);var content='<script type="text/javascript" src="'+_url+group_zone.join(",")+"&rand="+new Date().getTime()+'">\x3c/script>';ZADS.insertContent(document.getElementById("zads"),content);if(document.getElementById("zads")&&document.getElementById("zads").attachEvent){setTimeout(function(){ZADS.fillData(elements,l,ZADS._dt)},100)}else{var iframeDoc=document.getElementById("zads").contentDocument||document.getElementById("zads").contentWindow.document;if(iframeDoc.readyState=="complete"||iframeDoc.readyState=="interactive"){ZADS.fillData(elements,l,ZADS._dt)}else{document.getElementById("zads").onload=function(){ZADS.fillData(elements,l,ZADS._dt)}}}}}else{if(ZADS.DOM.isReady()==false){setTimeout("ZADS.process()",1)}else{_l("Not Found")}}},cookie:function(name,value,options){if(value==undefined){if(document.cookie){var cookies=document.cookie.split(";"),length=cookies.length,nameLength=name.length;for(var i=0;i<length;i++){var cookie=ZADS.trim(cookies[i]);if(cookie.substring(0,nameLength+1)==(name+"=")){value=decodeURIComponent(cookie.substring(nameLength+1));break}}}return value}if(typeof options!=="undefined"&&typeof options=="object"){options.expires=0;options.path="/"}else{options={expires:0,path:"/"}}var d=new Date(),expires=options.expires,dstr;if(expires==0){dstr=""}else{d.setTime(d.getTime()+expires*1000*60*60*24);dstr="; expires="+d.toUTCString()}document.cookie=name+"="+encodeURIComponent(value)+dstr+"; path="+options.path+(options.domain!=undefined?"; domain="+options.domain:"")+(options.secure?"; secure":"");return""},ltrim:function(s,chars){chars=chars||"\\s";return s&&s.replace(new RegExp("^["+chars+"]+","g"),"")},rtrim:function(s,chars){chars=chars||"\\s";return s&&s.replace(new RegExp("["+chars+"]+$","g"),"")},trim:function(s,chars){return ZADS.ltrim(ZADS.rtrim(s,chars),chars)},escape:function(s){var escMap={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'"'};for(var k in escMap){s=s.replace(k,escMap[k])}return s},parseJSON:function(s){try{if(typeof s=="object"){return s}if(typeof JSON=="object"&&JSON.parse){return JSON.parse(s)}return eval("("+s+")")}catch(e){ZADS._log(e)}},serialize:function(data){if(typeof JSON=="object"&&JSON.stringify){return JSON.stringify(data)}if(ZADS.isString(data)){return'"'+ZADS.escape(data)+'"'}var a;if(ZADS.isArray(data)){a=new Array();var length=data.length;for(var i=0;i<length;i++){a.push(ZADS.serialize(data[i]))}return"["+ZADS.escape(a.join(","))+"]"}if(typeof data=="object"){a=[];for(var f in data){a.push('"'+f+'":'+ZADS.serialize(data[f]))}return"{"+ZADS.escape(a.join(","))+"}"}if(data==undefined){return"undefined"}if(data==null){return"null"}return data.toString()},isString:function(obj){if(typeof obj=="string"){return true}if(obj==undefined||obj==null){return false}if(typeof obj!="object"){return false}if(!obj.constructor){return false}return obj.constructor.toString().match(/string/i)!=null},isArray:function(obj){if(typeof obj!="object"){return false}return Object.prototype.toString.call(obj).match(/array|nodelist/i)!=null}}})();ZADS.DOM={_isReady:false,containsCss:function(b,a){var c=" "+b.className+" ";return c.indexOf(" "+a+" ")>=0},addCss:function(b,a){if(!this.containsCss(b,a)){b.className=b.className+" "+a}},removeCss:function(b,a){if(this.containsCss(b,a)){b.className=b.className.replace(a,"");this.removeCss(b,a)}},getByClass:function(f,b){b=b||document.body;if(b.getElementsByClassName){return ZADS.ARRAY.toArray(b.getElementsByClassName(f))}var g=b.getElementsByTagName("*"),d=[];for(var a=0,c=g.length;a<c;a++){if(this.containsCss(g[a],f)){d[d.length]=g[a]}}return d},getElementById:function(a){if(document.getElementById){element=document.getElementById(a)}else{if(document.all){element=document.all[a]}else{if(document.layers){element=document.layers[a]}}}return element},getDomElements:function(f,b,h){var d=b+":"+h;if(ZADS.BROWSER.firefox()){return f.getElementsByTagNameNS(document.body.namespaceURI,d)}else{if(ZADS.BROWSER.ie()&&ZADS.BROWSER.version()<9){try{var a=document.namespaces;if(a&&a[b]){var c=f.getElementsByTagName(h);if(!document.addEventListener||c.length>0){return c}}}catch(g){}return f.getElementsByTagName(d)}else{return f.getElementsByTagName(d)}}return""},getElements:function(f,b,g){var d=ZADS.ARRAY,a=this.getDomElements(f,b,g),c=this.getByClass(b+"-"+g,f);a=d.toArray(a);c=d.toArray(c);c=d.filter(c,function(h){return !h.hasChildNodes()||h.childNodes.length===1&&h.childNodes[0].nodeType===3});return d.merge(a,c)},injectHTML:function(c,d){var b=this.getElementById(d);if(b){if(document.createRange){var a=document.createRange();a.selectNode(document.body);b.parentNode.insertBefore(a.createContextualFragment(c),b)}else{b.parentNode.insertAdjacentHTML("beforeEnd",c)}return}},isReady:function(){if(this._isReady==true||document.readyState=="interactive"||document.readyState=="complete"){return true}return false}};ZADS.BROWSER={_opera:false,_msie:false,_safari:false,_chrome:false,_firefox:false,_mozilla:false,_version:null,getInfo:function(){if(this._version==null){var a=navigator.userAgent.toLowerCase();m=a.match(/(^|\s)(firefox|safari|opera|msie|chrome)[\/:\s]([\d\.]+)/)||["","","0.0"];this._opera=m[2]=="opera";this._msie=m[2]=="msie";this._safari=m[2]=="safari";this._chrome=m[2]=="chrome";this._firefox=m[2]=="firefox";this._mozilla=/mozilla/.test(a);this._version=(a.match(/\sversion\/([\d\.]+)/)||["",m[3]])[1]}},opera:function(){this.getInfo();return this._opera},ie:function(){this.getInfo();return this._msie},safari:function(){this.getInfo();return this._safari},chrome:function(){this.getInfo();return this._chrome},firefox:function(){this.getInfo();return this._firefox},mozilla:function(){this.getInfo();return this._mozilla},version:function(){this.getInfo();return this._version}};ZADS.ARRAY={indexOf:function(c,a){if(c.indexOf){return c.indexOf(a)}var d=c.length;if(d){for(var b=0;b<d;b++){if(c[b]===a){return b}}}return -1},merge:function(b,a){for(var c=0;c<a.length;c++){if(this.indexOf(b,a[c])<0){b.push(a[c])}}return b},filter:function(c,a){var d=[];for(var b=0;b<c.length;b++){if(a(c[b])){d.push(c[b])}}return d},forEach:function(f,b,g){if(!f){return}if(Object.prototype.toString.apply(f)==="[object Array]"||!(f instanceof Function)&&typeof f.length=="number"){if(f.forEach){f.forEach(b)}else{for(var d=0,a=f.length;d<a;d++){b(f[d],d,f)}}}else{for(var c in f){if(g||f.hasOwnProperty(c)){b(f[c],c,f)}}}},toArray:function(c){for(var a=0,d=[],b=c.length;a<b;a++){d[a]=c[a]}return d}};ZADS.M1={guid:function(){return"z2"+(Math.random()*(1<<30)).toString(16).replace(".","")},encode:function(c,a,d){a=a===undefined?"&":a;d=d===false?function(f){return f}:encodeURIComponent;var b=[];ZADS.ARRAY.forEach(c,function(g,f){if(g!==null&&typeof g!="undefined"){b.push(d(f)+"="+d(g))}});return b.join(a)},decode:function(g){var k=decodeURIComponent,d={},b=g.split("&"),f,l;for(f=0;f<b.length;f++){l=b[f].split("=");if(l&&l[0]){var c=l.slice(0,1);var j=l.slice(1,l.length);var h=j.join("=");d[k(c)]=k(h)}}return d},parse:function(a){if(typeof a!="undefined"){this.processElement(a,ZADS._tagInfos[0])}},processElement:function(b,a,c){ZADS.M1.Element._dom=b;ZADS.M1.Element.process()}};ZADS.M1.Element={_dom:null,_attr:null,_fetchPreCachedLoader:false,_widgetPipeEnabled:false,setupAndValidate:function(){this._attr={channel:"&"+this.getChannelUrl(this._dom),zid:this.getAttribute("zoneId"),width:this._getPxAttribute("width",304),height:this._getPxAttribute("height",-1)}},getAttribute:function(c,a,d){var b=this.getAttr(this._dom,c);return b?d?d(b):b:a},getAttr:function(b,a){return b.getAttribute(a)||b.getAttribute(a.replace(/_/g,"-"))||b.getAttribute(a.replace(/-/g,"_"))||b.getAttribute(a.replace(/-/g,""))||b.getAttribute(a.replace(/_/g,""))||b.getAttribute("z2-"+a)||b.getAttribute("z2-"+a.replace(/_/g,"-"))||b.getAttribute("z2-"+a.replace(/-/g,"_"))||b.getAttribute("z2-"+a.replace(/-/g,""))||b.getAttribute("z2-"+a.replace(/_/g,""))||null},_getPxAttribute:function(b,a){return this.getAttribute(b,a,function(c){var d=parseInt(c.replace("px",""),10);if(isNaN(d)){return a}else{return d}})},isValid:function(){for(var a=this._dom;a;a=a.parentNode){if(a==document.body){return true}}},resize:function(b,a){if(!this.isValid()){return}var c=this.getIframeNode(a);if(b.height&&b.height>10){c.style.height=b.height+"px"}if(b.width){if(b.width.indexOf("%")!=-1){c.style.width=b.width}else{c.style.width=b.width+"px"}}c.style.border="none";this.makeVisible(a)},getIframeNode:function(a){return a.getElementsByTagName("iframe")[0]},makeVisible:function(a){this.removeLoader();ZADS.DOM.removeCss(a,"z2_hide_iframes")},removeLoader:function(){if(this._loaderDiv){ZADS.DOM.removeCss(this._dom,"z2_iframe_widget_loader");if(this._loaderDiv.parentNode){this._loaderDiv.parentNode.removeChild(this._loaderDiv)}this._loaderDiv=null}},getChannelUrl:function(){var b=this;var a=this._dom;this._channelUrl=ZADS.M1.XD.handler(function(c){ZADS.M1.Element.resize(c,a)},"parent.parent",true);return ZADS.M1.Element._channelUrl},getSize:function(){return{width:this._attr.width,height:this._attr.height}},getURL:function(){return ZADS._domain.rnd},getQS:function(){return this.getUrlBits().params},getUrlBits:function(){return{name:"zads",params:this._attr}},getFullyQualifiedURL:function(){var a=this.getURL();var b="";if(document.getElementById("zads-dynamic")&&document.getElementById("zads-dynamic").getAttribute("values")!=undefined){b="zdyn="+encodeURIComponent(document.getElementById("zads-dynamic").getAttribute("values"))}if(!this._fetchPreCachedLoader){a+="?"+ZADS.M1.encode(this.getQS())+"&"+b}else{a+="?"+b;ZADS.log("Error getparam")}return a},process:function(){this.setupAndValidate();ZADS.DOM.addCss(this._dom,"z2_iframe_widget");if(this._visibleAfter!="immediate"){ZADS.DOM.addCss(this._dom,"z2_hide_iframes")}var d=this.getSize()||{};var b=this.getFullyQualifiedURL();var c="zadDiv_"+this._attr.zid;var f=document.createElement("div");f.id=c;var a="zadIframe_"+this._attr.zid;ZADS.M1.Content.insertIframe({id:a,url:b,root:this._dom.appendChild(f),name:null,title:"",className:ZADS._localeIsRtl?"z2_rtl":"z2_ltr",height:d.height,width:d.width})}};ZADS.M1.XD={_origin:null,_transport:null,_callbacks:{},_forever:{},_openerTransport:null,_openerOrigin:null,_nonOpenerOrigin:null,init:function(b){if(ZADS.M1.XD._origin){return}var a=window.location.protocol+"//"+window.location.host;if(window.postMessage){ZADS.M1.XD._origin=a;ZADS.M1.XD.PostMessage.init();ZADS.M1.XD._transport="postmessage"}else{if(!b&&ZADS.M1.Flash.hasMinVersion()){if(document.getElementById("zads-root")){ZADS.M1.XD._origin=a;ZADS.M1.XD.Flash.init();ZADS.M1.XD._transport="flash"}else{if(ZADS.log){ZADS.log("missing zads-root, defaulting to fragment-based xdcomm")}ZADS.M1.XD._transport="fragment";ZADS.M1.XD.Fragment._channelUrl=b||window.location.toString()}}else{ZADS.M1.XD._transport="fragment";ZADS.M1.XD.Fragment._channelUrl=b||window.location.toString()}}var c=!!window.attachEvent;if(ZADS.M1.XD._transport!="postmessage"&&c&&window.postMessage){ZADS.M1.XD._openerTransport=ZADS.M1.XD._transport;ZADS.M1.XD._openerOrigin=ZADS.M1.XD._origin;ZADS.M1.XD._nonOpenerOrigin=a}},recv:function(b){if(typeof b=="string"){b=ZADS.M1.decode(b)}var a=ZADS.M1.XD._callbacks[b.cb];if(!ZADS.M1.XD._forever[b.cb]){delete ZADS.M1.XD._callbacks[b.cb]}if(typeof _init!="undefined"&&typeof param_init_body!="undefined"){_init(param_init_body)}a&&a(b)},resolveRelation:function(f){var b,h,d=f.split("."),a=window;for(var c=0,g=d.length;c<g;c++){b=d[c];if(b==="opener"||b==="parent"||b==="top"){a=a[b]}else{if(h=/^frames\[['"]?([a-zA-Z0-9-_]+)['"]?\]$/.exec(b)){a=a.frames[h[1]]}else{throw new SyntaxError("Malformed id to resolve: "+f+", pt: "+b)}}}return a},handler:function(c,a,d){var b="";id=ZADS.M1.guid();if(ZADS.M1.XD._transport=="fragment"){}if(d){ZADS.M1.XD._forever[id]=true}ZADS.M1.XD._callbacks[id]=c;return b+ZADS.M1.encode({cb:id,origin:ZADS.M1.XD._origin,relation:a||"opener",transport:ZADS.M1.XD._transport})}};ZADS.M1.XD.PostMessage={init:function(){var a=ZADS.M1.XD.PostMessage.onMessage;if(window.addEventListener){window.addEventListener("message",a,false)}else{window.attachEvent("onmessage",a)}},onMessage:function(a){ZADS.M1.XD.recv(a.data)}};ZADS.M1.XD.Flash={init:function(){ZADS.M1.Flash.onReady(function(){var a=ZADS.M1.XD._openerOrigin?ZADS.M1.XD._openerOrigin:ZADS.M1.XD._origin;document.getElementById("XdComm").postMessage_init("ZADS.M1.XD.Flash.onMessage",a)})},onMessage:function(a){ZADS.M1.XD.recv(decodeURIComponent(a))}};ZADS.M1.XD.Fragment={_magic:"fb_xd_fragment",checkAndDispatch:function(){var b=window.location.toString(),a=b.substr(b.indexOf("#")+1),c=b.indexOf(ZADS.M1.XD.Fragment._magic);if(c>0){ZADS.M1.init=ZADS.M1.getLoginStatus=ZADS.M1.api=function(){};document.documentElement.style.display="none";ZADS.M1.XD.resolveRelation(ZADS.M1.decode(a).relation).ZADS.M1.XD.recv(a)}}};ZADS.M1.Flash={_swfPath:"/swf/zmexd-1.04.swf?t="+new Date().getTime(),_callbacks:[],_names:{},_unloadRegistered:false,init:function(){if(ZADS.M1.Flash._init){return}ZADS.M1.Flash._init=true;window.ZME_OnFlashXdCommReady=function(){ZADS.M1.Flash._ready=true;for(var b=0,a=ZADS.M1.Flash._callbacks.length;b<a;b++){ZADS.M1.Flash._callbacks[b]()}ZADS.M1.Flash._callbacks=[]};ZADS.M1.Flash.embedSWF("XdComm",ZADS._domain.stc+ZADS.M1.Flash._swfPath)},embedSWF:function(c,a,b){var g=!!document.attachEvent,d=('<object type="application/x-shockwave-flash" id="'+c+'" '+(b?'flashvars="'+b+'" ':"")+(g?'name="'+c+'" ':"")+(g?"":'data="'+a+'" ')+(g?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':"")+'allowscriptaccess="always"><param name="movie" value="'+a+'"></param><param name="allowScriptAccess" value="always"></param></object>');ZADS.M1.Content.appendHidden(d);if(ZADS.BROWSER.ie()&&ZADS.BROWSER.version()>=9){if(!ZADS.M1.Flash._unloadRegistered){var e=function(){ZADS.M1.ARRAY.forEach(ZADS.M1.Flash._names,function(f,j){var k=document.getElementById(j);if(k){k.removeNode(true)}})};window.attachEvent("onunload",e);ZADS.M1.Flash._unloadRegistered=true}ZADS.M1.Flash._names[c]=true}},hasMinVersion:function(){if(typeof ZADS.M1.Flash._hasMinVersion==="undefined"){var b;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(a){if(navigator.mimeTypes.length>0){var d="application/x-shockwave-flash";if(navigator.mimeTypes[d].enabledPlugin){var c="Shockwave Flash";b=(navigator.plugins[c+" 2.0"]||navigator.plugins[c]).description}}}if(b){ZADS.M1.Flash._hasMinVersion=true}else{ZADS.M1.Flash._hasMinVersion=false}}return ZADS.M1.Flash._hasMinVersion},onReady:function(a){ZADS.M1.Flash.init();if(ZADS.M1.Flash._ready){window.setTimeout(a,0)}else{ZADS.M1.Flash._callbacks.push(a)}}};ZADS.M1.Content={_callbacks:{},insertIframe:function(f){f.id=f.id||ZADS.M1.guid();f.name=f.name||ZADS.M1.guid();var b=ZADS.M1.guid(),g=false,d=false;ZADS.M1.Content._callbacks[b]=function(){if(g&&!d){d=true;f.onload&&f.onload(f.root.firstChild)}};if(document.attachEvent){var a='<iframe id="'+f.id+'" name="'+f.name+'"'+(f.className?' class="'+f.className+'"':"")+' style="border:none;'+(f.width?"width:"+f.width+"px;":"")+(f.height?"height:"+f.height+"px;":"height:0px")+'" src="'+f.url+'" frameborder="0" scrolling="no" allowtransparency="true" onload="ZADS.M1.Content._callbacks.'+b+'()"></iframe>';if(ZADS.BROWSER.ie()&&ZADS.BROWSER.version()<8){a='<iframe id="'+f.id+'" name="'+f.name+'"'+(f.className?' class="'+f.className+'"':"")+' style="border:none;'+(f.width?"width:"+f.width+"px;":"")+(f.height?"height:"+f.height+"px;":"")+'" src="'+f.url+'" frameborder="0" scrolling="no" allowtransparency="true" onload="ZADS.M1.Content._callbacks.'+b+'()"></iframe>'}f.root.innerHTML='<iframe src="javascript:false" frameborder="0" scrolling="no" style="height:0px"></iframe>';g=true;window.setTimeout(function(){f.root.innerHTML=a;f.onInsert&&f.onInsert(f.root.firstChild)},0)}else{var c=document.createElement("iframe");c.id=f.id;c.name=f.name;c.onload=ZADS.M1.Content._callbacks[b];c.scrolling="no";c.style.border="none";c.style.overflow="hidden";if(f.className){c.className=f.className}if(f.height>=0){c.style.height=f.height+"px"}if(f.width){c.style.width=f.width+"px"}f.root.appendChild(c);g=true;c.src=f.url;if(f.onInsert){f.onInsert(c)}}},append:function(b,a){if(!a){if(!ZADS.M1.Content._root){ZADS.M1.Content._root=a=document.getElementById("zads-root");if(!a){return}else{a.className+=" zads_reset"}}else{a=ZADS.M1.Content._root}}if(typeof b=="string"){var c=document.createElement("div");a.appendChild(c).innerHTML=b;return c}else{return a.appendChild(b)}},appendHidden:function(c){if(!ZADS.M1.Content._hiddenRoot){var a=document.createElement("div"),b=a.style;b.position="absolute";b.top="-10000px";b.width=b.height=0;ZADS.M1.Content._hiddenRoot=ZADS.M1.Content.append(a)}return ZADS.M1.Content.append(c,ZADS.M1.Content._hiddenRoot)}};ZADS.M2={_adDivs:new Array(),setupAdDiv:function(a){var b="zadDiv_"+a.getAttribute("z2-zoneid");a.innerHTML="<div id='"+b+"'></div>";var c=document.getElementById(b);ZADS.M2.setupAdDivAttr(c,parseInt(a.getAttribute("z2-width")),parseInt(a.getAttribute("z2-height")))},setupAdDivAttr:function(c,a,b){if(typeof a=="undefined"){a=300}if(typeof b=="undefined"){b=250}if(c){c.w=a;c.h=b}this._adDivs[this._adDivs.length]=c},loadIFrame:function(e,g,b,a,k){var l="?channel="+encodeURIComponent("&"+ZADS.M1.Element.getChannelUrl(this._dom));var j="";if(b!=null&&b!=undefined){j="&zid="+b}var h="";if(a!=null&&a!=undefined){h="&width="+a}var c="";if(k!=null&&k!=undefined){c="&height="+k}var d="";if(document.getElementById("zads-dynamic")&&document.getElementById("zads-dynamic").getAttribute("values")!=undefined){d="&zdyn="+encodeURIComponent(document.getElementById("zads-dynamic").getAttribute("values"))}var f="<html><body onload='parent.ZADS.M2.resizeIFrame(window, document, "+a+", "+(k+10)+")'>   <div id='zadDiv' style='overflow: visible; border:0;'>       <span id='zadSpan' style='overflow: visible; border:0;'>           <script type='text/javascript'>function resize(width, height){parent.ZADS.M2.resizeIFrame(window, document, width, height)}<\/script>           <script type='text/javascript' src='"+ZADS._domain.rnd_js+l+j+h+c+d+"'><\/script>       </span>   </div>";if(!ZADS.BROWSER.ie()){f+="   <script type='text/javascript'>       document.close();   <\/script>"}else{f+="   <script type='text/javascript'>       document.onreadystatechange=function(){if (document.readyState == 'interactive' || document.readyState == 'complete'){document.close( );}};   <\/script>"}f+="</body></html>";g.write(f)},resizeIFrame:function(f,k,b,l){var c=f.frameElement;if(c.style.width=="0px"||c.style.height=="0px"){var a=c.parentNode;if(a.childNodes.length==1){var d=k.getElementById("zadSpan");var g=k.getElementById("zadDiv");var j=d.offsetWidth;if(d){if(ZADS.BROWSER.ie()){var e=d.offsetHeight}else{var e=g.offsetHeight}if(j==0){j=b}if(e==0){e=l}c.style.width=j+"px";c.style.height=e+"px"}}}},loadAds:function(){ZADS.M2.doLoadAds()},doLoadAds:function(){for(i=0;i<ZADS.M2._adDivs.length;i++){setTimeout("ZADS.M2.loadAd("+i+")",0)}},loadAd:function(b){var d=ZADS.M2._adDivs[b];if(d.getAttribute("z2-rendered")!="true"){var a=d.getAttribute("id").replace("zadDiv_","");var c=document.createElement("iframe");c.id="zadIFrame_Base_"+a;c.style.height=0;c.style.width=0;c.marginWidth=0;c.marginHeight=0;c.frameBorder=0;c.scrolling="no";c.src="javascript:void(parent.ZADS.M2.loadIFrame(this, document, '"+a+"', "+d.w+", "+d.h+"))";d.appendChild(c);d.setAttribute("z2-rendered","true");d.align="center";if(d.w>0){d.style.width=d.w+"px"}if(d.h>0){d.style.height=d.h+"px"}}},getCookie:function(b){var c=document.cookie;var d=c.indexOf(" "+b+"=");if(d==-1){d=c.indexOf(b+"=")}if(d==-1){c=null}else{d=c.indexOf("=",d)+1;var a=c.indexOf(";",d);if(a==-1){a=c.length}c=unescape(c.substring(d,a))}return c},insertContent:function(c,d){try{if(c){if(!ZADS.BROWSER.ie()){var a=c.contentWindow?c.contentWindow.document:c.contentDocument;-1!=navigator.userAgent.indexOf("Firefox")&&a.open("text/html","replace");a.write(d);a.close()}else{c.contentWindow.contents=d;c.src='javascript:window["contents"]'}}}catch(b){_l("can not insert content into iframe:"+b.message)}},setContentIframe:function(c,a,d){var b=c.contentDocument.getElementById("zadIFrame_"+a);if(b!=null&&b!=undefined){this.insertContent(b,d)}},fillAdsContent:function(a,j,b,g){var f=document.getElementById("zadIFrame_Base_"+a);if(f!=null&&f!=undefined){var c=f.contentWindow?f.contentWindow.document:f.contentDocument;var e=c.getElementById("zadSpan");if(e!=null&&e!=undefined){var d=document.createElement("iframe");d.id="zadIFrame_"+a;d.name=a;if(ZADS.BROWSER.opera()){d.src="data:text/html; charset=utf-8, "+encodeURI(j)}else{d.src="about:blank"}d.className=ZADS._localeIsRtl?"z2_rtl":"z2_ltr";d.width=b;d.height=g+10;d.frameBorder=0;d.scrolling="no";d.style.border="none";d.style.overflow="hidden";e.appendChild(d);if(!ZADS.BROWSER.opera()){this.setContentIframe(f,a,j)}}}},fillRichMediaContent:function(c,e,n,o,f,l,g,b,j,k,a){var h="";if(e==3){h='<div id="zadRMD_Base_'+c+'">   <div id="zadRMD_'+c+'" zCollapse="'+f+'" zPosition="'+o+'" zExpandW="'+l+'" zExpandH="'+g+'" zOriginalW="'+b+'" zOriginalH="'+j+'" zType="'+e+'" zDuration="'+k+'">'+a+"   </div></div>"}else{if(e==4){var d="";if(o==7){d=" bottom:0px; left:0px; "}else{if(o==9){d=" bottom:0px; right:0px; "}}h='<div id="zadRMD_Base_'+c+'" style="position:fixed; width:'+l+"px; height:"+g+"px;"+d+'">   <div id="zadRMD_'+c+'" style="position: absolute; display: block; top: 0px;" zCollapse="'+f+'" zPosition="'+o+'" zExpandW="'+l+'" zExpandH="'+g+'" zOriginalW="'+b+'" zOriginalH="'+j+'" zType="'+e+'" zDuration="'+k+'">'+a+"   </div></div>"}}ZADS.DOM.injectHTML(h,"zadIFrame_Base_"+c);collapse(c)},fillInlineHTMLContent:function(b,a,c,d){var e="";e='<div id="zadInlineHTML_Base_'+b+'" style="width: '+c+"px; height: "+d+'px;">    <div id="zadInlineHTML_'+b+'" style="width: '+c+"px; height: "+d+'px;">'+a+"    </div></div>";ZADS.DOM.injectHTML(e,"zadIFrame_Base_"+b)},fillPopupAdsContent:function(d,a,b,o,f,h){var g="";var l="";var k=0;var c=0;if(f=="top-left"){c=0;k=0}else{if(f=="bottom-left"){c=0;k=screen.height?screen.height:0}else{if(f=="top-right"){c=screen.width?screen.width:0;k=0}else{if(f=="bottom-right"){c=screen.width?screen.width:0;k=screen.height?screen.height:0}else{if(f=="center"){c=screen.width?(screen.width-b)/2:0;k=screen.height?(screen.height-o)/2:0}}}}}var n=" width="+b+",height="+o+",left="+c+",top="+k+",screenX="+c+",screenY="+k+",status=0,toolbar=0,menubar=0,location=0,resizable=0,scrollbars=0,directories=0";var j=escape(a);var e=this.getCookie("__zads_popup");if(e==null||e==undefined||e!="123clicked"){e=false}else{e=true}if(h==null||h==undefined||h==0){h=60*60*1000}if(ZADS.BROWSER.chrome()){b=b+9;o=o+58;l="var clickedCookie = "+e+';var clicked = false;document.onclick = clickHandler;function clickHandler() {    if (!clicked && !clickedCookie) {        clicked = true;        var w = window.open("", "","'+n+'");        w.focus();        w.resizeTo('+b+","+o+");        w.moveTo("+c+","+k+');        w.document.body.style.overflow = "hidden";        w.document.write(unescape("'+j+'"));        var texpire = new Date();        texpire.setTime(texpire.getTime() +'+h+');        var value = "123clicked" + "; expires=" + texpire.toGMTString();        document.cookie = "__zads_popup" + "=" + value;    }}'}else{l="var clickedCookie = "+e+';var clicked = false;document.onclick = clickHandler;function clickHandler() {    if (!clicked && !clickedCookie) {        clicked = true;        var w = window.open("", "","'+n+'");        w.document.write(unescape("'+j+'"));        var texpire = new Date();        texpire.setTime(texpire.getTime() +'+h+');        var value = "123clicked" + "; expires=" + texpire.toGMTString();        document.cookie = "__zads_popup" + "=" + value;    }}'}g='<div id="zadPopup_Base_'+d+'">    <div id="zadPopup_'+d+'">        <script type="text/javascript">'+l+"        <\/script>    </div></div>";ZADS.DOM.injectHTML(g,"zadIFrame_Base_"+d)}};ZADS.M3={loadAd:function(b,d,c,a){setTimeout(function(){ZADS.M3.doLoadAd(b,d,c,a)},0)},doLoadAd:function(c,e,d,a){document.getElementById("zadDiv_"+d).innerHTML="";ZADS.createIframe(c,"zadIFrame_"+d,e.zwidth,0);var b='<script type="text/javascript">if(window.attachEvent){window.onload=new function(){window.parent.ZADS.resize(\'zadIFrame_'+d+"')}}else {window.onload=function(){window.parent.ZADS.resize('zadIFrame_"+d+"')}}\x3c/script>";ZADS.insertContent(document.getElementById("zadIFrame_"+d),a+b)},fillAdContent:function(c,e,n,f,l,g,b,j,k,a){var h="";if(e==3){h='<div id="zadRMD_Base_'+c+'">   <div id="zadRMD_'+c+'" zCollapse="'+f+'" zPosition="'+n+'" zExpandW="'+l+'" zExpandH="'+g+'" zOriginalW="'+b+'" zOriginalH="'+j+'" zType="'+e+'" zDuration="'+k+'">'+a+"   </div></div>"}else{if(e==4){var d="";if(n==7){d=" bottom:0px; left:0px; "}else{if(n==9){d=" bottom:0px; right:0px; "}}h='<div id="zadRMD_Base_'+c+'" style="position:fixed; width:'+l+"px; height:"+g+"px;"+d+'">   <div id="zadRMD_'+c+'" style="position: absolute; display: block; top: 0px;" zCollapse="'+f+'" zPosition="'+n+'" zExpandW="'+l+'" zExpandH="'+g+'" zOriginalW="'+b+'" zOriginalH="'+j+'" zType="'+e+'" zDuration="'+k+'">'+a+"   </div></div>"}}ZADS.DOM.injectHTML(h,"zadIFrame_"+c);collapse(c)}};ZADS.RMD={_obj:[],expandInline:function(e,b,d){this._obj[b]="expand";if(d){var a=e.getAttribute("zOriginalH");var c=e.getAttribute("zExpandH");this.increaseHeight(b,a,c,1)}else{if(e){var c=e.getAttribute("zExpandH");e.style.height=c+"px"}}},collapseInline:function(e,b,d){this._obj[b]="collapse";if(d){var a=e.getAttribute("zOriginalH");var c=e.getAttribute("zExpandH");this.descreaseHeight(b,c,a,1)}else{if(e){var a=e.getAttribute("zOriginalH");e.style.height=a+"px"}}},expandPopup:function(d,b){if(d){var a=d.getAttribute("zExpandW");var c=d.getAttribute("zExpandH");d.style.clip="rect(0px "+a+"px "+c+"px 0px)"}},collapsePopup:function(h,f){if(h){var d=h.getAttribute("zCollapse");var a=h.getAttribute("zPosition");var c=h.getAttribute("zExpandW");var g=h.getAttribute("zExpandH");var e=h.getAttribute("zOriginalW");var b=h.getAttribute("zOriginalH");switch(a){case"7":if(d=="1"){h.style.clip="rect("+(g-b)+"px "+c+"px "+g+"px 0px)"}else{if(d=="2"){h.style.clip="rect(0px "+(e)+"px "+g+"px 0px)"}}break;case"9":if(d=="1"){h.style.clip="rect("+(g-b)+"px "+c+"px "+g+"px 0px)"}else{if(d=="2"){h.style.clip="rect(0px "+c+"px "+g+"px "+(c-e)+"px)"}}break}}},_jsTimeout:new Number(),_jsTimDelay:60,_jsAcceleration:0.2,_jsVelocity:3,increaseHeight:function(c,f,e,b){clearTimeout(this._jsTimeout);var d=(this._jsAcceleration*Math.pow(parseInt(b),2))/2+this._jsVelocity*parseInt(b);var a=new Number();a=parseInt(f)+parseInt(d);if(a>=parseInt(e)){if(document.getElementById("zadRMD_"+c)){document.getElementById("zadRMD_"+c).style.height=e+"px"}}else{if(document.getElementById("zadRMD_"+c)){document.getElementById("zadRMD_"+c).style.height=a+"px"}b++;this._jsTimeout=setTimeout("ZADS.RMD.increaseHeight('"+c+"', "+a+", "+e+", "+b+" )",this._jsTimDelay)}},descreaseHeight:function(c,f,e,b){clearTimeout(this._jsTimeout);var d=(this._jsAcceleration*Math.pow(parseInt(b),2))/2+this._jsVelocity*parseInt(b);var a=new Number();a=parseInt(f)-parseInt(d);if(a<=parseInt(e)){if(document.getElementById("zadRMD_"+c)){document.getElementById("zadRMD_"+c).style.height=e+"px"}}else{if(document.getElementById("zadRMD_"+c)){document.getElementById("zadRMD_"+c).style.height=a+"px"}b++;this._jsTimeout=setTimeout("ZADS.RMD.descreaseHeight('"+c+"', "+a+", "+e+", "+b+" )",this._jsTimDelay)}}};if((typeof Range!=="undefined")&&!Range.prototype.createContextualFragment){Range.prototype.createContextualFragment=function(a){var c=document.createDocumentFragment(),b=document.createElement("div");c.appendChild(b);b.outerHTML=a;return c}}ZADS.ZA={_isTrck:false,process:function(){if(this._isTrck==false){if(ZADS.BROWSER.safari()){(function(n,j,o){var l,k=n.getElementsByTagName(j)[0];if(n.getElementById(o)){return}l=n.createElement(j);l.id=o;l.async=true;l.src=ZADS._domain.za_js;k.parentNode.insertBefore(l,k)}(document,"script","z2-jssdk2"))}else{var c=unescape(encodeURIComponent(window.location.hostname))||"",d=unescape(encodeURIComponent(window.location.pathname))||"",b=document.referrer||"",h=document.characterSet||document.charset||"",g=document.title||"",f=navigator.language||navigator.browserLanguage||"";var e="";e+="zdm="+c;e+=d?"&zpa="+d:"";e+=b?"&zrf="+b:"";e+=h?"&zch="+h.toLowerCase():"";e+=g?"&zt="+g:"";e+=f?"&zla="+f:"";var a=document.createElement("iframe");a.id="zadTrck";a.style.height=0;a.style.width=0;a.marginWidth=0;a.marginHeight=0;a.frameBorder=0;a.scrolling="no";a.width=0;a.height=0;a.src=ZADS._domain.za+"?"+e;if(document.body){document.body.appendChild(a)}}this._isTrck=true}}};ZADS.storage={put:function(a,b,d,c){a="zads-"+a;if(d==undefined){d=0}if(d!=0){d=d*1000}if(typeof localStorage!=="undefined"){localStorage.setItem(a,ZADS.serialize({data:b,expires:(new Date()).getTime()+d}))}else{if(c){ZADS.cookie(a,ZADS.serialize(b),{expires:d/(1000*60*60*24)})}}},get:function(a,c){a="zads-"+a;if(typeof localStorage!=="undefined"){var b=localStorage.getItem(a);if(b){var d=ZADS.parseJSON(b);if(d.expires==0||d.expires>(new Date()).getTime()){return d.data}localStorage.removeItem(a)}}else{if(c){return ZADS.parseJSON(ZADS.cookie(a))}}return""},remove:function(a){a="zads-"+a;this.put(a,null,-1)}};function expand(a,b){var d=ZADS.DOM.getElementById("zadRMD_"+a);if(d){var c=d.getAttribute("zType");if(c=="4"){if(!ZADS.BROWSER.ie()){ZADS.RMD.expandPopup(d,a,b)}}else{if(c=="3"){ZADS.RMD.expandInline(d,a,b)}}}}function collapse(a,b){var d=ZADS.DOM.getElementById("zadRMD_"+a);if(d){var c=d.getAttribute("zType");if(c=="4"){if(!ZADS.BROWSER.ie()){ZADS.RMD.collapsePopup(d,a,b)}}else{if(c=="3"){ZADS.RMD.collapseInline(d,a,b)}}}}function close(a){if(document.getElementById("zadDiv_"+a)){document.getElementById("zadDiv_"+a).style.display="none"}}ZADS.process();window.onload=function(){ZADS.process();ZADS.ZA.process()}};