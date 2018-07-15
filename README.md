# Ao
Markup language that compiles to HTML

## Example
```ao
meta:
	title:Website:title
:meta

content:
	#:Welcome to my Website:#
	
	divider::
	
	p:yes it is:p
:content
```
compiles to
```html
<html>
<head>
	<title>Website</title>
</head>

<body>
	<h1>Welcome to my Website</h1>
	
	<hr/>
	
	<p>yes it is</p>
</body>
```
