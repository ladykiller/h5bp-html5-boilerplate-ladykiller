
;(function(){
	var canvas=null;
	var ctx = null;
	var hkey_key = null;
	var default_header = null;
	var default_footer =null;
	var hkey_root="HKEY_CURRENT_USER\\";
	var hkey_path="Software\\Microsoft\\Internet Explorer\\PageSetup\\";
	
	Wheatmark.Form = {
		setCanvas2D:function(id){
			canvas=document.getElementById(id);
			ctx=canvas.getContext('2d');
		},
		createRect:function(px,py,width,height){
			ctx.fillStyle='#FF0000';
			ctx.fillRect(px,py,width,height);
		},
		drawLine:function(bx,by,ex,ey){
			  ctx.beginPath();
			  ctx.moveTo(bx,by);
			  ctx.lineTo(ex,ey);
			  ctx.stroke();
		},
		halfSize:function(){
			ctx.scale(0.5,0.5);
		},
		drawLineAnimate:function(bx,by,ex,ey){
			  var diffx = (ex-bx)/100;
			  var diffy = (ey-by)/100;
			  var i;
			  for(i=0;i<100;i++){
				  setTimeout('Wheatmark.drawLine('+(bx+diffx*i)+','+(by+diffy*i)+','+(bx+diffx*(i+1))+','+(by+diffy*(i+1))+')',50*i);
			  }
		},
		writeText:function(text,px,py,font,textAlign){
			ctx.font = font;
			ctx.textAlign = textAlign;
			ctx.fillText(text, px, py);
		},
		cleanUp:function(){
			ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		},
		
		
		sleep:function (numberMillis) {
		    var now = new Date();
		    var exitTime = now.getTime() + numberMillis;
		    while (true) {
		        now = new Date();
		        if (now.getTime() > exitTime)
		            return;
		    }
		},
		//设置网页打印的页眉页脚为空
		pagesetup_null:function () {
			try {
				var RegWsh = new ActiveXObject("WScript.Shell");
				hkey_key = "header";
				default_header = RegWsh.RegRead(hkey_root + hkey_path + hkey_key);
				RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
				
				hkey_key = "footer";
				default_footer = RegWsh.RegRead(hkey_root + hkey_path + hkey_key);
				RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
			} catch (e) {
			}
		},
		// 设置网页打印的页眉页脚为默认值
		pagesetup_default:function () {
			try {
				var RegWsh = new ActiveXObject("WScript.Shell");
				hkey_key = "header";
				RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, default_header);
				hkey_key = "footer";
				RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, default_footer);
			} catch (e) {
			}
		},
		Popup:function(){
			var windowAttr = "location=no,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
			//windowAttr += ",width=" + screen.width + ",height=" + screen.height;
			windowAttr += ",width=" + 0 + ",height=" + 0;
			windowAttr += ",resizable=yes,screenX=" + 0 + ",screenY=" + 0 + ",personalbar=no,scrollbars=no,top=10000,left=10000";
			
			var newWin = window.open( "", "_blank",  windowAttr );
			newWin.doc = newWin.document;
			return newWin;
		},
		print:function () {
			Wheatmark.pagesetup_null();
			window.print();
			Wheatmark.pagesetup_default();
		}
	 };
  })();




