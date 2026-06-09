var table1 = document.getElementById("table1")
var table2 = document.getElementById("table2")


function update()
{
    var name = table1.rows[0].cells[1].querySelector("input").value
    var Age = table1.rows[1].cells[1].querySelector("input").value
    var gender = document.querySelector("input[name=Gender]:checked").value
    var course = table1.rows[3].cells[1].querySelector("select").value
    var email = table1.rows[4].cells[1].querySelector("input").value
     
    if(name == "" || Age == "" || email == "")
    {
        alert("Please fill all fields")
        return
    }

    var newrow = table2.insertRow()

    newrow.insertCell(0).innerText = name
    newrow.insertCell(1).innerText = Age
    newrow.insertCell(2).innerText=gender
    newrow.insertCell(3).innerText = course
    newrow.insertCell(4).innerText = email
    var addnewcell = newrow.insertCell(5)
    addnewcell.innerHTML = '<button id="button3" onclick = dltbtn(event)>Delete</button>'
}
function dltbtn(event)
{
    event.target.parentElement.parentElement.remove()
}

