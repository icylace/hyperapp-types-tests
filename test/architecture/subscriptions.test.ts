import type { Dispatch, Unsubscribe } from "hyperapp"

import { h, text, app } from "hyperapp"

type Test = {
  foo: number
  keepGoing: boolean
  stopping: boolean
}

const onKey = (...keys: string[]) => <S>(dispatch: Dispatch<S>, payload: any): Unsubscribe => {
  const listener = (event: KeyboardEvent) => {
    if (keys.includes(event.key)) {
      window.requestAnimationFrame(() => dispatch(payload.action))
    }
  }
  document.addEventListener("keydown", listener)
  return () => document.removeEventListener("keydown", listener)
}

const Decrease = (state: Test) => ({ ...state, foo: state.foo - 1 })
const Increase = (state: Test) => ({ ...state, foo: state.foo + 1 })

// $ExpectType Dispatch<Test>
app<Test>({
  init: {
    foo: 2,
    keepGoing: true,
    stopping: false,
  },
  view: (state) =>
    h("div", {}, [
      h("button", { onclick: Decrease }, text("-one")),
      text(state.foo),
    ]),
  subscriptions: (state) => [
    [onKey("i"), { action: Increase }],
    state.keepGoing && [onKey("i"), { action: Increase }],
    state.stopping || [onKey("i"), { action: Increase }],
  ],
  node: document.body
})

// -----------------------------------------------------------------------------

// 4/3/2021, 9:57 AM
// TODO:
// - test if just a cleanup function can be the payload of a subscription
