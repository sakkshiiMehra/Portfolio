let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // -----------message section js-----------------------------

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxKdxlP3E1_6oAVFXCVWLLsaHJIWzRxvvO5Neb8Nn8ptN_ElR8s-6snEBwQvT3clsi1Aw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully."
                setTimeout(function(){
                    msg.innerHTML = " "
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
        // ----------js for phonescreen--------------

        var sidemenu = document.getElementById("sidemenu");

        function closeMenu(){
            sidemenu.style.right = "-200px";
        }
        function openMenu(){
            sidemenu.style.right = "0";
        }
        // --------------header-text-------------

        var typed = new Typed(".auto-type",{
            strings: ["Frontend Developer", "Full-Stack UI Developer", "MERN Stack Developer"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });
