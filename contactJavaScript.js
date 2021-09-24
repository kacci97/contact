function send(){
    var name=document.getElementById('name').value;
    var mail=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById("message").value;
    var check=document.getElementById("check");

    if(name=="" || mail=="" || phone=="" ||message==""  )
    {
        alert("Сите полиња мора да се пополнети");
    }
    else
    {
        if(check.checked==1) {
            if (validateEmail(mail) && isValid(phone)) {
                alert("Вашите податоци се успешно испратени");
            }
            else if (!validateEmail(mail) || !isValid(phone)){
            alert("Не се правилни податоците")
            }

        }

        else{
            alert("Кликнете дека се согласувате на условите");
        }


    }



}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isValid(p) {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
}
