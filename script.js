const $ = (id) => document.getElementById(id);
const categories = [
  {id:"Python",icon:"🐍",desc:"Logic, syntax & coding",color:"purple"},
  {id:"HTML",icon:"🌐",desc:"The building blocks of web",color:"pink"},
  {id:"CSS",icon:"🎨",desc:"Style up the web",color:"purple"},
  {id:"JavaScript",icon:"⚡",desc:"Make websites interactive",color:"yellow"},
  {id:"General Knowledge",icon:"🌍",desc:"Explore the world",color:"green"},
  {id:"Aptitude",icon:"🧠",desc:"Sharpen your reasoning",color:"pink"}
];

const bank = {
Python:{
Easy:[
["Which keyword is used to define a function in Python?",["func","define","def","function"],2,"The def keyword starts a function definition."],
["Which data type stores True or False?",["int","bool","str","list"],1,"bool represents Boolean values."],
["What is the output of print(2 + 3)?",["23","5","2 + 3","Error"],1,"The + operator adds two numbers."],
["Which symbol starts a comment in Python?",["//","#","/*","--"],1,"A # starts a single-line comment."],
["Which collection is ordered and changeable?",["tuple","set","list","frozenset"],2,"Lists are ordered and mutable."],
["What does len('cat') return?",["2","3","4","cat"],1,"There are three characters in cat."],
["Which function displays output?",["input()","print()","show()","write()"],1,"print() displays output."],
["Which value represents no value?",["null","None","zero","empty"],1,"Python uses None for absence of a value."],
["How do you access the first list item?",["items[1]","items[0]","items.first","items(-1)"],1,"Python indexing starts at zero."],
["Which loop repeats while a condition is true?",["for","repeat","while","loop"],2,"A while loop runs as long as its condition is true."],
["What is the output of print(5 % 2)?",["2","1","2.5","0"],1,"The modulo operator returns the remainder."],
["Which function converts a string to an integer?",["str()","float()","int()","bool()"],2,"int() converts a compatible value to an integer."],
["Which keyword is used for conditional branching?",["loop","if","def","import"],1,"if executes a block when a condition is true."],
["What is the output of print('Py' + 'thon')?",["Py thon","Python","Py+thon","Error"],1,"The + operator concatenates strings."],
["Which method removes the last list item?",["remove()","delete()","pop()","clear()"],2,"pop() removes and returns the last item by default."],
["Which function gets input from a user?",["scan()","input()","read()","get()"],1,"input() reads user input as a string."],
["What is the output of print(3 * 2)?",["5","6","32","9"],1,"The multiplication operator returns 6."],
["Which keyword imports a module?",["include","using","import","require"],2,"import loads a module."],
["Which brackets create a Python list?",["{}","()","[]","<>"],2,"Square brackets create lists."],
["What does print(10 > 5) display?",["False","True","10","5"],1,"10 is greater than 5, so the result is True."]

],
Medium:[
["What is the output of bool([])?",["True","False","None","Error"],1,"An empty list is falsy."],
["Which method adds one item to a list?",["add()","append()","insertAll()","push()"],1,"append() adds an item to the end."],
["What is the result of 10 // 3?",["3.33","3","1","4"],1,"// performs floor division."],
["Which keyword handles exceptions?",["catch","error","except","final"],2,"except handles a matching exception."],
["What does range(3) produce?",["1,2,3","0,1,2","0,1,2,3","3"],1,"range(3) produces 0, 1, 2."],
["Which data type uses key-value pairs?",["list","tuple","dict","set"],2,"A dictionary stores key-value pairs."],
["What does 'hello'.upper() return?",["Hello","HELLO","hello","hELLO"],1,"upper() converts letters to uppercase."],
["What is a lambda?",["A loop","An anonymous function","A class","A module"],1,"lambda creates a small anonymous function."],
["Which operator checks equality?",["=","==","===","!="],1,"== compares values for equality."],
["What does enumerate() provide?",["Only values","Indexes and values","Only indexes","Sorted values"],1,"enumerate yields index-value pairs."],
["What does list slicing [1:4] select?",["Indexes 1 to 4","Indexes 1, 2, 3","Indexes 0 to 4","Only index 4"],1,"The ending index is excluded."],
["Which method removes a key from a dictionary?",["delete()","remove()","pop()","discard()"],2,"pop() removes a key and returns its value."],
["What is the output of len({1, 2, 2, 3})?",["4","3","2","Error"],1,"A set stores only unique elements."],
["Which keyword creates a class?",["object","class","struct","define"],1,"The class keyword defines a class."],
["What does zip() do?",["Compress files","Combines iterables element by element","Sorts lists","Removes duplicates"],1,"zip pairs corresponding elements from iterables."],
["What is the output of 2 ** 3?",["5","6","8","9"],2,"** is the exponentiation operator."],
["Which method checks whether a string starts with text?",["begins()","startswith()","start()","prefix()"],1,"startswith() checks the beginning of a string."],
["What does sorted([3, 1, 2]) return?",["[3, 2, 1]","[1, 2, 3]","[2, 1, 3]","None"],1,"sorted() returns a new sorted list."],
["Which keyword skips the current loop iteration?",["stop","exit","continue","pass"],2,"continue moves to the next iteration."],
["What does dict.get('age') return if the key is missing?",["Always 0","None by default","Error always","False"],1,"get() returns None by default when a key is absent."]],
Hard:[
["What is the output of [x*x for x in range(3)]?",["[1,4,9]","[0,1,4]","[0,1,2]","[1,2,3]"],1,"The values are 0², 1² and 2²."],
["Which statement about tuples is correct?",["Mutable","Immutable","Always numeric","Unordered"],1,"Tuples cannot be changed after creation."],
["What does *args collect in a function?",["Keyword arguments","Positional arguments","A dictionary","Exceptions"],1,"*args collects extra positional arguments into a tuple."],
["Which structure is typically used by a decorator?",["A function wrapping another function","A SQL table","A loop only","A list only"],0,"A decorator wraps or modifies a callable."],
["What does the 'with' statement commonly manage?",["Imports","Context managers","Loops","Inheritance"],1,"with handles setup and cleanup for context-managed resources."],
["Which method returns an iterator in a generator?",["yield","return only","next only","iterable"],0,"yield produces values from a generator."],
["What is the average lookup complexity of a dictionary?",["O(n)","O(log n)","O(1)","O(n²)"],2,"Dictionary lookup is average O(1)." ],
["What does isinstance(x, int) check?",["Value is positive","Object type membership","Variable exists","Integer conversion"],1,"It checks whether x is an instance of int."],
["Which creates a shallow copy of a list?",["a = b","a = b.copy()","a is b","del b"],1,"copy() creates a shallow copy."],
["What is the purpose of __init__?",["Destroy object","Initialize an instance","Print object","Import module"],1,"__init__ initializes a newly created instance."],
["What does functools.lru_cache help with?",["Sorting","Memoization","File handling","Thread creation"],1,"lru_cache caches function results to avoid repeated calculations."],
["Which method is called when an object is created?",["__start__()","__new__()","__create__()","__begin__()"],1,"__new__() creates an instance before __init__ initializes it."],
["What does the GIL primarily control in CPython?",["Memory allocation","Execution of Python bytecode by threads","Database access","File permissions"],1,"The GIL allows only one thread at a time to execute Python bytecode in standard CPython builds."],
["What does a generator expression use?",["{}","[]","()","<>"],2,"Generator expressions use parentheses."],
["Which module supports regular expressions?",["regex","re","pattern","match"],1,"Python's re module provides regular expression operations."],
["What does super() help access?",["Parent class methods","Global variables","Local files","List indexes"],0,"super() provides access to methods in the method resolution order."],
["What is a metaclass?",["A class of a class","A list subclass","A decorator only","A module"],0,"A metaclass defines how classes are created."],
["Which exception is raised by accessing a missing dictionary key with []?",["ValueError","IndexError","KeyError","TypeError"],2,"A missing dictionary key raises KeyError."],
["What does asyncio primarily support?",["Asynchronous programming","Image editing","SQL queries","Memory compression"],0,"asyncio supports concurrent asynchronous code."],
["What is the purpose of __slots__?",["Restrict instance attributes and potentially save memory","Sort class methods","Delete objects","Create generators"],0,"__slots__ declares allowed instance attributes and can reduce per-instance memory use."]]},

HTML:{
Easy:[
["What does HTML stand for?",["Hyper Trainer Marking Language","HyperText Markup Language","HighText Machine Language","HyperText Markdown Language"],1,"HTML means HyperText Markup Language."],
["Which tag creates the largest heading?",["<h6>","<head>","<h1>","<heading>"],2,"h1 is the highest-level heading."],
["Which tag creates a hyperlink?",["<link>","<a>","<href>","<url>"],1,"The anchor tag creates links."],
["Which attribute provides image alternative text?",["title","src","alt","href"],2,"alt describes an image for accessibility."],
["Which tag inserts a line break?",["<break>","<br>","<lb>","<hr>"],1,"br inserts a line break."],
["Which tag defines a paragraph?",["<p>","<para>","<text>","<pg>"],0,"The p element represents a paragraph."],
["Where is page metadata placed?",["<body>","<footer>","<head>","<main>"],2,"Metadata belongs inside head."],
["Which tag creates an unordered list?",["<ol>","<ul>","<li>","<list>"],1,"ul creates a bulleted list."],
["Which attribute gives an element a unique identifier?",["class","name","id","style"],2,"An id should uniquely identify an element."],
["Which tag embeds JavaScript?",["<javascript>","<script>","<code>","<js>"],1,"JavaScript is commonly embedded using script."],
["Which tag displays a horizontal line?",["<line>","<hr>","<br>","<border>"],1,"The hr element represents a thematic break."],
["Which attribute specifies an image source?",["href","alt","src","link"],2,"src specifies the image URL."],
["Which tag creates a numbered list?",["<ul>","<ol>","<li>","<dl>"],1,"ol creates an ordered list."],
["Which tag defines a table cell?",["<tr>","<th>","<td>","<table>"],2,"td defines a standard table cell."],
["Which attribute specifies a destination URL for a link?",["src","href","alt","target"],1,"href specifies the hyperlink destination."],
["Which tag makes text bold with importance?",["<strong>","<italic>","<small>","<mark>"],0,"strong indicates strong importance."],
["Which tag creates a form?",["<input>","<form>","<label>","<fieldset>"],1,"The form element groups controls for submission."],
["Which tag defines the document title?",["<meta>","<header>","<title>","<caption>"],2,"title defines the browser tab title."],
["Which attribute specifies a unique link destination?",["id","class","style","name"],0,"An id uniquely identifies an element."],
["Which tag is used to play video?",["<media>","<movie>","<video>","<play>"],2,"The video element embeds video content."]],
Medium:[
["Which element is semantic?",["<div>","<span>","<article>","<b>"],2,"article describes a self-contained composition."],
["What does the label 'for' attribute connect to?",["A form id","An input id","A CSS class","A URL"],1,"It connects the label to an element id."],
["Which input type validates email format?",["text","mail","email","address"],2,"type=email provides built-in email validation."],
["What does the required attribute do?",["Hides a field","Makes a field mandatory","Makes it read-only","Deletes a field"],1,"The field must be completed before submission."],
["Which tag is used for a table row?",["<td>","<th>","<tr>","<table-row>"],2,"tr defines a table row."],
["Which attribute opens a link in a new tab?",["new","target='_blank'","open='tab'","rel='new'"],1,"target=_blank requests a new browsing context."],
["What is the purpose of the alt attribute?",["Change image size","Alternative text","Add animation","Set image URL"],1,"It provides text alternatives for images."],
["Which element contains the main page content?",["<main>","<meta>","<aside>","<head>"],0,"main represents the dominant content."],
["Which tag groups form controls?",["<fieldset>","<formgroup>","<inputset>","<controls>"],0,"fieldset groups related controls."],
["What does defer do on a script?",["Runs before HTML","Waits until document parsing completes","Deletes script","Loads CSS"],1,"defer delays execution until parsing is complete."],
["Which attribute specifies where a form sends its data?",["method","action","target","name"],1,"action specifies the URL that processes form data."],
["Which HTTP method is commonly used to submit form data in a request body?",["GET","POST","TRACE","HEAD"],1,"POST commonly sends form data in the request body."],
["Which element is used to provide a caption for a figure?",["<caption>","<figcaption>","<legend>","<summary>"],1,"figcaption provides a caption for its parent figure."],
["Which attribute makes an input field read-only?",["disabled","readonly","locked","static"],1,"readonly prevents editing while keeping the field focusable."],
["Which element defines a dropdown list?",["<select>","<dropdown>","<optionlist>","<inputlist>"],0,"select creates a dropdown control."],
["Which attribute connects a datalist to an input?",["list","options","data","for"],0,"The input list attribute references a datalist id."],
["Which element is used to display progress of a task?",["<meter>","<progress>","<status>","<loading>"],1,"progress represents task completion."],
["Which tag represents emphasized text?",["<em>","<strong>","<mark>","<small>"],0,"em indicates stress emphasis."],
["Which attribute sets the language of an HTML document?",["charset","lang","language-type","locale"],1,"The lang attribute identifies the document language."],
["Which element provides a description list term?",["<dd>","<dt>","<dl>","<li>"],1,"dt defines a term in a description list."]],
Hard:[
["Which attribute helps prevent form submission without validation?",["novalidate","validate","required","formcheck"],0,"novalidate disables built-in constraint validation."],
["What does aria-label provide?",["Visual styling","An accessible name","A link target","A tooltip only"],1,"aria-label provides an accessible name."],
["Which element is appropriate for navigation links?",["<nav>","<navigate>","<menuitem>","<links>"],0,"nav represents a section of navigation links."],
["What is the purpose of the picture element?",["Audio playback","Responsive image sources","Canvas drawing","Video captions"],1,"picture allows different image sources for conditions."],
["Which attribute associates a button with a form?",["form","action","for","owner"],0,"The form attribute can associate a button with a form."],
["What does the sandbox attribute on iframe do?",["Adds borders","Applies restrictions to embedded content","Enables autoplay","Changes resolution"],1,"sandbox applies restrictions to iframe content."],
["Which input attribute defines a regex constraint?",["pattern","regex","match","validate"],0,"pattern specifies a regular expression constraint."],
["What is the role of the details element?",["Create a dialog","Disclosure widget","Make text bold","Define metadata"],1,"details creates a disclosure widget."],
["Which tag marks machine-readable date/time?",["<date>","<time>","<datetime>","<clock>"],1,"time represents a date or time."],
["What does rel='noopener' help prevent?",["CSS conflicts","Access through window.opener","Image loading","Form errors"],1,"noopener prevents the opened page from controlling window.opener."],
["Which attribute allows an iframe to request fullscreen access?",["allowfullscreen","fullscreen","screen","full"],0,"allowfullscreen permits fullscreen presentation when allowed."],
["What does the crossorigin attribute control?",["Image dimensions","Cross-origin resource handling","Text alignment","Form validation"],1,"It configures how cross-origin requests are handled."],
["Which element is used to provide multiple image sources for different screen conditions?",["<source>","<imgset>","<responsive>","<picture-source>"],0,"source elements inside picture provide alternative image sources."],
["What does the form attribute on an input allow?",["Styling forms","Associating it with a form elsewhere in the document","Disabling validation","Changing its type"],1,"It associates a form control with a form by id."],
["Which attribute can specify an image's intrinsic width?",["size","width","image-width","scale"],1,"width specifies the image's rendered width."],
["Which element represents a scalar measurement within a known range?",["<progress>","<meter>","<range>","<measure>"],1,"meter represents a measurement within a defined range."],
["What is the purpose of the inert attribute?",["Make content editable","Prevent interaction with an element and its descendants","Make text bold","Load content lazily"],1,"Inert content is excluded from normal interaction."],
["Which attribute provides a hint for browser autofill?",["autocomplete","autofill","suggest","complete"],0,"autocomplete controls browser autofill behavior."],
["Which element can define a reusable SVG or HTML template?",["<template>","<layout>","<clone>","<reuse>"],0,"template holds content that is not rendered until used."],
["What does loading='lazy' on an image do?",["Compresses the image","Defers loading until near the viewport","Disables the image","Loads it immediately"],1,"Lazy loading delays off-screen image loading."]]},

CSS:{
Easy:[
["Which property changes text colour?",["font-color","color","text-style","foreground"],1,"color sets text colour."],
["Which symbol selects a class?",["#",".","*","@"],1,"A dot selects a class."],
["Which property changes background colour?",["background-color","bgcolor","color-fill","background-text"],0,"background-color sets the background colour."],
["Which unit is relative to the root font size?",["px","em","rem","vh"],2,"rem is relative to the root font size."],
["Which property makes text bold?",["font-style","font-weight","text-bold","weight"],1,"font-weight controls thickness."],
["What does CSS stand for?",["Creative Style Sheets","Cascading Style Sheets","Computer Style Syntax","Colourful Sheet System"],1,"CSS means Cascading Style Sheets."],
["Which property adds space inside an element?",["margin","padding","gap-out","border"],1,"padding is inner spacing."],
["Which property rounds corners?",["corner","border-radius","round","curve"],1,"border-radius rounds corners."],
["Which selector targets an id?",[".","#","!","&"],1,"# selects an id."],
["Which property controls text size?",["font-size","text-size","size","font-style"],0,"font-size sets text size."],
["Which property changes the font family?",["font-type","font-family","text-font","font-name"],1,"font-family specifies the typeface."],
["Which property aligns text to the center?",["text-position","align","text-align","font-align"],2,"text-align controls horizontal text alignment."],
["Which property adds a border around an element?",["outline-color","border","frame","edge"],1,"border adds an element border."],
["Which value hides an element completely?",["visibility:visible","display:none","display:block","opacity:1"],1,"display:none removes the element from layout."],
["Which property controls element transparency?",["opacity","transparent","visibility","filter-text"],0,"opacity controls transparency."],
["Which property sets the space outside an element?",["padding","margin","border","gap"],1,"margin controls outer spacing."],
["Which selector targets every element?",["#",".","*","@"],2,"The universal selector is *."],
["Which property changes the mouse cursor?",["mouse","pointer-style","cursor","hover"],2,"cursor controls the pointer appearance."],
["Which property adds a shadow to text?",["box-shadow","font-shadow","text-shadow","shadow-text"],2,"text-shadow adds a shadow to text."],
["Which CSS property controls the width of an element?",["height","width","size","length"],1,"width sets the element's width."]],
Medium:[
["Which display mode enables flex layout?",["display:block","display:flex","position:flex","flex:true"],1,"display:flex creates a flex container."],
["Which property controls stacking order?",["layer","z-index","stack","order-index"],1,"z-index controls stacking in positioned contexts."],
["What does box-sizing:border-box include?",["Content only","Padding and border in declared size","Margin","Only border"],1,"The declared width includes content, padding and border."],
["Which unit is relative to viewport width?",["vh","vw","em","rem"],1,"vw is one percent of viewport width."],
["Which pseudo-class applies on pointer hover?",[":focus",":active",":hover",":visited"],2,":hover applies while the pointer is over an element."],
["Which property creates a grid layout?",["display:grid","position:grid","grid:true","layout:grid"],0,"display:grid creates a grid container."],
["What does position:fixed do?",["Scrolls with content","Positions relative to viewport","Uses grid","Hides element"],1,"A fixed element is positioned relative to the viewport."],
["Which property controls transition speed?",["transition-duration","animation-speed","transform-time","speed"],0,"transition-duration sets transition length."],
["What does flex-wrap:wrap allow?",["Items to overlap","Items to move onto multiple lines","Items to disappear","Reverse order"],1,"Items can wrap onto additional flex lines."],
["Which function is used for responsive breakpoints?",["@screen","@media","@responsive","@device"],1,"@media applies styles based on media conditions."],
["Which property changes the font family?",["font-type","font-family","text-font","font-name"],1,"font-family specifies the typeface."],
["Which property aligns text to the center?",["text-position","align","text-align","font-align"],2,"text-align controls horizontal text alignment."],
["Which property adds a border around an element?",["outline-color","border","frame","edge"],1,"border adds an element border."],
["Which value hides an element completely?",["visibility:visible","display:none","display:block","opacity:1"],1,"display:none removes the element from layout."],
["Which property controls element transparency?",["opacity","transparent","visibility","filter-text"],0,"opacity controls transparency."],
["Which property sets the space outside an element?",["padding","margin","border","gap"],1,"margin controls outer spacing."],
["Which selector targets every element?",["#",".","*","@"],2,"The universal selector is *."],
["Which property changes the mouse cursor?",["mouse","pointer-style","cursor","hover"],2,"cursor controls the pointer appearance."],
["Which property adds a shadow to text?",["box-shadow","font-shadow","text-shadow","shadow-text"],2,"text-shadow adds a shadow to text."],
["Which CSS property controls the width of an element?",["height","width","size","length"],1,"width sets the element's width."]],
Hard:[
["Which selector has the highest specificity?",[".card","#card","div","*"],1,"An ID selector outranks class and element selectors."],
["What does minmax() do in CSS Grid?",["Sets min and max track sizes","Sets animation","Creates margins","Sets font range"],0,"minmax defines a track's minimum and maximum size."],
["What does clamp(1rem, 2vw, 2rem) do?",["Always 2vw","Clamps a value between min and max","Adds three values","Creates a breakpoint"],1,"clamp chooses a preferred value bounded by minimum and maximum."],
["Which property can create a stacking context?",["opacity less than 1","letter-spacing","line-height","text-align"],0,"Opacity below 1 creates a stacking context."],
["What does :has() enable?",["Parent-relative selection","Font loading","Animation looping","Grid sizing"],0,":has selects an element based on matching descendants or relatives."],
["Which rule defines custom properties?",[":variables","@property only","--name inside a rule","$name"],2,"CSS custom properties use names beginning with --."],
["What is the default flex-shrink value?",["0","1","2","auto"],1,"flex-shrink defaults to 1."],
["Which property controls how replaced content fits its box?",["object-fit","content-fit","fit-mode","image-size"],0,"object-fit controls fitting of replaced content."],
["What does contain:layout do?",["Creates layout containment","Hides overflow","Sets width","Disables grid"],0,"It limits layout effects to the element subtree."],
["Which unit is based on the small viewport height?",["svh","dvw","vmin","ch"],0,"svh is one percent of the small viewport height."],
["What does the CSS @supports rule check?",["Browser feature support","Screen size only","HTML validity","Internet speed"],0,"@supports applies styles when a CSS feature is supported."],
["Which property controls whether an element can be resized?",["resize","scale","transform","sizing"],0,"resize controls user resizing of certain elements."],
["What does isolation:isolate create?",["A new stacking context","A new grid","A flex container","A media query"],0,"isolation:isolate creates a new stacking context."],
["Which function can define a repeating linear gradient?",["linear-repeat()","repeating-linear-gradient()","repeat-gradient()","gradient-loop()"],1,"repeating-linear-gradient creates repeating linear color bands."],
["What does grid-template-areas define?",["Grid item colors","Named layout areas in a grid","Animation paths","Font families"],1,"It names areas that grid items can occupy."],
["Which selector targets an element that has no children?",[":empty",":blank",":none",":childless"],0,":empty matches elements with no children."],
["What does will-change provide?",["A hint about upcoming changes for optimization","A permanent animation","A color palette","A grid layout"],0,"will-change hints which properties may change."],
["Which property controls how an element is blended with its background?",["mix-blend-mode","background-blend","opacity-mode","blend-color"],0,"mix-blend-mode controls blending with the backdrop."],
["What does aspect-ratio: 16 / 9 specify?",["A fixed width","A width-to-height ratio","A font ratio","A grid gap"],1,"It specifies the preferred width-to-height ratio."],
["Which CSS function helps create a size based on the smaller of two values?",["max()","min()","clamp()","calc()"],1,"min() returns the smaller of its arguments."]]},


JavaScript:{
Easy:[
["Which keyword declares a block-scoped variable?",["var","let","dim","define"],1,"let declares a block-scoped variable."],
["Which method writes to the console?",["print()","console.log()","echo()","writeLine()"],1,"console.log displays a message in the console."],
["Which symbol is used for strict equality?",["=","==","===","!="],2,"=== checks equality without type coercion."],
["Which data type represents true or false?",["String","Boolean","Number","Object"],1,"Boolean has true and false values."],
["Which method adds an item to an array's end?",["push()","pop()","shift()","join()"],0,"push adds one or more items to the end."],
["How do you write a single-line comment?",["<!-- -->","//","**","#"],1,"// begins a single-line JavaScript comment."],
["Which keyword creates a function?",["function","fun","def","method"],0,"function declares a function."],
["What does DOM stand for?",["Data Object Mode","Document Object Model","Digital Ordinance Model","Document Order Map"],1,"DOM means Document Object Model."],
["Which method selects an element by id?",["queryAll()","getElementById()","selectId()","getId()"],1,"getElementById selects by id."],
["Which operator means logical AND?",["||","!","&&","&"],2,"&& is logical AND."],
["Which keyword declares a variable that can be reassigned?",["const","let","static","final"],1,"let declares a block-scoped variable that can be reassigned."],
["Which symbol is used for single-line comments?",["<!--","//","/*","##"],1,"JavaScript uses // for single-line comments."],
["Which method displays a message in the browser console?",["alert()","console.log()","print()","display()"],1,"console.log() prints messages to the browser console."],
["Which value represents an intentional absence of a value?",["undefined","null","false","0"],1,"null represents an intentional absence of a value."],
["Which operator checks both value and type?",["==","=","===","!="],2,"=== compares both value and type."],
["Which method adds an item to the end of an array?",["push()","pop()","shift()","unshift()"],0,"push() adds an item to the end of an array."],
["Which method converts JSON text into a JavaScript object?",["JSON.stringify()","JSON.parse()","JSON.convert()","JSON.object()"],1,"JSON.parse() converts JSON text into a JavaScript value."],
["Which keyword defines a function?",["func","define","function","method"],2,"function is used to declare a function."],
["Which event occurs when a user clicks an element?",["mouseover","change","click","submit"],2,"The click event occurs when an element is clicked."],
["Which property returns the length of a string?",["size","count","length","total"],2,"The length property returns the number of characters."]],
Medium:[
["What does Array.map() return?",["A new array","A number","A string only","Nothing always"],0,"map creates a new array from callback results."],
["What is a Promise used for?",["Styling","Managing asynchronous results","Looping","Selecting HTML"],1,"Promises represent eventual completion or failure."],
["What does JSON.parse() do?",["Object to JSON string","JSON string to value","Sorts JSON","Deletes JSON"],1,"parse converts JSON text into a JavaScript value."],
["Which method filters array items?",["map()","reduce()","filter()","findIndex()"],2,"filter returns items that pass a test."],
["What does === compare?",["Values only after coercion","Value and type","Only types","Memory size"],1,"Strict equality compares without type conversion."],
["Which event fires when a button is clicked?",["change","submit","click","hover"],2,"The click event fires after a click."],
["What does localStorage store?",["Temporary variables only","Persistent string key-value data","Server files","CSS rules"],1,"localStorage persists string values in the browser."],
["Which syntax creates an arrow function?",["->","=>","::","function=>"],1,"The arrow token is =>."],
["What does spread syntax look like?",["...","***","&&","??"],0,"Three dots expand iterable or object properties."],
["What does setTimeout do?",["Repeats forever","Schedules a callback after a delay","Stops browser","Runs CSS"],1,"setTimeout schedules one callback after a delay."],
["What does the map() method return?",["A new transformed array","The original array only","A number","A Boolean"],0,"map() creates a new array using the callback result for each element."],
["Which method filters array elements based on a condition?",["map()","filter()","reduce()","join()"],1,"filter() returns elements that satisfy a condition."],
["What is a Promise used for?",["Styling elements","Handling asynchronous operations","Creating arrays","Declaring variables"],1,"Promises represent the eventual result of an asynchronous operation."],
["What does the spread operator (...) do?",["Deletes an array","Expands iterable values","Creates a loop","Stops a function"],1,"The spread operator expands iterable values into individual elements."],
["Which keyword waits for a Promise to settle?",["wait","defer","await","pause"],2,"await pauses an async function until the Promise settles."],
["What does addEventListener() do?",["Adds an event handler","Deletes an event","Creates HTML","Changes CSS"],0,"addEventListener registers a function to respond to an event."],
["What does the reduce() method do?",["Sorts an array","Combines array elements into one result","Removes duplicates automatically","Reverses an array"],1,"reduce() accumulates array elements into a single result."],
["What is destructuring in JavaScript?",["Extracting values from arrays or objects","Deleting variables","Changing data types","Joining strings"],0,"Destructuring extracts values into separate variables."],
["What does the typeof operator return?",["The variable value","The data type as a string","The variable name","The memory address"],1,"typeof returns a string describing the operand's type."],
["Which method converts an object into JSON text?",["JSON.parse()","JSON.stringify()","Object.toJSONText()","JSON.convert()"],1,"JSON.stringify() converts a JavaScript value into a JSON string."]
],
Hard:[
["What is event delegation?",["One listener on a common ancestor","One listener per child","Removing all events","Using inline CSS"],0,"A parent handles bubbled events from descendants."],
["What does the nullish coalescing operator ?? check?",["Any falsy value","Only null or undefined","Only false","Only zero"],1,"?? falls back only for nullish values."],
["What is a closure?",["A closed browser tab","Function with access to lexical scope","A loop","A Promise"],1,"A closure retains access to its lexical environment."],
["Which method converts an iterable to an array?",["Array.from()","Object.keys()","JSON.stringify()","String()"],0,"Array.from creates an array from an iterable or array-like object."],
["What does async make a function return?",["A generator","A Promise","A string","An event"],1,"An async function always returns a Promise."],
["What is the microtask queue commonly used for?",["setTimeout callbacks","Promise callbacks","Rendering CSS only","Network sockets"],1,"Promise reactions are scheduled as microtasks."],
["What does Object.freeze() do?",["Deep-freezes all nested objects","Prevents changes to own properties","Deletes properties","Copies an object"],1,"It makes an object's own properties non-modifiable."],
["What is a pure function?",["Always async","Same output for same input without side effects","Uses global variables","Changes its arguments"],1,"A pure function has predictable output and no side effects."],
["Which API observes DOM mutations?",["IntersectionObserver","MutationObserver","ResizeObserver","PerformanceObserver"],1,"MutationObserver watches DOM tree changes."],
["What does Promise.all() do if one promise rejects?",["Waits forever","Rejects with that reason","Ignores it","Converts to null"],1,"Promise.all rejects as soon as an input rejects."],
["What is a closure in JavaScript?",["A function with access to its outer scope","A loop","A CSS property","An HTML element"],0,"A closure retains access to variables from its lexical scope."],
["What does the event loop manage?",["CSS animations","Execution of asynchronous callbacks","HTML parsing only","Database queries"],1,"The event loop coordinates queued callbacks and asynchronous tasks."],
["What is the purpose of Promise.all()?",["Runs promises one after another","Waits for all promises to fulfill or one to reject","Cancels all promises","Creates a new promise from a string"],1,"Promise.all() fulfills when all input promises fulfill and rejects if one rejects."],
["What does Object.freeze() do?",["Deletes an object","Prevents changes to an object's own properties","Converts an object to JSON","Copies an object"],1,"Object.freeze() prevents adding, removing, or changing own properties."],
["What is the temporal dead zone?",["Time before a page loads","Period before a let or const declaration is initialized","A browser storage area","A function execution limit"],1,"Accessing let or const before initialization causes a ReferenceError."],
["What does the bind() method return?",["A new function with a fixed this value","A Boolean","An array","The original object"],0,"bind() returns a new function with this bound to the provided value."],
["Which statement about async functions is correct?",["They always return a Promise","They never return values","They run only in the background","They cannot use await"],0,"An async function always returns a Promise."],
["What is prototypal inheritance?",["Objects inheriting properties through prototypes","Classes inheriting CSS","Copying HTML elements","Converting objects to arrays"],0,"JavaScript objects can inherit properties and methods through their prototype chain."],
["What does the optional chaining operator (?.) do?",["Deletes a property","Safely accesses a property when the reference may be nullish","Creates a Promise","Compares two objects"],1,"Optional chaining returns undefined instead of throwing when a reference is nullish."],
["What is a generator function declared with?",["async","function*","generator","yield*"],1,"The function* syntax declares a generator function."]
]},
"General Knowledge":{
Easy:[
["Which is the largest planet in our solar system?",["Earth","Mars","Jupiter","Venus"],2,"Jupiter is the largest planet."],
["What is the capital of Japan?",["Seoul","Tokyo","Beijing","Bangkok"],1,"Tokyo is Japan's capital."],
["How many days are in a leap year?",["364","365","366","367"],2,"A leap year has 366 days."],
["Which ocean is the largest?",["Atlantic","Indian","Arctic","Pacific"],3,"The Pacific is the largest ocean."],
["Which gas do plants absorb?",["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],1,"Plants use carbon dioxide in photosynthesis."],
["How many colours are traditionally in a rainbow?",["5","6","7","8"],2,"A rainbow is traditionally described as seven colours."],
["Which animal is known as the ship of the desert?",["Horse","Camel","Elephant","Yak"],1,"Camels are adapted to desert travel."],
["Which is the nearest star to Earth?",["Sirius","Sun","Polaris","Vega"],1,"The Sun is our nearest star."],
["Which country is famous for the pyramids of Giza?",["Greece","Egypt","Mexico","Peru"],1,"The pyramids of Giza are in Egypt."],
["How many sides does a hexagon have?",["5","6","7","8"],1,"A hexagon has six sides."],
["What is the capital of Japan?",["Beijing","Seoul","Tokyo","Bangkok"],2,"Tokyo is the capital of Japan."],
["Which planet is known as the Red Planet?",["Venus","Mars","Jupiter","Mercury"],1,"Mars appears reddish because of iron oxide on its surface."],
["How many continents are there?",["Five","Six","Seven","Eight"],2,"There are seven continents."],
["Which is the largest ocean?",["Atlantic","Indian","Arctic","Pacific"],3,"The Pacific Ocean is the largest ocean on Earth."],
["Who wrote the national anthem of India?",["Rabindranath Tagore","Bankim Chandra Chatterjee","Sarojini Naidu","Subramania Bharati"],0,"Rabindranath Tagore wrote Jana Gana Mana."],
["Which gas do plants absorb during photosynthesis?",["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],1,"Plants absorb carbon dioxide during photosynthesis."],
["What is the currency of the United Kingdom?",["Euro","Dollar","Pound sterling","Yen"],2,"The UK uses the pound sterling."],
["Which is the largest mammal in the world?",["Elephant","Giraffe","Blue whale","Shark"],2,"The blue whale is the largest known mammal."],
["How many sides does a hexagon have?",["Five","Six","Seven","Eight"],1,"A hexagon has six sides."],
["Which organ pumps blood throughout the human body?",["Lungs","Brain","Heart","Kidneys"],2,"The heart pumps blood throughout the body."]
],
Medium:[
["Which instrument measures atmospheric pressure?",["Thermometer","Barometer","Hygrometer","Anemometer"],1,"A barometer measures atmospheric pressure."],
["What is the chemical symbol for gold?",["Ag","Gd","Au","Go"],2,"Au comes from the Latin aurum."],
["Which is the longest river in South America?",["Nile","Amazon","Yangtze","Danube"],1,"The Amazon is the longest river in South America."],
["Who wrote 'The Discovery of India'?",["Mahatma Gandhi","Jawaharlal Nehru","Rabindranath Tagore","Sardar Patel"],1,"Jawaharlal Nehru wrote it."],
["Which layer protects Earth from much UV radiation?",["Troposphere","Ozone layer","Mantle","Ionosphere"],1,"The ozone layer absorbs much harmful UV radiation."],
["What is the currency of Japan?",["Yuan","Won","Yen","Ringgit"],2,"Japan uses the yen."],
["Which planet has prominent rings?",["Mercury","Saturn","Mars","Earth"],1,"Saturn is famous for its rings."],
["What is the SI unit of electric current?",["Volt","Watt","Ampere","Ohm"],2,"Electric current is measured in amperes."],
["Which is the smallest prime number?",["0","1","2","3"],2,"2 is the smallest prime and the only even prime."],
["Where is the headquarters of the UN?",["Geneva","Paris","New York City","London"],2,"The UN headquarters is in New York City."],
["Which Indian state has the longest coastline?",["Tamil Nadu","Gujarat","Kerala","Odisha"],1,"Gujarat has the longest coastline among Indian states."],
["Who was the first woman Prime Minister of India?",["Indira Gandhi","Pratibha Patil","Sarojini Naidu","Sushma Swaraj"],0,"Indira Gandhi became Prime Minister in 1966."],
["Which vitamin is produced in the skin through sunlight exposure?",["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],3,"Sunlight helps the skin produce vitamin D."],
["Where is the headquarters of the United Nations?",["London","New York","Paris","Geneva"],1,"The UN headquarters is in New York City."],
["Which river is known as the Sorrow of Bihar?",["Ganga","Yamuna","Kosi","Godavari"],2,"The Kosi River is often called the Sorrow of Bihar because of flooding."],
["Who discovered penicillin?",["Alexander Fleming","Louis Pasteur","Isaac Newton","Marie Curie"],0,"Alexander Fleming discovered penicillin in 1928."],
["Which layer of the atmosphere contains the ozone layer?",["Troposphere","Stratosphere","Mesosphere","Thermosphere"],1,"The ozone layer is mainly found in the stratosphere."],
["Which country gifted the Statue of Liberty to the USA?",["Germany","France","Italy","Canada"],1,"France gifted the Statue of Liberty to the United States."],
["What is the SI unit of electric current?",["Volt","Watt","Ampere","Ohm"],2,"Ampere is the SI unit of electric current."],
["Which Indian mission successfully landed near the Moon's south polar region in 2023?",["Chandrayaan-1","Mangalyaan","Chandrayaan-2","Chandrayaan-3"],3,"Chandrayaan-3 achieved a successful lunar landing in August 2023."]
],

Hard:[
["Which scientist formulated the uncertainty principle?",["Niels Bohr","Werner Heisenberg","Max Planck","Erwin Schrödinger"],1,"Werner Heisenberg formulated it."],
["Which element has atomic number 74?",["Tungsten","Platinum","Osmium","Rhenium"],0,"Tungsten has atomic number 74."],
["What is the deepest known oceanic trench?",["Tonga Trench","Java Trench","Mariana Trench","Puerto Rico Trench"],2,"The Mariana Trench is the deepest known oceanic trench."],
["Which treaty formally ended World War I with Germany?",["Treaty of Paris","Treaty of Versailles","Treaty of Rome","Treaty of Vienna"],1,"The Treaty of Versailles was signed in 1919."],
["Which blood vessels carry blood away from the heart?",["Veins","Arteries","Capillaries","Venules"],1,"Arteries carry blood away from the heart."],
["What is the approximate speed of light in vacuum?",["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"],1,"Light travels at about 3×10⁸ metres per second."],
["Which mathematician is associated with the incompleteness theorems?",["Euclid","Kurt Gödel","Alan Turing","Blaise Pascal"],1,"Kurt Gödel proved the incompleteness theorems."],
["Which part of a cell contains most genetic material?",["Ribosome","Nucleus","Golgi body","Cell membrane"],1,"The nucleus contains most of a eukaryotic cell's DNA."],
["Which is the largest internal organ in the human body?",["Heart","Liver","Lung","Kidney"],1,"The liver is the largest internal organ."],
["Which number system has base 16?",["Binary","Octal","Decimal","Hexadecimal"],3,"Hexadecimal uses sixteen symbols."],
["Which Article of the Indian Constitution deals with the amendment procedure?",["Article 32","Article 368","Article 356","Article 370"],1,"Article 368 provides the procedure for amending the Constitution."],
["Which scientist proposed the uncertainty principle?",["Albert Einstein","Niels Bohr","Werner Heisenberg","Max Planck"],2,"Werner Heisenberg proposed the uncertainty principle."],
["Which strait separates Asia and North America?",["Bering Strait","Malacca Strait","Palk Strait","Gibraltar Strait"],0,"The Bering Strait separates Russia and Alaska."],
["Which committee recommended the Panchayati Raj system in India?",["Sarkaria Committee","Balwant Rai Mehta Committee","Mandal Commission","Kothari Commission"],1,"The Balwant Rai Mehta Committee recommended the three-tier Panchayati Raj system."],
["Which element has the chemical symbol W?",["Tungsten","Tin","Titanium","Tantalum"],0,"W is the chemical symbol for tungsten."],
["What is the deepest known oceanic trench?",["Java Trench","Puerto Rico Trench","Mariana Trench","Tonga Trench"],2,"The Mariana Trench contains the deepest known point in the ocean."],
["Which treaty formally ended World War I between Germany and the Allied Powers?",["Treaty of Paris","Treaty of Versailles","Treaty of Rome","Treaty of Vienna"],1,"The Treaty of Versailles was signed in 1919."],
["Which Indian classical dance originated in Kerala?",["Kathak","Odissi","Bharatanatyam","Kathakali"],3,"Kathakali is a classical dance-drama tradition from Kerala."],
["What is the study of fungi called?",["Mycology","Ecology","Entomology","Virology"],0,"Mycology is the scientific study of fungi."],
["Which economic concept describes a general rise in prices over time?",["Deflation","Inflation","Recession","Depreciation"],1,"Inflation is a sustained increase in the general price level."]
]},
Aptitude:{
Easy:[
["What is 15% of 200?",["15","20","30","35"],2,"0.15 × 200 = 30."],
["Find the next number: 2, 4, 6, 8, ?",["9","10","12","14"],1,"The sequence increases by 2."],
["A dozen contains how many items?",["10","12","15","20"],1,"A dozen means twelve."],
["What is the average of 4 and 8?",["4","5","6","8"],2,"(4 + 8) ÷ 2 = 6."],
["If 5 pens cost ₹50, what is one pen's cost?",["₹5","₹10","₹15","₹20"],1,"50 ÷ 5 = ₹10."],
["Which is the odd one out?",["Apple","Mango","Carrot","Banana"],2,"Carrot is a vegetable; the others are fruits."],
["What is 3²?",["6","8","9","12"],2,"3 × 3 = 9."],
["A train travels 60 km in 1 hour. Its speed is?",["30 km/h","50 km/h","60 km/h","90 km/h"],2,"Speed = distance ÷ time."],
["Complete: A, C, E, G, ?",["H","I","J","K"],1,"The sequence skips one letter each time."],
["What is 1/4 of 100?",["20","25","40","50"],1,"100 ÷ 4 = 25."],
["What is 25% of 200?",["25","40","50","75"],2,"25% of 200 = 200 × 25/100 = 50."],
["Find the next number: 2, 4, 6, 8, ?",["9","10","11","12"],1,"The numbers increase by 2. The next number is 10."],
["If one pen costs ₹10, what is the cost of 5 pens?",["₹40","₹45","₹50","₹60"],2,"5 × 10 = ₹50."],
["What is the average of 10, 20 and 30?",["15","20","25","30"],1,"Average = (10 + 20 + 30) / 3 = 20."],
["A person travels 60 km in 2 hours. What is the speed?",["20 km/h","30 km/h","40 km/h","60 km/h"],1,"Speed = Distance / Time = 60 / 2 = 30 km/h."],
["What is 15 + 25 × 2?",["80","65","55","40"],1,"Multiplication first: 15 + 50 = 65."],
["Find the missing number: 5, 10, 15, 20, ?",["22","25","30","35"],1,"The sequence increases by 5."],
["A dozen contains how many items?",["10","11","12","15"],2,"One dozen equals 12 items."],
["If 3 notebooks cost ₹90, what is the cost of one notebook?",["₹20","₹25","₹30","₹35"],2,"90 / 3 = ₹30."],
["What is the simple interest on ₹1000 at 10% per year for 1 year?",["₹50","₹100","₹150","₹200"],1,"SI = (1000 × 10 × 1) / 100 = ₹100."]
],
Medium:[
["A number increases from 80 to 100. Percentage increase?",["20%","25%","30%","40%"],1,"Increase 20 ÷ 80 × 100 = 25%."],
["If x + 7 = 19, x = ?",["10","11","12","13"],2,"x = 19 − 7 = 12."],
["Find the next number: 3, 9, 27, 81, ?",["162","189","243","324"],2,"Each number is multiplied by 3."],
["A can finish work in 6 days. One-day work is?",["1/3","1/4","1/6","1/8"],2,"One-day work is 1/6."],
["Ratio 2:3 has total 25. First part?",["5","10","15","20"],1,"Two of five parts: 2/5 × 25 = 10."],
["Simple interest on ₹1000 at 5% for 2 years?",["₹50","₹100","₹150","₹200"],1,"SI = PRT/100 = ₹100."],
["A 120 m train crosses a pole in 6 sec. Speed?",["10 m/s","15 m/s","20 m/s","25 m/s"],2,"120 ÷ 6 = 20 m/s."],
["If 12 workers take 10 days, 6 workers take?",["5 days","10 days","15 days","20 days"],3,"Half the workers need twice the time."],
["Find the odd number: 16, 25, 36, 48, 64",["16","25","48","64"],2,"The others are perfect squares."],
["A shop gives 10% discount on ₹500. Selling price?",["₹400","₹450","₹475","₹490"],1,"₹500 − ₹50 = ₹450."],
["A train 120 metres long crosses a pole in 6 seconds. Find its speed.",["60 km/h","72 km/h","80 km/h","90 km/h"],1,"Speed = 120/6 = 20 m/s = 72 km/h."],
["A number is increased by 20% and becomes 240. Find the original number.",["180","190","200","220"],2,"Original number = 240/1.2 = 200."],
["The ratio of two numbers is 3:5 and their sum is 64. Find the smaller number.",["18","24","30","40"],1,"Total parts = 8. One part = 64/8 = 8. Smaller = 3 × 8 = 24."],
["A can complete a job in 10 days. How much work does A complete in one day?",["1/5","1/10","1/15","1/20"],1,"One day's work = 1/10."],
["Find the compound interest on ₹1000 at 10% annually for 2 years.",["₹200","₹210","₹220","₹250"],1,"Amount = 1000 × 1.1 × 1.1 = ₹1210. CI = ₹210."],
["The average of five numbers is 18. What is their total?",["80","85","90","95"],2,"Total = Average × Count = 18 × 5 = 90."],
["A shopkeeper buys an item for ₹500 and sells it for ₹600. Find the profit percentage.",["10%","15%","20%","25%"],2,"Profit = 100. Profit percentage = 100/500 × 100 = 20%."],
["If 12 workers finish a job in 10 days, how many days will 6 workers take at the same rate?",["5","10","15","20"],3,"Workers × Days = constant. 12 × 10 / 6 = 20 days."],
["Find the next number: 3, 6, 12, 24, ?",["36","42","48","54"],2,"Each number is multiplied by 2. Next = 48."],
["A person spends 75% of an income of ₹20,000. How much is saved?",["₹4,000","₹5,000","₹6,000","₹7,000"],1,"Savings = 25% of ₹20,000 = ₹5,000."]
],
Hard:[
["A and B finish work in 12 and 18 days. Together?",["6 days","7.2 days","8 days","9 days"],1,"Combined rate = 1/12 + 1/18 = 5/36; time = 36/5 = 7.2 days."],
["A train 180 m long crosses a 220 m platform in 20 sec. Speed?",["54 km/h","60 km/h","72 km/h","90 km/h"],2,"Distance 400 m / 20 s = 20 m/s = 72 km/h."],
["If x:y = 3:5 and y:z = 10:7, x:z = ?",["3:7","6:7","9:7","5:7"],1,"Make y equal: x:y = 6:10, so x:z = 6:7."],
["A sum doubles in 8 years at simple interest. Rate?",["10%","12.5%","15%","20%"],1,"Interest equals principal: rate = 100/8 = 12.5%."],
["Find the next term: 1, 4, 10, 22, 46, ?",["88","90","92","94"],3,"Each term is previous × 2 + 2."],
["A pipe fills a tank in 6h; a leak empties it in 9h. Net fill time?",["12h","15h","18h","24h"],2,"Net rate = 1/6 − 1/9 = 1/18 tank per hour."],
["If 40% of A = 60% of B, A:B = ?",["2:3","3:2","4:5","5:4"],1,"0.4A = 0.6B, so A:B = 3:2."],
["Ages are in ratio 4:5 and sum to 45. Older age?",["20","25","30","35"],1,"Five of nine parts = 25."],
["A product marked ₹800 is sold at 15% discount and 20% profit. Cost price?",["₹540","₹560","₹566.67","₹600"],2,"Selling price 680; cost = 680/1.2 = 566.67."],
["Two dice are thrown. Probability of sum 7?",["1/12","1/6","1/9","1/3"],1,"Six of 36 outcomes give a sum of 7."],
["A and B can complete a job in 12 days and 18 days respectively. How long will they take together?",["6 days","7.2 days","8 days","9 days"],1,"Combined work per day = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days."],
["A sum doubles in 8 years at simple interest. What is the annual rate?",["10%","12.5%","15%","20%"],1,"Interest equals principal in 8 years. Rate = 100/8 = 12.5%."],
["A boat travels 30 km downstream in 2 hours and 30 km upstream in 3 hours. Find the speed of the stream.",["1 km/h","2.5 km/h","3 km/h","5 km/h"],1,"Downstream speed = 15 km/h; upstream = 10 km/h. Stream speed = (15 - 10)/2 = 2.5 km/h."],
["A mixture contains milk and water in the ratio 5:3. If the mixture is 64 litres, how much milk is present?",["24 L","32 L","40 L","48 L"],2,"Milk = 5/8 × 64 = 40 litres."],
["A number is first increased by 20% and then decreased by 20%. What is the net change?",["No change","4% increase","4% decrease","8% decrease"],2,"100 becomes 120, then 96. Net change = 4% decrease."],
["A train 180 metres long crosses a 220-metre platform in 20 seconds. Find its speed.",["54 km/h","60 km/h","72 km/h","80 km/h"],2,"Total distance = 400 m. Speed = 400/20 = 20 m/s = 72 km/h."],
["The present ages of A and B are in the ratio 4:5. Their total age is 45 years. Find A's age.",["16","18","20","25"],2,"Total parts = 9. One part = 45/9 = 5. A's age = 4 × 5 = 20."],
["If 15 men working 8 hours a day complete a task in 12 days, how many days will 20 men working 6 hours a day take?",["10","12","14","16"],1,"Total work = 15 × 8 × 12. Required days = (15 × 8 × 12)/(20 × 6) = 12."],
["A bag contains 5 red and 3 blue balls. What is the probability of selecting a blue ball?",["3/5","3/8","5/8","1/2"],1,"Probability = Blue balls / Total balls = 3/8."],
["The difference between compound interest and simple interest on ₹10,000 at 10% per annum for 2 years is:",["₹50","₹100","₹150","₹200"],1,"For 2 years, difference = P × (R/100)² = 10000 × 0.01 = ₹100."]
]}
};

const badgeDefinitions = [
 {id:"first",icon:"🌟",name:"First Steps",desc:"Complete your first quiz",test:s=>s.total>=1},
 {id:"perfect",icon:"💎",name:"Perfect Score",desc:"Get 100% in a quiz",test:s=>s.perfect>=1},
 {id:"five",icon:"🔥",name:"On a Roll",desc:"Complete 5 quizzes",test:s=>s.total>=5},
 {id:"ten",icon:"🏅",name:"Quiz Champion",desc:"Complete 10 quizzes",test:s=>s.total>=10},
 {id:"xp500",icon:"⚡",name:"XP Collector",desc:"Earn 500 XP",test:s=>s.xp>=500},
 {id:"accuracy",icon:"🎯",name:"Sharp Shooter",desc:"Reach 80% average accuracy",test:s=>s.total>0&&s.accuracy>=80}
];
const STORAGE_KEY="quizverse_pro_v1";
const defaultState={name:"Learner",history:[],xp:0,theme:"dark",streak:0,lastPlayed:"",perfect:0};
let state=loadState(), selectedDifficulty="Easy", currentCategory="Python", questions=[], answers=[], currentIndex=0, timerInterval=null, secondsLeft=20, quizFinished=false;

function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}}catch{return {...defaultState}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function stats(){const total=state.history.length, accuracy=total?Math.round(state.history.reduce((a,x)=>a+x.accuracy,0)/total):0;return {total,accuracy,best:total?Math.max(...state.history.map(x=>x.accuracy)):0,xp:state.xp,perfect:state.perfect}}
function earnedBadges(){const s=stats();return badgeDefinitions.filter(b=>b.test(s)).map(b=>b.id)}
function showToast(message){const t=$("toast");t.textContent=message;t.classList.add("show");clearTimeout(showToast.timeout);showToast.timeout=setTimeout(()=>t.classList.remove("show"),2300)}
function setPage(page){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(page+"Page").classList.add("active");document.querySelectorAll(".nav-item[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page));const titles={home:"Ready to level up?",dashboard:"Your progress, at a glance",leaderboard:"The leaderboard",profile:"Your learner profile",quiz:"Focus mode: on",result:"Your results"};$("pageTitle").textContent=titles[page]||"QuizVerse";window.scrollTo({top:0,behavior:"smooth"});if(page==="dashboard")renderDashboard();if(page==="leaderboard")renderLeaderboard();if(page==="profile")renderProfile()}
function renderIdentity(){const initial=(state.name||"L").trim().charAt(0).toUpperCase()||"L";$("miniName").textContent=state.name;$("topName").textContent=state.name;$("miniAvatar").textContent=initial;$("topAvatar").textContent=initial;$("profileAvatar").textContent=initial;$("usernameInput").value=state.name;$("streakValue").textContent=`${state.streak||0} day streak`}
function renderStats(){const s=stats();$("homeTotal").textContent=s.total;$("homeAccuracy").textContent=s.accuracy+"%";$("homeXP").textContent=s.xp;$("homeBadges").textContent=earnedBadges().length}
function renderCategories(){$("categoryGrid").innerHTML=categories.map(c=>`<button class="category-card" data-category="${c.id}"><span class="category-icon">${c.icon}</span><strong>${c.id}</strong><small>${c.desc}</small><span class="arrow">↗</span></button>`).join("");document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>startQuiz(b.dataset.category)))}
function renderBadges(){const earned=earnedBadges();const html=badgeDefinitions.map(b=>`<div class="badge-chip ${earned.includes(b.id)?"":"locked"}"><span>${b.icon}</span><div><strong>${b.name}</strong><div class="muted">${b.desc}</div></div></div>`).join("");$("homeBadgesList").innerHTML=html;$("allBadges").innerHTML=html}
function renderHome(){renderIdentity();renderStats();renderBadges()}
function renderDashboard(){const s=stats();$("dashTotal").textContent=s.total;$("dashBest").textContent=s.best+"%";$("dashXP").textContent=s.xp;$("historyList").innerHTML=state.history.length?[...state.history].reverse().slice(0,12).map(h=>`<div class="history-row"><div class="history-left"><span class="history-icon">${categories.find(c=>c.id===h.category)?.icon||"🧩"}</span><div><strong>${escapeHtml(h.category)} · ${h.difficulty}</strong><small>${new Date(h.date).toLocaleString()}</small></div></div><span class="score-pill">${h.score}/${h.total} · ${h.accuracy}%</span></div>`).join(""):`<div class="empty-state">📝<br><br>No quiz attempts yet. Pick a category and start your first quiz!</div>`}
function renderLeaderboard(){const entries=[{name:state.name,xp:state.xp,me:true},...getLocalProfiles()];const unique=new Map();entries.forEach(e=>{const key=e.name.toLowerCase();if(!unique.has(key)||unique.get(key).xp<e.xp)unique.set(key,e)});const sorted=[...unique.values()].sort((a,b)=>b.xp-a.xp).slice(0,10);$("leaderboardList").innerHTML=sorted.length?sorted.map((e,i)=>`<div class="leader-row"><span class="rank">${["🥇","🥈","🥉"][i]||String(i+1).padStart(2,"0")}</span><span class="avatar small">${escapeHtml(e.name.charAt(0).toUpperCase())}</span><div class="leader-name"><strong>${escapeHtml(e.name)} ${e.me?'<span class="muted">(You)</span>':""}</strong></div><span class="leader-xp">⚡ ${e.xp} XP</span></div>`).join(""):`<div class="empty-state">No learners yet.</div>`}
function getLocalProfiles(){try{return JSON.parse(localStorage.getItem("quizverse_local_profiles")||"[]")}catch{return []}}
function saveLocalProfile(){let list=getLocalProfiles().filter(x=>x.name.toLowerCase()!==state.name.toLowerCase());list.push({name:state.name,xp:state.xp});localStorage.setItem("quizverse_local_profiles",JSON.stringify(list))}
function renderProfile(){renderIdentity();const s=stats();$("profileTotal").textContent=s.total;$("profileXP").textContent=s.xp;$("profileBadges").textContent=earnedBadges().length;renderBadges()}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function startQuiz(category) {
    currentCategory = category;

    const source = bank[category][selectedDifficulty];

    // Shuffle questions using Fisher-Yates
    const shuffledQuestions = [...source];

    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] =
        [shuffledQuestions[j], shuffledQuestions[i]];
    }

    // Select 10 random questions
    const selectedQuestions = shuffledQuestions.slice(0, 10);

    // Shuffle options without breaking correct answers
    questions = selectedQuestions.map((q, i) => {
        const optionPairs = q[1].map((option, index) => ({
            option,
            originalIndex: index
        }));

        for (let j = optionPairs.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));

            [optionPairs[j], optionPairs[k]] =
            [optionPairs[k], optionPairs[j]];
        }

        return {
            text: q[0],
            options: optionPairs.map(item => item.option),
            correct: optionPairs.findIndex(
                item => item.originalIndex === q[2]
            ),
            explanation: q[3],
            id: i
        };
    });

    answers = Array(questions.length).fill(null);
    currentIndex = 0;
    quizFinished = false;

    $("quizCategoryLabel").textContent =
        `${category.toUpperCase()} · ${selectedDifficulty.toUpperCase()}`;

    setPage("quiz");
    renderQuestion();
    startTimer();
}
function renderQuestion(){const q=questions[currentIndex];const progress=Math.round(((currentIndex+1)/questions.length)*100);$("questionCounter").textContent=`Question ${currentIndex+1} of ${questions.length}`;$("progressPercent").textContent=progress+"%";$("progressFill").style.width=progress+"%";$("questionTag").textContent=`QUESTION ${String(currentIndex+1).padStart(2,"0")}`;$("questionText").textContent=q.text;$("optionsList").innerHTML=q.options.map((o,i)=>`<button class="option-btn ${answers[currentIndex]===i?"selected":""}" data-option="${i}"><span class="option-letter">${"ABCD"[i]}</span><span>${escapeHtml(o)}</span></button>`).join("");document.querySelectorAll("[data-option]").forEach(b=>b.addEventListener("click",()=>{answers[currentIndex]=Number(b.dataset.option);renderQuestion();renderQuestionMap()}));$("prevBtn").disabled=currentIndex===0;$("prevBtn").style.opacity=currentIndex===0?".4":"1";$("nextBtn").textContent=currentIndex===questions.length-1?"Review answers →":"Next question →";renderQuestionMap()}
function renderQuestionMap(){$("questionMap").innerHTML=questions.map((q,i)=>`<button class="map-btn ${answers[i]!==null?"answered":""} ${i===currentIndex?"current":""}" data-jump="${i}">${i+1}</button>`).join("");document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>{currentIndex=Number(b.dataset.jump);renderQuestion();resetTimer()}))}
function startTimer(){clearInterval(timerInterval);secondsLeft=20;updateTimer();timerInterval=setInterval(()=>{secondsLeft--;updateTimer();if(secondsLeft<=0){clearInterval(timerInterval);showToast("Time's up! Moving to the next question.");if(currentIndex<questions.length-1){currentIndex++;renderQuestion();startTimer()}else finishQuiz()}},1000)}
function resetTimer(){startTimer()}
function updateTimer(){$("timer").textContent=`◷ ${secondsLeft}s`;$("timer").classList.toggle("urgent",secondsLeft<=5)}
function finishQuiz(){if(quizFinished)return;quizFinished=true;clearInterval(timerInterval);const correct=answers.reduce((n,a,i)=>n+(a===questions[i].correct?1:0),0);const wrong=answers.reduce((n,a,i)=>n+(a!==null&&a!==questions[i].correct?1:0),0);const skipped=answers.filter(a=>a===null).length;const accuracy=Math.round(correct/questions.length*100);const xp=correct*10+(accuracy===100?50:0);const today=new Date().toDateString();if(state.lastPlayed!==today){state.streak=state.lastPlayed&&new Date(today)-new Date(state.lastPlayed)===86400000?state.streak+1:1;state.lastPlayed=today}state.xp+=xp;if(accuracy===100)state.perfect++;const attempt={category:currentCategory,difficulty:selectedDifficulty,score:correct,total:questions.length,accuracy,xp,date:new Date().toISOString(),answers:[...answers]};state.history.push(attempt);saveState();saveLocalProfile();renderHome();showResults(correct,wrong,skipped,accuracy,xp)}
function showResults(correct,wrong,skipped,accuracy,xp){setPage("result");$("resultTitle").textContent=accuracy===100?"Perfect score!":accuracy>=70?"Fantastic effort!":accuracy>=40?"Good progress!":"Keep practising!";$("resultMessage").textContent=`You completed ${currentCategory} at ${selectedDifficulty} level. Every attempt helps you improve.`;$("scoreValue").textContent=accuracy+"%";$("scoreRing").style.background=`conic-gradient(var(--purple) ${accuracy*3.6}deg,var(--surface2) 0deg)`;$("correctValue").textContent=correct;$("wrongValue").textContent=wrong;$("skippedValue").textContent=skipped;$("xpValue").textContent="+"+xp;const newBadge=badgeDefinitions.find(b=>earnedBadges().includes(b.id)&&!window.previousBadges?.includes(b.id));window.previousBadges=earnedBadges();$("earnedBadge").textContent=newBadge?`${newBadge.icon} New badge unlocked: ${newBadge.name}!`:`⚡ You earned ${xp} XP!`;$("reviewList").innerHTML=questions.map((q,i)=>{const isCorrect=answers[i]===q.correct;const your=answers[i]===null?"Not answered":q.options[answers[i]];return `<div class="review-item"><div class="review-status ${isCorrect?"correct-text":"wrong-text"}">${isCorrect?"✓ CORRECT":answers[i]===null?"— SKIPPED":"✕ INCORRECT"}</div><strong>${i+1}. ${escapeHtml(q.text)}</strong><p>Your answer: ${escapeHtml(your)}<br>Correct answer: ${escapeHtml(q.options[q.correct])}<br>💡 ${escapeHtml(q.explanation)}</p></div>`}).join("")}
function quitQuiz(){if(confirm("Exit this quiz? Your current answers will not be saved.")){clearInterval(timerInterval);setPage("home")}}

document.querySelectorAll(".nav-item[data-page],.profile-chip").forEach(b=>b.addEventListener("click",()=>setPage(b.dataset.page)));
document.querySelectorAll(".difficulty-card").forEach(b=>b.addEventListener("click",()=>{selectedDifficulty=b.dataset.difficulty;document.querySelectorAll(".difficulty-card").forEach(x=>x.classList.toggle("selected",x===b));showToast(`${selectedDifficulty} level selected`)}));
$("exploreBtn").addEventListener("click",()=>$("categoryGrid").scrollIntoView({behavior:"smooth",block:"center"}));
$("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light");state.theme=document.body.classList.contains("light")?"light":"dark";saveState()});
$("saveProfileBtn").addEventListener("click",()=>{const name=$("usernameInput").value.trim().slice(0,22);if(!name){showToast("Please enter a display name.");return}state.name=name;saveState();saveLocalProfile();renderHome();renderProfile();showToast("Profile updated!")});
$("prevBtn").addEventListener("click",()=>{if(currentIndex>0){currentIndex--;renderQuestion();resetTimer()}});
$("nextBtn").addEventListener("click",()=>{if(currentIndex<questions.length-1){currentIndex++;renderQuestion();resetTimer()}else{$("questionMap").scrollIntoView({behavior:"smooth",block:"center"});showToast("Review your answers, then tap Finish quiz.")}});
$("finishBtn").addEventListener("click",()=>{const unanswered=answers.filter(a=>a===null).length;if(unanswered&& !confirm(`${unanswered} question(s) are unanswered. Finish anyway?`))return;finishQuiz()});
$("quitQuizBtn").addEventListener("click",quitQuiz);
$("retryBtn").addEventListener("click",()=>startQuiz(currentCategory));
$("homeBtn").addEventListener("click",()=>setPage("home"));
$("clearHistoryBtn").addEventListener("click",()=>{if(confirm("Clear all quiz history? Your XP and badges will also reset.")){state.history=[];state.xp=0;state.perfect=0;state.streak=0;state.lastPlayed="";saveState();saveLocalProfile();renderDashboard();renderHome();showToast("History cleared.")}});
$("dateLabel").textContent=new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"}).toUpperCase();
if(state.theme==="light")document.body.classList.add("light");
renderCategories();renderHome();renderDashboard();
