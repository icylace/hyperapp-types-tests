// Credit:
// https://github.com/jorgebucaran/hyperapp/discussions/1052#discussioncomment-632424

import { Action, VNode, h, text } from "hyperapp"

// -----------------------------------------------------------------------------

type MyComponentProps<S> = {
  foo: Action<S>
  bar: string
}

// In this version, typescript tries to infer the
// return type of the view component, but cannot,
// because only the first child has any actions
// from which the state type can be inferred
// in the second child, the state type is inferred
// to be unknown.

const myComponent = <S>(props: MyComponentProps<S>) =>
  h("div", {}, [
    // $ExpectError
    h("button", { onclick: props.foo }, text("click")),
    h("p", {}, text(props.bar)),
  ])

// The easiest way to solve this is to explicitly
// declare the return type:

// $ExpectType <S>(props: MyComponentProps<S>) => VNode<S>
const myComponent2 = <S>(props: MyComponentProps<S>): VNode<S> =>
  h("div", {}, [
    h("button", { onclick: props.foo }, text("click")),
    h("p", {}, text(props.bar)),
  ])
