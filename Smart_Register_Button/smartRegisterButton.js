// -- Register Button Functionality -- //
const registerBtn = document.querySelector("#register-button");
const referrer = document.referrer;
registerBtn.addEventListener("click", function(){
  // check if there is no referrer
  if (!referrer) return window.location.replace("/");
  // check if user came from within website
  if (referrer.indexOf("WEBSITE_ROOT") > -1) return window.location.replace(referrer)
  // send user to homepage if they navigated to current page from outside website
  return window.location.replace("/");
});
