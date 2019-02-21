const forkedRepo = "kkoomin/javascript-fetch-lab"
const issuesDiv = document.querySelector("#issues")
const forkRepoDiv = document.querySelector("#results")


// make another fetch call to get ALL issues from this repo //issues = []
function getIssues() {
  fetch(`https://api.github.com/repos/${forkedRepo}/issues`)
  .then(res => res.json())
  .then(issues => { 
    for (const el of issues) {
      showIssues(el)
    }
  })
}

// get all the issues, render them onto the DOM
function showIssues(json) {
  const li = document.createElement("li")
  li.innerHTML = `<li>Title: <a href="${json.html_url}">${json.title} </a><span> | Body: ${json.body}</span></li>`
  issuesDiv.appendChild(li)
}

// Create a new issue for your forked repository 
function createIssue() {
  const issueTitle = document.querySelector("#title").value
  const issueBody = document.querySelector("#body").value
  fetch(`https://api.github.com/repos/${forkedRepo}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify({title: issueTitle, body: issueBody})
  }).then(resp => getIssues()
  )
}

function showResults(json) {
    forkRepoDiv.innerHTML = `<h3>Forked Successfully!</h3><a href="${json.url}"> ${json.url}</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  })
  .then(res => showResults(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return ''
}

