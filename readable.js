class Element {
	constructor(type,content,id) {
		this.type = type
		this.content = content
		this.id = id
	}
	draw() {
		var name = document.createElement(this.type)
		name.innerHTML = this.content
		name.id = this.id
		
		document.body.innerHTML += name.outerHTML
	}
	edit(newContent,editType) {
		const content = newContent
		if (editType == "inner") {
			document.getElementById(this.id).innerHTML = content
		}
		if (editType == "outer") {
			document.getElementById(this.id).outerHTML = content
		}
	}
	remove() {
		const element = document.getElementById(this.id)
		element.parentNode.removeChild(element)
	}
	
	rectangle(width, height, color) {
		var name = document.createElement(this.type)
		name.innerHTML = this.content
		name.id = this.id
		name.style.position="absolute"
		name.style.width = width
		name.style.height = height
		name.style.backgroundColor = color
		
		document.body.innerHTML += name.outerHTML
	}
	triangle(base, height, color, side="bottom") {
		var name = document.createElement(this.type)
		name.innerHTML = this.content
		name.style.position="absolute"
		name.id = this.id
		name.style.width = "0"
		name.style.height = "0"
		
		base /= 2
		
		if (side == "bottom") {
			name.style.borderLeft = base + "px solid transparent"
			name.style.borderRight = base + "px solid transparent"
			name.style.borderBottom = height + `px solid ${color}`
		}
		if (side == "top") {
			name.style.borderLeft = base + "px solid transparent"
			name.style.borderRight = base + "px solid transparent"
			name.style.borderTop = height + `px solid ${color}`
		}
		if (side == "left") {
			name.style.borderLeft = height + `px solid ${color}`
			name.style.borderTop = base + "px solid transparent"
			name.style.borderBottom = base + "px solid transparent"
		}
		if (side == "right") {
			name.style.borderBottom = base + "px solid transparent"
			name.style.borderRight = height + `px solid ${color}`
			name.style.borderTop = base + "px solid transparent"
		}
		
		document.body.innerHTML += name.outerHTML
	}
	circle(width,height,color) {
		var name = document.createElement(this.type)
		name.innerHTML = this.content
		name.id = this.id
		name.style.position="absolute"
		name.style.width = width
		name.style.height = height
		name.style.backgroundColor = color
		name.style.borderRadius = "100%"
		
		document.body.innerHTML += name.outerHTML
	}
}
