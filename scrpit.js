  let scrollY = 0;
        let targetY = 0;
        let easeFactor = 0.1; // Adjust smoothness (lower = smoother)

        function smoothScroll() {
            targetY = window.scrollY || window.pageYOffset;
            scrollY += (targetY - scrollY) * easeFactor;

            // Apply smooth movement to elements with data-speed
            document.querySelectorAll("[data-speed]").forEach(element => {
                let speed = parseFloat(element.getAttribute("data-speed"));
                gsap.to(element, { y: -scrollY * speed, ease: "power1.out", duration: 0.5 });
            });

            requestAnimationFrame(smoothScroll);
        }

        // Start animation loop
        smoothScroll();
        ///step
        //   function animateText() {
        //     gsap.fromTo(".text", 
        //         { x: "100vw", opacity: 1 }, // Start from right
        //         { 
        //             x: "-100vw", // Move left
        //             opacity: 0, // Fade out
        //             duration: 23,
        //             delay:0.1, 
        //             ease: "power1.inOut",
        //             onComplete: () => {
        //                 gsap.set(".text", { x: "100vw", opacity: 1 }); // Reset position
        //                 animateText(); // Restart animation
        //             }
        //         }
        //     );
        // }

        // animateText();
    gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".frame", 
            { width: "200px", height: "150px", opacity: 0 },
            { 
                width: "100vw",
                height: "100vh",
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".frame",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                }
            }
        );
        