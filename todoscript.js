const taskArray = [];

function retrieveTask(){    
    let taskElement = document.getElementsByClassName("task-input")[0];
    let taskValue = taskElement.value
    let dateElement = document.getElementsByClassName("date-input")[0];
    let dateValue = dateElement.value

    if(dateValue!= ""&& taskValue!=""){
       taskArray.push({task:taskValue , date:dateValue})
       console.log(taskArray);
       taskElement.value = "";
       dateElement.value = "" ; 

       writeTask();
    }
}

function writeTask(){
    let pasteHtml = '';
    for (let i=0;i<taskArray.length;i++){
        const taskObj = taskArray[i];
        const taskvalue = taskObj.task;
        const datevalue = taskObj.date;


        const html = `<div>${taskvalue}</div>
        <div class="todo-grid"> ${datevalue} </div>
        <button onclick="taskArray.splice(${i},1); writeTask();" class="delete-button">Delete</button>
        
        `;
        pasteHtml += html;
    }
        document.querySelector(".task-space").innerHTML = pasteHtml;

        
}
retrieveTask();