// let name = "hellow"
// console.log(name)
// console.log(name + "surya")
// var name ="Novri"
// var age = "30"
// console.log(`selamat datang wahai : ${name} , ${age} `)

// operator ( + - * / %)
// let bilangan1 = 105
// let bilangan2 = 50
// console.log(bilangan1 % bilangan2)

// condition
// const nilai = 19
// if(nilai > 80) {
//     console.log("nilai A")
// } else if (nilai < 20){
//     console.log("nilai C")
// } else {
//     console.log("nilai g ada")
// }

// let fullname = "Dira"
// let address = "Jakarta selatan"
// function Hello(nama, alamat) {
//     console.log(`halo nama saya ${nama} alamat saya di ${alamat}`)
// }

// Hello(fullname, address)

function submitData() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value  
    const phoneNumber = document.getElementById("phoneNumber").value
    const Subject = document.getElementById("Subject").value
    const message = document.getElementById("message").value
   
    // kondisi harus terpenuhi
    if(inputName === ''){
        alert(' name harus diisi')
    } else if (inputEmail === ''){
       alert('email harus di isi')
    } else if (phoneNumber === ''){
        alert('phone numberharus di isi')
    } else if (Subject === ''){
        alert('subject harus di isi')
    }  else if (message === ''){
        alert('pesan tambahan harus diisi')
    }
    
    // harus tervalidasi
    console.log("nama:", inputName)
    console.log("email:", inputEmail)
    console.log("nomor telepone", phoneNumber)
    console.log("kelas" , Subject)
    console.log("pesan tambahan" , message)
    
    let a = document.createElement('a') 
    const emailsaya = "mailto:steveardiyanto3@gmail.com"
    a.href= `${emailsaya}?subject=${Subject}&body=${message}`
    a.click()
} 
