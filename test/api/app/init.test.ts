import type { Action, Effect, EventsMap, View } from "hyperapp"

import { text, app } from "hyperapp"

// -----------------------------------------------------------------------------

type State = { bar?: number, foo: number }

const init: State = { foo: 0 }
const view: View<State> = text
const node: Node = document.body

// $ExpectType Dispatch<string>
app<string>({
  init: (state = "hi") => state,
  view: text,
  node: document.body,
})

// -----------------------------------------------------------------------------

// $ExpectType CustomEvent<string>
const x: EventsMap["onsearch"] = new CustomEvent("hjgkj", { detail: "dfghfldkjg" })
