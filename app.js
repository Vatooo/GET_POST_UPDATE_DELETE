

let content = document.querySelector(".content"); // iamcool
let newContent = content.textContent.slice(1);
console.log(newContent);



const form =  document.querySelector("#form");
const namee = document.querySelector("#nameInput");
const surname = document.querySelector("#surnameInput");
const phone = document.querySelector("#phoneInput");
const address = document.querySelector("#addressInput");



const PostButton = document.querySelector("#PostButton");
const userPlace = document.querySelector(".userPlaceholder");
const table = document.querySelector("#table");

console.log(table);




getRegisteredUsers();
function getRegisteredUsers() {

    fetch('http://localhost:3000/users')
    .then( res => res.json())
    .then(res => {
        console.log(res);
        res.map(element => {
            function cons() {
                console.log("S")
            }
            table.innerHTML += `

            
        <tr>
            <td>${element.id} </td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.phoneNumber}</td>
            <td>${element.address}</td>
            <td>
                <button class="edit-btn" >Edit</button>
            </td>
            <tr class="">
                <td>
                    <input value=${element.id} class="changeInp">
                </td>
                <td>
                    <input value=${element.firstName} class="changeInp">
                </td>
                <td>
                    <input value=${element.lastName} class="changeInp">
                </td>
                <td>
                    <input value=${element.phoneNumber} class="changeInp">
                </td>
                <td >
                    <input value=${element.address} class="changeInp">
                </td>
                
                    <td>
                        <button onclick="cons()" class="edit-btn" id="editBTN" >change</button>
                    </td>
                
                
            </tr>

        </tr> 
        <br>
      
        `
        
        });
        
        

        // const testBtn = document.querySelector('#editBTN')

        // testBtn.addEventListener('click', () => {
        //     console.log('Vato123')
        // })
        
        
    });
}



let postNewUser = {
    firstName:`${namee.value}`,
    lastName: `${surname.value}`,
    phoneNumber: `${phone.value}`,
    address : `${address.value}`,

}

const Url = 'http://localhost:3000/users'


//POST Button Event Listener
PostButton.addEventListener('click', (e)=> {
    e.preventDefault();

    fetch(`${Url}`, {
        method:'POST',
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            firstName:`${namee.value}`,
            lastName: `${surname.value}`,
            phoneNumber: `${phone.value}`,
            address : `${address.value}`,
        
        })
    })
    .then(res => res.json())
    .then(res => console.log(res));
})

const userID = document.querySelector('#userId');
const PutButton = document.querySelector("#PutButton");

// PUT Button Event Listener
PutButton.addEventListener('click', ()=> {
    const ID = userID.value;

    fetch(`${Url}/${ID}`, {
        method:'PUT',
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            firstName:`${namee.value}`,
            lastName: `${surname.value}`,
            phoneNumber: `${phone.value}`,
            address : `${address.value}`,
        
        })
    })
    .then(res => res.json())
    .then(res => console.log(res));
})

const DeleteButton = document.querySelector("#DeleteButton");

//Delete Button Event Listener
DeleteButton.addEventListener('click', () => {
    const ID = userID.value;

    fetch(`${Url}/${ID}`, {
        method:'DELETE',
        headers: {
            "Content-type" : "Application/json"
        }
    })
})