//window.scrollY - właściwość o którą skrolowaliśmy naszą stronę
    //document.documentElement.offsetHeight - wysokość naszej całej strony
    //window.innerHeight - wysokość okna przeglądarki

    const bar = document.querySelector(".status");
    

      const statusBar = () => {  
      // Declaration // 
      let scrollY = window.scrollY
      let OffsetHeight = document.documentElement.offsetHeight
      let InnerHeight = window.innerHeight
      let XY = OffsetHeight -InnerHeight
      // Initilization // 
      currentScroll = Math.round(scrollY / XY * 100);
      bar.style.width = currentScroll + "%";

      //console.log(currentScroll);
    }

    window.addEventListener("scroll", statusBar);