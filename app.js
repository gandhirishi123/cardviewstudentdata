document.getElementById('sb').addEventListener('click', appenddata)


let StudentData = [
    { name: 'Rishi', age: '21', emailid: 'name@xyz.com' }
]


function appenddata() {
    let namevalue = document.getElementById('sname').value
    let agevalue = document.getElementById('sAge').value
    let emailidvalue = document.getElementById('semail').value

    let inputData =
    {
        name: namevalue,
        age: agevalue,
        emailid: emailidvalue
    }

    StudentData.unshift(inputData)
    printcard()
}
printcard()

function printcard() {
    document.getElementById('data').innerHTML = ``

    for (i = 0; i < StudentData.length; i++) {
        document.getElementById('data').innerHTML += `
        <div class="col mt-3" >
            <div class="card"style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">Student</h5>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${StudentData[i].name}</h6>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${StudentData[i].age}</h6>
                          <h6 class="card-subtitle mb-2 text-body-secondary">${StudentData[i].emailid}</h6>
                          <button class="btn btn-danger" onClick="deletecard(${i})">Delete</button>
                        </div>
            </div>
        </div>`
    }
}


function deletecard(index) {
    if (confirm('Are You Sure?')) {
        StudentData.splice(index, 1)
        printcard()
    }
}

