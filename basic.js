

type = kiểu = class
property = attr

SuperMan.prototype = new Person();



var: global scoped=toan cuc
let <name>: block scoped: chi ton tai trong khoi: if, for, while, ...
riêng + là + string -> "5"+ 2 là "52"
'5' * 2 = 10

#for
for (let i of [1, 2, 3]) {
  console.log(i)
}
// 1
// 2
// 3

for (let [index, value] of ['hi', 'hello', 'world'].entries()) {
  console.log(index, value)
}
// 0 "hi"
// 1 "hello"
// 2 "world"

const obj = {key1: 'hi', key2: 'hello', key3: 'world'};
for (let key in obj) {
  console.log(key, obj[key])
}
// or
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value)
}
// key1 hi
// key2 hello
// key3 world


#generator
function * countdown(n) {
  for (let i = n; i > 0; --i) {
    yield i
  }
}

[...countdown(3)] // [ 3, 2, 1 ]

//
let gen = countdown(3)
gen.next() // 3
gen.next() // 2




#function
timeout = setTimeout(function() {
  #code tùy ý}, 1000
) -> cho sau 1s run 1lan va ket thuc

clearTimeout(timeout)


interval = setInterval(function() {
  #code tùy ý}, 2000
) -> cho sau 2s run va lap lai vo tan

clearInterval(interval)



#element
element = document.getElementById('idName')

elements = document.getElementsByClassName('className')
elements = document.getElementsByTagName('tagName')


#child #element 
elements = document.querySelectorAll("p.exa");
"p.exa" class="exa"
"p#exa" id ="exa"


#css 
<element>.style.<propertyName> = value



tagname = document.activeElement.tagName;

#tag a ko chứa href
length = document.anchors.length

#tag a, area có chứa href
length = document.links.length

# số tag scripts
length = document.scripts.length;
length = document.images.length;

status = document.readyState

#url get current url page
url = document.URL
title = document.title


#window #location 
w = window.location.<methods>

w.href = "url" #redirect
w.assign(url) == href

w.replace(url) #redirect no history

w.reload()


#cookie 
document.cookie = 'name=vuthanhtai; expires=Thu, 22 Dec 2017 19:55:20 UTC;path=/';


#history h=history
h.length #list history
h.back() #backw history
h.forward() #forw history
h.go(+-n) # n lần backf or forw history

#window #navigator nav=navigator
nav

#screen s
#atttrs
s.width #get width pc
s.height #get height pc

s.availWidth #width browser
s.availHeight #height browser
s.colorDepth #list color screen
s.pixelDepth # 


#date 
var date = new Date() #current date
còn rất nhiều methods for date object

#string 
var name = "dung"
var name = new String("dung")
còn rất nhiều methods

#math 
Math.<attrs or methods>

#storape
Storape
localStorape.
  length
  setItem(key, value)
  getItem(key)
  removeItem(key)
  clear()

quick set get
localStorape.tenkey = value
localStorape.tenkey


#sessionStorape 

#type 
typeof String // is function
typeof(String) // is functione

