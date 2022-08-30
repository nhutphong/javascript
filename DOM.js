/*
	var element = document.getElementById("id is demo")
	var array_el = document.getElementsByTagName("p a div ...")
	var array_el = document.getElementsByClassName("classname is haha")	
	var array_el = document.querySelectorAll("p.intro"); // <p class="intro"> </p>


	// change attributes el va property css
	// attribute html: src img name id class, ...
	// property css: color background front-size, ...

	element.innerHTML =  new html content	Change the inner HTML of an element
	element.<attribute> = new value	Change the attribute value of an HTML element
	element.style.<property> = new style	Change the style of an HTML element
	element.setAttribute(attribute, value)


	// add and del elements
	document.createElement(element)	Create an HTML element
	document.removeChild(element)	Remove an HTML element
	document.appendChild(element)	Add an HTML element
	document.replaceChild(new, old)	Replace an HTML element
	document.write(text)

	// events: element.<events>
	onclick = "click mouse"
	onload && onunload = "vao website va outside website"
	onchange = "dung cho input; khi nhap data vao input, outside se run"
	onmousedown = "click mouse giu mouse run function"
	onmouseup = "click mouse nha ra run function"
	onmouseover = "khi mouse di qua element"
	onmouseout = "khi mouse roi khoi element"


	// dung element.addEventListener("eventName", myFunction)
	// NOTE: eventName bo "on" o dau
	element.addEventListener("mouseover", myFunction);
	element.addEventListener("click", mySecondFunction);
	element.addEventListener("mouseout", myThirdFunction);


	element.addEventListener("click", myThirdFunction, true); // default=false;

	elementParent, chua elementChild
	false: cung set "click" thi khi click elementChild se se run Child roi toi Parent
	true:  cung set "click" thi khi click elementChild se se run Parent roi toi Child

*/

/*
	// gan truc tiep event vao tag <h2 onclick="changeText(this)">
	// 
	<h2>JavaScript HTML Events</h2>
	<h2 onclick="changeText(this)">Click on this text!</h2>
	// this = <h2> =el

	<script>
		function changeText(el) {
		  el.innerHTML = "Ooops!";
		}
	</script>

*/

/*
	<script>
		// add event="mouseover" for element="myDIV"
		document.getElementById("myDIV").addEventListener("mousemove", myFunction);

		function myFunction() {
		  document.getElementById("demo").innerHTML = Math.random();
		}
		
		// selected element="myDIV" va event"mouseover" duoc gan truoc do
		function removeHandler() {
		  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
		}
	</script>

*/


// khi keo dan browser se run, voi event="resize"
window.addEventListener("resize", function(){
  document.getElementById("random").innerHTML = Math.random();
});