//listener to locate to register page............
let registerButton = document.querySelector('#Register');
registerButton.addEventListener('click',()=>{
   //To locate to user register page.......
   window.location.href = 'register.html';
}) 

//listener to locate to createBlog page through dropdown 'create blog button'..........
let dropdownCreateBlogButton = document.getElementById('dropdown-createBlog-button');
dropdownCreateBlogButton.addEventListener('click',()=>{
    window.location.href = 'createBlog.html';
})

document.querySelector('#getstarted').addEventListener('click',()=>{
    window.location.href = 'NotePage.html';
})