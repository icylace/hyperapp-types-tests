import type { Dispatch, Effect } from "hyperapp"

const runEcho = (dispatch: Dispatch<string>, data: string): void => {
  console.log(data)
  dispatch((state, x) => state + x, data)
}

const echo = (x: string): Effect<string, string> => [runEcho, x]

// $ExpectType Effect<string, string>
echo("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Unsubscribe

// -----------------------------------------------------------------------------

// Credit: https://gist.github.com/eteeselink/81314282c95cd692ea1d
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const runEchoEventually = async (dispatch: Dispatch<string>, data: string): Promise<void> => {
  await delay(5000)
  console.log(data)
  window.requestAnimationFrame(() => dispatch((state, x) => state + x, data))
}

const echoEventually = (x: string): Effect<string, string> => [runEchoEventually, x]

// $ExpectType Effect<string, string>
echoEventually("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Promise<Unsubscribe>

// -----------------------------------------------------------------------------

import type { Action } from "hyperapp"

import { h, text, app } from "hyperapp"

type State2 = {
  foo: boolean
  bar: boolean
  message: string
}

const runEcho2 = (dispatch: Dispatch<State2>, data: string): void => {
  console.log(data)
  dispatch((state, x) => ({ ...state, message: x}), data)
}

const echo2 = (x: string): Effect<State2, string> => [runEcho2, x]

const SomeAction: Action<State2> = (state: State2) => [
  state,
  state.foo || echo2("hi"),
  state.bar && echo2("there"),
]

app({
  init: () => ({
    foo: false,
    bar: true,
    message: "",
  }),
  view: (state) =>
    h("main", {}, [
      h("p", {}, text(state.message)),
      h("button", { onclick: SomeAction }, text("do it")),
    ]),
  node: document.getElementById("app")!
})
