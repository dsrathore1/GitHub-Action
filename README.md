
<h1 align="center"><strong>GitHub Actions 🎬</strong></h1>

```
GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, 
and deployment pipeline. You can create workflows that build and test every pull  request to your repository, or 
deploy merged pull requests to production.
```

</br>
</br>

<h2 align="center">How Workflow works ‼</h2>

> **Note** : Always create .github/workflows on first page of Repo.

GitHub Actions uses YAML syntax to define the workflow. Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

### There are 5 main steps of GitHub Actions
- Events
- Jobs
- Runners
- Steps
- Actions

### SIMPLE EXAMPLE :- 
This is an a simple and best example of GitHub Actions to understand an concept although to use of **CI/CD Pipelines** in better way. This shows how **YAML CODE** exactly works. I think this is an better alternative of **JENKINS** for beginner, and at the end this is easy to learn tool too.
```YAML
name: GitHub Actions # --> This is for file name
run-name: Action is going ON # --> This command is for Title of running actions
on: [push] # --> As name suggest this is most important command to push the code  

jobs:
  build:
    runs-on: ubuntu-latest # --> Virtual Machine
    defaults: # --> These all commands will execute first
      run:
        working-directory: ./app # --> Change the  directory
    steps:
      - uses: actions/checkout@v3
        with:
        
      - name: Run a sample github actions
        run: | 
            echo "This workflow runs successfully"
            echo " Runs all the commands in single command because this will not takes time to execute"
```
<h1 align="center">🙏JAY SHREE KRISHNA 🙏</h1>
