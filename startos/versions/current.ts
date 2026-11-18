import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#pow:0.5.0:11',
  releaseNotes: {
    en_US: `Fixes from independent reviews of the gateway changes.

- A rig no longer gets the same work twice when a quickdiff arrives for a job it hasn't been sent yet. Before, the quickdiff sent a copy of that job at once and the regular send repeated it, so the rig's shares came back as duplicates. Now only the new difficulty is sent, and the job arrives once.
- A share the gateway keeps from the pool (below the pool's minimum) is now answered as the pool would answer it when its job can't be submitted: stale for an anti-withholding assignment already disclosed, refused for a job with no assignment. Before, such shares were accepted, so a rig's measured hashrate counted work the pool would not take.
- A block the gateway can recognise in a quickdiff share for an earlier job is now submitted before the share is refused. Before, such a share was refused first.
- A quickdiff share for another job is answered and recorded as unknown work, rather than as a hashing error that reads like a hardware fault.`
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
    other: {
        ['*']: {
            up: async ({ effects }) => {},
        }
    }
  },
})
