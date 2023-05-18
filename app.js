document.getElementById('sb').addEventListener('click', appenddata)
document.getElementById('alertbox').style.display="none"

let StudentData = [
    { name: 'XYZ', age: '20', emailid: 'name@xyz.com' }
]


function appenddata() {
    let namevalue = document.getElementById('sname').value
    let agevalue = document.getElementById('sAge').value
    let emailAdress = document.getElementById('semail').value;
    // console.log(validateEmail(emailAdress));
    if (validateEmail(emailAdress) && namevalue.length > 1 && agevalue.length > 1) {
        
        let inputData =
        {
            name: namevalue,
            age: agevalue,
            emailid: emailAdress
        }
        StudentData.unshift(inputData)
        printcard()
        document.getElementById('alertbox').style.display="none"
        console.log('a')
        return true
       
    }

    else if (agevalue.length == 1) {
        console.log(
            `AGE too short`
        )
        document.getElementById('alertbox').style.display="block"
        document.getElementById('alertbox').innerHTML=` AGE too short`
        console.log('b')
        return false
       
    }
    else if (namevalue.length < 1 ) {
        console.log(
            `NAME too short`
        )
        document.getElementById('alertbox').style.display="block"
        document.getElementById('alertbox').innerHTML=`Name too short`
        console.log('c')
        return false
        
       
    } 
    else if(validateEmail(emailAdress) == false){
        console.log(
            `Invalid Email`)
            document.getElementById('alertbox').style.display="block"
            document.getElementById('alertbox').innerHTML=` Invalid Email`
            return false
    }

}

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
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

