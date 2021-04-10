import {
  Action,
  Dispatch,
  Dispatchable,
  DispatchInitializer,
  Effect,
  Subscriptions,
  View,
} from "hyperapp"

import { h, text, app } from "hyperapp"

app()                    // $ExpectError
app(true)                // $ExpectError
app(false)               // $ExpectError
app(0)                   // $ExpectError
app(2424)                // $ExpectError
app(-123)                // $ExpectError
app(-Infinity)           // $ExpectError
app(Infinity)            // $ExpectError
app(NaN)                 // $ExpectError
app("")                  // $ExpectError
app("hi")                // $ExpectError
app(new String(""))      // $ExpectError
app(new String("hi"))    // $ExpectError
app({})                  // $ExpectError
app(new Set())           // $ExpectError
app([])                  // $ExpectError
app(Symbol())            // $ExpectError
app(() => { })           // $ExpectError
app(null)                // $ExpectError
app(undefined)           // $ExpectError

// -----------------------------------------------------------------------------

type Test = { bar?: number, foo: number }

const init: Test = { foo: 0 }
// const init: State<Test> = { foo: 0 }
const view: View<Test> = text
const node: Node = document.body
const subscriptions: Subscriptions<Test> = (_) => []
const dispatch: DispatchInitializer<Test> = (x) => x

app({ init })                                         // $ExpectType Dispatch<Test>
app({ init, view })                                   // $ExpectError
app({ init, node })                                   // $ExpectError
app({ init, subscriptions })                          // $ExpectType Dispatch<Test>
app({ init, dispatch })                               // $ExpectType Dispatch<Test>
app({ init, view, node })                             // $ExpectType Dispatch<Test>
app({ init, view, subscriptions })                    // $ExpectError
app({ init, view, dispatch })                         // $ExpectError
app({ init, node, subscriptions })                    // $ExpectError
app({ init, node, dispatch })                         // $ExpectError
app({ init, subscriptions, dispatch })                // $ExpectType Dispatch<Test>
app({ init, view, node, subscriptions })              // $ExpectType Dispatch<Test>
app({ init, view, node, dispatch })                   // $ExpectType Dispatch<Test>
app({ init, view, subscriptions, dispatch })          // $ExpectError
app({ init, node, subscriptions, dispatch })          // $ExpectError
app({ init, view, node, subscriptions, dispatch })    // $ExpectType Dispatch<Test>
app({ view })                                         // $ExpectError
app({ view, node })                                   // $ExpectType Dispatch<Test>
app({ view, subscriptions })                          // $ExpectError
app({ view, dispatch })                               // $ExpectError
app({ view, node, subscriptions })                    // $ExpectType Dispatch<Test>
app({ view, node, dispatch })                         // $ExpectType Dispatch<Test>
app({ view, node, subscriptions, dispatch })          // $ExpectType Dispatch<Test>
app({ node })                                         // $ExpectError
app({ node, subscriptions })                          // $ExpectError
app({ node, dispatch })                               // $ExpectError
app({ node, subscriptions, dispatch })                // $ExpectError
app({ subscriptions })                                // $ExpectType Dispatch<Test>
app({ subscriptions, dispatch })                      // $ExpectType Dispatch<Test>
app({ dispatch })                                     // $ExpectType Dispatch<Test>

// -----------------------------------------------------------------------------

// $ExpectType Dispatch<string>
app<string>({
  init: (state = "hi") => state,
  view: text,
  node: document.body,
})

// -----------------------------------------------------------------------------

const runTestFx = (_dispatch: Dispatch<any>) => console.log("test")

const testFx = (): Effect<Test> => [runTestFx, undefined]

// -----------------------------------------------------------------------------

// $ExpectType Dispatch<Test>
app<Test>({
  init: { foo: 2 },
  view: (state) => h("p", {}, [text(state.bar ?? "")]),
  node: document.body
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: [{ foo: 2 }],
  view: (state) => h("p", {}, [text(state.bar ?? "")]),
  node: document.body
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: [{ foo: 2 }, testFx()],
  view: (state) => h("p", {}, [text(state.bar ?? "")]),
  node: document.body
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { foo: 2 },
  view: (state) => h("div", {}, [
    text(state.foo),
    text(state.bar ?? ""),
    h("button", {
      onclick: (state) => ({ ...state, bar: state.foo * 2 })
    }, [text("clicky")]),
  ]),
  node: document.body
})

// $ExpectType Dispatch<Test>
app<Test>({
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

// $ExpectType Dispatch<Test>
app<Test>({
  init: { foo: 2 },
  view: (state) => h("p", {}, [text(state.foo)]),
  node: document.body,
  dispatch: (dispatch) => dispatch
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { foo: 2 },
  view: (state) => h("p", {}, [text(state.foo)]),
  node: document.body,
  dispatch: (dispatch) => (action, props) => {
    console.log(action)
    console.log(props)
    dispatch(action, props)
  }
})

// -----------------------------------------------------------------------------

const myTimeout = <S>(dispatch: Dispatch<S>, props: any) => {
  setTimeout(() => dispatch(props.action), props.delay)
}

const myDelay = <S>(delay: number, action: Dispatchable<S>): Effect<S> =>
  [myTimeout, { delay, action }]

const IncrementFoo: Action<Test> = (state) =>
  ({ ...state, foo: state.foo + 1 })

// $ExpectType Dispatch<Test>
app<Test>({
  init: [{ foo: 2 }, myDelay(2000, { foo: 3 })],
  view: (state) => h("main", {}, []),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: [{ foo: 2 }, myDelay(2000, IncrementFoo)],
  view: (state) => h("main", {}, []),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: (state) => [{ foo: 2 }, myDelay(200, IncrementFoo)],
  view: (state) => h("main", {}, []),
  node: document.body,
})
