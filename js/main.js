// ==========================================
// CARBWEL AUTOPEÇAS
// MAIN.JS
// ==========================================

// LOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 900);

});

// HEADER SCROLL

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// REVEAL

const reveals = document.querySelectorAll(
    ".reveal,.reveal-left,.reveal-right"
);

const revealOnScroll = ()=>{

    const trigger = window.innerHeight * .88;

    reveals.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// CONTADORES

const counters = document.querySelectorAll("[data-target]");

let started = false;

function startCounter(){

    if(started) return;

    const section = document.querySelector(".numbers");

    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        started = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let value = 0;

            const increment = target / 120;

            const update = ()=>{

                value += increment;

                if(value < target){

                    counter.innerText = Math.ceil(value);

                    requestAnimationFrame(update);

                }else{

                    if(target === 5000){

                        counter.innerText = "5.000+";

                    }else if(target === 100){

                        counter.innerText = "100%";

                    }else{

                        counter.innerText = target + "+";

                    }

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);
startCounter();


// HERO PARALLAX

const hero = document.querySelector(".hero");

window.addEventListener("scroll", ()=>{

    const y = window.scrollY;

    hero.style.backgroundPosition = `center ${y * .35}px`;

});


// PARTICLES

const particleContainer = document.getElementById("particles");

function createParticle(){

    const p = document.createElement("span");

    p.className = "particle";

    const size = Math.random() * 5 + 2;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * 100 + "%";

    p.style.bottom = "-20px";

    p.style.animationDuration = (8 + Math.random()*10)+"s";

    particleContainer.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },18000);

}

setInterval(createParticle,250);


// 3D CARD EFFECT

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2) / 18;
        const rotateX = -(y - rect.height/2) / 18;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


// SMOOTH LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior:"smooth"

            });

        }

    });

});