import type { GitHubCommit, GitHubRepository } from '../types/github'

const GITHUB_USERNAME = 'almyrneto'
const REPOSITORY_NAME = 'fullstack-portfolio'

export async function getGitHubRepository() {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY_NAME}`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repository')
  }

  return response.json() as Promise<GitHubRepository>
}

export async function getGitHubCommits() {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${REPOSITORY_NAME}/commits?per_page=5`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub commits')
  }

  return response.json() as Promise<GitHubCommit[]>
}
