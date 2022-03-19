const searchContainer = document.querySelector(".search__results");
const fbi = async function() {
    try {
        console.log(data);
        const html = `
        <ul class="preview">
        ${data.items.map((f)=>{
            return ` <li>
            <a href="#" class="preview__link">
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

//# sourceMappingURL=index.62406edb.js.map
