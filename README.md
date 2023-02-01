# obui
Object
Based
User
Interface

A port of fbui that uses objects and classes instead of functions

to use:
<script src="http://lib.edensobol.com/obui/main.js"></script>
or
download main.js, put it on your site and
<script src="/main.js"></script>


HOW TO USE:

to initialize an element, run:
elementName = new Element(type,content,id)
type is the element type, like p, a, div, or span
content is the innerHTML of the element after creation
id the the id of the element

after this is run, nothing happens. you need to run one of the four create commands:

elementName.draw()
takes no arguments. simply draws to the screen

elementName.rectangle(width,height,color)
width is the width of the rectangle
height is the height of the rectangle
color is the color of the rectangle

elementName.circle(width,height,color)
same as rectangle but round

elementName.triangle(base,height,color,side)
base is the length of the base of the triangle
height is the height
color is the color
side is what way the base is facing. you can put in "left", "right", "top", "bottom", or nothing. nothing will autofill to bottom. it needs to be a string

other commands:

elementName.edit(newContent,editType)
newContent is the content to replace the old content
editType decides wether to edit inner or outer HTML. elementName.edit("new text", "inner") will replace the text. elementName.edit("<div>", "outer") will change the element to be a div
