function openMenu() {
    $("#slide_menu").addClass("slide_menu_opened");
    $(".search").addClass("move_search");
}

function closeMenu() {
    $("#slide_menu").removeClass("slide_menu_opened");
    $(".search").removeClass("move_search");
}


var slides = document.getElementsByClassName("slider");
var arrowRight = document.getElementById("arrowRight");
var arrowLeft = document.getElementById("arrowLeft");
var slidesContainer = document.getElementById("slidesContainer");


var position = 0;

arrowRight.addEventListener("click", function(event) {
    reposition(1);
});

arrowLeft.addEventListener("click", function(event) {
    reposition(-1);
});

function reposition(direction) { // 1 | -1
    position += direction;

    slidesContainer.style.left = -(position * 25) + "%";
    for (let slide of slides) {
        let slidePos = Math.round(convertPxtoPercent(getComputedStyle(slide).left) * 4);
        //slidePos: 0
        if (slidePos < (position - 2)) { // 0 < 1 
            slide.style.left = (slidePos + 7) * 25 + "%"; // (0 + 7) * 25 +"%" // 175%
        }
        //slidePos: 8 -> 1
        // position: 2
        if (slidePos > (position + 7)) { // 8 < 9
            slide.style.left = (slidePos - 7) * 25 + "%"; // (8 - 7) * 25 +"%" // 25%
        }

        if (slidePos == position) slide.className += " active";
        else slide.className = slide.className.replace(" active", "");
    }
}

setInterval(function() {
    reposition(1);
}, 4000)

//
function convertPxtoPercent(input) // "2301px"
{
    let ret = +(input.slice(0, -2)) / slidesContainer.getBoundingClientRect().width; //
    return ret;
}

let mainPhoto = document.getElementById("agenda_carousel");
let photo1 = document.getElementById("photo_grand1")
let photo2 = document.getElementById("photo_grand2")
let photo3 = document.getElementById("photo_grand3")
let photo4 = document.getElementById("photo_grand4")
let photo5 = document.getElementById("photo_grand5")
let photo6 = document.getElementById("photo_grand6")
let photo7 = document.getElementById("photo_grand7")

photo1.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('./img/chicago.jpg')";
})

photo2.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/cats.jpg')";
})

photo3.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/people.jpg')";
})

photo4.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/production.jpg')";
})

photo5.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/river.jpg')";
})

photo6.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/roe-deer.jpg')";
})

photo7.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/sea.jpg')";
})
photo7.addEventListener("mouseover", function() {
    mainPhoto.style.backgroundImage = "url('img/sea.jpg')";
})
function scrollL() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft -= step;
  }
  
  function scrollR() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft += step;
  }
  
  function getScrollVal() {
    setTimeout(() => {
      let x = document.getElementsByClassName("row_posters")[0];
      let el = document.getElementsByClassName("left_arrow")[0];
      if (x.scrollLeft == 0) {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
      let el2 = document.getElementsByClassName("right_arrow")[0];
      let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
      if (right <= 2) {
        el2.style.display = "none";
      } else {
        el2.style.display = "flex";
      }
    }, 550);
  }
  
  getScrollVal();
  