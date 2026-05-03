const form = document.getElementById("contactForm");
form.addEventListener("submit",function(event){
 //prevent default submission of the form for validation
 event.preventDefault();
    const name = document.getElementById("full_name");
    const email= document.getElementById("email");
    const phone = document.getElementById("phone");
    if(!name.value){
        name.classList.add("is-invalid");
    }
    else{
        name.classList.remove("is-invalid");
    }
    if(!email.value || !email.validity.valid){
        email.classList.add("is-invalid");
    }
    else{
        email.classList.remove("is-invalid");
    }
    if (!phone.value) {
        phone.classList.add("is-invalid");
    }
    else {
        phone.classList.remove("is-invalid");
    }
    if(name.value && email.value && phone.value){
        alert("form submitted successfully");
        console.log("form submitted successfully");
    }
});
// document.getElementById("chathurashram").onclick=function(){
//     $("my_modal").modal("show")
// }
mymodal = document.getElementById("chathurashram");
popup=new bootstrap.Modal(document.getElementById("my_modal"));
mymodal.addEventListener("click",function(){
popup.show();
});
mymodal1 = document.getElementById("thishram");
popup1= new bootstrap.Modal(document.getElementById("my_modal1"));
mymodal1.addEventListener("click", function () {
    popup1.show();
});
mymodal2 = document.getElementById("mishram");
popup2= new bootstrap.Modal(document.getElementById("my_modal2"));
mymodal2.addEventListener("click", function () {
    popup2.show();
});
mymodal3 = document.getElementById("khandam");
popup3= new bootstrap.Modal(document.getElementById("my_modal3"));
mymodal3.addEventListener("click", function () {
    popup3.show();
});
mymodal4 = document.getElementById("sankeernam");
popup4 = new bootstrap.Modal(document.getElementById("my_modal4"));
mymodal4.addEventListener("click", function () {
    popup4.show();
});