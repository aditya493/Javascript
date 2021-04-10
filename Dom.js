const ul= document.querySelector('.items');
ul.firstElementChild.textContent='Hello';
ul.firstElementChild.style.color='green';

const btn = document.querySelector('.btn')


    btn.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.className);
        document.getElementById('my-form').style.background = '#ccc';
      document.querySelector('body').classList.add('bg-dark');
        ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

btn.addEventListener('onmouseover', e => {
   
    document.getElementById('my-form').style.background = '#ccc';
  
});

btn.addEventListener('onmouseout', e => {
   
    document.getElementById('my-form').style.background = '#ccc';
 
});


if (nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

   
    setTimeout(() => msg.remove(), 3000);
}

