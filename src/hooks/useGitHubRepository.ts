import { useEffect, useState } from 'react'
import { getGitHubCommits, getGitHubRepository } from '../services/github'

import type { GitHubCommit, GitHubRepository } from '../types/github'

type GitHubState = {
  repository: GitHubRepository | null
  commits: GitHubCommit[]
  isLoading: boolean
  error: string | null
}

export function useGitHubRepository() {
  const [state, setState] = useState<GitHubState>({
    repository: null,
    commits: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    async function loadGitHubData() {
      try {
        const [repository, commits] = await Promise.all([
          getGitHubRepository(),
          getGitHubCommits(),
        ])

        setState({
          repository,
          commits,
          isLoading: false,
          error: null,
        })
      } catch {
        setState({
          repository: null,
          commits: [],
          isLoading: false,
          error: 'Não foi possível carregar os dados do GitHub.',
        })
      }
    }

    loadGitHubData()
  }, [])

  return state
}
