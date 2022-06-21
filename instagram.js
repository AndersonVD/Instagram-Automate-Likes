function avancar() {
  document.getElementsByClassName(" _aaqg _aaqh")[0].children[0].click();
  sleep(1000);
  //   auto_likes();
}
function clique() {
  document
    .getElementsByClassName("_aamu _aat0")[0]
    .firstElementChild.firstElementChild.click();
  console.log("😍");
}
// is_like = 1;
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
function auto_likes() {
  is_like =
    document.getElementsByClassName("_aamu _aat0")[0].firstElementChild
      .firstElementChild.childElementCount;
  if (is_like == 2) {
    clique();
  }
  avancar();
  console.log("avancou");
}
// function inicio() {
//   for (var i = 0; i < 3; i++) {
//     auto_likes();
//   }
// }
