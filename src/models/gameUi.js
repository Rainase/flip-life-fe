import { action, thunk, computed } from "easy-peasy";

export default {
  modalState: {
    isOpen:false,
  },


setModal: action((state, newState) => {
  console.log(newState)
  state.modalState.isOpen = newState
})
}