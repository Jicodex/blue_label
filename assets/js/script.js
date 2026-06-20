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