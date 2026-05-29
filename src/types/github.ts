export type GitHubRepository = {
  name: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  pushed_at: string
  language: string | null
  html_url: string
}

export type GitHubCommit = {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  html_url: string
}
