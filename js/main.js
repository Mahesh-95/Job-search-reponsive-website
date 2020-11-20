const options= document.querySelectorAll('.option-btn');
const list=document.querySelectorAll('ul');
const feedback=document.querySelector('.feedback');
const feedbackContent=document.querySelector('.feedback-content');
const closeBtn=document.querySelector('.close-btn');
const showFilter=document.querySelector('.show-filter');
const jobFilter=document.querySelector('.bg1');
const cancel=document.querySelector('.cancel');



for(const option of options){
    option.addEventListener('click', ()=>{
        option.classList.toggle("fa-plus");
        let i=option.id;  
        list[i].classList.toggle("opt");
    })

}

feedback.addEventListener('click',()=>{
    feedbackContent.style.display="block";
})

closeBtn.addEventListener('click',()=>{
    feedbackContent.style.display="none ";
})

showFilter.addEventListener('click', ()=>{
    if (jobFilter.style.display === "none") {
        jobFilter.style.display="block";
      } else {
        jobFilter.style.display="none";
      }
})

cancel.addEventListener('click', ()=>{
    jobFilter.style.display="none";
})