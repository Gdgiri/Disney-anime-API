// ? Create Element

function element(tagname, classlist, idname, content) {
  let ele = document.createElement(tagname);
  // ele.className=classname;
  ele.classList = classlist;
  ele.id = idname;
  ele.innerHTML = content;

  return ele;
}
// ? create container

let conta = element("div", "container", "", "");
let head = element("h1", "text-center", "title", "Disney Comics");
let row = element("div", "row", "", "");

let data = fetch("https://api.disneyapi.dev/character");
data
  .then((e) => e.json())
  .then((res) => {
    console.log(res);

    for (let key of res.data) {
      console.log(key);

      let col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = ` <div class="card h-100 " >
    <div class="card-header ">
    <h5 class="card-title text-center ">${key.films}</h5>
    </div>
    <div class = "img-box">
    <img src="${key.imageUrl}" alt="country-img" class="card-img-top" >
    </div>
    <div class="card-body text-center">
    
    <p>Name :${key.name} </p>
    <p>Created At:${key.createdAt} </p>
    <p>Updated At:${key.updatedAt} </p>
    <p>More Details:${key.url} </p>  
    
   
    </div>
    </div>`;
      row.append(col);
    }
  })
  .catch((error) => {
    console.log(error);
  });

conta.append(row);
document.body.append(conta, head);
