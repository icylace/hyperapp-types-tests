// https://discord.com/channels/804672552348680192/805746611467583499/882366935399022684

import { Action, Effect, Dispatch } from "hyperapp"

// -----------------------------------------------------------------------------

type Effecter<S, X> = (
  dispatch: Dispatch<S>,
  options: X
) => void | Promise<void>

const effect =
  <S, X>(effecter: Effecter<S, X>) =>
  (options: X): Effect<S, X> =>
    [effecter, options]

type InstrumentSettings = {
  settings: string
}

const soundbank = {
  settings: undefined,
  release: () => {},
}

export const getSettings = effect(function getSettings<S>(
  dispatch: Dispatch<S>,
  action: Action<S, InstrumentSettings>
) {
  dispatch(action, soundbank.settings)
})

// const release = effect(function release() {
//   soundbank.release()
// })

const id = (x: any) => x

const release = id(effect(function release() {
  soundbank.release()
}))

const ReleaseNote = <S>(state: S) => [state, release()]

const ReleaseNote2 = <S>(state: S) => [state, release(null)]
