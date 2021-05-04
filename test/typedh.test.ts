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

h0("br", {})     // $ExpectType ElementVNode<false>
h1("br", {})     // $ExpectType ElementVNode<true>
h2("br", {})     // $ExpectType ElementVNode<boolean>
h3("br", {})     // $ExpectType ElementVNode<0>
h4("br", {})     // $ExpectType ElementVNode<2424>
h5("br", {})     // $ExpectType ElementVNode<-123>
h6("br", {})     // $ExpectType ElementVNode<number>
h7("br", {})     // $ExpectType ElementVNode<"">
h8("br", {})     // $ExpectType ElementVNode<"hi">
h9("br", {})     // $ExpectType ElementVNode<string>
h10("br", {})    // $ExpectType ElementVNode<S10>
h11("br", {})    // $ExpectType ElementVNode<S11>
h12("br", {})    // $ExpectType ElementVNode<S12>
h13("br", {})    // $ExpectType ElementVNode<S13>
h14("br", {})    // $ExpectType ElementVNode<S14>
h15("br", {})    // $ExpectType ElementVNode<S15>
h16("br", {})    // $ExpectType ElementVNode<S16>
h17("br", {})    // $ExpectType ElementVNode<S17>
h18("br", {})    // $ExpectType ElementVNode<[]>
h19("br", {})    // $ExpectType ElementVNode<symbol>
h20("br", {})    // $ExpectType ElementVNode<S20>
h21("br", {})    // $ExpectType ElementVNode<null>
h22("br", {})    // $ExpectType ElementVNode<undefined>
h23("br", {})    // $ExpectType ElementVNode<unknown>
h24("br", {})    // $ExpectType ElementVNode<any>
