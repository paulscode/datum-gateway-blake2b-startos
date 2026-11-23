import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.5.0:12',
  releaseNotes: {
    en_US: `Stop, updates and restarts can no longer be held up by a status check that never finishes. A check still unanswered after a minute says so, and no longer keeps the service from stopping.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
    other: {
      ['*']: {
        up: async ({ effects }) => {},
      },
    },
  },
})
