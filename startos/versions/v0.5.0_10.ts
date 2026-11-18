import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_5_0_10 = VersionInfo.of({
  version: '#pow:0.5.0:10',
  releaseNotes: {
    en_US: `PaulsCode's build of Datum Gateway for BLAKE2b, an update for the #pow package (mempool.guide).

- Rented rigs keep their own difficulty. With "Serve miners below the pool's minimum difficulty" (on by default), each miner gets a difficulty that suits its hashrate even when the pool's minimum is far higher, as CONVOY's is behind a busy gateway. Work is still committed at the pool's minimum and only shares meeting it are sent to the pool, so pool credit is unchanged. Tested live on CONVOY: same pool credit, no "High Worker Difficulty" warnings on MiningRigRentals, and no reconnects every couple of minutes.
- Miners can request a difficulty in the Stratum password (d=N), also on by default. Pickhash uses it to give each rented rig the difficulty MiningRigRentals expects.
- Vardiff measures at the difficulty it actually serves, which stops large overshoots after a step up.
- A connection that opens with a TLS handshake is closed at once, so MiningRigRentals' pool test no longer reports a working endpoint as failing.
- Answers datum.capabilities, so tools such as Pickhash can tell what this gateway supports.

Both new settings are under Actions → Stratum Server Settings.`
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
