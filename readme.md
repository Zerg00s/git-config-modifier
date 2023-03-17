# Git Config Updater Web App

## 👉 [Open config modifier](https://zerg00s.github.io/git-config-modifier/)

A user-friendly web application that allows users to easily update their git config contents with their GitHub username and Personal Access Token (PAT). Using PATs is a more secure and flexible way to authenticate with GitHub compared to using your password. The app stores and retrieves the user's GitHub username and PAT in cookies, enabling a seamless experience on return visits. The clean, modern design ensures an enjoyable user experience while managing git configurations

![](Screenshot.png)

## Why use Personal Access Tokens (PAT) instead of GitHub credentials?
Personal Access Tokens (PATs) are an alternative to using your GitHub password for authentication when using the GitHub API or other integrations. There are several advantages to using PATs over your GitHub password:
1. Security: PATs allow you to grant limited and specific access to your GitHub account, reducing the risk of unauthorized access to your account. If a PAT is compromised, you can easily revoke it without affecting your other integrations.
1. Control: You can generate multiple PATs with different scopes (permissions) for different applications, giving you fine-grained control over what each integration can access in your GitHub account.
1. Flexibility: You can create, modify, and revoke PATs at any time from your GitHub account settings, making it easy to manage access to your account across various integrations.
1. Two-Factor Authentication (2FA) compatibility: If you have 2FA enabled on your GitHub account, you cannot use your GitHub password for API authentication. Instead, you'll need to use a PAT, which is compatible with 2FA.

For these reasons, using a PAT is a more secure and flexible way to authenticate with GitHub.

## Features

- Input fields for GitHub username, PAT, and git config contents
- Automatically updates the git config URL with the provided username and PAT
- Stores and retrieves the GitHub username and PAT using cookies for convenience

## Usage
1. [Open config modifier](https://zerg00s.github.io/git-config-modifier/)
1. Enter your GitHub username, PAT, and current git config contents.
1. Click the "Update git config" button to generate updated git config contents.
1. Copy the updated git config contents and save them back to the original config file. 