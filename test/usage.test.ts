// Credit: https://github.com/jorgebucaran/hyperapp/issues/1048

import { TypedH, View } from "hyperapp"
import { h, text, app } from "hyperapp"

type ShapeType = { type: string }
type State = { shapes: ShapeType[] }

const state: State = {
  shapes: [
    { type: "circle" },
    { type: "square" },
  ],
}

// -----------------------------------------------------------------------------

const Canvas1: View<State> = () => {
  return h("div", {}, [text("ok")])
}

// $ExpectType Dispatch<State>
app<State>({
  init: state,
  view: Canvas1,
  node: document.getElementById("app")!,
})

// -----------------------------------------------------------------------------

// $ExpectError
const Canvas2 = (state) => {
  return h("div", {}, state.shapes.map(toShape2))
}

const toShape2 = (shape: ShapeType) => {
  return h("h3", {}, [text(shape.type)])
}

app<State>({
  init: state,
  // $ExpectError
  view: Canvas2,
  node: document.getElementById("app")!,
})

// -----------------------------------------------------------------------------

const Canvas3 = (state: State) => {
  return h("div", {}, state.shapes.map(toShape3))
}

const toShape3 = (shape: ShapeType) => {
  return h("h3", {}, [text(shape.type)])
}

app<State>({
  init: state,
  // $ExpectError
  view: Canvas3,
  node: document.getElementById("app")!,
})

// -----------------------------------------------------------------------------

const Canvas4 = (state: State) => {
  return h<State>("div", {}, state.shapes.map(toShape4))
}

const toShape4 = (shape: ShapeType) => {
  return h<State>("h3", {}, [text(shape.type)])
}

// $ExpectType Dispatch<State>
app<State>({
  init: state,
  view: Canvas4,
  node: document.getElementById("app")!,
})

// -----------------------------------------------------------------------------

const Canvas5 = (state: State) => {
  return h("div", {}, state.shapes.map(toShape5))
}

const toShape5 = (shape: ShapeType) => {
  return h<State>("h3", {}, [text(shape.type)])
}

// $ExpectType Dispatch<State>
app<State>({
  init: state,
  view: Canvas5,
  node: document.getElementById("app")!,
})

// -----------------------------------------------------------------------------

const hh: TypedH<State> = h

const Canvas6 = (state: State) => {
  return hh("div", {}, state.shapes.map(toShape6))
}

const toShape6 = (shape: ShapeType) => {
  return hh("h3", {}, [text(shape.type)])
}

const toShape62 = (shape: ShapeType) => {
  // $ExpectError
  return hh<State>("h3", {}, [text(shape.type)])
}

// $ExpectType Dispatch<State>
app<State>({
  init: state,
  view: Canvas6,
  node: document.getElementById("app")!,
})
