const searchContainer = document.querySelector(".search__results");
const fbi = async function() {
    try {
        const respond = await fetch("https://api.fbi.gov/wanted/v1/list");
        const data = await respond.json();
        console.log(data);
        const html = `
        <ul class="preview">
        ${data.items.map((f)=>{
            return ` <li>
            <a href="#" class="preview__link preview__link--active">
              <figure>
                <img src="${f.images[0].large}" alt="fugitive" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${f.title}</h4>
                <p class="preview__crime">${f.subjects[0]}</p>
              </div>
            </a>
          </li>`;
        }).join("")}
         
        </ul>
     `;
        searchContainer.insertAdjacentHTML("beforeend", html);
    } catch (err) {
        console.log(err);
    }
};
fbi();

//# sourceMappingURL=index.b2cba414.js.map
