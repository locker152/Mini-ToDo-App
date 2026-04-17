let newid = 1
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

cell1.innerHTML = newtask
cell2.innerHTML = `<input type="radio" name="choice_${newid}">完成 <input type="radio" name="choice_${newid}">未完成`

newid++
cell2.className = "state"
var newtask = taskname.value.trim()
taskname.value = "";
    taskname.focus();
}



