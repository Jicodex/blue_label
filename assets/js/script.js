// ========== Side Manu Language Select JS Script 
const btn = document.getElementById("languageBtn");
const menu = document.getElementById("languageMenu");

btn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("show");
});

document.querySelectorAll("#languageMenu li").forEach(item => {
    item.addEventListener("click", function () {
        btn.querySelector("img").src = this.querySelector("img").src;
        menu.classList.remove("show");
    });
});

document.addEventListener("click", function () {
    menu.classList.remove("show");
});


// ======== Side Menu Show - Hide Logic JS 
const menuOpenButtons = document.querySelectorAll('.menu-open-btn');
const menuClose = document.getElementById('menuClose');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuOpenButtons.forEach(button => {
    button.addEventListener('click', openSidebar);
});

menuClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);


// ===== Portfolio Items Filter 
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // আগের একটিভ ক্লাস রিমুভ করে কারেন্ট বাটনে অ্যাড করা
      document.querySelector(".filter-btn.active").classList.remove("active");
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      filterItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block";
          setTimeout(() => {
            item.classList.remove("hide");
          }, 10);
        } else {
          item.classList.add("hide");
          setTimeout(() => {
            item.style.display = "none";
          }, 400); // CSS ট্রানজিশন টাইমের সাথে মিল রেখে
        }
      });
    });
  });
});

// ========== Spacial Single page Slider JS Script 
$('.spacial_single_slider_main').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  prevArrow: $('.spacial_back_button'),
    nextArrow: $('.spacial_next_button'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$('.spacial_kalo_slider_main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});