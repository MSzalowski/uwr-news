import { action, ActionType } from 'typesafe-actions'
import produce from 'immer'

const CHANGE_THEME = 'app/CHANGE_THEME'

export interface AppState {
  readonly lightTheme: boolean
}

const initialState: AppState = {
  lightTheme: true,
}

export default (
  state: AppState = initialState,
  action: ActionType<typeof actions>,
) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_THEME:
        draft.lightTheme = !state.lightTheme
        return
      default:
        return
    }
  })

export const changeTheme = () => action(CHANGE_THEME)

const actions = {
  changeTheme,
}
