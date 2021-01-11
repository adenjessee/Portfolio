const btn = document.getElementById('button1');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_l780ebr';
   const templateID = 'template_orq65se';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Yay!!! You just sent me a message!!!',
        showConfirmButton: false,
        timer: 2000
    });
      document.getElementById("form").reset();
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 2000
      });
    });
    document.getElementById("form").reset();
});
function project_popup1(){
  Swal.fire({
    title: 'My Blog Site',
    text: 'A very functional blog site',
    imageUrl: 'img//work-1.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}
function project_popup2(){
  Swal.fire({
    title: 'My Sudoku Solver',
    text: 'See my Sudoku playground!',
    imageUrl: 'img//project-1.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("https://duylanle-sudoku.netlify.app/")
    }
  })
}
function project_popup3(){
  Swal.fire({
    title: 'My Github',
    text: 'Where I put all of my work into',
    imageUrl: 'img//work-3.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("project_site.html")
    }
  })
}
function blog_popup1(){
  Swal.fire({
    title: 'My Travel Blog',
    text: 'Traveling is always a good experience, see new things in front of your eyes is a fantastic emotion.',
    imageUrl: 'img//post-1.jpg',

    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("blog-single.html")
    }
  })
}
function blog_popup2(){
  Swal.fire({
    title: 'My Travel Blog',
    text: 'Building and maintaining web is my job and I want to share my story to you.',
    imageUrl: 'img//post-2.jpg',

    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("Web_development.html")
    }
  })
}
function blog_popup3(){
  Swal.fire({
    title: 'My Travel Blog',
    text: 'Trading is a way to earn money, My plan is to build a auto Trading Bot using Python.',
    imageUrl: 'img//post-3.jpg',

    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.replace("Trading_bot.html")
    }
  })
}
function download_success(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Yay!!! You just download my resume!!!',
    showConfirmButton: false,
    timer: 2000
});
}

