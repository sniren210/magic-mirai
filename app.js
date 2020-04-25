document.addEventListener("mousemove",function(e){
	var body = document.querySelector('body');
	var bubble = document.createElement('span');
	var x = e.offsetX;
	var y = e.offsetY;

	bubble.style.left = x+"px";
	bubble.style.top = y+"px";

	var size = Math.random() * 100;

	bubble.style.width = size+"px";
	bubble.style.height = size+"px";	

	body.appendChild(bubble);

	setTimeout(function () {
		bubble.remove();
	},4000)
})