let container = document.createElement('div');
container.style.cssText = "z-index:100;position:fixed;width:100%;height:100%;top:0;left:0;";
container.setAttribute("id", "container");
document.body.appendChild(container);
for(let i = 0; i < 5; i++) {
	let cat = document.createElement('div');
	let image = document.createElement('img');
	image.setAttribute('src','https://avatanplus.com/files/resources/original/57e7f0709699a157620337e9.png');
	cat.style.cssText = "transition:all 3s; position:relative; z-index: 2000; width: 100%; height: calc(20% - 60px); padding: 30px 0 30px 0;";
	cat.setAttribute('class', 'cat');
	image.style.cssText = "height: 100%;";
	cat.appendChild(image);
	container.appendChild(cat);
}
let cats = document.getElementsByClassName('cat');
for(let i = 0; i < 5; i++) {
	setTimeout(function() {
		cats[i].style.marginLeft = (window.screen.width + 300) + 'px';
	}, Math.random()*500);
}
setTimeout(function() {
	container.remove();
}, 5000);
