export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    // do something to validate
    if (app.router.app) {
      app.router.app.$root.$children[2].showMenu = false
    }
  })
}
