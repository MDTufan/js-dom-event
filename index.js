const Rbtn = document.getElementById('Colorred');
const Gbtn = document.getElementById('Colorgreen');
const Bbtn = document.getElementById('Colorblue');
Rbtn.onclick = function(){
    document.body.style.backgroundColor = 'red';
}
Gbtn.onclick = function(){
    document.body.style.backgroundColor = 'green';
}
Bbtn.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}

// 222222222
const post=document.getElementById('post');

post.addEventListener("click",function(){
    let commmm = document.getElementById('commmm');
    let fstcommmm = commmm.value;
 
    const div = document.getElementById('comments');
    let p = document.createElement('p');
   p.innerText=fstcommmm;
   div.appendChild(p);

   commmm.value='';
    

});

// 33333

const input = document.getElementById('input-1');
input.addEventListener('keyup',function(event){
    const delete1= event.target.value;
    const btn1 =document.getElementById('btn');
    if(delete1=='delete'){
        btn1.removeAttribute('disabled');
        btn1.addEventListener('click',function(){
            document.getElementById('select').style.display = 'none';
           
        })

    }else{
        btn1.setAttribute('disabled',true)
    }
});


