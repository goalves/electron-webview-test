const munjal = document.getElementById('munjal')
const gabriel = document.getElementById('gabriel')
const webview = document.querySelector('webview');

munjal.addEventListener("click", () => {
  clearCoookies();
  logoutUser();
  loginUser("username1", "password");
})

gabriel.addEventListener("click", () => {
  clearCoookies();
  logoutUser();
  loginUser("username2", "password2");
})

function clearCoookies() {
  let session = webview.getWebContents().session;
  session.clearStorageData([], function(data) { console.log(data); })
}

function logoutUser() {
  webview.executeJavaScript(
      'document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://calendar.google.com/";');
}

function loginUser(email, password) {
  setTimeout(function() {
    webview.executeJavaScript(
        'document.querySelector(\'input[type=email]\').value ="' + email + '"' +
        ';');
    webview.executeJavaScript('document.getElementById(\'next\').click();');
    webview.executeJavaScript(
        'document.querySelector(\'input[type=password]\').value ="' + password +
        '"' +
        ';');
    setTimeout(function() {
      webview.executeJavaScript(
          'document.querySelector(\'input[type=submit]\').click();');
    }, 500);
  }, 2000)
}
