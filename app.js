
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
      }
  }
  return '';
}

document.getElementById('update-config').addEventListener('click', function() {
    const githubUsername = document.getElementById('github-username').value;
    const patToken = document.getElementById('pat-token').value;
    const gitConfig = document.getElementById('git-config').value;
  
    const regex = /(https:\/\/)(github.com\/.*\.git)/;
    const updatedUrl = `$1${githubUsername}:${patToken}@$2`;
    const updatedGitConfig = gitConfig.replace(regex, updatedUrl);
  
    document.getElementById('updated-git-config').value = updatedGitConfig;
  
    setCookie("githubUsername", githubUsername, 365);
    setCookie("patToken", patToken, 365);
  });
    
  function load() {
    //Set the div to the data stored and the "show" cookie
    const githubUsername = getCookie('githubUsername');
    const patToken = getCookie('patToken');
    // Set input values
    document.getElementById('github-username').value = githubUsername;
    document.getElementById('pat-token').value = patToken;
  }
  
  
  window.onload = load;