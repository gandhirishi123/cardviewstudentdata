document.getElementById('sb').addEventListener('click', appenddata)

let StudentData = [
    { name: 'XYZ', age: '20', emailid: 'name@xyz.com' }
]

// let namevalue = document.getElementById('sname').value
// let agevalue = parseInt(document.getElementById('sAge').value)
// let emailAdress = document.getElementById('semail').value;

function appenddata() {
    let namevalue = document.getElementById('sname').value
    let agevalue = document.getElementById('sAge').value
    let emailAdress = document.getElementById('semail').value;

    console.log(validateEmail(emailAdress));
    if (validateEmail(emailAdress) == true && namevalue.length > 1 && agevalue.length > 1 ) {
        let inputData =
        {
            name: namevalue,
            age: agevalue,
            emailid: emailAdress
        }
        StudentData.unshift(inputData)
        printcard()
        return true
    }
    else if (agevalue.length == 1) {
        alert(
            `AGE too short`
        )
        return false
    }
    else if (namevalue.length = 1) {
        alert(
            `name too short`
        )
        return false
    } 
}

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    alert(
        `Invalid Email`)
    return false
  }
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

