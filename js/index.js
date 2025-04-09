const FlechaSliderDer = document.querySelector(`.Flecha-slider-der`)
const FlechaSliderIzq = document.querySelector(`.Flecha-slider-izq`)
const SliderLi = document.querySelectorAll(`.Slider-li`)
const MainButton = document.querySelectorAll(`.MainButton`)
const Slider = document.querySelector(`.Slider`)
const NavA = document.querySelectorAll(`.Nav-a`)
const CursorVideo = document.querySelector(`.Cursor-video`)
const Hero = document.querySelector(`.Hero`)
const Header = document.querySelector(`.Header`)
const HeaderLogoWrapper = document.querySelector(`.Header-logoWrapper`)
const NavUl = document.querySelector(`.Nav-ul`)
const HeaderMenuWrapper = document.querySelector(`.Header-menuWrapper`)
const MenuRoll = document.querySelector(`.Menu-roll`)
const MenuLine = document.querySelectorAll(`.Menu-line`)
const Menulinetop = document.querySelector(`.Menu-line--top`)
const MenulineBottom = document.querySelector(`.Menu-line--bottom`)
const MenuLineIsActive = document.querySelectorAll(`.MenuLineIsActive`)
const HeaderButton = document.querySelectorAll(`.Header-button`)
const MenuRollLi = document.querySelectorAll(`.Menu-roll-li`)
const MenuRollImgWrapper = document.querySelectorAll(`.Menu-roll-img-Wrapper`)
const WhoDiv = document.querySelectorAll(`.Who-div`)
const ActionCursor = document.querySelector(`.ActionCursor`);
const FooterSpan = document.querySelector(`.Footer-bottom-span`);
let contador = 0


let options = {
    threshold: 0.5
}
const handleInteraction = (entries) => {
    entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
            HeaderLogoWrapper.classList.add('HeadaerIsActive')
            NavUl.classList.add('HeadaerIsActive')
           
        } else {
            HeaderLogoWrapper.classList.remove('HeadaerIsActive')
            NavUl.classList.remove('HeadaerIsActive')
           
        }
    });
};
const observer = new IntersectionObserver( handleInteraction , options )
observer.observe(Hero)

;

// Evento de click para abrir/cerrar el menú
HeaderMenuWrapper.addEventListener('click', () => {
    WhoDiv.forEach((_ , i)=>{
        WhoDiv[i].classList.toggle(`WhoSpanIsvISIBLE`)
    })
    MenuRoll.classList.toggle(`MenuRollIsActive`);

    MenuLine.forEach(line => {
        line.classList.toggle('MenuLineIsActive');
        line.style.backgroundColor = `white`; // Cambia a blanco en click
    });

    HeaderButton.forEach((_ , i) => {
        HeaderButton[i].classList.toggle('HeaderLetterWhite');
    });     

    // Verificamos si el primer elemento tiene la clase para decidir la rotación
    if (MenuLine[0].classList.contains('MenuLineIsActive')) {
        HeaderLogoWrapper.classList.add('HeadaerIsActive')
        NavUl.classList.add('HeadaerIsActive')
        Menulinetop.style.transform = `rotate(45deg)`;
        MenulineBottom.style.transform = `rotate(-45deg)`;
        NavA.forEach((_ , i)=>{
            NavA[i].classList.add('HeaderLetterBlack')
        })
        HeaderLogoWrapper.classList.add('HeaderLetterBlack')
    } else {    
        HeaderLogoWrapper.classList.remove('HeadaerIsActive')
        NavUl.classList.remove('HeadaerIsActive')
        Menulinetop.style.transform = `rotate(0deg)`;
        Menulinetop.style.backgroundColor = `black`;
        MenulineBottom.style.backgroundColor = `black`;
        MenulineBottom.style.transform = `rotate(0deg)`;
        NavA.forEach((_ , i)=>{
            NavA[i].classList.remove('HeaderLetterBlack')
        })
        HeaderLogoWrapper.classList.remove('HeaderLetterBlack')
    }
});

// Evento mouseenter 
HeaderMenuWrapper.addEventListener('mouseenter', () => {
    if (MenuLine[0].classList.contains('MenuLineIsActive')) {
        // Si el menú está activo, deshacemos la rotación
        MenuLine.forEach(line => {
            line.style.transform = `rotate(0deg)`;
        });
    } else {
        // Si el menú NO está activo, cambiamos el color a blanco
        MenuLine.forEach(line => {
            line.style.backgroundColor = `white`; 
        });
    }
});

// Evento mouseleave
HeaderMenuWrapper.addEventListener('mouseleave', () => {
    if (MenuLine[0].classList.contains('MenuLineIsActive')) {
        // Si el menú está activo, volvemos a la rotación
        Menulinetop.style.transform = `rotate(45deg)`;
        MenulineBottom.style.transform = `rotate(-45deg)`;
    } else {
        // Si el menú NO está activo, cambiamos el color a negro
        MenuLine.forEach(line => {
            line.style.backgroundColor = `black`; 
        });
    }
});

MenuRollLi.forEach(( _ , i )=>{
    MenuRollLi[i].addEventListener('mouseenter' , ()=>{

        MenuRollImgWrapper.forEach((_ , i)=>{
            MenuRollImgWrapper[i].classList.remove('MenuImgIsActive')
        })  
        MenuRollImgWrapper[i].classList.add('MenuImgIsActive')
        MenuRollLi[i].classList.add('MenuRolliIsActive')
    })
})
MenuRollLi.forEach(( _ , i )=>{
    MenuRollLi[i].addEventListener('mouseleave' , ()=>{

        MenuRollImgWrapper.forEach((_ , i)=>{
            MenuRollImgWrapper[i].classList.remove('MenuImgIsActive')
        }) 
        MenuRollLi[i].classList.remove('MenuRolliIsActive') 
    })
})



FlechaSliderDer.addEventListener(`click`, () => {
    if (contador < 3) {  // Limita antes de incrementar
        contador++;
    }
    console.log(contador);
    Slider.style.transform = `translateX(-${contador * 16}% )`;
});

FlechaSliderIzq.addEventListener(`click`, () => {
    if (contador > 0) {  // Limita antes de decrementar
        contador--;
    }
    console.log(contador);
    Slider.style.transform = `translateX(-${contador * 16}% )`;
});
SliderLi.forEach((li)=>{
    li.addEventListener(`mouseenter`, ()=>{
      const SliderInfoP = li.querySelector(`.Slider-info-p`)
      const SliderInfoSpan = li.querySelector(`.Slider-info-span`)
      SliderInfoP.classList.add('OpacityIsInactive')
      SliderInfoSpan.classList.add('OpacityIsInactive')
    })
})
SliderLi.forEach((li)=>{
    li.addEventListener(`mouseleave`, ()=>{
      const SliderInfoP = li.querySelector(`.Slider-info-p`)
      const SliderInfoSpan = li.querySelector(`.Slider-info-span`)

      SliderInfoP.classList.remove('OpacityIsInactive')
      SliderInfoSpan.classList.remove('OpacityIsInactive')

    })
})
MainButton.forEach((a) => { 
    a.addEventListener('mouseenter', () => {
        const MainButtonHoverEffect = a.querySelector('.MainButton-HoverEffect');
        const FlechaSliderDerecha = a.querySelector('.Flecha-slider-derecha');

        if (FlechaSliderDerecha) {
            FlechaSliderDerecha.style.transition = "transform .3s ease-in-out";
            FlechaSliderDerecha.classList.add('FlechaIsActive');
        }

        if (MainButtonHoverEffect) { 
            MainButtonHoverEffect.style.transform = "translateX(0)"; 
        }
    });

    a.addEventListener('mouseleave', () => {
        const MainButtonHoverEffect = a.querySelector('.MainButton-HoverEffect');
        const FlechaSliderDerecha = a.querySelector('.Flecha-slider-derecha');

        if (FlechaSliderDerecha) {
            FlechaSliderDerecha.style.transition = "none";
            FlechaSliderDerecha.classList.remove('FlechaIsActive');
        }

        if (MainButtonHoverEffect) { 
            MainButtonHoverEffect.style.transform = "translateX(100%)";

            MainButtonHoverEffect.addEventListener('transitionend', function resetPosition() {
                MainButtonHoverEffect.style.transition = "none";
                MainButtonHoverEffect.style.transform = "translateX(-100%)";

                setTimeout(() => {
                    MainButtonHoverEffect.style.transition = "transform .3s ease-in-out";
                }, 10);

                MainButtonHoverEffect.removeEventListener('transitionend', resetPosition);
            }, { once: true });
        }
    });
});
NavA.forEach((_ , i)=>{
    NavA[i].addEventListener( 'mouseenter' , ()=>{
        NavA.forEach(( _ , i )=>{
            NavA[i].classList.remove('NavAIsActive')
        })
        NavA[i].classList.add('NavAIsActive')
    } )
})
NavA.forEach((_ , i)=>{
    NavA[i].addEventListener( 'mouseleave' , ()=>{
        NavA.forEach(( _ , i )=>{
            NavA[i].classList.add('NavAIsActive')
        })
     } )
})

// Lista de colores disponibles
const colors = ["greenyellow", "deepskyblue", "tomato", "gold"];
let colorIndex = 0;
let isInsideHero = false;
let isInsideFooterSpan = false;

// Inicialmente ocultamos ambos elementos
CursorVideo.style.opacity = "0";
ActionCursor.style.opacity = "0";

CursorVideo.style.transition = "opacity 0.2s ease, background-color 0.3s ease";
ActionCursor.style.transition = "opacity 0.2s ease, background-color 0.3s ease";

window.addEventListener(`mousemove`, (e) => {
    let { clientX, clientY } = e;

    // Obtener posiciones de Hero, Header y Footer-bottom-span
    const heroRect = Hero.getBoundingClientRect();
    const headerRect = Header.getBoundingClientRect();
    const footerSpanRect = FooterSpan.getBoundingClientRect();

    // Verificar si el cursor está dentro de Hero
    const insideHero =
        clientX >= heroRect.left &&
        clientX <= heroRect.right &&
        clientY >= heroRect.top &&
        clientY <= heroRect.bottom;

    // Verificar si el cursor está dentro de Header
    const insideHeader =
        clientX >= headerRect.left &&
        clientX <= headerRect.right &&
        clientY >= headerRect.top &&
        clientY <= headerRect.bottom;

    // Verificar si el cursor está dentro de Footer-bottom-span
    const insideFooterSpan =
        clientX >= footerSpanRect.left &&
        clientX <= footerSpanRect.right &&
        clientY >= footerSpanRect.top &&
        clientY <= footerSpanRect.bottom;

    // Si el cursor está en Header, se considera fuera de Hero
    const shouldShowCursorVideo = insideHero && !insideHeader;

    // Si el cursor está en Footer-bottom-span, mostramos ActionCursor
    const shouldShowActionCursor = insideFooterSpan;

    // Cambiar color cuando entra en Hero por primera vez
    if (shouldShowCursorVideo && !isInsideHero) {
        colorIndex = (colorIndex + 1) % colors.length;
        CursorVideo.style.backgroundColor = colors[colorIndex];
    }

    // Cambiar color cuando entra en Footer-bottom-span por primera vez
    if (shouldShowActionCursor && !isInsideFooterSpan) {
        colorIndex = (colorIndex + 1) % colors.length;
        ActionCursor.style.backgroundColor = colors[colorIndex];
    }

    isInsideHero = shouldShowCursorVideo;
    isInsideFooterSpan = shouldShowActionCursor;

    // Mostrar u ocultar CursorVideo
    CursorVideo.style.opacity = shouldShowCursorVideo ? "1" : "0";

    // Mostrar u ocultar ActionCursor
    ActionCursor.style.opacity = shouldShowActionCursor ? "1" : "0";

    // Mover CursorVideo si está visible
    if (shouldShowCursorVideo) {
        CursorVideo.style.transform = `translate(${clientX}px, ${clientY}px)`;
    }

    // Mover ActionCursor si está visible
    if (shouldShowActionCursor) {
        ActionCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    }
});
