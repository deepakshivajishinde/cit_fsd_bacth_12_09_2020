function editDetails(_this, id) {
  window.location.assign("/product/update?id=" + id);
}
function removeElement(_this, id) {
  window.location.assign("/product/delete/" + id);
}
