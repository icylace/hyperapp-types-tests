import { Action, Dispatch, Effect, EffectCreator, State, StateWithEffects } from "hyperapp"

import { app, h, text } from "hyperapp"

app()             // $ExpectError
app(true)         // $ExpectError
app(false)        // $ExpectError
app(0)            // $ExpectError
app(2424)         // $ExpectError
app(-123)         // $ExpectError
app(-Infinity)    // $ExpectError
app(Infinity)     // $ExpectError
app(NaN)          // $ExpectError
app("")           // $ExpectError
app("hi")         // $ExpectError
app({})           // $ExpectError
app(new Set())    // $ExpectError
app([])           // $ExpectError
app(Symbol())     // $ExpectError
app(() => { })    // $ExpectError
app(null)         // $ExpectError
app(undefined)    // $ExpectError

// -----------------------------------------------------------------------------

type Test = { bar?: number, foo: number }

const runTestFx = <S>(dispatch: Dispatch<S>): void => console.log("test")

const testFx: EffectCreator<Test> = () => [runTestFx, undefined]

// -----------------------------------------------------------------------------

// $ExpectType Dispatch<Test>
app<Test>({ init: { foo: 0 } })

// TODO:
// $ ExpectError
app<Test>({ init: { foo: 0 }, node: document.body })

// $ExpectType Dispatch<Test>
app<Test>({ init: { foo: 0 }, view: text, node: document.body })

// TODO:
// $ ExpectError
app<Test>({ init: { foo: 0 }, view: () => text(42) })

// TODO:
// $ ExpectError
app<Test>({ dispatch: (x) => x, node: document.body })

// $ExpectError
app<Test>({ view: () => text(42) })

// $ExpectError
app<Test>({ node: document.body })

// $ExpectType Dispatch<Test>
app<Test>({ view: () => text(42), node: document.body })

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
        if (!event) return state
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

const myDelay = <S>(delay: number, action: State<S> | StateWithEffects<S> | Action<S>): Effect<S> =>
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
