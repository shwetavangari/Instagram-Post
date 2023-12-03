
// Image like
var img1=document.querySelector("#img1");
var like=document.querySelector("#like");
var likes=document.querySelector("#likes");
var likes1=document.querySelector("#likes1");
var bookmark=document.querySelector("#bookmark");

img1.addEventListener("dblclick",function(){
    // console.log("cliked");
    like.style.opacity="1";
    setTimeout(function(){
        like.style.animation="bounce linear 0.7s";
        like.style.opacity="0";
        likes.classList.add("fa-solid");
        likes.style.color="red";  
    },400);
});

var img2=document.querySelector("#img2");
var like2=document.querySelector("#like2");

img2.addEventListener("dblclick",function(){
    // console.log("cliked");
    like2.style.opacity="1";
    setTimeout(function(){
        like2.style.animation="bounce linear 0.7s";
        like2.style.opacity="0";
        likes1.classList.add("fa-solid");
        likes1.style.color="red"; 
    },400);
});


// Manual like button

var likes=document.querySelector("#likes");
likes.addEventListener("click",function(){
    if(likes.classList.contains('fa-regular')){
        likes.classList.remove("fa-regular");
        likes.classList.add("fa-solid");
        likes.style.color="red";  
    }else{
        likes.classList.remove("fa-solid");
        likes.classList.add("fa-regular");
        likes.style.color="black";
    }
});

//  2nd like
var likes1=document.querySelector("#likes1");
likes1.addEventListener("click",function(){
    if(likes1.classList.contains('fa-regular')){
        likes1.classList.remove("fa-regular");
        likes1.classList.add("fa-solid");
        likes1.style.color="red";  
    }else{
        likes1.classList.remove("fa-solid");
        likes1.classList.add("fa-regular");
        likes1.style.color="black";
    }
});

// Bookmark button
var bookmark=document.querySelector("#bookmark");
bookmark.addEventListener("click",function(){
    if(bookmark.classList.contains('fa-regular')){
        bookmark.classList.remove("fa-regular");
        bookmark.classList.add("fa-solid");
        bookmark.style.color="black";  
    }else{
        bookmark.classList.remove("fa-solid");
        bookmark.classList.add("fa-regular");
    }
});

// 2nd bookmark
var bookmark1=document.querySelector("#bookmark1");
bookmark1.addEventListener("click",function(){
    if(bookmark1.classList.contains('fa-regular')){
        bookmark1.classList.remove("fa-regular");
        bookmark1.classList.add("fa-solid");
        bookmark1.style.color="black";  
    }else{
        bookmark1.classList.remove("fa-solid");
        bookmark1.classList.add("fa-regular");
    }
});



// Story seen

var stories1=document.querySelectorAll(".story");

stories1.forEach(function(element) {
    console.log("clickeddd"+element);
    element.addEventListener("click",function(){
        console.log("story clicked");
        element.classList.remove("story");
        element.classList.add("storyes");
        element.classList.add("storyes img");
        element.classList.add("storyes p");
        // element.style.color="green";  
    })
});

