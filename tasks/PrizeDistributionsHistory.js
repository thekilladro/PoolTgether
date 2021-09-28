const chalk = require('chalk')

task("getDrawSetting")
  .addParam("draw", "The draw to check")
  .setAction(async ({draw}, hre) => {
      const { ethers } = hre
    
      const prizeDist = await ethers.getContract('PrizeDistributionHistory')

      const prizeDistributionParams = await prizeDist.getDrawSetting(1)
      console.log(prizeDistributionParams)

      console.log(chalk.green(`Prize Liquidity: ${ethers.utils.formatEther(prizes)}`))
    });

task("getNewestDrawSettings")
  .setAction(async (args, hre) => {
      const { ethers } = hre
      const prizeDist = await ethers.getContract('PrizeDistributionHistory')
      const draw = await prizeDist.getDrawSetting(0)
      console.log(draw)
    });