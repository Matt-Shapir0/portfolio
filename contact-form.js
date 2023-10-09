
emailjs.init('dAlsgnjjcI3909IsX');

function submitForm(){
  //console.log('submitted');
  let name = document.querySelector('.js-name').value;
  let email = document.querySelector('.js-email').value;
  let message = document.querySelector('.js-message').value;

  if (name===''){
    paragraphText = ' Please enter a name before submitting. '
    document.querySelector('.js-text').innerText = paragraphText;
  }
  else if (email===''){
    paragraphText = ' Please enter an email before submitting. '
    document.querySelector('.js-text').innerText = paragraphText;
  }
  else if (message===''){
    paragraphText = ' Please enter a message before submitting. '
    document.querySelector('.js-text').innerText = paragraphText;
  }
  else{
    document.querySelector('.js-text').innerText = 'Thank you for your response!';
    document.querySelector('.js-name').value = '';
    document.querySelector('.js-email').value = '';
    document.querySelector('.js-message').value = '';

    // Send Email
    const formElement = document.querySelector('.js-form');
    //console.log(formElement);
    let formData = {
      name: name,
      email: email,
      message: message
    }
    emailjs.send('service_21knzpk', 'template_yjpkxlj',formData);

  }
  
  setTimeout(() => {
  document.querySelector('.js-text').innerText = '';
}, 6000);

  console.log('Message sucessfully submitted');
}