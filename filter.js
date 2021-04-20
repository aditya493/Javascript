var form = document.getElementById('my-form')
var filter = document.getElementById('filter');
var itemList = document.getElementById('items');
filter.addEventListener('keyup', filterItems);

form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
    var newitem = document.getElementById('name').value + " : " + document.getElementById('email').value;
  
    var li = document.createElement('li');
    li.className = 'list';
    li.appendChild(document.createTextNode(newitem));
    itemList.appendChild(li);
    
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }