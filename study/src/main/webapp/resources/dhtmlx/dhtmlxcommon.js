//v.3.6 build 130619

/*
Copyright Dinamenta, UAB http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
dhtmlx=function(a){for(var b in a)dhtmlx[b]=a[b];return dhtmlx};dhtmlx.extend_api=function(a,b,c){var d=window[a];if(d)window[a]=function(a){if(a&&typeof a=="object"&&!a.tagName){var c=d.apply(this,b._init?b._init(a):arguments),f;for(f in dhtmlx)if(b[f])this[b[f]](dhtmlx[f]);for(f in a)if(b[f])this[b[f]](a[f]);else f.indexOf("on")==0&&this.attachEvent(f,a[f])}else c=d.apply(this,arguments);b._patch&&b._patch(this);return c||this},window[a].prototype=d.prototype,c&&dhtmlXHeir(window[a].prototype,c)};
dhtmlxAjax={get:function(a,b){var c=new dtmlXMLLoaderObject(!0);c.async=arguments.length<3;c.waitCall=b;c.loadXML(a);return c},post:function(a,b,c){var d=new dtmlXMLLoaderObject(!0);d.async=arguments.length<4;d.waitCall=c;d.loadXML(a,!0,b);return d},getSync:function(a){return this.get(a,null,!0)},postSync:function(a,b){return this.post(a,b,null,!0)}};
function dtmlXMLLoaderObject(a,b,c,d){this.xmlDoc="";this.async=typeof c!="undefined"?c:!0;this.onloadAction=a||null;this.mainObject=b||null;this.waitCall=null;this.rSeed=d||!1;return this}dtmlXMLLoaderObject.count=0;
dtmlXMLLoaderObject.prototype.waitLoadFunction=function(a){var b=!0;return this.check=function(){if(a&&a.onloadAction!=null&&(!a.xmlDoc.readyState||a.xmlDoc.readyState==4)&&b){b=!1;dtmlXMLLoaderObject.count++;if(typeof a.onloadAction=="function")a.onloadAction(a.mainObject,null,null,null,a);if(a.waitCall)a.waitCall.call(this,a),a.waitCall=null}}};
dtmlXMLLoaderObject.prototype.getXMLTopNode=function(a,b){if(this.xmlDoc.responseXML){var c=this.xmlDoc.responseXML.getElementsByTagName(a);c.length==0&&a.indexOf(":")!=-1&&(c=this.xmlDoc.responseXML.getElementsByTagName(a.split(":")[1]));var d=c[0]}else d=this.xmlDoc.documentElement;if(d)return this._retry=!1,d;if(!this._retry&&_isIE)return this._retry=!0,b=this.xmlDoc,this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/,""),!0),this.getXMLTopNode(a,b);dhtmlxError.throwError("LoadXML","Incorrect XML",
[b||this.xmlDoc,this.mainObject]);return document.createElement("DIV")};dtmlXMLLoaderObject.prototype.loadXMLString=function(a,b){if(_isIE)this.xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),this.xmlDoc.async=this.async,this.xmlDoc.onreadystatechange=function(){},this.xmlDoc.loadXML(a);else{var c=new DOMParser;this.xmlDoc=c.parseFromString(a,"text/xml")}if(!b){if(this.onloadAction)this.onloadAction(this.mainObject,null,null,null,this);if(this.waitCall)this.waitCall(),this.waitCall=null}};
dtmlXMLLoaderObject.prototype.loadXML=function(a,b,c,d){this.rSeed&&(a+=(a.indexOf("?")!=-1?"&":"?")+"a_dhx_rSeed="+(new Date).valueOf());this.filePath=a;this.xmlDoc=!_isIE&&window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(this.async)this.xmlDoc.onreadystatechange=new this.waitLoadFunction(this);this.xmlDoc.open(b?"POST":"GET",a,this.async);d?(this.xmlDoc.setRequestHeader("User-Agent","dhtmlxRPC v0.1 ("+navigator.userAgent+")"),this.xmlDoc.setRequestHeader("Content-type",
"text/xml")):b&&this.xmlDoc.setRequestHeader("Content-type",this.contenttype||"application/x-www-form-urlencoded");this.xmlDoc.setRequestHeader("X-Requested-With","XMLHttpRequest");this.xmlDoc.send(c);this.async||(new this.waitLoadFunction(this))()};
dtmlXMLLoaderObject.prototype.destructor=function(){return this.setXSLParamValue=this.getXMLTopNode=this.xmlNodeToJSON=this.doSerialization=this.loadXMLString=this.loadXML=this.doXSLTransToString=this.doXSLTransToObject=this.doXPathOpera=this.doXPath=this.xmlDoc=this.mainObject=this.onloadAction=this.filePath=this.rSeed=this.async=this._retry=this._getAllNamedChilds=this._filterXPath=null};
dtmlXMLLoaderObject.prototype.xmlNodeToJSON=function(a){for(var b={},c=0;c<a.attributes.length;c++)b[a.attributes[c].name]=a.attributes[c].value;b._tagvalue=a.firstChild?a.firstChild.nodeValue:"";for(c=0;c<a.childNodes.length;c++){var d=a.childNodes[c].tagName;d&&(b[d]||(b[d]=[]),b[d].push(this.xmlNodeToJSON(a.childNodes[c])))}return b};function callerFunction(a,b){return this.handler=function(c){if(!c)c=window.event;a(c,b);return!0}}function getAbsoluteLeft(a){return getOffset(a).left}
function getAbsoluteTop(a){return getOffset(a).top}function getOffsetSum(a){for(var b=0,c=0;a;)b+=parseInt(a.offsetTop),c+=parseInt(a.offsetLeft),a=a.offsetParent;return{top:b,left:c}}
function getOffsetRect(a){var b=a.getBoundingClientRect(),c=document.body,d=document.documentElement,e=window.pageYOffset||d.scrollTop||c.scrollTop,g=window.pageXOffset||d.scrollLeft||c.scrollLeft,f=d.clientTop||c.clientTop||0,h=d.clientLeft||c.clientLeft||0,i=b.top+e-f,k=b.left+g-h;return{top:Math.round(i),left:Math.round(k)}}function getOffset(a){return a.getBoundingClientRect?getOffsetRect(a):getOffsetSum(a)}
function convertStringToBoolean(a){typeof a=="string"&&(a=a.toLowerCase());switch(a){case "1":case "true":case "yes":case "y":case 1:case !0:return!0;default:return!1}}function getUrlSymbol(a){return a.indexOf("?")!=-1?"&":"?"}function dhtmlDragAndDropObject(){if(window.dhtmlDragAndDrop)return window.dhtmlDragAndDrop;this.dragStartObject=this.dragStartNode=this.dragNode=this.lastLanding=0;this.tempDOMM=this.tempDOMU=null;this.waitDrag=0;window.dhtmlDragAndDrop=this;return this}
dhtmlDragAndDropObject.prototype.removeDraggableItem=function(a){a.onmousedown=null;a.dragStarter=null;a.dragLanding=null};dhtmlDragAndDropObject.prototype.addDraggableItem=function(a,b){a.onmousedown=this.preCreateDragCopy;a.dragStarter=b;this.addDragLanding(a,b)};dhtmlDragAndDropObject.prototype.addDragLanding=function(a,b){a.dragLanding=b};
dhtmlDragAndDropObject.prototype.preCreateDragCopy=function(a){if(!((a||window.event)&&(a||event).button==2)){if(window.dhtmlDragAndDrop.waitDrag)return window.dhtmlDragAndDrop.waitDrag=0,document.body.onmouseup=window.dhtmlDragAndDrop.tempDOMU,document.body.onmousemove=window.dhtmlDragAndDrop.tempDOMM,!1;window.dhtmlDragAndDrop.dragNode&&window.dhtmlDragAndDrop.stopDrag(a);window.dhtmlDragAndDrop.waitDrag=1;window.dhtmlDragAndDrop.tempDOMU=document.body.onmouseup;window.dhtmlDragAndDrop.tempDOMM=
document.body.onmousemove;window.dhtmlDragAndDrop.dragStartNode=this;window.dhtmlDragAndDrop.dragStartObject=this.dragStarter;document.body.onmouseup=window.dhtmlDragAndDrop.preCreateDragCopy;document.body.onmousemove=window.dhtmlDragAndDrop.callDrag;window.dhtmlDragAndDrop.downtime=(new Date).valueOf();a&&a.preventDefault&&a.preventDefault();return!1}};
dhtmlDragAndDropObject.prototype.callDrag=function(a){if(!a)a=window.event;dragger=window.dhtmlDragAndDrop;if(!((new Date).valueOf()-dragger.downtime<100)){if(!dragger.dragNode)if(dragger.waitDrag){dragger.dragNode=dragger.dragStartObject._createDragNode(dragger.dragStartNode,a);if(!dragger.dragNode)return dragger.stopDrag();dragger.dragNode.onselectstart=function(){return!1};dragger.gldragNode=dragger.dragNode;document.body.appendChild(dragger.dragNode);document.body.onmouseup=dragger.stopDrag;dragger.waitDrag=
0;dragger.dragNode.pWindow=window;dragger.initFrameRoute()}else return dragger.stopDrag(a,!0);if(dragger.dragNode.parentNode!=window.document.body&&dragger.gldragNode){var b=dragger.gldragNode;if(dragger.gldragNode.old)b=dragger.gldragNode.old;b.parentNode.removeChild(b);var c=dragger.dragNode.pWindow;b.pWindow&&b.pWindow.dhtmlDragAndDrop.lastLanding&&b.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(b.pWindow.dhtmlDragAndDrop.lastLanding);if(_isIE){var d=document.createElement("Div");d.innerHTML=
dragger.dragNode.outerHTML;dragger.dragNode=d.childNodes[0]}else dragger.dragNode=dragger.dragNode.cloneNode(!0);dragger.dragNode.pWindow=window;dragger.gldragNode.old=dragger.dragNode;document.body.appendChild(dragger.dragNode);c.dhtmlDragAndDrop.dragNode=dragger.dragNode}dragger.dragNode.style.left=a.clientX+15+(dragger.fx?dragger.fx*-1:0)+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px";dragger.dragNode.style.top=a.clientY+3+(dragger.fy?dragger.fy*-1:0)+(document.body.scrollTop||
document.documentElement.scrollTop)+"px";var e=a.srcElement?a.srcElement:a.target;dragger.checkLanding(e,a)}};dhtmlDragAndDropObject.prototype.calculateFramePosition=function(a){if(window.name){for(var b=parent.frames[window.name].frameElement.offsetParent,c=0,d=0;b;)c+=b.offsetLeft,d+=b.offsetTop,b=b.offsetParent;if(parent.dhtmlDragAndDrop){var e=parent.dhtmlDragAndDrop.calculateFramePosition(1);c+=e.split("_")[0]*1;d+=e.split("_")[1]*1}if(a)return c+"_"+d;else this.fx=c;this.fy=d}return"0_0"};
dhtmlDragAndDropObject.prototype.checkLanding=function(a,b){a&&a.dragLanding?(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding),this.lastLanding=a,this.lastLanding=this.lastLanding.dragLanding._dragIn(this.lastLanding,this.dragStartNode,b.clientX,b.clientY,b),this.lastLanding_scr=_isIE?b.srcElement:b.target):a&&a.tagName!="BODY"?this.checkLanding(a.parentNode,b):(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding,b.clientX,b.clientY,b),this.lastLanding=
0,this._onNotFound&&this._onNotFound())};
dhtmlDragAndDropObject.prototype.stopDrag=function(a,b){dragger=window.dhtmlDragAndDrop;if(!b){dragger.stopFrameRoute();var c=dragger.lastLanding;dragger.lastLanding=null;c&&c.dragLanding._drag(dragger.dragStartNode,dragger.dragStartObject,c,_isIE?event.srcElement:a.target)}dragger.lastLanding=null;dragger.dragNode&&dragger.dragNode.parentNode==document.body&&dragger.dragNode.parentNode.removeChild(dragger.dragNode);dragger.dragNode=0;dragger.gldragNode=0;dragger.fx=0;dragger.fy=0;dragger.dragStartNode=
0;dragger.dragStartObject=0;document.body.onmouseup=dragger.tempDOMU;document.body.onmousemove=dragger.tempDOMM;dragger.tempDOMU=null;dragger.tempDOMM=null;dragger.waitDrag=0};dhtmlDragAndDropObject.prototype.stopFrameRoute=function(a){a&&window.dhtmlDragAndDrop.stopDrag(1,1);for(var b=0;b<window.frames.length;b++)try{window.frames[b]!=a&&window.frames[b].dhtmlDragAndDrop&&window.frames[b].dhtmlDragAndDrop.stopFrameRoute(window)}catch(c){}try{parent.dhtmlDragAndDrop&&parent!=window&&parent!=a&&parent.dhtmlDragAndDrop.stopFrameRoute(window)}catch(d){}};
dhtmlDragAndDropObject.prototype.initFrameRoute=function(a,b){if(a)window.dhtmlDragAndDrop.preCreateDragCopy(),window.dhtmlDragAndDrop.dragStartNode=a.dhtmlDragAndDrop.dragStartNode,window.dhtmlDragAndDrop.dragStartObject=a.dhtmlDragAndDrop.dragStartObject,window.dhtmlDragAndDrop.dragNode=a.dhtmlDragAndDrop.dragNode,window.dhtmlDragAndDrop.gldragNode=a.dhtmlDragAndDrop.dragNode,window.document.body.onmouseup=window.dhtmlDragAndDrop.stopDrag,window.waitDrag=0,!_isIE&&b&&(!_isFF||_FFrv<1.8)&&window.dhtmlDragAndDrop.calculateFramePosition();
try{parent.dhtmlDragAndDrop&&parent!=window&&parent!=a&&parent.dhtmlDragAndDrop.initFrameRoute(window)}catch(c){}for(var d=0;d<window.frames.length;d++)try{window.frames[d]!=a&&window.frames[d].dhtmlDragAndDrop&&window.frames[d].dhtmlDragAndDrop.initFrameRoute(window,!a||b?1:0)}catch(e){}};_OperaRv=_KHTMLrv=_FFrv=_isChrome=_isMacOS=_isKHTML=_isOpera=_isIE=_isFF=!1;navigator.userAgent.indexOf("Macintosh")!=-1&&(_isMacOS=!0);navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&(_isChrome=!0);
if(navigator.userAgent.indexOf("Safari")!=-1||navigator.userAgent.indexOf("Konqueror")!=-1)_KHTMLrv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari")+7,5)),_KHTMLrv>525?(_isFF=!0,_FFrv=1.9):_isKHTML=!0;else if(navigator.userAgent.indexOf("Opera")!=-1)_isOpera=!0,_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera")+6,3));else if(navigator.appName.indexOf("Microsoft")!=-1){if(_isIE=!0,(navigator.appVersion.indexOf("MSIE 8.0")!=-1||navigator.appVersion.indexOf("MSIE 9.0")!=
-1||navigator.appVersion.indexOf("MSIE 10.0")!=-1)&&document.compatMode!="BackCompat")_isIE=8}else _isFF=!0,_FFrv=parseFloat(navigator.userAgent.split("rv:")[1]);
dtmlXMLLoaderObject.prototype.doXPath=function(a,b,c,d){if(_isKHTML||!_isIE&&!window.XPathResult)return this.doXPathOpera(a,b);if(_isIE)return b||(b=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML),b||dhtmlxError.throwError("LoadXML","Incorrect XML",[b||this.xmlDoc,this.mainObject]),c!=null&&b.setProperty("SelectionNamespaces","xmlns:xsl='"+c+"'"),d=="single"?b.selectSingleNode(a):b.selectNodes(a)||[];else{var e=b;b||(b=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML);b||dhtmlxError.throwError("LoadXML",
"Incorrect XML",[b||this.xmlDoc,this.mainObject]);b.nodeName.indexOf("document")!=-1?e=b:(e=b,b=b.ownerDocument);var g=XPathResult.ANY_TYPE;if(d=="single")g=XPathResult.FIRST_ORDERED_NODE_TYPE;var f=[],h=b.evaluate(a,e,function(){return c},g,null);if(g==XPathResult.FIRST_ORDERED_NODE_TYPE)return h.singleNodeValue;for(var i=h.iterateNext();i;)f[f.length]=i,i=h.iterateNext();return f}};function j(){if(!this.catches)this.catches=[];return this}j.prototype.catchError=function(a,b){this.catches[a]=b};
j.prototype.throwError=function(a,b,c){if(this.catches[a])return this.catches[a](a,b,c);if(this.catches.ALL)return this.catches.ALL(a,b,c);alert("Error type: "+a+"\nDescription: "+b);return null};window.dhtmlxError=new j;
dtmlXMLLoaderObject.prototype.doXPathOpera=function(a,b){var c=a.replace(/[\/]+/gi,"/").split("/"),d=null,e=1;if(!c.length)return[];if(c[0]==".")d=[b];else if(c[0]=="")d=(this.xmlDoc.responseXML||this.xmlDoc).getElementsByTagName(c[e].replace(/\[[^\]]*\]/g,"")),e++;else return[];for(;e<c.length;e++)d=this._getAllNamedChilds(d,c[e]);c[e-1].indexOf("[")!=-1&&(d=this._filterXPath(d,c[e-1]));return d};
dtmlXMLLoaderObject.prototype._filterXPath=function(a,b){for(var c=[],b=b.replace(/[^\[]*\[\@/g,"").replace(/[\[\]\@]*/g,""),d=0;d<a.length;d++)a[d].getAttribute(b)&&(c[c.length]=a[d]);return c};
dtmlXMLLoaderObject.prototype._getAllNamedChilds=function(a,b){var c=[];_isKHTML&&(b=b.toUpperCase());for(var d=0;d<a.length;d++)for(var e=0;e<a[d].childNodes.length;e++)_isKHTML?a[d].childNodes[e].tagName&&a[d].childNodes[e].tagName.toUpperCase()==b&&(c[c.length]=a[d].childNodes[e]):a[d].childNodes[e].tagName==b&&(c[c.length]=a[d].childNodes[e]);return c};function dhtmlXHeir(a,b){for(var c in b)typeof b[c]=="function"&&(a[c]=b[c]);return a}
function dhtmlxEvent(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}dtmlXMLLoaderObject.prototype.xslDoc=null;dtmlXMLLoaderObject.prototype.setXSLParamValue=function(a,b,c){if(!c)c=this.xslDoc;if(c.responseXML)c=c.responseXML;var d=this.doXPath("/xsl:stylesheet/xsl:variable[@name='"+a+"']",c,"http://www.w3.org/1999/XSL/Transform","single");if(d!=null)d.firstChild.nodeValue=b};
dtmlXMLLoaderObject.prototype.doXSLTransToObject=function(a,b){if(!a)a=this.xslDoc;if(a.responseXML)a=a.responseXML;if(!b)b=this.xmlDoc;if(b.responseXML)b=b.responseXML;if(_isIE){d=new ActiveXObject("Msxml2.DOMDocument.3.0");try{b.transformNodeToObject(a,d)}catch(c){d=b.transformNode(a)}}else{if(!this.XSLProcessor)this.XSLProcessor=new XSLTProcessor,this.XSLProcessor.importStylesheet(a);var d=this.XSLProcessor.transformToDocument(b)}return d};
dtmlXMLLoaderObject.prototype.doXSLTransToString=function(a,b){var c=this.doXSLTransToObject(a,b);return typeof c=="string"?c:this.doSerialization(c)};dtmlXMLLoaderObject.prototype.doSerialization=function(a){if(!a)a=this.xmlDoc;if(a.responseXML)a=a.responseXML;if(_isIE)return a.xml;else{var b=new XMLSerializer;return b.serializeToString(a)}};
dhtmlxEventable=function(a){a.attachEvent=function(a,c,d){a="ev_"+a.toLowerCase();this[a]||(this[a]=new this.eventCatcher(d||this));return a+":"+this[a].addEvent(c)};a.callEvent=function(a,c){a="ev_"+a.toLowerCase();return this[a]?this[a].apply(this,c):!0};a.checkEvent=function(a){return!!this["ev_"+a.toLowerCase()]};a.eventCatcher=function(a){var c=[],d=function(){for(var d=!0,g=0;g<c.length;g++)if(c[g]!=null)var f=c[g].apply(a,arguments),d=d&&f;return d};d.addEvent=function(a){typeof a!="function"&&
(a=eval(a));return a?c.push(a)-1:!1};d.removeEvent=function(a){c[a]=null};return d};a.detachEvent=function(a){if(a!=!1){var c=a.split(":");this[c[0]].removeEvent(c[1])}};a.detachAllEvents=function(){for(var a in this)a.indexOf("ev_")==0&&(this.detachEvent(a),this[a]=null)};a=null};

//v.3.6 build 130619

/*
Copyright Dinamenta, UAB http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/