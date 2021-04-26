import type { TypedH } from "hyperapp"

import { h as ha } from "hyperapp"

type S0 = false
type S1 = true
type S2 = boolean
type S3 = 0
type S4 = 2424
type S5 = -123
type S6 = number
type S7 = ""
type S8 = "hi"
type S9 = string
type S10 = {}
type S11 = { [_: string]: any }
type S12 = { [_: string]: any, foo: number }
type S13 = { [_: string]: any, foo?: number }
type S14 = { foo: number }
type S15 = { foo?: number }
type S16 = Set<any>
type S17 = Set<number>
type S18 = []
type S19 = symbol
type S20 = () => {}
type S21 = null
type S22 = undefined
type S23 = unknown
type S24 = any

const h0: TypedH<S0> = ha
const h1: TypedH<S1> = ha
const h2: TypedH<S2> = ha
const h3: TypedH<S3> = ha
const h4: TypedH<S4> = ha
const h5: TypedH<S5> = ha
const h6: TypedH<S6> = ha
const h7: TypedH<S7> = ha
const h8: TypedH<S8> = ha
const h9: TypedH<S9> = ha
const h10: TypedH<S10> = ha    // $ExpectError
const h11: TypedH<S11> = ha    // $ExpectError
const h12: TypedH<S12> = ha
const h13: TypedH<S13> = ha
const h14: TypedH<S14> = ha
const h15: TypedH<S15> = ha
const h16: TypedH<S16> = ha
const h17: TypedH<S17> = ha
const h18: TypedH<S18> = ha
const h19: TypedH<S19> = ha
const h20: TypedH<S20> = ha
const h21: TypedH<S21> = ha
const h22: TypedH<S22> = ha
const h23: TypedH<S23> = ha    // $ExpectError
const h24: TypedH<S24> = ha

h0("br", {})     // $ExpectType VNode<false>
h1("br", {})     // $ExpectType VNode<true>
h2("br", {})     // $ExpectType VNode<boolean>
h3("br", {})     // $ExpectType VNode<0>
h4("br", {})     // $ExpectType VNode<2424>
h5("br", {})     // $ExpectType VNode<-123>
h6("br", {})     // $ExpectType VNode<number>
h7("br", {})     // $ExpectType VNode<"">
h8("br", {})     // $ExpectType VNode<"hi">
h9("br", {})     // $ExpectType VNode<string>
h10("br", {})    // $ExpectType VNode<S10>
h11("br", {})    // $ExpectType VNode<S11>
h12("br", {})    // $ExpectType VNode<S12>
h13("br", {})    // $ExpectType VNode<S13>
h14("br", {})    // $ExpectType VNode<S14>
h15("br", {})    // $ExpectType VNode<S15>
h16("br", {})    // $ExpectType VNode<S16>
h17("br", {})    // $ExpectType VNode<S17>
h18("br", {})    // $ExpectType VNode<[]>
h19("br", {})    // $ExpectType VNode<symbol>
h20("br", {})    // $ExpectType VNode<S20>
h21("br", {})    // $ExpectType VNode<null>
h22("br", {})    // $ExpectType VNode<undefined>
h23("br", {})    // $ExpectType VNode<unknown>
h24("br", {})    // $ExpectType VNode<any>
