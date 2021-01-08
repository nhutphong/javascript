

type = kiểu = class
property = attr

SuperMan.prototype = new Person();



var: global scoped=toan cuc
let <name>: block scoped: chi ton tai trong khoi: if, for, while, ...
riêng + là + string -> "5"+ 2 là "52"
'5' * 2 = 10

for(x in dict) { dict[x] }

function loop(){
  for(var <param> of <arguments>){
    console.log(param)
  }
}
arguments <=> *args(tupple)
loop('nhut', 'dung', 'thông')

var dict = {name: 'phong', old: 26, myfunc: function(){ return this.name+this.old} }
name,old là instance attr
myfunc là method của dict

class
contructor( param1, ....){}

static hello(){}
dùng class_name.hello() để call static method, ko dùng đc instance

super(params,...); call class_cha

var dict = {
    name = "phong",
    get product() { return this.name; },
    set product(value) { this.name=value; }
}

dict{} là obj.name, obj old
dict.name || dict['name']

var list =['apple', 'cam']
var list = new Array ()

basic
function myfunc() {return "";}

hay dùng trong object{} <=> dict{} python
function(name, old){
  console.log(name,old)
} <=> lambda python

khai báo nhanh func

hello = function(params,...){

  }
hay dùng trong dict {myMethod: function() {}}

arrow func cũng vậy
hello = () => "hello arrow";
hello = (val) => "hello"+ val;
hello = (pa1, pa2) { return pa1+pa2;}


xuất 1 obj, or 1 class duy nhất
#one.js
export default class MyClass {}
or
export default { MyClass }

#two.js
NameHa <=> MyClass
import <NameHa> from 'one.js'

names <=> file.js name
import * as names from 'three.js'

names.func1, names.func2,... 

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

