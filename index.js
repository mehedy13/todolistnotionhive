
const submit=document.querySelector('#new-task-submit');
const input=document.querySelector('#new-task-input');
const list_el=document.querySelector('#tasks');
const delete_all=document.querySelector('.delete-all');

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    const task =input.value;

    if(!task){
        alert("Please add the task");
        return;
    }
    const task_el=document.createElement("div");
    task_el.classList.add("task");

    const task_content_el=document.createElement("div");
    task_content_el.classList.add("content");
   
    task_el.appendChild(task_content_el);

    const task_input_el=document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type="text";
    task_input_el.value=task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_action_el=document.createElement("div");
    task_action_el.classList.add("actions");

    const task_delete_el=document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML="Delete";

    task_action_el.appendChild(task_delete_el);
    task_el.appendChild(task_action_el);





    input.value="";

    task_el.addEventListener("click",()=>{
        task_el.classList.toggle("done");
        
    });


    task_delete_el.addEventListener('click', ()=>{
        list_el.removeChild(task_el);
    })

    delete_all.addEventListener('click', ()=>{
  
        list_el.innerHTML="";
        
        })

    list_el.appendChild(task_el);
})


