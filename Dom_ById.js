// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.images);
// console.log(document.body);



// // Difference between innertext and textcontent : Innertext get the text from the web page and the textcontent get the text from html file means when we add a style to text as disappear and run .innertext it will not print that text but if we run .textcontent it will print the text.....
// var header = document.getElementById('header-title')
// header.style.borderBottom = 'solid 3px #000';
// header.style.color='green';
// header.style.font='bold';

// by class name.
// var item = document.getElementsByClassName('list-items')
// console.log(item[1])
// item[2].style.backgroundColor='green'
// item[0].style.fontWeight="bold"
// item[1].style.fontWeight="bold"
// item[2].style.fontWeight="bold"



// get by tag name::::::

// var li = document.getElementsByTagName('li')
// //console.log(li[0]);
// for (var i =0 ; i< li.length;i++){
//     console.log(li[i])
//  }


//  //By css selector:::::::

// //  var second= document.querySelector('.list-items:nth-child(1)');
// //  second.style.backgroundColor="green";

// //  var last = document.querySelector('.list-items:last-child');
// //  last.style.color='transparent'

// //  // queryselect all

// //  var all = document.querySelectorAll('.list-items')
// //  all[1].style.color="green";

// //  var odd = document.querySelectorAll('li:nth-child(odd)');
  
// //  for (var i =0; i < odd.length; i++){
// //      odd[i].style.backgroundColor="green"
// //  }

// // TRAVERSING THE DOM //
// var itemlist = document.querySelector('#items');
// //PARENT NODE
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemlist.parentNode);

// //PARENT ELEMENT
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemlist.parentElement);

// //CHILD NODE
// console.log(itemlist.childNodes)

// //CHILDREN
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor="yellow";

// //firtst child
// console.log(itemlist.firstChild);

// //first element child
// console.group(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='Hello world';

// // next sibling
// console.log(itemlist.nextSibling);

// // next element sibling
// console.log(itemlist.nextElementSibling);



// // previous sibling
// console.log(itemlist.previousSibling);

// // previous element sibling
// console.log(itemlist.previousElementSibling);

// //ceateElement
// var newdiv=document.createElement('div');
// newdiv.className='hello';
// newdiv.id='hello1';
// console.log(newdiv);
// newdiv.setAttribute('title','hello div');

// //create text node
// var newdivtext=document.createTextNode('hello world');
// newdiv.appendChild(newdivtext);

// var container =document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newdivtext,h1);

