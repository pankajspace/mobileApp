Setup instructions:
1. Install nodejs version (12.18.3 LTS) or higher from https://nodejs.org/en/
2. Install Expo cli using command: npm install expo-cli --global 
3. Install git: https://git-scm.com/downloads
4. Clone the git repository: https://github.com/pankajspace/mobileApp.git
5. We will use Gitflow Workflow for managing releases. https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
6. We will create a separate branch per developer. develop branch will act as integration branch
7. Run command: git checkout {your name}. Then run npm install. Start coding!!!
8. Inside the repository run command: expo start (Refer https://expo.io/learn for more details)
9. Install the Expo app from google play store



List of Git commands in sequence:
1. git status: gives current status of your repo
2. See above status to make sure you to your branch before starting to code
3. git checkout { your branch name}: to go to your branch. Make changes in your branch only
5. git stash: Save your changes locally
6. git checkout develop: go to develop branch
7. git pull: to get remote changes of develop branch on to your local branch
8. git checkout {your branch name}: To go to your branch
9. git merge develop: To merge develop branch changes in your branch
10. git stash pop: bring out your locally saved changes on branch. If any conflicts occur after this command then resolve conflicts
11. git add .
12. git commit -m "commit message"
13. git push: To push your changes to remote repository on git
14. Goto github web interface to create the pull request



Useful links:
1. https://reactjs.org/docs/getting-started.html
2. https://reactnative.dev/docs/getting-started
3. https://docs.expo.io/tutorial/planning/?redirected
4. https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
5. https://snack.expo.io/
