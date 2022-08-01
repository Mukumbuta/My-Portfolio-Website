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

const ConvertStringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

// ------------------Rendering the Project section from javascript to html ----------------------/

// The first part of the section which is multi-post
const multiPost = `
  <article class="my-projects-multi-post">
    <div class="multi-post-image-cont">
      <img src="././images/project_img.png" alt="fitness picture" />
    </div>

    <div class="multi-post-txt-btn">
      <h3>Multi-Post Stories</h3>
      <p>
        A daily selection of privately personalized reads; no accounts or
        sign-ups required has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.
      </p>

      <div class="skills-container">
        <ul class="skills">
          <li class="css">css</li>
          <li class="html">html</li>
          <li class="boot">Bootstrap</li>
          <li class="ruby">Ruby</li>
        </ul>
      </div>

      <button type="button" class="multi-post-btn show-popup">See Project</button>
    </div>
  </article>
`;

// storing all the project data in an array
const projectData = [
  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: '',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Project',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: 'Data Dashboard Health care',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Projects',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },

  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Projects',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },

  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: '',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Projects',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Projects',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    oldTitle: 'Profesional Art Printing Data',
    newTitle: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    technologies: {
      html: 'html',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    button: 'See Projects',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
];

// looping through all these using a skeleton made up of mainly string literals
const projects = `<div class="all-actual-projects">
    ${projectData
    .map(
      (project, index) => `
       <article class="my-projects-actual">
          <div class=${index === 0 ? 'myp-one' : ''}>
            <h2 class="${index === 3 ? 'adj-actual-h2' : 'old '}">${
  project.oldTitle
}</h2>
            <h2 class="new adj-actual-h2 ${
  index === 2 || index === 5 ? 'adj-actual-h3' : ''
}
              ${index === 4 ? 'adj-actual-h2-1' : ''} ${
  index === 3 ? 'disappear' : ''
}">${project.newTitle}
              
              </h2>
            <p>${project.description}</p>

            <ul class="skills1">
              <li class="html1">${project.technologies.html}</li>
              <li class="boot1">${project.technologies.bootstrap}</li>
              <li class="ruby1">${project.technologies.ruby}</li>
            </ul>
          </div>

          <button
            type="button"
            class="my-projects-actual-btn multi-post-btn ${
  index === 0 ? 'myp-one-shown' : 'disappear'
} show-popup"
          >
            ${project.button}
          </button>
       </article>
      `,
    )
    .join('')}
  </div>`;

// Display Modal PopUp

const descriptionMobile = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the inustry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of the type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const descriptionDesktop = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";

// template for the popup object
function generatePopup() {
  const popupTemplate = `
      <div id="modal" class="modal-container">
      <h1 class="show-on-mobile">Multi Post Stories</h1>
      <h1 class="show-on-desktop">Keeping track of hundreds  of components website</h1>
      <img class="cross-btn" src="images/modal-images/cross-icon.svg" alt="" />

      <img
        src="./images/modal-images/popup-tags.svg"
        alt=""
        class="modal-popup-tag"
      />

      <div class="modal-project-container">
        <img
          src="images/modal-images/Snapshoot Portfolio.svg"
          alt="Image of my first project"
        />
        <div class="modal-description">
          <p class='mobile-description show-on-mobile'>
            ${descriptionMobile}
          </p>
          <p class='desktop-description show-on-desktop'>
            ${descriptionDesktop}
          </p>
          <div class="modal-buttons">
            <a href="https://mukumbuta.github.io/My-Portfolio-Website/"
              ><img
                class="redirect-icon"
                src="./images/modal-images/popup-seelive.svg"
                alt=""
            /></a>
            <a
              href="https://github.com/Mukumbuta/My-Portfolio-Website/tree/Modal-PopUp"
              ><img
                class="redirect-icon"
                src="./images/modal-images/popup-seesource.svg"
                alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
`;

  return popupTemplate;
}

// render the entire html when the page has loaded
window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('.my-projects');

  portfolioSection.appendChild(...ConvertStringToHTML(multiPost).children);
  portfolioSection.appendChild(...ConvertStringToHTML(projects).children);
  const entireProjectsContainer = document.createElement('div');

  // insert entire project container in the right place inside the body
  const { body } = document;
  body.insertBefore(entireProjectsContainer, body.children[2]);

  // popup showsup when the use clicks the show-popup buttons in multipost and the project sections
  // we now need to add a click listener to all the buttons inside the button section
  const showPopupButtons = document.querySelectorAll('.show-popup');
  // loop through the buttons and add a click listener on each
  showPopupButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // toggle active class on  the overlay
      const overlay = document.querySelector('.modal-overlay');
      overlay.classList.toggle('active');
      // we want to load our popup when this happens
      const displayPopup = document.createElement('div');
      if (index === 0) {
        displayPopup.classList.add('display-pop-1');
      } else {
        displayPopup.classList.add('display-pop-2');
      }
      displayPopup.innerHTML = generatePopup();

      // append the popup to a specific project button
      btn.parentElement.appendChild(displayPopup);
      btn.parentElement.style.position = 'relative';

      // add an event listener to the rendered close icon
      document.querySelector('.cross-btn').addEventListener('click', () => {
        btn.parentElement.removeChild(displayPopup);
        overlay.classList.toggle('active');
      });
    });
  });
});

// form validation

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function formValidation(event) {
  const emailAddress = this.querySelector('#mail').value;
  const errorMessage = this.querySelector('.error-message');
  const condition = emailAddress.length > 0 ? emailAddress.toLowerCase() === emailAddress : false;
  if (!condition) {
    event.preventDefault();
    errorMessage.textContent = 'Email address must not have upperCase characters!';
  }
});

// Preserving form data
const getLocalStorageData = localStorage.getItem('formData');

if (getLocalStorageData !== null) {
  document.querySelector('input[type="text"]').value = JSON.parse(getLocalStorageData).name;
  document.querySelector('input[type="email"]').value = JSON.parse(getLocalStorageData).email;
  document.querySelector('textarea.inputs').value = JSON.parse(getLocalStorageData).message;
}

const obj = JSON.parse(getLocalStorageData);
const contactFormObject = {
  name: obj ? obj.name : '',
  email: obj ? obj.email : '',
  message: obj ? obj.message : '',
};

form.addEventListener('input', (e) => {
  const targetElement = e.target;

  if (targetElement.getAttribute('type') === 'text') {
    contactFormObject.name = targetElement.value;
  } else if (targetElement.getAttribute('type') === 'email') {
    contactFormObject.email = targetElement.value;
  } else {
    contactFormObject.message = e.target.value;
  }

  localStorage.setItem('formData', JSON.stringify(contactFormObject));
});
