const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Middle Banner Img
const midBannerImg = document.getElementById('middle-img');
midBannerImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

/* ================= NAVBAR =============== */

const navLink1 = document.querySelectorAll('a')[0];
navLink1.textContent = siteContent["nav"]["nav-item-1"];

const navLink2 = document.querySelectorAll('a')[1];
navLink2.textContent = siteContent["nav"]["nav-item-2"];

const navLink3 = document.querySelectorAll('a')[2];
navLink3.textContent = siteContent["nav"]["nav-item-3"];

const navLink4 = document.querySelectorAll('a')[3];
navLink4.textContent = siteContent["nav"]["nav-item-4"];

const navLink5 = document.querySelectorAll('a')[4];
navLink5.textContent = siteContent["nav"]["nav-item-5"];

const navLink6 = document.querySelectorAll('a')[5];
navLink6.textContent = siteContent["nav"]["nav-item-6"];

/* ================== Call To Action ================= */

// Call To Action Img
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaHeading1 = document.querySelector('h1');
ctaHeading1.textContent = siteContent["cta"]["h1"];

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent["cta"]["button"];


/* ================ Main Content ================ */

const mainFeatureHeading = document.querySelectorAll('h4')[0];
mainFeatureHeading.textContent = siteContent["main-content"]["features-h4"];

const mainFeatureContent = document.querySelectorAll('p')[0];
mainFeatureContent.textContent = siteContent["main-content"]["features-content"];

const mainAboutHeading = document.querySelectorAll('h4')[1];
mainAboutHeading.textContent = siteContent["main-content"]["about-h4"];

const mainAboutContent = document.querySelectorAll('p')[1];
mainAboutContent.textContent = siteContent["main-content"]["about-content"];

const mainServicesHeading = document.querySelectorAll('h4')[2];
mainServicesHeading.textContent = siteContent["main-content"]["services-h4"];

const mainServicesContent = document.querySelectorAll('p')[2];
mainServicesContent.textContent = siteContent["main-content"]["services-content"];

const mainProductHeading = document.querySelectorAll('h4')[3];
mainProductHeading.textContent = siteContent["main-content"]["product-h4"];

const mainProductContent = document.querySelectorAll('p')[3];
mainProductContent.textContent = siteContent["main-content"]["product-content"];

const mainVisionHeading = document.querySelectorAll('h4')[4];
mainVisionHeading.textContent = siteContent["main-content"]["vision-h4"];

const mainVisionContent = document.querySelectorAll('p')[4];
mainVisionContent.textContent = siteContent["main-content"]["vision-content"];


/* ================ Contact =================== */

const contactHeading = document.querySelectorAll('h4')[5];
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll('p')[5];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelectorAll('p')[6];
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelectorAll('p')[7];
contactEmail.textContent = siteContent["contact"]["email"];

/* =============== Footer ================= */

const footerCopyright = document.querySelectorAll('p')[8];
footerCopyright.textContent = siteContent["footer"]["copyright"];

/* ============== Add New Content ================= */

const navBar = document.querySelector('nav');

const newNavSections = ['Blog',  'Careers'];

newNavSections.forEach(newSection => {
  const elem = document.createElement('a');
  elem.textContent = newSection;
  navBar.append(elem);
});

const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => anchor.style.color = 'green');