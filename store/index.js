export const state = () => ({
  menuShow: false,
})

export const getters = {
  getMenuShow: (state) => state.menuShow,
}

export const mutations = {
  setMenuShow(state) {
    state.menuShow = !state.menuShow
  },
}
