const posts = [
    {title:'post one',body:'This is post one'},
    {title:'post two',body:'This is post two'}
];

function getposts(){
    setTimeout(() =>{
        let output=''
        posts.forEach((post,index)=>{
           output+=`<li>${post.title}</li>`
            
           
        })
        
        document.body.innerHTML=output

    },1000);
}
    
function createpost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },1000);
}


function create4thpost(callback){
    setTimeout(() => {
        posts.push({title:'post Three',body:'This is post four'});
        callback({title:'post Four',body:'This is post three'},getposts);
        
        
              
    },2000);
}



function lastedited(){
var button=document.createElement('button');
button.id='bttn'
button.type='button'
button.innerHTML='click'

button.addEventListener('click', e => {
  console.log('1')
})
}

create4thpost(createpost);

    
