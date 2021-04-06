import type { Dispatch, EffectCreator, Payload, State, StateWithEffects } from "hyperapp"

import { h, text, app } from "hyperapp"

type Test = { x: number, y: number }

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("div", {}, [
    h("button", {
      onclick: (state) => ({ ...state, x: state.x * 2 })
    }, [text(state.x)]),
    h("button", {
      onclick: (state) => [{ ...state, x: state.x * 2 }]
    }, [text(state.x)]),
  ]),
  node: document.body,
})

// -----------------------------------------------------------------------------

const runJustEcho = (_dispatch: Dispatch<Test>, data?: Payload<string>): void => {
  console.log(data)
}

const justEcho: EffectCreator<Test, string> = (x) => [runJustEcho, x]

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("button", {
    onclick: (state) => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("button", {
    onclick: (state: State<Test>): StateWithEffects<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("button", {
    onkeypress: (state: State<Test>): StateWithEffects<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("button", {
    onclick: (state) => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
    onkeypress: (state) => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// $ExpectType Dispatch<Test>
app<Test>({
  init: { x: 2, y: 4 },
  view: (state) => h("button", {
    onclick: (state: State<Test>): StateWithEffects<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
    onkeypress: (state: State<Test>): StateWithEffects<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// -----------------------------------------------------------------------------

type Foo = { foo: number }

const AddSome = (state: State<Foo>, amount: number): State<Foo> =>
  ({ ...state, foo: state.foo + amount })

// $ExpectType Dispatch<Foo>
app<Foo>({
  init: { foo: 0 },
  view: (state) => h("div", {}, [
    text(state.foo),
    h("button", { onclick: [AddSome, 42] }, text("add 42")),
  ]),
  node: document.body,
})

// $ExpectType Dispatch<Foo>
app<Foo>({ init: [AddSome, 42] })

// $ExpectError
h("button", { onclick: AddSome }, text("add event?!"))

// $ExpectType VDOM<Foo>
h("button", { onclick: [AddSome, 32] }, text("add 32"))

// TODO:
// $ExpectError
h("button", { onclick: [AddSome, "foo"] }, text("add string?!"))

// -----------------------------------------------------------------------------

import { ActionTransform } from "hyperapp"

type AppState = { foo: number }

const AddSomeMore: ActionTransform<AppState, number> =
  (state, amount) => ({
    ...state,
    foo: state.foo + (amount || 0),
  })

// $ExpectError
h("button", { onclick: AddSomeMore }, text("add event?!"))

// $ExpectType VDOM<AppState>
h("button", { onclick: [AddSomeMore, 32] }, text("add 32"))

// TODO:
// $ExpectError
h("button", { onclick: [AddSomeMore, "foo"] }, text("add string?!"))

// -----------------------------------------------------------------------------

type LocalState = { inputText: string }

const HandleInput = (state: LocalState, event: Event) => ({
  ...state,
  inputText: (event.target as HTMLInputElement).value,
})

// $ExpectType Dispatch<LocalState>
app<LocalState>({
  node: document.body,
  init: { inputText: "" },
  view: state =>
    h("main", {}, [
      h("input", {
        type: "text",
        value: state.inputText,
        oninput: HandleInput,
      }),
    ]),
})
