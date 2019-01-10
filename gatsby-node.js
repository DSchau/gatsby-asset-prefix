const fs = require('fs-extra')
const path = require('path')

exports.onPostBuild = async function onPostBuild({
  assets,
  assetPath = path.resolve('public'),
}) {
  await Promise.all(
    assets.map(asset =>
      fs.copy(path.join(assetPath, asset), path.join(__dirname, 'assets', asset))
    )
  )
}
