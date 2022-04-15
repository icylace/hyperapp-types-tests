import { Action, Dispatch, Effect, app, h, text } from "hyperapp"

// State can be associated with a list of effects to run.
type StateForm<S, P = any> = [state: S, ...effects: Effect<S, P>[]]

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

const runJustEcho = (_dispatch: Dispatch<Test>, data: string): void => {
  console.log(data)
}

const justEcho = (x: string): Effect<Test, string> => [runJustEcho, x]

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
    onkeypress: (state: Test): StateForm<Test> => [
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
    onclick: (state: Test): StateForm<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
    onkeypress: (state: Test): StateForm<Test> => [
      { ...state, x: state.x * 2 },
      justEcho("hi"),
    ],
  }, [text(state.x)]),
  node: document.body,
})

// -----------------------------------------------------------------------------

type Foo = { foo: number }

const AddSome = (state: Foo, amount: number): Foo =>
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

// $ExpectType ElementVNode<Foo>
h("button", { onclick: [AddSome, 32] }, text("add 32"))

// $ExpectError
h("button", { onclick: [AddSome, "foo"] }, text("add string?!"))

// -----------------------------------------------------------------------------

type AppState = { foo: number }

const AddSomeMore: Action<AppState, number> =
  (state, amount) => ({
    ...state,
    foo: state.foo + (amount || 0),
  })

// $ExpectError
h("button", { onclick: AddSomeMore }, text("add event?!"))

// $ExpectType ElementVNode<AppState>
h("button", { onclick: [AddSomeMore, 32] }, text("add 32"))

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

// -----------------------------------------------------------------------------

// Credit: https://github.com/jorgebucaran/hyperapp/pull/1047#discussion_r612749398

type State = {
  foo: number
  name: string
}

const AddFoo: Action<State, number> = (state, amount) => ({...state, foo: state.foo + amount})
const SetName: Action<State, string> = (state, name) => ({...state, name})

// $ExpectType ElementVNode<State>
h("div", {
  onmousedown: [AddFoo, 32],
  onmouseup: [SetName, "unknown"],
})

// -----------------------------------------------------------------------------

h("div", {
  onmousedown: [AddFoo, 32],
  onmouseenter: (state: State, payload: MouseEvent) => state,
  // $ExpectError
  onmousemove: (state: State, payload: number) => state,
  // $ExpectError
  onclick: [AddFoo, "unknown"],
  onmouseup: [SetName, "unknown"],
  // $ExpectError
  onmouseleave: [SetName, 32],
})

// $ExpectType ElementVNode<State>
h("div", { onmouseenter: (state: State, payload: MouseEvent) => state })

// $ExpectError
h("div", { onmouseenter: (state: State, payload: number) => state })

// -----------------------------------------------------------------------------

// Credit: zaceno
// https://discord.com/channels/804672552348680192/805746611467583499/945633010055782411

type State2 = { foo: number, bar: string, baz: number }
type FooPayload = { foo: number, bar: string }

const FooAction: Action<State2, FooPayload> = (state, foo) => ({ ...state, ...foo })

// $ExpectError
const BarAction: Action<State2, FooPayload> = (_) => [FooAction, { foo: "yes", bar: 3 }]
