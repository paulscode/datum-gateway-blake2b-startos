> **PaulsCode build: Datum Gateway (BLAKE2b).** A drop-in replacement for the #pow package (horizon-btc/datum-gateway-startos, distributed by mempool.guide), with the gateway
> built from [paulscode/datum_gateway](https://github.com/paulscode/datum_gateway/tree/blake2b-full-payout-7). It adds:
> serving miners below the pool's minimum difficulty (on by default; work stays committed at the pool's
> minimum, so pool credit is unchanged), difficulty requests in the Stratum password (on by default),
> vardiff that measures at the difficulty it serves, closing TLS probes at once, and a
> `datum.capabilities` request for tools such as Pickhash. Both settings are under
> Actions → Stratum Server Settings. Published in the [PaulsCode registry](https://start9.paulscode.com).

<p align="center">
  <img src="icon.svg" alt="Datum Gateway Logo" width="21%">
</p>

# Datum Gateway on StartOS

[DATUM Gateway](https://github.com/CONVOYMining/datum_gateway) lets ASIC miners build their own block templates against a local Bitcoin node, mining solo or through a DATUM-supporting pool. This package wires it to your node, publishes the stratum endpoint for your miners, and asks the node to notify it on every new block.

- **Upstream repo:** <https://github.com/CONVOYMining/datum_gateway>
- **Wrapper repo:** <https://github.com/horizon-btc/datum-gateway-startos>