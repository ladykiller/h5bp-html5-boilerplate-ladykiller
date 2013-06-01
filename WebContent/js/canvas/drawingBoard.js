var beginFlag = 1;
var mousePos ={x: 0,y: 0};
var bx=0,by=0,ex=0,ey=0;

$(document).ready(function(){
    var canvas = document.getElementById('drawingBoard');
    var context = canvas.getContext('2d');
 
    canvas.addEventListener('mousemove', function(evt){
    	mousePos = getMousePos(canvas, evt);
    	ex=mousePos.x;
    	ey=mousePos.y;
    	var message = "Mouse position: " + ex + "," + ey;
    	writeMessage(canvas, message);
    	if(beginFlag===-1){
    		Wheatmark.drawLine(bx,by,ex,ey);
    	}
    	bx=ex;
    	by=ey;
    }, false);

	$('#drawingBoard').mousedown(function(evt){
    	beginFlag = beginFlag*(-1);
    });
	
	$('#drawingBoard').mouseup(function(evt){
    	beginFlag = beginFlag*(-1);
    });
   
	Wheatmark.setCanvas2D('drawingBoard');
	
	$('#create').click(function(){
		$('#drawWindow').css('display','block');
	});
	$('#hide').click(function(){
		$('#drawWindow').css('display','none');
	});
	$('#clean').click(function(){
		Wheatmark.cleanUp();
	});
	$('#print').click(function(){
		var context = canvas.getContext('2d');
	    context.clearRect(0, 0, canvas.width, 50);
		$('#header').css('display','none');
		Wheatmark.print();
		$('#header').css('display','block');
	});
	
});

function writeMessage(canvas, message){
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, 50);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt){
    //    获得canvas 位置
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // 返回鼠标相对位置
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}
