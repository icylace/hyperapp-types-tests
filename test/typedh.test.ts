import type { TypedH } from "hyperapp"

import { h as ha } from "hyperapp"

type S = {}
const hs: TypedH<S> = ha

// $ExpectType VNode<S1>
hs("br", {})
