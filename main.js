//ensure page starts at the top
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});


//search bar interactivity, removes hide classlist when search icon is clicked,
// and adds it back when cancel icon is clicked 
const openIcon = document.querySelector('#search_icon');
const closeIcon = document.querySelector('#cancel_icon');
const container = document.querySelector('.search_container');
const bar_bg = document.querySelector('.search_bar');

openIcon.addEventListener('click', ()=>{
    container.classList.remove('hide_container')
    bar_bg.classList.remove('hide_bar_bg')
    openIcon.src = "resources/Iconify/Search_black.svg"
    closeIcon.src = "resources/Iconify/Cancel_black.svg"
});
closeIcon.addEventListener('click', ()=>{
    container.classList.add('hide_container')
    setTimeout(()=> {
        bar_bg.classList.add('hide_bar_bg')
        openIcon.src = "resources/Iconify/Search.svg"
        closeIcon.src = "resources/Iconify/Cancel.svg"
    },500)
});


//countdown timer for front page
//takes the current date and time, and calculate the time in hours, minutes, and seconds
//until the next day at midnight, then uses that as the countdown timer.
//Updates timer every second
let now = new Date();

let UpcomingDay = new Date(
    now.getFullYear(), 
    now.getMonth(),     
    now.getDate() + 1,  
    0, 0, 0, 0         
);

function CountdownDate(CountdownTime) {
    let now = new Date();
    let TimeRemaining = CountdownTime - now;
    console.log(TimeRemaining);

    let seconds = Math.floor(TimeRemaining / 1000);
    let minutes = Math.floor(TimeRemaining / (1000 *60));
    let hours = Math.floor(TimeRemaining / (1000 *60*60));

    let DisplayHour = hours;
    let DisplayMinute = minutes - (hours*60);
    let DisplaySecond = seconds - (minutes*60);

    const SecondElement = document.getElementById('seconds');
    const MinuteElement = document.getElementById('minutes');
    const HourElement = document.getElementById('hours');

    if (DisplaySecond < 10) {
        DisplaySecond = "0" + DisplaySecond;
    }
    if (DisplayMinute < 10) {
        DisplayMinute = "0" + DisplayMinute;
    }
    if (DisplayHour < 10) {
        DisplayHour = "0" + DisplayHour;
    }

    SecondElement.textContent = DisplaySecond;
    MinuteElement.textContent = DisplayMinute;
    HourElement.textContent = DisplayHour;

}
CountdownDate(UpcomingDay);
setInterval(function(){
    CountdownDate(UpcomingDay);
}, 1000);

//navbar carot rotation for select dropdown when dropdown is open, else it rotates it back
document.getElementById('select_box').addEventListener('change', function () {
    if (this.value) {
        window.location.href = this.value;
    }
});

const dropdown = document.getElementById('select_box');
const menu_carot = document.getElementById('menu_carot')
dropdown.addEventListener('focus', function () {
    menu_carot.classList.add('rotate');
});
dropdown.addEventListener('blur', function () {
    menu_carot.classList.remove('rotate');

});
function open_dropdown() {
    dropdown.focus();
}
menu_carot.addEventListener('click', open_dropdown);



//cloud interactivity, pulls cloud to the side and decreases opacity when scrolling down, and back when scrolling up
//else it makes the cloud static on mobile view (it kinda affects scrolling sometimes if not static)
//edit: eagle also moves up when scrolling down, scroll value is multiplied by 0.4 to make it move slower
const left_cloud = document.getElementById('left_cloud');
const right_cloud = document.getElementById('right_cloud');
const eagle = document.getElementById('eagle1');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 800, 0);

    if (window.innerWidth > 1000) {
        left_cloud.style.transform = `translateX(${-scrollY}px)`;
        right_cloud.style.transform = `translateX(${scrollY}px)`;
        eagle.style.transform = `translateY(${scrollY * 0.5}px)`;

        left_cloud.style.opacity = opacity;
        right_cloud.style.opacity = opacity;
    }
    else {
        left_cloud.style.transform = '';
        right_cloud.style.transform = '';
    }
});


//mute button changes to another image (unmute button) when clicked
//video is also muted here
const mute_image = document.getElementById('mute_image');
const mute_checkbox = document.getElementById('toggle_mute');
const animals_video = document.getElementById('animals_video');
const muted = 'resources/Iconify/mute.svg';
const unmuted = 'resources/Iconify/audio.svg';


mute_checkbox.addEventListener('change', ()=> {
   if (mute_checkbox.checked) {
    mute_image.src = unmuted;
    animals_video.muted = false;
   } else {
    mute_image.src = muted;
    animals_video.muted = true;
   }
});



//button to scroll latest stories
//Scrolls all the way since i only have 6 images and a viewport takes up 3
//If on mobile view, it scrolls by 1 image
//Smooth behavior also added cuz its smooth and cool
const scroll_container = document.querySelector('.item_container');
const scroll_left = document.getElementById('scroll_left');
const scroll_right = document.getElementById('scroll_right');

scroll_right.addEventListener('click', () => {
    if (window.innerWidth > 1000) {
        scroll_container.scrollBy({
            left: 2000,
            behavior: 'smooth'
        });
    } else {
        scroll_container.scrollBy({
            left: 365,
            behavior: 'smooth'
        });
    }
});

scroll_left.addEventListener('click', () => {
    if (window.innerWidth > 1000) {
        scroll_container.scrollBy({
            left: -2000,
            behavior: 'smooth'
        });
    } else {
        scroll_container.scrollBy({
            left: -365,
            behavior: 'smooth'
        });
    }
});

//button to scroll corners of the world, similar to the one above
const scroll_container_corners = document.querySelector('.world_corners_container');
const scroll_left_corners = document.getElementById('scroll_left_corners');
const scroll_right_corners = document.getElementById('scroll_right_corners');

scroll_right_corners.addEventListener('click', () => {
    if (window.innerWidth > 1000) {
        scroll_container_corners.scrollBy({
            left: 2000,
            behavior: 'smooth'
        });
    } else {
        scroll_container_corners.scrollBy({
            left: 365,
            behavior: 'smooth'
        });
    }
});


scroll_left_corners.addEventListener('click', () => {
    if (window.innerWidth > 1000) {
        scroll_container_corners.scrollBy({
            left: -2000,
            behavior: 'smooth'
        });
    } else {
        scroll_container_corners.scrollBy({
            left: -365,
            behavior: 'smooth'
        });
    }
});


//moves the page to subscribe area on click with smooth behavior
const subscribe_button = document.getElementById("subscribe_pagelink");

subscribe_button.addEventListener("click", ()=> {
    const subscribearea = document.getElementById("subscribe_page");
    subscribearea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


//login page falls down and fades in when login button is clicked
//form has to be valid, and login button has prevent default to show dissappearing animation
const login_trigger = document.getElementById('login_trigger');
const exit_login = document.getElementById('login_button');

const login_page = document.querySelector('.login_page');
const login_container = document.querySelector('.login_container');
const login_form = document.getElementById('login_form');

login_trigger.addEventListener('click', ()=> {
    login_page.style.display = `flex`;
    setTimeout(()=> {
        login_page.style.opacity = 1;
        login_container.style.transform = `translateY(0)`;
    }, 500);
});

exit_login.addEventListener('click', (event)=> {
    event.preventDefault();
    if(login_form.checkValidity()) {
        login_page.style.opacity = 0;
        login_container.style.transform = `translateY(-100vh)`;
        setTimeout(()=> {
            login_page.style.display = `none`;
        }, 500);
    } else {
        alert('Please fill in all fields');
    }

});


