const servicesButtons=document.querySelectorAll('.service__item');
const serviceDetails=document.querySelector('.services__right');

const projectbuttons=document.querySelectorAll('ul li');


 const getService=(category)=>{
     const details =serviceData.find(item=>item.category===category);
     serviceDetails.innerHTML=`
     <h3>${details.title}</h3>
     ${details.description.map(paragraph=>"<p>" + paragraph + "</p>").join('')}
     
     `
 }

 const removeActiveClass=()=>{
    servicesButtons.forEach(button=>{
        button.classList.remove('active');
    })
 }
servicesButtons.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActiveClass();
        const serviceClass=item.classList[1];
        getService(serviceClass);
        item.classList.add('active');
    })
})

getService('programming');


/*mixitup    project section*/

const containerE1=document.querySelector('.projects__container');
var mixer = mixitup(containerE1,{
    animation:{
        enable:false
    }
});

mixer.filter('*');



const removeClass=()=>{
    projectbuttons.forEach(button=>{
        button.classList.remove('actives');
    })
 }
projectbuttons.forEach(item=>{
    item.addEventListener('click',()=>{
        removeClass();
        item.classList.add('actives');
    })
})


/*certifications sector*/

const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:30 ,
    pagination:{
      el:".swiper-pagination",
      clickable:true
    },

    breakpoints:{
        600:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });
  

  /*nav toggle*/

  const navMenu=document.querySelector('.nav__menu')
  const navOpenBtn=document.querySelector('.nav__toggle-open')
  const navCloseBtn=document.querySelector('.nav__toggle-close')

  const openNavHandler=()=>{
    navMenu.style.display='flex';
    navOpenBtn.style.display='none';
    navCloseBtn.style.display='inline-block';
  }

  const closeNavHandler=()=>{
    navMenu.style.display='none';
    navOpenBtn.style.display='inline-block';
    navCloseBtn.style.display='none';
  }

  navOpenBtn.addEventListener('click',openNavHandler)

  navCloseBtn.addEventListener('click',closeNavHandler);

  const navItems = navMenu.querySelectorAll('a');

  if(window.innerWidth<768){
       navItems.forEach(item=>{
        item.addEventListener('click',closeNavHandler);
       })
  }



  /*themecustomisation*/

  const lightbutton=document.querySelector('.lightbg');
   const bodyelement=document.querySelector('body');
   const darkbutton=document.querySelector('.darkbg');

  document.addEventListener('DOMContentLoaded',()=>{
    const lighthandler=()=>{
        bodyelement.classList.remove('dark');
     }
   
     const darkhandler=()=>{
       bodyelement.classList.add('dark');
     }
     lightbutton.addEventListener('click',lighthandler);
   
     darkbutton.addEventListener('click',darkhandler);
  })

  const themebtn=document.querySelector('.nav__theme');
  const themediv=document.querySelector('.themediv');


  
//   themebtn.addEventListener('click',()=>{
//     themediv.classList.toggle('themedivactive');
//   });

 const removecolors=()=>{
        for(let i=1;i<=10;i++)
        {
            bodyelement.classList.remove(`c${i}`);
        }
 }
  for(let i=1;i<=10;i++)
  { 
     let colorbtn=document.querySelector(`.color${i}`);

     colorbtn.addEventListener('click',()=>{
           removecolors();
           bodyelement.classList.add(`c${i}`);
     })
    
  }

  const themecustomisation=document.querySelector('.themecustomisation');

  themebtn.addEventListener('click',()=>{
     themecustomisation.classList.add('themecustom');
  })

  const savebtn=document.querySelector('.save');

  savebtn.addEventListener('click',()=>{
     themecustomisation.classList.remove('themecustom');
  })