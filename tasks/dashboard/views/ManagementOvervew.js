const blessed = require("blessed");
const {cyan, green} = require("chalk");
const {shortenAddress} = require("../../utils/shortenAddress");

function ManagementOvervew(contracts, data) {
  const box = blessed.box({
    // parent: parent,
    keys: true,
    fg: "white",
    selectedFg: "white",
    selectedBg: "blue",
    interactive: false,
    // label: "Draw and Prize Distribution",
    width: "shrink",
    height: "shrink",
    // border: { type: "line", fg: "cyan" },
    content: 
`${green('Create and Save Draws')}:
DrawBeacon (${cyan(shortenAddress(data.contracts.DrawBeacon))}) pushes draws onto DrawHistory (${cyan(shortenAddress(data.contracts.DrawHistory))}) after startDraw and completeDraw steps have been executed.

${green('Calculate Draw and PrizeDistribution')}:
The manager (${cyan(shortenAddress(data.manager))}) will read from the ${green('DrawHistory')} (${cyan(shortenAddress(data.contracts.DrawHistory))}) and add the latest ${green('Draw')} to a "timelocked" status and PUSH the ${cyan('PrizeDisribution')} parameters to the PrizeDistributionHistory (${cyan(shortenAddress(data.contracts.PrizeDistributionHistory))}) via the ${green('L1TimelockManager')} (${cyan(shortenAddress(data.contracts.L1TimelockManager))}).

${green('Distribution Prizes')}:
The Reserve (${cyan(shortenAddress(data.contracts.Reserve))}) will measure the captured interest from the ${green('PrizePool')} (${cyan(shortenAddress(data.contracts.PrizePool))}) and distribute funds to the ${green('DrawPrize')} (${cyan(shortenAddress(data.contracts.DrawPrize))}) for users to claim.`,
  });

  return box;
}

module.exports = {
  ManagementOvervew,
};
