// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.images);
// console.log(document.body);



// Difference between innertext and textcontent : Innertext get the text from the web page and the textcontent get the text from html file means when we add a style to text as disappear and run .innertext it will not print that text but if we run .textcontent it will print the text.....
var header = document.getElementById('header-title')
header.style.borderBottom = 'solid 3px #000';
header.style.color='green';
header.style.font='bold';

// by class name.
// var item = document.getElementsByClassName('list-items')
// console.log(item[1])
// item[2].style.backgroundColor='green'
// item[0].style.fontWeight="bold"
// item[1].style.fontWeight="bold"
// item[2].style.fontWeight="bold"



// get by tag name::::::

var li = document.getElementsByTagName('li')
//console.log(li[0]);
for (var i =0 ; i< li.length;i++){
    console.log(li[i])
 }
