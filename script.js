let form = document.querySelector("#phonie");
let input = document.querySelector("#phoneNumber");
let image = document.querySelector("#image");
let mtnNetwork = ["0803","0703","0903","0806","0706","0813","0810","0814","0816"]
let gloNetwork = ["0805","0705","0905","0807","0815","0811","0905"]
let etisalatNetwork = ["0500809","0909","0817","0818"]
let airtelNetwork = ["0802", "0902", "0701", "0808", "0708", "0812"]
 
 
// function if the input contain not only numbers
function showErrorMessage(firstName) {
    let message= ` ${firstName}, please enter a valid phone number`;
    const msg = input.parentNode.querySelector("small");
    msg.style.color = "red";
	msg.innerText = message;
    return message
}

// function to exceute if the number start with +234
function trimNumber234(phoneNumber, firstName) {
    phoneNumber.trim();
    if (phoneNumber.length < 14 || phoneNumber.length > 14) {
        let message = `${firstName}, check your phone number and try again !`;
        const msg = input.parentNode.querySelector("small");
        msg.style.color = "red";
        msg.innerText = message;
        return message
    }
    else {
    let newNumber = "0" + phoneNumber.slice(4,phoneNumber.length);
    let testNumber = newNumber.slice(0,4)
    
    mtnNetwork.forEach((num) => {
        let message = "This is a mtn number";
        let img = document.createElement("img");
        img.src = '../img/mtn.png'
        if (testNumber == num) {
            const msg = input.parentNode.querySelector("small");
            msg.style.color = "yellow";
            msg.innerText = message;
            image.appendChild(img);
            img.classList.add("img");
        }
    })

    gloNetwork.forEach((num) => {
        let message = "This is a glo number"
        let img = document.createElement("img");
        img.src = '../img/glo.jpg'
        if (testNumber == num) {
            const msg = input.parentNode.querySelector("small");
            msg.style.color = "green";
            msg.innerText = message;
            image.appendChild(img);
            img.classList.add("img");
        }
    })
    
    airtelNetwork.forEach((num) => {
        let message = "This is a airtel number";
        let img = document.createElement("img");
        img.src = '../img/airtel.png'
        if (testNumber == num) {
            const msg = input.parentNode.querySelector("small");
            msg.style.color = "red";
            msg.innerText = message;
            image.appendChild(img);
            img.classList.add("img");
        }
    })
    
    etisalatNetwork.forEach((num) => {
        let message = "This is a etisalat number";
        let img = document.createElement("img");
        img.src = '../img/etisalat.jpg';
        if (testNumber == num) {
            const msg = input.parentNode.querySelector("small");
            msg.style.color = "light gren";
            msg.innerText = message;
            image.appendChild(img);
            img.classList.add("img");
        }
    })
    }
}

// fucntion to exceute if the number start with zero
function cutNumber(phoneNumber, firstName) {
    phoneNumber.trim();
    if (phoneNumber.length < 11 || phoneNumber.length > 11) {
        let message = `${firstName}, check your phone number and try again !`;
        const msg = input.parentNode.querySelector("small");
        msg.style.color = "red";
        msg.innerText = message;
        return message
    }
    else {
        let newNumber = phoneNumber;
        let testNumber = newNumber.slice(0,4);
        mtnNetwork.forEach((num) => {
            let message = "This is a mtn number";
            let img = document.createElement("img");
             img.src = '../img/mtn.png';
            if (testNumber == num) {
                const msg = input.parentNode.querySelector("small");
                msg.style.color = "yellow";
                msg.innerText = message;
                image.appendChild(img)
                img.classList.add("img");
            }
        })
    
        gloNetwork.forEach((num) => {
            let message = "This is a glo number";
            let img = document.createElement("img");
            img.src = '../img/glo.jpg';
            if (testNumber == num) {
                const msg = input.parentNode.querySelector("small");
                msg.style.color = "green";
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        })
        
        airtelNetwork.forEach((num) => {
            let message = "This is a airtel number";
            let img = document.createElement("img");
            img.src = '../img/airtel.png'
            if (testNumber == num) {
                const msg = input.parentNode.querySelector("small");
                msg.style.color = "red";
                msg.innerText = message;
                image.appendChild(img)
                img.classList.add("img");
            }
        })
        
        etisalatNetwork.forEach((num) => {
            let message = "This is a etisalat number";
            let img = document.createElement("img");
            img.src = '../img/etisalat.jpg';
            if (testNumber == num) {
                const msg = input.parentNode.querySelector("small");
                msg.style.color = "light gren";
                msg.innerText = message;
                image.appendChild(img);
                img.classList.add("img");
            }
        })
    }
    
    
    
}


// function to generate the network provider
function getPhoneNumber(phoneNumber, firstName) {

    if (isNaN(phoneNumber)){
        return showErrorMessage(firstName);
    }
    else if (phoneNumber.startsWith("+234")) {
         trimNumber234(phoneNumber); 
    }
    else if (phoneNumber.startsWith("0")) {
        cutNumber(phoneNumber);
    }
    else {
        let message = ` ${firstName}, invalid number, just only for Nigeria's major network provider.`;
        const msg = input.parentNode.querySelector("small");
        msg.style.color = "red";
        msg.innerText = message;
        return message
    }
}



// Submitting the form
form.addEventListener("submit", (e) => {
const firstname = form.elements["firstname"]
const number = form.elements["phoneNumber"]
let firstName = firstname.value;
let phoneNumber = number.value;
 e.preventDefault();
 getPhoneNumber(phoneNumber, firstName);
});

