const txt = document.querySelector('#full')
const txtArea = document.querySelector('#area')
const sendButton = document.querySelector('#submit')
const userForm = document.querySelector('#form')
const cardReport = document.querySelector('#secc_card')

cardReport.style.backgroundColor = '#eeeeee'

function submitHandler(e){
    e.preventDefault()
    if(txt.value===''){
        txt.focus()
        alert('Please, write your full name')
    }else if(txtArea.value===''){
        txtArea.focus()
        alert('Please, write your messege down')
    }

    const content = `
    <section>
        <h3>Your messege has been sent</h3>
        <p>User: ${fullName}</p>
        <p>Messege: ${message}</p>
    </section>`
    
    cardReport.innerHTML = content
    cardReport.style.backgroundColor = '#ff9d25'
    txt.value = ''
    txtArea.value = ''
    txt.focus()
}


txt.addEventListener('change',()=>{
    fullName = (txt.value)
    console.log(fullName)
})

txtArea.addEventListener('change',()=>{
    message = (txtArea.value)
    console.log(message)
})

userForm.addEventListener('submit', submitHandler)