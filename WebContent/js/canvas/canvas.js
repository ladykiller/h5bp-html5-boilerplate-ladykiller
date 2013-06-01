$(document).ready(function(){
	Wheatmark.setCanvas2D('myCanvas');
	
	$('#createRect').click(function(){
		$('#printWindow').css('display','block');
		drawTable();
	});
	$('#cleanPic').click(function(){
		Wheatmark.cleanUp();
	});
	$('#printPic').click(function(){
		$('#header').css('display','none');
		Wheatmark.print();
		$('#header').css('display','block');
	});
	$('#hidePic').click(function(){
		$('#printWindow').css('display','none');
	});
});

/**
 * 
 * 画一个中间有交叉线的矩形
 * 2013-5-25
 * void
 */
function drawCross(){
	Wheatmark.drawLineAnimateAnimate(20,20,20,1080);
	Wheatmark.drawLineAnimateAnimate(20,1080,773,1080);
	Wheatmark.drawLineAnimateAnimate(20,20,773,1080);
	Wheatmark.drawLineAnimateAnimate(773,1080,773,20);
	Wheatmark.drawLineAnimateAnimate(773,20,20,20);
	Wheatmark.drawLineAnimateAnimate(773,20,20,1080);
}

function drawTable(){
	Wheatmark.drawLine(20,100,20,1080);
	Wheatmark.drawLine(20,1080,773,1080);
	Wheatmark.drawLine(773,1080,773,100);
	Wheatmark.drawLine(773,100,20,100);
	Wheatmark.writeText('税务登记表（适用单位纳税人）',210,50,'30px 宋体 bold','start');
	Wheatmark.writeText('填表日期：'+getCurrentDate(),30,90,'20px 宋体','start');
	Wheatmark.drawLine(140,100,140,1080);
	Wheatmark.drawLine(400,100,400,1080);
	Wheatmark.drawLine(540,100,540,1080);
	var i,py;
	for(i=0;i<35;i++){
		py=100+28*(i+1);
		Wheatmark.drawLine(20,py,773,py);
	}
	
	Wheatmark.writeText('纳税人名称',30,122,'20px 宋体','start');
	Wheatmark.writeText('纳税人识别号',410,122,'20px 宋体','start');
}

function getCurrentDate(){
	var date = new Date();
	return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}