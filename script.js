document.addEventListener('DOMContentLoaded', function() {

var tablinks = document.getElementsByClassName("header-link");
    

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Coder", "Lifelong Learner", "Problem Solver", "Curious Technologist", "Tech Endusiast"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

if (textArray.length) setTimeout(type, newTextDelay + 250);

//=====================================================================================
//Header Glow

const homeLink = document.getElementById('home-link');
const header = document.getElementById('header');

const about = document.getElementById('about');
const aboutLink = document.getElementById('about-link');

const projects = document.getElementById('projects');
const projectsLink = document.getElementById('projects-link');
const projectsMe = document.querySelector('.projectsTitle');

const aboutMe = document.querySelector('.aboutMe');

  const contacts = document.getElementById('contacts');
  const contactsLink = document.getElementById('contacts-link');
  const contactsTitle = document.querySelector('.contactsTitle');
    

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.target.id == 'header'){
      if (entry.isIntersecting) {
        homeLink.classList.add('scroll');
        homeLink.classList.add('active-link');
      } else {
        homeLink.classList.remove('scroll');
        homeLink.classList.remove('active-link');
      }
        }
        else if(entry.target.id == 'about'){
              if (entry.isIntersecting) {
                aboutLink.classList.add('active-link');
                aboutLink.classList.add('scroll');
                aboutMe.classList.add('move');
              } else {
                aboutLink.classList.remove('scroll');
                aboutMe.classList.remove('move');
                aboutLink.classList.remove('active-link');
              }
        }else if(entry.target.id == 'projects'){
            if (entry.isIntersecting) {
              projectsLink.classList.add('active-link');
              projectsLink.classList.add('scroll');
              projectsMe.classList.add('move');
              
            } else {
              projectsLink.classList.remove('scroll');
              projectsLink.classList.remove('active-link');
              projectsMe.classList.remove('move');
            }
      }else if(entry.target.id == 'contacts'){
          if (entry.isIntersecting) {
            contactsLink.classList.add('active-link');
            contactsLink.classList.add('scroll');
            contactsTitle.classList.add('move');

          } else {
              contactsLink.classList.remove('scroll');
              contactsLink.classList.remove('active-link');
              contactsTitle.classList.remove('move');
          }
      }
    });
  }, {
    threshold: 0.5
  });

      observer.observe(header);
     observer.observe(about);
    observer.observe(projects);
  observer.observe(contacts);



});

/*=============================About me====================*/
/*
  const skill = document.querySelector('.tab-contents.skills');
  const experience = document.querySelector('.tab-contents.experience');
  const education = document.querySelector('.tab-contents.education');

  skill.addEventListener('click', () => {
    skill.style.display = 'block';
    experience.style.display = 'none';
    education.style.display = 'none';
  });

  experience.addEventListener('click', () => {
    skill.style.display = 'none';
    experience.style.display = 'block';
    education.style.display = 'none';
  });

  education.addEventListener('click', () => {
    skill.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = 'block';
  });
*/
//var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
  /*
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }*/

    tabname.currentTarget.classList.add("active-link");
    //document.getElementById(tabname).classList.add("active-tab");
}



//                              Contacts


const scriptURL = 'https://script.google.com/macros/s/AKfycbxCn0iOlXa-uTeW61ofWe5w2JsNZmZ2hRkd-kMcXjKVEdXipJFnZNm7BVkYvWEwGlOttg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
