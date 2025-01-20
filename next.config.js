const isProd = process.env.NODE_ENV === 'production'

function getBasePath() {
  var basePath = undefined

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith("/")) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = "/" + process.env.BASE_PATH;
    }
  }
  return basePath
}

const basePath = getBasePath()
console.warn(
  `P.S. [basePath] is {${basePath}}`
)

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath: basePath,
  },
}

module.exports = nextConfig
