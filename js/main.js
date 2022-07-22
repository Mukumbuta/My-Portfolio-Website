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

      <button type="button" class="multi-post-btn">See Project</button>
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
}"
          >
            ${project.button}
          </button>
       </article>
      `,
    )
    .join('')}
  </div>`;

// render the entire html when the page has loaded
window.addEventListener('load', () => {
  const portfolioSection = `
    <section id="portfolio" class="my-projects">
      <div class="recent-cont">
        <h1 class="my-projects-title">My Recent Works</h1>
        <hr class="recent-break" />
      </div>
        ${multiPost}
        ${projects}
    </section>`;

  const entireProjectsContainer = document.createElement('div');
  entireProjectsContainer.classList.add('entire-projects-cont');
  entireProjectsContainer.innerHTML = portfolioSection;

  // insert entire project container in the right place inside the body
  const { body } = document;
  body.insertBefore(entireProjectsContainer, body.children[2]);
});

// Display Modal PopUp
// Modal data
const modalData = [
  {
    name: 'Multi-Post Stories',
    technologies: ['css', 'html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Profesional Art Printing Data',
    technologies: ['html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Data Dashboard Healthcare',
    technologies: ['html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Profesional Art Printing Data',
    technologies: ['html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Data Dashboard Healthcare',
    technologies: ['html', 'Booststrap', 'Ruby'],
    image: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
  {
    name: 'Website Protfolio',
    technologies: ['html', 'Booststrap', 'Ruby'],
    img: {
      imageSrc: 'images/project_img.png',
    },
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    Link: 'https://Mukumbuta.github.io/My-Porfolio-Website/',
    projectRepo: 'https://github.com/Mukumbuta/My-Porfolio-Website',
  },
];


const body = document.querySelector('body');
const modalContainer = document.createElement('div');
const secondModalContainer = document.createElement('div');

