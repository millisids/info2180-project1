/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded',function(){
    let form = document.querySelector('.newsletter form');
    let e_input = document.getElementById('email');
    let message  = document.querySelector('.message');

    if (!form || !e_input || !message){
        return;
    }


    form.addEventListener('submit',function(event){
        event.preventDefault();

        const email= e_input.value.trim();

        if(email !== ''){

            message.textContent =
            `Thank you! Your email address ${email} has been added to our mailing list!`;

        } else {
            message.textContent='Please enter a valid email address';
        }
   });
});


