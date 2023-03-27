const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
];
const row = document.querySelector(".row");

function drawCard(icon) {
  let rowHtml = "";
  icon.forEach(function (icons) {
    let cardTpl = `<div class=" col-lg-3 col-sm-12 col-md-4">
    <div class="card m-2  d-flex justify-content-center ">
       
            <i class="fa-${icons.name} fa-${icons.family}" style="color:${icons.color}"></i>
            <h4>${icons.name}</h4>
    </div>
</div>
    `;
    rowHtml += cardTpl;
  });
  row.innerHTML = rowHtml;
}
drawCard(icons);

const filterICon = [];
selectMenu.addEventListener("change", selectOption);

function selectOption() {
  const selectMenu = document.getElementById("selectMenu").value;

  const filterICon = icons.filter(
    (icon) => icon.type == selectMenu || selectMenu == "all"
  );

  drawCard(filterICon);
}
