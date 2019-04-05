import store from '@user/store'

export default (to, from, next) => {
  if (store.getters.user) {
    next(true)
  } else {
    next('/login')
  }
}
