export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    try {
      // close menu on navigate if its open
      app.router.app.$root.$children[2].showMenu = false
    } catch {
      // console.log('no menu to close: not mounted')
    }
  })
}
