const init = () =>{
  
  const inputemail = document.querySelector('input[type = "email"]');
  const inputPassword = document.querySelector('input[type ="password"]') ; 
  const submit= document.querySelector('.login__submit');
     if(submit){
        submit.addEventListener('click',(Event)=>{
            Event.preventDefault();


            fetch('https://reqres.in/api/login',{
                method:'POST',
                headers :{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                    email: inputemail.value,
                    password:inputPassword.value,

                })
            }).then((Response)=>{
                return Response.json();
            }).then((data)=>{
                console.log(data);
            })
        })
     }
}
window.onload=init;