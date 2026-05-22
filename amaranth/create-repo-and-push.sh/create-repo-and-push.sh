#!/usr/bin/env bash
# /create-repo-and-push.sh
# 简单脚本：在项目根初始化 git 并 push 到 GitHub
# 用法: ./create-repo-and-push.sh GITHUB_USER REPO_NAME

set -e

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 GITHUB_USER REPO_NAME"
  exit 1
fi

GITHUB_USER="$1"
REPO_NAME="$2"
REMOTE_HTTPS="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

# 如果 gh 可用，优先用 gh 直接在 GitHub 创建仓库并推送
if command -v gh >/dev/null 2>&1; then
  echo "Using gh to create repo and push..."
  gh auth status >/dev/null 2>&1 || gh auth login
  gh repo create "${GITHUB_USER}/${REPO_NAME}" --public --source=. --remote=origin --push
  echo "Done. Repo created and pushed via gh."
  exit 0
fi

# 否则使用标准 git 操作
echo "Initializing git repo locally..."
git init
git add .
git commit -m "Initial commit" || true
git branch -M main
# 添加远程（请确保仓库已在 GitHub 上创建）
git remote add origin "${REMOTE_HTTPS}" || git remote set-url origin "${REMOTE_HTTPS}"
echo "Pushing to origin/main..."
git push -u origin main

echo "Done. If push failed, ensure the GitHub repo exists or use gh to create it."
