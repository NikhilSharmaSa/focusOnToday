
// const checkBox=document.querySelectorAll('.checkboxDiv')
const alert1=document.querySelector('#alert')
const progressBar=document.querySelector('.progress-done')
const addMore=document.querySelector('#addMore')
const inputDiv=document.querySelector('.inputDiv')
const main=document.querySelector('.inputs')
const totalGoals=document.querySelector('#totalGoals')
const removeGoals=document.querySelector('#remove')
const done=document.querySelector('.done')
const bg=document.querySelector('.bg')
let val=0;
let widt=100;

done.addEventListener('click',()=>{
bg.style="display:none"
const input =document.querySelectorAll('.input')
input.forEach((x)=>{
   
        x.parentElement.remove()
         progressBar.style.cssText=`opacity:0; width:0%;`
         val=0

         localStorage.clear();
})

})



addMore.addEventListener('click',addMoreFunction)


function addMoreFunction(){
    const newDiv=document.createElement('div')
    newDiv.classList.add('inputDiv')
    newDiv.innerHTML=`  <div class="checkboxDiv" value="1"><img src="Vector 1.png" alt="" ></div>
                    <input type="text" placeholder="Add New Goal...." class="input">`
   main.appendChild(newDiv)
   const input=document.querySelectorAll('.input')


  
   totalGoals.innerHTML=input.length
   let widt=val/input.length*100;
   if(val==0){
    progressBar.style.cssText=` width:${widt}%;`
       progressBar.innerHTML=`<p>${val}/${input.length}</p>`
   }else{
 progressBar.style.cssText=`opacity:1; width:${widt}%;`
   progressBar.innerHTML=`<p>${val}/${input.length}</p>`
   }


}


main.addEventListener('click', changeFunction)


function changeFunction(e){

    const input=document.querySelectorAll('.input')
        const checkBox=document.querySelectorAll('.checkboxDiv')

    if(e.target!==main){
      

    input.forEach((x)=>{
        if(e.target==x){
            x.style.cssText="color:black"
        }
    })

    checkBox.forEach((y)=>{
        if(e.target==y || e.target==y.children[0]){
            if(y.nextElementSibling.value==''){
                alert1.style="display:block"
                
            }
            else {
                  alert1.style="display:none"
                if(y.getAttribute('ok')==1){
                    console.log('red');
                    y.style="background-color:#fff"
y.nextElementSibling.style.cssText="color:black; text-decoration:none;"
y.setAttribute('ok',0)
val--
if(val==0){
     progressBar.style.cssText=`opacity:0; width:0%;`
}
else{
    let widt=val/input.length*100;
      progressBar.style.cssText=`opacity:1; width:${widt}%;`
      progressBar.innerHTML=`<p>${val}/${input.length}</p>`
     
}



                }else{
                    y.style="background-color:green"
                    y.nextElementSibling.style.cssText="color:green; text-decoration:line-through;"
                    y.setAttribute('ok',1)
                    val++
if(input.length<=0){
    progressBar.style.cssText=`opacity:0; width:0%;`
}else{
    let widt=val/input.length*100;
 progressBar.style.cssText=`opacity:1; width:${widt}%;`
 progressBar.innerHTML=`<p>${val}/${input.length}</p>`
 

}
                
                }


            }


        }
  
    })
        
    }
       
    if(val==input.length){
        setTimeout(()=>{
             bg.style="display:flex"
        },1500)
   
    }
   


}



removeGoals.addEventListener('click',removeEmptyGoals)


function removeEmptyGoals(){
    const input =document.querySelectorAll('.input')
console.log(input);

    input.forEach((x)=>{
        if(x.value==''){
            x.parentElement.remove()
            const input=document.querySelectorAll('.input')
            totalGoals.innerHTML=input.length
            let widt=val/input.length*100;
             progressBar.style.cssText=`opacity:1; width:${widt}%;`
             progressBar.innerHTML=`<p>${val}/${input.length}</p>`
            
  
        }
    })
}