var newid = 1
function addTask() {
    var taskname = document.getElementById('input-class')

    var newtask = taskname.value.trim()
    if (newtask === '') {
        alert('请输入任务名称')
        return
    }

    var table = document.getElementById('table-element')
    var tbody = table.getElementsByTagName('tbody')[0]

    var newrow = tbody.insertRow(-1)

    var cell1 = newrow.insertCell(0)
    var cell2 = newrow.insertCell(1)
    var cell3 = newrow.insertCell(2)   

    cell1.innerHTML = newtask
    cell2.innerHTML = `<input id="complete_${newid}" type="radio" name="choice_${newid}">完成 <input id="incomplete_${newid}" type="radio" name="choice_${newid}">未完成`
    
    
    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = '删除'
    deleteBtn.className = 'delete-btn'   
    deleteBtn.onclick = function() {
        newrow.remove()
    }
    cell3.appendChild(deleteBtn)
    
    var complete = document.getElementById(`complete_${newid}`)
        complete.onclick = function() {
            cell1.style.textDecoration = 'line-through'
            cell1.style.color = 'gray'
        }
    var incomplete = document.getElementById(`incomplete_${newid}`)
        incomplete.onclick = function() {
            cell1.style.textDecoration = 'none'
            cell1.style.color = 'black'
        }

    newid++

    cell2.className = "state"

    
    taskname.value = "";
    taskname.focus();
}
