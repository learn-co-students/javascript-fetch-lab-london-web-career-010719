//==== Set Global State & Variables ====//
const baseURL = 'https://api.github.com'
const token = '3f9eafa5bb7133b6a8edc52070f124ed9e5d1a3d'

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  console.log("Inside createIssue function")
}

function showResults(fork) {
  if (fork.fork){
    document.querySelector('#results').innerHTML = `
    <h3>Forked Successfully!</h3>
    <a href="${fork.forks_url}">Go To Fork</a>`
  } else {
    document.querySelector('#results').innerText = "Something went wrong and could not fork"
  }
}

function forkRepo() {
  const url = `${baseURL}/repos/cacamacho91/javascript-fetch-lab/forks`
  const options = { 
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  return fetch(url, options)
    .then(resp => resp.json())
    .then(fork => showResults(fork))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '3f9eafa5bb7133b6a8edc52070f124ed9e5d1a3d'
}
