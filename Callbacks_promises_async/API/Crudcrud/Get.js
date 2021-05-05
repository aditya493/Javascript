
const submitButton = document.getElementById("submit");

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("vscode");
//   localStorage.getItem();
// });

if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = keys.length; //6
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  while (i--) {
    //i==2
    if (keys[i].match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  }
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    const dt =axios.post("https://crudcrud.com/api/12d4f39776ff4f3e9ea2f7b041040857/new",{name:`${name}`,emailId:`${emailId}`})
    .then(res => console.log(res))

    const gt = axios.get("https://crudcrud.com/api/12d4f39776ff4f3e9ea2f7b041040857/new").then(data => {
       for(let i=0;i<data.data.length;i++){
         addNewLineElement(data.data[i])
       }
      
    })



    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("name").value = object.name;
    let x= `${object._id}`
    console.log(x);
    axios.put(`https://crudcrud.com/api/12d4f39776ff4f3e9ea2f7b041040857/new/${object._id}`,{name:`${object.name}`,emailId:`${object.emailId}`})
    // document.getElementById("email").value = object.emailId;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);
    axios.delete(`https://crudcrud.com/api/12d4f39776ff4f3e9ea2f7b041040857/new/${object._id}`);
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
}
