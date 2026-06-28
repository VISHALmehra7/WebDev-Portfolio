const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const portfolioButtons = document.querySelectorAll(".btn");

portfolioButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    portfolioButtons.forEach((btn) => btn.classList.remove("active-btn"));
    e.target.classList.add("active-btn");
  });
});

const PORTFOLIO_DATA = [
  {
    image: "./CustomerSupport.png",
    liveLink: "https://mern-customer-support-app.onrender.com/login",
    githubLink: "https://github.com/VISHALmehra7/MERN-Customer-Support-App",
    heading: "AI-Powered Customer Support System",
    description:
      "Built a real-time customer support platform using the MERN stack with AI-assisted ticket categorization, chat summarization, and a RAG-based knowledge assistant to enhance support efficiency and user experience.</",
    site: "dynamic",
  },
  {
    image: "./airesume.png",
    liveLink: "https://ai-resume-analyser-l0cm.onrender.com",
    githubLink: "https://github.com/VISHALmehra7/AI-Resume-Analyser",
    heading: "MERN AI Resume Analyser",
    description:
      "Developed a MERN-based AI Resume Analyzer featuring resume parsing, ATS scoring, and skill gap analysis.Implemented Cloudinary integration and AI-powered resume assistance using RAG..</",
    site: "dynamic",
  },
  {
    image: "./Chat_App.png",
    liveLink: "https://mern-chat-app-xgqy.onrender.com/login",
    githubLink: "https://github.com/VISHALmehra7/mern-chat-app",
    heading: "MERN Chat Application",
    description:
      "Built a real-time chat application using the MERN stack with live messaging, user authentication, and state management for a responsive and interactive user experience.</",
    site: "dynamic",
  },
  
  {
    image: "./Blog_Website.jpg",
    liveLink: "",
    githubLink: "https://github.com/VISHALmehra7/Mern-Blog-Website",
    heading: "MERN Blog Website",
    description:
      "Developed a full-stack blogging platform with secure authentication, state-managed UI, and CRUD operations for creating, reading, and interacting with blog posts.</",
    site: "dynamic",
  },
  {
    image: "./Authentication.png",
    liveLink: "",
    githubLink: "https://github.com/VISHALmehra7/mern-authentication",
    heading: "MERN Advance Authentication",
    description:
      "Developed a secure authentication system with JWT, email verification, and responsive UI, ensuring safe and seamless user access in MERN applications.</",
    site: "dynamic",
  },
  {
    image: "./Portfolio.jpg",
    liveLink: "",
    githubLink: "https://github.com/VISHALmehra7/Portfolio-Website",
    heading: "Portfolio Web App",
    description:
      "Developed a full-stack portfolio web app with project management, GitHub/live demo links, user exploration, and responsive UI using React.js and Spring Boot.</",
    site: "dynamic",
  },
  {
    image: "./Admin_Dashboard.png",
    liveLink: "https://react-responsive-admin-dashboard-steel.vercel.app/",
    githubLink:
      "https://github.com/VISHALmehra7/React-Responsive-Admin-Dashboard",
    heading: "React Admin Dashboard",
    description:
      "Developed a responsive admin dashboard with interactive charts, reusable UI components, and data visualization for effective management and analytics.</",
    site: "static",
  },
  {
    image: "./Pick_Game.png",
    liveLink: "https://pick-game-beta.vercel.app/",
    githubLink: "https://github.com/VISHALmehra7/Pick-game",
    heading: "Pig Dice Game",
    description:
      "Developed a two-player turn-based dice game with score management, risk-reward mechanics, and interactive UI using JavaScript, HTML, and CSS.</",
    site: "static",
  },
];

const cardButtons = document.querySelectorAll(".btn");
const allButton = document.querySelector("all");
const staticButton = document.querySelector(".static");
const dynamicButton = document.querySelector(".dynamic");

function renderCards(filteredData) {
  const grid = document.querySelector(".portfolio-grid");
  let html = "";
  filteredData.forEach((singleData) => {
    html += ` <div class="portfolio-card">
  <div class="portfolio-image-div">
     <img src="${singleData.image}" alt="">
     <div class="filter"></div>
<div class="logo-div">
  ${
    singleData.liveLink
      ? `<a target="_blank" href="${singleData.liveLink}">
         <img class="logo" src="./eye.png" alt="">
       </a>`
      : ""
  }

  ${
    singleData.githubLink
      ? `<a target="_blank" href="${singleData.githubLink}">
         <img class="logo" src="./github.png" alt="">
       </a>`
      : ""
  }
</div>
  </div>
  <div class="portfolio-desc">
      <h1 class="portfolio-desc-heading">${singleData.heading}</h1>
      <p class="portfolio-desc-para">${singleData.description}</p>
  </div>
</div>`;
  });
  grid.innerHTML = html;
}

function filterCards() {
  renderCards(PORTFOLIO_DATA);
  cardButtons.forEach((singleButton) => {
    singleButton.addEventListener("click", (e) => {
      if (singleButton.classList.contains("all")) {
        return renderCards(PORTFOLIO_DATA);
      } else if (singleButton.classList.contains("static")) {
        const filteredData = PORTFOLIO_DATA.filter(
          (singleItem) => singleItem.site === "static",
        );
        return renderCards(filteredData);
      } else if (singleButton.classList.contains("dynamic")) {
        const filteredData = PORTFOLIO_DATA.filter(
          (singleItem) => singleItem.site === "dynamic",
        );
        return renderCards(filteredData);
      }
    });
  });
}

filterCards();
