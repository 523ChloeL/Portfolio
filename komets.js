
//for the email subscription in the footer
function clearName() {
if (document.getElementById('emailField').value == 'Email Address'){
  document.getElementById('emailField').value = '';
}
}
//bring back the default text if name field is empty
function resetName() {
  if (document.getElementById('emailField').value == ''){
    document.getElementById('emailField').value = 'Email Address';
  }
}
