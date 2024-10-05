# Git Workflow Instructions

1. Create a new branch:
   ```
   git checkout -b featurex
   ```

2. Check for changes on the original fork (Btab):
   ```
   git pull upstream main
   ```

3. Work on your feature or fix

4. Commit the changes:
   ```
   git add .
   git commit -m "what I did"
   ```

5. Push the feature branch to your fork on GitHub:
   ```
   git push origin featurex
   ```

6. Make a pull request on GitHub or using the 'gh' terminal

7. If the changes are accepted, they will be merged to Btab main branch

8. After your changes are merged, switch back to your local main branch:
   ```
   git checkout main
   ```

9. Pull the latest changes from the upstream repository:
   ```
   git pull upstream main
   ```

10. Update your fork on GitHub:
    ```
    git push origin main
    ```

11. Delete your local feature branch (optional):
    ```
    git branch -d featurex
    ```

12. Delete the remote feature branch on your fork (optional):
    ```
    git push origin --delete featurex
    ```

13. Before starting a new feature, always ensure your local main is up to date:
    ```
    git checkout main
    git pull upstream main
    ```

14. Repeat the process from step 1 for your next feature or fix