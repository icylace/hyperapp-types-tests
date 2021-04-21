import type { Dispatch, Effect, VDOM } from "hyperapp"

import { h, text, app } from "hyperapp"

// -----------------------------------------------------------------------------

type View<S> = (state: S) => VDOM<S>

type State = { bar?: number, foo: number }

const init: State = { foo: 0 }
const view: View<State> = text
const node: Node = document.body

const runTestFx = (_dispatch: Dispatch<any>) => console.log("test")

const testFx = (): Effect<State> => [runTestFx, undefined]

// -----------------------------------------------------------------------------

// $ExpectType Dispatch<State>
app<State>({
  init: { foo: 2 },
  view: (state) => h("div", {}, [
    text(state.foo),
    text(state.bar ?? ""),
    h("button", {
      onclick: (state) => ({ ...state, bar: state.foo * 2 }),
      onchange: (state, event) => {
        const target = event.target as HTMLInputElement
        return ({ ...state, bar: target.checked ? 20 : 10 })
      },
    }, [text("clicky")]),
  ]),
  node: document.body
})

// -----------------------------------------------------------------------------

// $ExpectType Dispatch<State>
app<State>({
  init: { foo: 2 },
  view: (state) => h("p", {}, [text(state.foo)]),
  node: document.body,
  dispatch: (dispatch) => dispatch
})

// $ExpectType Dispatch<State>
app<State>({
  init: { foo: 2 },
  view: (state) => h("p", {}, [text(state.foo)]),
  node: document.body,
  dispatch: (dispatch) => (action, props) => {
    console.log(action)
    console.log(props)
    dispatch(action, props)
  }
})
