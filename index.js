

window.addEventListener('load',()=>{
    const form=document.querySelector('#new-task-form');
    const input=document.querySelector('#new_task_input');
    const list_el=document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        console.log("Submit Form");
        const task= input.value;

        if(!task){
            alert("Please fill out the task ");
            return;
        }
        const task_nl = document.createElement("div");
        task_nl.classList.add("task");

        const task_content_nl = document.createElement("div");
        task_content_nl.classList.add("content");

        // task_content_nl.innerText=task;
        task_nl.appendChild(task_content_nl);

        const task_input_el=document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type= "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");


        task_content_nl.appendChild(task_input_el);

        const task_actions_el=document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML ="Edit";

        const task_delete_el =document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_nl.appendChild(task_actions_el);

        list_el.appendChild(task_nl);
        input.value="";

        task_edit_el.addEventListener('click',()=>{
            if(task_edit_el.innerText.toLocaleLowerCase() == "edit" ){
                task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText="Save";
            } else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText="Edit";
            }
        });
        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_nl);
        });
    });
});