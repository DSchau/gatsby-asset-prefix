const fs = require('fs-extra')
const path = require('path')

exports.onPostBuild = async function onPostBuild({
  assets,
  assetPath = path.resolve('public'),
}) {
  await Promise.all(
    assets.map(asset =>
      fs.move(path.join(assetPath, asset), path.join(__dirname, 'assets', asset), {
        overwrite: true
      })
    )
  )

  await fs.writeFile(path.join('assets/list.json'), JSON.stringify(assets, null, 2))
}
