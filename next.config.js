module.exports = {
    //força um barra no final da url
    trailingSlash: true,
    //força redirect de paths
    async redirects() {
        return [
          {
            source: '/perguntas',
            destination: '/faq/',
            permanent: true,
          },
        ]
      },
}