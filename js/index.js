const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};





const a1=document.querySelector("header > nav ");
a1.getElementsByTagName("a")[0].textContent=siteContent.nav["nav-item-1"];
a1.getElementsByTagName("a")[0].style.color="#33cc99";
console.log(a1);


const a2=document.querySelector("header > nav ");
a2.getElementsByTagName("a")[1].textContent=siteContent.nav["nav-item-2"];
a1.getElementsByTagName("a")[1].style.color="#33cc99";
console.log(a2);

const a3=document.querySelector("header > nav ");
a3.getElementsByTagName("a")[2].textContent=siteContent.nav["nav-item-3"];
a1.getElementsByTagName("a")[2].style.color="#33cc99";
console.log(a3);


const a4=document.querySelector("header > nav ");
a4.getElementsByTagName("a")[3].textContent=siteContent.nav["nav-item-4"];
a1.getElementsByTagName("a")[3].style.color="#33cc99";
console.log(a4);

const a5=document.querySelector("header > nav ");
a5.getElementsByTagName("a")[4].textContent=siteContent.nav["nav-item-5"];
a1.getElementsByTagName("a")[4].style.color="#33cc99";
console.log(a5);


const a6=document.querySelector("header > nav ");
a6.getElementsByTagName("a")[5].textContent=siteContent.nav["nav-item-6"];
a1.getElementsByTagName("a")[5].style.color="#33cc99";
console.log(a6);
const nav =document.querySelector("nav");
const a7=document.createElement('a');
a7.textContent="Other";
a7.style.color="#33cc99";
nav.appendChild(a7);

const a8=document.createElement('a');
a8.textContent="Last";
a8.style.color="#33cc99";
nav.appendChild(a8);

document.getElementById("logo-img").src=siteContent.nav["img-src"];
  document.querySelector("div > h1").textContent=siteContent.cta.h1;
  document.querySelector("div > button").textContent=siteContent.cta.button;
  document.getElementById("cta-img").src=siteContent.cta["img-src"];

 const list = document.getElementsByClassName("text-content")[0];
  list.querySelector("h4").textContent=siteContent["main-content"]["features-h4"];
  const list1 = document.getElementsByClassName("text-content")[0];
  list1.querySelector("p").textContent=siteContent["main-content"]["features-content"];
  
  const list3 = document.getElementsByClassName("text-content")[1];
  list3.querySelector("h4").textContent=siteContent["main-content"]["about-h4"];
  const list4 = document.getElementsByClassName("text-content")[1];
  list4.querySelector("p").textContent=siteContent["main-content"]["about-content"];


  document.getElementById("middle-img").src=siteContent["main-content"]["middle-img-src"];

  const list5 = document.getElementsByClassName("text-content")[2];
  list5.querySelector("h4").textContent=siteContent["main-content"]["services-h4"];
  const list6 = document.getElementsByClassName("text-content")[2];
  list6.querySelector("p").textContent=siteContent["main-content"]["services-content"];


  const list7 = document.getElementsByClassName("text-content")[3];
  list7.querySelector("h4").textContent=siteContent["main-content"]["product-h4"]
  const list8 = document.getElementsByClassName("text-content")[3];
  list8.querySelector("p").textContent=siteContent["main-content"]["product-content"]

  const list9 = document.getElementsByClassName("text-content")[4];
  list9.querySelector("h4").textContent=siteContent["main-content"]["vision-h4"];
  const list10 = document.getElementsByClassName("text-content")[4];
  list10.querySelector("p").textContent=siteContent["main-content"]["vision-content"];

  



  const list11 = document.getElementsByClassName("contact")[0].querySelector("h4").textContent=siteContent.contact["contact-h4"];

  const list12 = document.getElementsByClassName("contact")[0].querySelectorAll("p")
  list12[0].textContent=siteContent.contact.address;

  const list13 = document.getElementsByClassName("contact")[0].querySelectorAll("p")
  list13[1].textContent=siteContent.contact.phone;

  const list14 = document.getElementsByClassName("contact")[0].querySelectorAll("p")
  list14[2].textContent=siteContent.contact.email;

  const footer=document.querySelector("footer > p ");
footer.textContent=siteContent.footer.copyright;


  
  // const list12 = document.getElementsByClassName("contact")[0];
  // list12.querySelector("p")[0]; = "red";
  //console.log(q);
  //q.textContent=siteContent.contact.address;

  // const list13 = document.getElementsByClassName("contact")[0];
  //  let w =list13.querySelector("p")[1];
  // w.textContent=siteContent.contact.phone;


  // const list14 = document.getElementsByClassName("contact")[0];
  // let r =list14.querySelector("p")[2];
  // r.textContent=siteContent.contact.email;
