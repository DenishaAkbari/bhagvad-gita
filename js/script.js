let sidebar = document.getElementById("sidebar");
let page = document.getElementById("page");
let slok = document.getElementById("slok");
let slokdata = document.getElementById("slokdata")
let tej = document.getElementById("tej")
let siva = document.getElementById("siva")
const display = () =>{
    fetch("https://vedicscriptures.github.io/chapters").then((res) =>{
        return res.json();
    })
    .then((chapter) =>{
        console.log(chapter);
        let chapterNO = 0;
        for (const gita of chapter) {
            chapterNO++;
            console.log(gita);
 
            slok = "";

            for (let i = 1; i < gita.verses_count; i++) {
          
                    slok += `<li style="font-size: 18px; cursor: pointer; margin: 5px;" onclick = "return gitaData(${chapterNO},${i})" > Slok ${i}</li>`  
                    
                }

                let gitaid =`${chapterNO}`;
                
                sidebar.innerHTML += `<li class="list" style="background-color: #ebebeb; padding: 15px; margin: 5px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">  
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${gitaid}" aria-expanded="false" aria-controls="${gitaid}">
                                ${chapterNO}. ${gita.name}
                            </button>
                        </h2>
                        <div id="${gitaid}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">  
                                <ul>${slok}</ul>
                        </div>
                      </div>
                </div>
            </li>`;
        }   
    })
    .catch((err) =>{
        console.log(err);
    })
    
}
display()  

const gitaData = (ch , slokk ) => {
    fetch(`https://vedicscriptures.github.io/slok/${ch}/${slokk}`).then((res) => {
        return res.json()
    }).then((chapter) =>{
        console.log(chapter.slok);
        slokdata.innerHTML = "";
        page.innerHTML = `<h1 style="font-size: 34px; margin: 5px;">Chapter ${ch} - Slok ${slokk}</h1>`;
        slokdata.innerHTML += `<p style="font-size: 30px; margin: 20px;">${chapter.slok}</p>`
        tej.innerHTML = `<p style="font-size: 24px; margin: 5px; ">${chapter.tej.author}</p>`
        siva.innerHTML =    `<p style="font-size: 20px; margin: 5px; ">${chapter.chinmay.hc}</p>`
    })
    .catch((err) =>{
        console.log(err);
    })
}    


