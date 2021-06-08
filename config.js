module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  mongoAtlas: {
    connectUri: process.env.MONGO || 'mongodb+srv://admin:d3v3l0p3r@medica.piavh.mongodb.net/rutas_medicas?retryWrites=true&w=majority'
  }
}