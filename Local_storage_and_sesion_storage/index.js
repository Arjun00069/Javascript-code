const myin= document.getElementById('myinput')
const mybtn=document.getElementById('mybtn')
const deleteBtn =document.getElementById("delete");


// LOCAL STORAEG SCOPE IS GLOBAL IT STORE IN DIFFRENT TABS ALSO 
// SESSION STORAGE OF ALL TAB IS DIFRENT BUT LOCAL STORAGE OF ALL TAB IS SAME
//LOCAL STORAGE KEY WILL REMAIN AFTER CLOSING BROWSER UNTIL WE MANUALLY DELETE IT

const btnClick =()=>{
// alert(myin.value)
// sessionStorage.setItem("key1",myin.value)
// localStorage.setItem("key1",myin.value) //ALL THE VALUES ARE SAVED IN FORM OF STRING
// WHAT IF WE WANT TO SAEV IN FORM OF OBJECT

// localStorage.setItem("key1",{name:"Abhi",surname:"singh"}); //----->this is not redable in local storage we will convert it in string

localStorage.setItem("key1",JSON.stringify({name:"Abhi",surname:"singh"}))

}

mybtn.addEventListener("click",btnClick)

deleteBtn.addEventListener("click",async ()=>{
//  console.log(   await JSON.parse(localStorage.key(0))); // We can axcess key using .key
//   console.log(sessionStorage.key(0)); // We can axcess key using .key

//   sessionStorage.length //gives length of sessin storage
// sessionStorage.removeItem("key1");
localStorage.removeItem("key1");


// sessionStorage.clear();//It will remove all key value pairs
})

if(localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")).name);
}



// LOCAL STORAGE 

