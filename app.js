function burger() {
  console.log("Clicked");
  let menu = document.getElementById("menu-items");
  console.log(menu);
  if (menu.style.visibility == "hidden") {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
}
