const menuBar = document.querySelector('.toolbar');
const menuItems = document.querySelector('.desktop-navbar-links');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  menuItems.classList.toggle('active');
  document.documentElement.classList.toggle('scroll-disable');
});

// Close menu on menu-item click
document.querySelectorAll('.nav-links').forEach((link) => link.addEventListener('click', () => {
  menuBar.classList.remove('active');
  menuItems.classList.remove('active');
  document.documentElement.classList.toggle('scroll-disable');
}));

// Modal PopUp
const openModalBtn = document.querySelectprAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-btn]');
const overlay = document.getElementById('modal-overlay');

// Open Modal
openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modaltarget);
    showModal(modal);
  });
})

function showModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}

// Close Modal
closeModalBtn.forEach((button) => {
  const modal = button.closest('.modal-container');
  closeModal(modal);
})
function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}





































// const multiPost = `
//   <article class="my-projects-multi-post">
//   <div class="multi-post-image-cont">
//     <img src="./images/project_img.png" alt="fitness picture" />
//   </div>

//   <div class="multi-post-txt-btn">
//     <h3>Multi-Post Stories</h3>
//     <p>
//       A daily selection of privately personalized reads; no accounts or
//       sign-ups required has been the industry's standard dummy text ever
//       since the 1500s, when an unknown printer took a standard dummy text.
//     </p>

//     <div class="skills-container">
//       <ul class="skills">
//         <li class="css">css</li>
//         <li class="html">html</li>
//         <li class="boot">Bootstrap</li>
//         <li class="ruby">Ruby</li>
//       </ul>
//     </div>

//     <button type="button" class="multi-post-btn">See Project</button>
//   </div>
//   </article>
// `
// // Creating the project's object
// const projectData = {
//   projectOne: {
//     class: 'my-projects-actual no-overlay',
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     }
//     button: 'See Project',
//   },
//   projectTwo: {
//     oldTitle: 'Profesional Art Printing Data',
//     newTitle: 'Data Dashboard Health care',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     },
//     button: 'See Projects'
//   },

//   projectThree: {
//     oldTitle: 'Profesional Art Printing Data',
//     newTitle: 'Website Portfolio',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     },
//     button: 'See Projects'
//   },

//   projectFour: {
//     oldTitle: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     },
//     button: 'See Projects'
//   },
//   projectFive: {
//     oldTitle: 'Profesional Art Printing Data',
//     newTitle: 'Data Dashboard Healthcare',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     },
//     button: 'See Projects'
//   },
//   projectSix: {
//     oldTitle: 'Profesional Art Printing Data',
//     newTitle: 'Website Protfolio',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
//     technologies: {
//       html: 'html',
//       bootstrap: 'Bootstrap',
//       ruby: 'Ruby'
//     },
//     button: 'See Projects'
//   },

// }



// const projects =
//   `<div class="all-actual-projects">
//     <article class="">
//         <h2>Profesional Art Printing Data</h2>

//         <p>
//           A daily selection of privately personalized reads; no accounts or
//           sign-ups required. has been the industry's standard.
//         </p>

//         <ul class="skills1">
//           <li class="html1">html</li>
//           <li class="boot1">Bootstrap</li>
//           <li class="ruby1">Ruby</li>
//         </ul>

//       <button
//         type="button"
//         class="my-projects-actual-btn multi-post-btn myp-one-shown"
//       >
//         See Project
//       </button>
//     </article>
//   </div>`


// const portfolioSection = 
//   `<section id="portfolio" class="my-projects">
//   <div class="recent-cont">
//     <h1 class="my-projects-title">My Recent Works</h1>

//     <hr class="recent-break" />
//     ${multiPost}
//   </div>
//   </section>`