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
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error){
                resolve();
            }else{
                reject('something went wrong');
            }
        }, 2000);
    })
}

function deletepost(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.pop();
           let x= posts.length 
            
            if (x!=0){
                resolve();
            }else{
                reject('Array is empty');
            }
        }, 2000);
    })
}

createpost({title:'post three',body:'This is post three'}).then(getposts)
// deletepost().catch(err =>console.log(err))
deletepost().then(createpost);
