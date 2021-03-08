var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
    console.log("inside", response);
};

console.log("outside");

getUserRepos();