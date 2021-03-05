let device = screen.width;

let element = document.querySelectorAll('.aos-delay-time');

if(device<992){
for(let i=0;i<element.length;i++){
	element[i].removeAttribute("data-aos-delay");
	element[i].removeAttribute("data-aos-duration");
	element[i].setAttribute("data-aos-duration","300");
}
}