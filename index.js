function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var url = window.location.href;
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  var value = decodeURIComponent(results[2].replace(/\+/g, " "));

  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1);
  }

  return value;
}

function insertText() {
  let date = getParameterByName("date")
  let text = getParameterByName("alert")
  let watchText = document.querySelector(".watch-alert")
  let watchDate = document.querySelector(".watch-date")
  watchText.innerHTML = text
  console.log(watchText.innerHTML)
  watchDate.innerHTML = date
}

insertText()