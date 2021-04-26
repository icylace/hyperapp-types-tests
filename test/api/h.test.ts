import { h, text } from "hyperapp"

h()                    // $ExpectError
h(true)                // $ExpectError
h(false)               // $ExpectError
h(0)                   // $ExpectError
h(2424)                // $ExpectError
h(-123)                // $ExpectError
h(-Infinity)           // $ExpectError
h(Infinity)            // $ExpectError
h(NaN)                 // $ExpectError
h("")                  // $ExpectError
h("hi")                // $ExpectError
h(new String(""))      // $ExpectError
h(new String("hi"))    // $ExpectError
h({})                  // $ExpectError
h(new Set())           // $ExpectError
h([])                  // $ExpectError
h(Symbol())            // $ExpectError
h(() => { })           // $ExpectError
h(null)                // $ExpectError
h(undefined)           // $ExpectError

h<number>()                    // $ExpectError
h<number>(true)                // $ExpectError
h<number>(false)               // $ExpectError
h<number>(0)                   // $ExpectError
h<number>(2424)                // $ExpectError
h<number>(-123)                // $ExpectError
h<number>(-Infinity)           // $ExpectError
h<number>(Infinity)            // $ExpectError
h<number>(NaN)                 // $ExpectError
h<number>("")                  // $ExpectError
h<number>("hi")                // $ExpectError
h<number>(new String(""))      // $ExpectError
h<number>(new String("hi"))    // $ExpectError
h<number>({})                  // $ExpectError
h<number>(new Set())           // $ExpectError
h<number>([])                  // $ExpectError
h<number>(Symbol())            // $ExpectError
h<number>(() => { })           // $ExpectError
h<number>(null)                // $ExpectError
h<number>(undefined)           // $ExpectError

h(true, {})                // $ExpectError
h(false, {})               // $ExpectError
h(0, {})                   // $ExpectError
h(2424, {})                // $ExpectError
h(-123, {})                // $ExpectError
h(-Infinity, {})           // $ExpectError
h(Infinity, {})            // $ExpectError
h(NaN, {})                 // $ExpectError
h("", {})                  // $ExpectError
h("hi", {})                // $ExpectType VNode<unknown>
h(new String(""), {})      // $ExpectError
h(new String("hi"), {})    // $ExpectError
h({}, {})                  // $ExpectError
h(new Set(), {})           // $ExpectError
h([], {})                  // $ExpectError
h(Symbol(), {})            // $ExpectError
h(() => { }, {})           // $ExpectError
h(null, {})                // $ExpectError
h(undefined, {})           // $ExpectError

h<number>(true, {})                // $ExpectError
h<number>(false, {})               // $ExpectError
h<number>(0, {})                   // $ExpectError
h<number>(2424, {})                // $ExpectError
h<number>(-123, {})                // $ExpectError
h<number>(-Infinity, {})           // $ExpectError
h<number>(Infinity, {})            // $ExpectError
h<number>(NaN, {})                 // $ExpectError

// TODO:
h<number>("", {})                  // $ExpectError

h<number>(new String(""), {})      // $ExpectError
h<number>("hi", {})                // $ExpectType VNode<number>
h<number>(new String("hi"), {})    // $ExpectError
h<number>({}, {})                  // $ExpectError
h<number>(new Set(), {})           // $ExpectError
h<number>([], {})                  // $ExpectError
h<number>(Symbol(), {})            // $ExpectError
h<number>(() => { }, {})           // $ExpectError
h<number>(null, {})                // $ExpectError
h<number>(undefined, {})           // $ExpectError

h("p", true)                // $ExpectError
h("p", false)               // $ExpectError
h("p", 0)                   // $ExpectError
h("p", 2424)                // $ExpectError
h("p", -123)                // $ExpectError
h("p", -Infinity)           // $ExpectError
h("p", Infinity)            // $ExpectError
h("p", NaN)                 // $ExpectError
h("p", "")                  // $ExpectError
h("p", "hi")                // $ExpectError
h("p", new String(""))      // $ExpectError
h("p", new String("hi"))    // $ExpectError
h("p", {})                  // $ExpectType VNode<unknown>
h("p", new Set())           // $ExpectError
h("p", [])                  // $ExpectError
h("p", Symbol())            // $ExpectError
h("p", () => { })           // $ExpectError
h("p", null)                // $ExpectError
h("p", undefined)           // $ExpectError

h<number>("p", true)                // $ExpectError
h<number>("p", false)               // $ExpectError
h<number>("p", 0)                   // $ExpectError
h<number>("p", 2424)                // $ExpectError
h<number>("p", -123)                // $ExpectError
h<number>("p", -Infinity)           // $ExpectError
h<number>("p", Infinity)            // $ExpectError
h<number>("p", NaN)                 // $ExpectError
h<number>("p", "")                  // $ExpectError
h<number>("p", "hi")                // $ExpectError
h<number>("p", new String(""))      // $ExpectError
h<number>("p", new String("hi"))    // $ExpectError
h<number>("p", {})                  // $ExpectType VNode<number>
h<number>("p", new Set())           // $ExpectError
h<number>("p", [])                  // $ExpectError
h<number>("p", Symbol())            // $ExpectError
h<number>("p", () => { })           // $ExpectError
h<number>("p", null)                // $ExpectError
h<number>("p", undefined)           // $ExpectError

h("p", {}, true)                // $ExpectType VNode<unknown>
h("p", {}, false)               // $ExpectType VNode<unknown>
h("p", {}, 0)                   // $ExpectError
h("p", {}, 2424)                // $ExpectError
h("p", {}, -123)                // $ExpectError
h("p", {}, -Infinity)           // $ExpectError
h("p", {}, Infinity)            // $ExpectError
h("p", {}, NaN)                 // $ExpectError
h("p", {}, "")                  // $ExpectError
h("p", {}, "hi")                // $ExpectError
h("p", {}, new String(""))      // $ExpectError
h("p", {}, new String("hi"))    // $ExpectError
h("p", {}, {})                  // $ExpectError
h("p", {}, new Set())           // $ExpectError
h("p", {}, [])                  // $ExpectType VNode<unknown>
h("p", {}, Symbol())            // $ExpectError
h("p", {}, () => { })           // $ExpectError
h("p", {}, null)                // $ExpectType VNode<unknown>
h("p", {}, undefined)           // $ExpectType VNode<unknown>

h<number>("p", {}, true)                // $ExpectType VNode<number>
h<number>("p", {}, false)               // $ExpectType VNode<number>
h<number>("p", {}, 0)                   // $ExpectError
h<number>("p", {}, 2424)                // $ExpectError
h<number>("p", {}, -123)                // $ExpectError
h<number>("p", {}, -Infinity)           // $ExpectError
h<number>("p", {}, Infinity)            // $ExpectError
h<number>("p", {}, NaN)                 // $ExpectError
h<number>("p", {}, "")                  // $ExpectError
h<number>("p", {}, "hi")                // $ExpectError
h<number>("p", {}, new String(""))      // $ExpectError
h<number>("p", {}, new String("hi"))    // $ExpectError
h<number>("p", {}, {})                  // $ExpectError
h<number>("p", {}, new Set())           // $ExpectError
h<number>("p", {}, [])                  // $ExpectType VNode<number>
h<number>("p", {}, Symbol())            // $ExpectError
h<number>("p", {}, () => { })           // $ExpectError
h<number>("p", {}, null)                // $ExpectType VNode<number>
h<number>("p", {}, undefined)           // $ExpectType VNode<number>

// -----------------------------------------------------------------------------

h("p", { class: true })                // $ExpectType VNode<unknown>
h("p", { class: false })               // $ExpectType VNode<unknown>
h("p", { class: 0 })                   // $ExpectError
h("p", { class: 2424 })                // $ExpectError
h("p", { class: -123 })                // $ExpectError
h("p", { class: -Infinity })           // $ExpectError
h("p", { class: Infinity })            // $ExpectError
h("p", { class: NaN })                 // $ExpectError
h("p", { class: "" })                  // $ExpectType VNode<unknown>
h("p", { class: "hi" })                // $ExpectType VNode<unknown>
h("p", { class: new String("") })      // $ExpectError
h("p", { class: new String("hi") })    // $ExpectError
h("p", { class: {} })                  // $ExpectType VNode<unknown>
h("p", { class: new Set() })           // $ExpectError
h("p", { class: [] })                  // $ExpectType VNode<unknown>
h("p", { class: Symbol() })            // $ExpectError
h("p", { class: () => { } })           // $ExpectError
h("p", { class: null })                // $ExpectError
h("p", { class: undefined })           // $ExpectType VNode<unknown>

h<number>("p", { class: true })                // $ExpectType VNode<number>
h<number>("p", { class: false })               // $ExpectType VNode<number>
h<number>("p", { class: 0 })                   // $ExpectError
h<number>("p", { class: 2424 })                // $ExpectError
h<number>("p", { class: -123 })                // $ExpectError
h<number>("p", { class: -Infinity })           // $ExpectError
h<number>("p", { class: Infinity })            // $ExpectError
h<number>("p", { class: NaN })                 // $ExpectError
h<number>("p", { class: "" })                  // $ExpectType VNode<number>
h<number>("p", { class: "hi" })                // $ExpectType VNode<number>
h<number>("p", { class: new String("") })      // $ExpectError
h<number>("p", { class: new String("hi") })    // $ExpectError
h<number>("p", { class: {} })                  // $ExpectType VNode<number>
h<number>("p", { class: new Set() })           // $ExpectError
h<number>("p", { class: [] })                  // $ExpectType VNode<number>
h<number>("p", { class: Symbol() })            // $ExpectError
h<number>("p", { class: () => { } })           // $ExpectError
h<number>("p", { class: null })                // $ExpectError
h<number>("p", { class: undefined })           // $ExpectType VNode<number>

h("p", { class: { a: true } })                // $ExpectType VNode<unknown>
h("p", { class: { a: false } })               // $ExpectType VNode<unknown>
h("p", { class: { a: 0 } })                   // $ExpectError
h("p", { class: { a: 2424 } })                // $ExpectError
h("p", { class: { a: -123 } })                // $ExpectError
h("p", { class: { a: -Infinity } })           // $ExpectError
h("p", { class: { a: Infinity } })            // $ExpectError
h("p", { class: { a: NaN } })                 // $ExpectError
h("p", { class: { a: "" } })                  // $ExpectError
h("p", { class: { a: "hi" } })                // $ExpectError
h("p", { class: { a: new String("") } })      // $ExpectError
h("p", { class: { a: new String("hi") } })    // $ExpectError
h("p", { class: { a: {} } })                  // $ExpectError
h("p", { class: { a: new Set() } })           // $ExpectError
h("p", { class: { a: [] } })                  // $ExpectError
h("p", { class: { a: Symbol() } })            // $ExpectError
h("p", { class: { a: () => { } } })           // $ExpectError
h("p", { class: { a: null } })                // $ExpectError
h("p", { class: { a: undefined } })           // $ExpectType VNode<unknown>

h<number>("p", { class: { a: true } })                // $ExpectType VNode<number>
h<number>("p", { class: { a: false } })               // $ExpectType VNode<number>
h<number>("p", { class: { a: 0 } })                   // $ExpectError
h<number>("p", { class: { a: 2424 } })                // $ExpectError
h<number>("p", { class: { a: -123 } })                // $ExpectError
h<number>("p", { class: { a: -Infinity } })           // $ExpectError
h<number>("p", { class: { a: Infinity } })            // $ExpectError
h<number>("p", { class: { a: NaN } })                 // $ExpectError
h<number>("p", { class: { a: "" } })                  // $ExpectError
h<number>("p", { class: { a: "hi" } })                // $ExpectError
h<number>("p", { class: { a: new String("") } })      // $ExpectError
h<number>("p", { class: { a: new String("hi") } })    // $ExpectError
h<number>("p", { class: { a: {} } })                  // $ExpectError
h<number>("p", { class: { a: new Set() } })           // $ExpectError
h<number>("p", { class: { a: [] } })                  // $ExpectError
h<number>("p", { class: { a: Symbol() } })            // $ExpectError
h<number>("p", { class: { a: () => { } } })           // $ExpectError
h<number>("p", { class: { a: null } })                // $ExpectError
h<number>("p", { class: { a: undefined } })           // $ExpectType VNode<number>

h("p", { class: [true] })                // $ExpectType VNode<unknown>
h("p", { class: [false] })               // $ExpectType VNode<unknown>
h("p", { class: [0] })                   // $ExpectError
h("p", { class: [2424] })                // $ExpectError
h("p", { class: [-123] })                // $ExpectError
h("p", { class: [-Infinity] })           // $ExpectError
h("p", { class: [Infinity] })            // $ExpectError
h("p", { class: [NaN] })                 // $ExpectError
h("p", { class: [""] })                  // $ExpectType VNode<unknown>
h("p", { class: ["hi"] })                // $ExpectType VNode<unknown>
h("p", { class: [new String("")] })      // $ExpectError
h("p", { class: [new String("hi")] })    // $ExpectError
h("p", { class: [{}] })                  // $ExpectType VNode<unknown>
h("p", { class: [new Set()] })           // $ExpectError
h("p", { class: [[]] })                  // $ExpectType VNode<unknown>
h("p", { class: [Symbol()] })            // $ExpectError
h("p", { class: [() => { }] })           // $ExpectError
h("p", { class: [null] })                // $ExpectError
h("p", { class: [undefined] })           // $ExpectType VNode<unknown>

h<number>("p", { class: [true] })                // $ExpectType VNode<number>
h<number>("p", { class: [false] })               // $ExpectType VNode<number>
h<number>("p", { class: [0] })                   // $ExpectError
h<number>("p", { class: [2424] })                // $ExpectError
h<number>("p", { class: [-123] })                // $ExpectError
h<number>("p", { class: [-Infinity] })           // $ExpectError
h<number>("p", { class: [Infinity] })            // $ExpectError
h<number>("p", { class: [NaN] })                 // $ExpectError
h<number>("p", { class: [""] })                  // $ExpectType VNode<number>
h<number>("p", { class: ["hi"] })                // $ExpectType VNode<number>
h<number>("p", { class: [new String("")] })      // $ExpectError
h<number>("p", { class: [new String("hi")] })    // $ExpectError
h<number>("p", { class: [{}] })                  // $ExpectType VNode<number>
h<number>("p", { class: [new Set()] })           // $ExpectError
h<number>("p", { class: [[]] })                  // $ExpectType VNode<number>
h<number>("p", { class: [Symbol()] })            // $ExpectError
h<number>("p", { class: [() => { }] })           // $ExpectError
h<number>("p", { class: [null] })                // $ExpectError
h<number>("p", { class: [undefined] })           // $ExpectType VNode<number>

h("p", { class: [{ a: true }] })       // $ExpectType VNode<unknown>
h("p", { class: [{ a: false }] })      // $ExpectType VNode<unknown>
h("p", { class: [false && "foo"] })    // $ExpectType VNode<unknown>
h("p", { class: [true || "foo"] })     // $ExpectType VNode<unknown>

h<number>("p", { class: [{ a: true }] })       // $ExpectType VNode<number>
h<number>("p", { class: [{ a: false }] })      // $ExpectType VNode<number>
h<number>("p", { class: [false && "foo"] })    // $ExpectType VNode<number>
h<number>("p", { class: [true || "foo"] })     // $ExpectType VNode<number>

// -----------------------------------------------------------------------------

h("p", { draggable: true })    // $ExpectType VNode<unknown>
h("p", { draggable: "hi" })    // $ExpectError
h("p", { draggable: 42 })      // $ExpectError

h("p", { id: "hi" })    // $ExpectType VNode<unknown>
h("p", { id: 42 })      // $ExpectError

h("p", { tabIndex: "hi" })    // $ExpectError
h("p", { tabIndex: 42 })      // $ExpectType VNode<unknown>

// -----------------------------------------------------------------------------

h("p", { style: true })                // $ExpectError
h("p", { style: false })               // $ExpectError
h("p", { style: 0 })                   // $ExpectError
h("p", { style: 2424 })                // $ExpectError
h("p", { style: -123 })                // $ExpectError
h("p", { style: -Infinity })           // $ExpectError
h("p", { style: Infinity })            // $ExpectError
h("p", { style: NaN })                 // $ExpectError
h("p", { style: "" })                  // $ExpectError
h("p", { style: "hi" })                // $ExpectError
h("p", { style: new String("") })      // $ExpectError
h("p", { style: new String("hi") })    // $ExpectError
h("p", { style: {} })                  // $ExpectType VNode<unknown>
h("p", { style: new Set() })           // $ExpectError
h("p", { style: [] })                  // $ExpectError
h("p", { style: Symbol() })            // $ExpectError
h("p", { style: () => { } })           // $ExpectError
h("p", { style: null })                // $ExpectError
h("p", { style: undefined })           // $ExpectType VNode<unknown>

h<number>("p", { style: true })                // $ExpectError
h<number>("p", { style: false })               // $ExpectError
h<number>("p", { style: 0 })                   // $ExpectError
h<number>("p", { style: 2424 })                // $ExpectError
h<number>("p", { style: -123 })                // $ExpectError
h<number>("p", { style: -Infinity })           // $ExpectError
h<number>("p", { style: Infinity })            // $ExpectError
h<number>("p", { style: NaN })                 // $ExpectError
h<number>("p", { style: "" })                  // $ExpectError
h<number>("p", { style: "hi" })                // $ExpectError
h<number>("p", { style: new String("") })      // $ExpectError
h<number>("p", { style: new String("hi") })    // $ExpectError
h<number>("p", { style: {} })                  // $ExpectType VNode<number>
h<number>("p", { style: new Set() })           // $ExpectError
h<number>("p", { style: [] })                  // $ExpectError
h<number>("p", { style: Symbol() })            // $ExpectError
h<number>("p", { style: () => { } })           // $ExpectError
h<number>("p", { style: null })                // $ExpectError
h<number>("p", { style: undefined })           // $ExpectType VNode<number>

h("p", { style: { color: true } })                // $ExpectError
h("p", { style: { color: false } })               // $ExpectError
h("p", { style: { color: 0 } })                   // $ExpectError
h("p", { style: { color: 2424 } })                // $ExpectError
h("p", { style: { color: -123 } })                // $ExpectError
h("p", { style: { color: -Infinity } })           // $ExpectError
h("p", { style: { color: Infinity } })            // $ExpectError
h("p", { style: { color: NaN } })                 // $ExpectError
h("p", { style: { color: "" } })                  // $ExpectType VNode<unknown>
h("p", { style: { color: "hi" } })                // $ExpectType VNode<unknown>
h("p", { style: { color: new String("") } })      // $ExpectError
h("p", { style: { color: new String("hi") } })    // $ExpectError
h("p", { style: { color: {} } })                  // $ExpectError
h("p", { style: { color: new Set() } })           // $ExpectError
h("p", { style: { color: [] } })                  // $ExpectError
h("p", { style: { color: Symbol() } })            // $ExpectError
h("p", { style: { color: () => { } } })           // $ExpectError
h("p", { style: { color: null } })                // $ExpectType VNode<unknown>
h("p", { style: { color: undefined } })           // $ExpectType VNode<unknown>
h("p", { style: { clor: null } })                 // $ExpectError
h("p", { style: { clor: "hi" } })                 // $ExpectError

h<number>("p", { style: { color: true } })                // $ExpectError
h<number>("p", { style: { color: false } })               // $ExpectError
h<number>("p", { style: { color: 0 } })                   // $ExpectError
h<number>("p", { style: { color: 2424 } })                // $ExpectError
h<number>("p", { style: { color: -123 } })                // $ExpectError
h<number>("p", { style: { color: -Infinity } })           // $ExpectError
h<number>("p", { style: { color: Infinity } })            // $ExpectError
h<number>("p", { style: { color: NaN } })                 // $ExpectError
h<number>("p", { style: { color: "" } })                  // $ExpectType VNode<number>
h<number>("p", { style: { color: "hi" } })                // $ExpectType VNode<number>
h<number>("p", { style: { color: new String("") } })      // $ExpectError
h<number>("p", { style: { color: new String("hi") } })    // $ExpectError
h<number>("p", { style: { color: {} } })                  // $ExpectError
h<number>("p", { style: { color: new Set() } })           // $ExpectError
h<number>("p", { style: { color: [] } })                  // $ExpectError
h<number>("p", { style: { color: Symbol() } })            // $ExpectError
h<number>("p", { style: { color: () => { } } })           // $ExpectError
h<number>("p", { style: { color: null } })                // $ExpectType VNode<number>
h<number>("p", { style: { color: undefined } })           // $ExpectType VNode<number>
h<number>("p", { style: { clor: null } })                 // $ExpectError
h<number>("p", { style: { clor: "hi" } })                 // $ExpectError

// We need to use type casting if we want to use custom properties.
h("p", { style: { "--clor": null } })           // $ExpectError
h("p", { style: { "--clor": null } as any })    // $ExpectType VNode<unknown>
h("p", { style: { "--clor": "hi" } })           // $ExpectError
h("p", { style: { "--clor": "hi" } as any })    // $ExpectType VNode<unknown>

h<number>("p", { style: { "--clor": null } })           // $ExpectError
h<number>("p", { style: { "--clor": null } as any })    // $ExpectType VNode<number>
h<number>("p", { style: { "--clor": "hi" } })           // $ExpectError
h<number>("p", { style: { "--clor": "hi" } as any })    // $ExpectType VNode<number>

h("p", { style: [true] })                // $ExpectError
h("p", { style: [false] })               // $ExpectError
h("p", { style: [0] })                   // $ExpectError
h("p", { style: [2424] })                // $ExpectError
h("p", { style: [-123] })                // $ExpectError
h("p", { style: [-Infinity] })           // $ExpectError
h("p", { style: [Infinity] })            // $ExpectError
h("p", { style: [NaN] })                 // $ExpectError
h("p", { style: [""] })                  // $ExpectError
h("p", { style: ["hi"] })                // $ExpectError
h("p", { style: [new String("")] })      // $ExpectError
h("p", { style: [new String("hi")] })    // $ExpectError
h("p", { style: [{}] })                  // $ExpectError
h("p", { style: [new Set()] })           // $ExpectError
h("p", { style: [[]] })                  // $ExpectError
h("p", { style: [Symbol()] })            // $ExpectError
h("p", { style: [() => { }] })           // $ExpectError
h("p", { style: [null] })                // $ExpectError
h("p", { style: [undefined] })           // $ExpectError

h<number>("p", { style: [true] })                // $ExpectError
h<number>("p", { style: [false] })               // $ExpectError
h<number>("p", { style: [0] })                   // $ExpectError
h<number>("p", { style: [2424] })                // $ExpectError
h<number>("p", { style: [-123] })                // $ExpectError
h<number>("p", { style: [-Infinity] })           // $ExpectError
h<number>("p", { style: [Infinity] })            // $ExpectError
h<number>("p", { style: [NaN] })                 // $ExpectError
h<number>("p", { style: [""] })                  // $ExpectError
h<number>("p", { style: ["hi"] })                // $ExpectError
h<number>("p", { style: [new String("")] })      // $ExpectError
h<number>("p", { style: [new String("hi")] })    // $ExpectError
h<number>("p", { style: [{}] })                  // $ExpectError
h<number>("p", { style: [new Set()] })           // $ExpectError
h<number>("p", { style: [[]] })                  // $ExpectError
h<number>("p", { style: [Symbol()] })            // $ExpectError
h<number>("p", { style: [() => { }] })           // $ExpectError
h<number>("p", { style: [null] })                // $ExpectError
h<number>("p", { style: [undefined] })           // $ExpectError

// -----------------------------------------------------------------------------

h<boolean>("br", {})                               // $ExpectType VNode<boolean>
h<true>("br", {})                                  // $ExpectType VNode<true>
h<false>("br", {})                                 // $ExpectType VNode<false>
h<0>("br", {})                                     // $ExpectType VNode<0>
h<2424>("br", {})                                  // $ExpectType VNode<2424>
h<-123>("br", {})                                  // $ExpectType VNode<-123>
h<number>("br", {})                                // $ExpectType VNode<number>
h<"">("br", {})                                    // $ExpectType VNode<"">
h<"hi">("br", {})                                  // $ExpectType VNode<"hi">
h<string>("br", {})                                // $ExpectType VNode<string>
h<{}>("br", {})                                    // $ExpectType VNode<{}>
h<{ [_: string]: any }>("br", {})                  // $ExpectType VNode<{ [_: string]: any; }>
h<{ [_: string]: any, foo: number }>("br", {})     // $ExpectType VNode<{ [_: string]: any; foo: number; }>
h<{ [_: string]: any, foo?: number }>("br", {})    // $ExpectType VNode<{ [_: string]: any; foo?: number | undefined; }>
h<{ foo: number }>("br", {})                       // $ExpectType VNode<{ foo: number; }>
h<{ foo?: number }>("br", {})                      // $ExpectType VNode<{ foo?: number | undefined; }>
h<Set<any>>("br", {})                              // $ExpectType VNode<Set<any>>
h<Set<number>>("br", {})                           // $ExpectType VNode<Set<number>>
h<[]>("br", {})                                    // $ExpectType VNode<[]>
h<symbol>("br", {})                                // $ExpectType VNode<symbol>
h<() => {}>("br", {})                              // $ExpectType VNode<() => {}>
h<null>("br", {})                                  // $ExpectType VNode<null>
h<undefined>("br", {})                             // $ExpectType VNode<undefined>

// -----------------------------------------------------------------------------

// $ExpectType VNode<unknown>
h("p", { customThingy: "blahbiddyblah"}, text("hi"))

// $ExpectType VNode<unknown>
h("p", { something: 6543 }, text("hi"))

// $ExpectType VNode<unknown>
h("p", { "data-thingy": "blahbiddyblah"}, text("hi"))

// $ExpectType VNode<unknown>
h("a", { id: "unique" }, [h("br", {})])

// $ExpectType VNode<unknown>
h("a", { onclick: (state) => state }, [h("br", {})])

// $ExpectError
h("a", { onclick: (state) => ({ ...state }) }, [h("br", {})])

// $ExpectType VNode<unknown>
h("a", { onclick: (state) => [state] }, [h("br", {})])

// $ExpectError
h("a", { onclick: (state) => [{ ...state }] }, [h("br", {})])

// $ExpectType VNode<number>
h("a", { onclick: ((state: number) => state * 2) }, [h("br", {})])

// $ExpectType VNode<number>
h<number>("a", { onclick: (state) => state * 2 }, [h("br", {})])

// -----------------------------------------------------------------------------

type Test = { bar?: number, foo: number }

// $ExpectType VNode<Test>
h<Test, any>("button", {
  onclick: (state) => ({ ...state, bar: state.foo * 2 })
}, [text("clicky")])

// -----------------------------------------------------------------------------

h("p", {}, [true])         // $ExpectType VNode<unknown>
h("p", {}, [false])        // $ExpectType VNode<unknown>
h("p", {}, [0])            // $ExpectError
h("p", {}, [2424])         // $ExpectError
h("p", {}, [-123])         // $ExpectError
h("p", {}, [-Infinity])    // $ExpectError
h("p", {}, [Infinity])     // $ExpectError
h("p", {}, [NaN])          // $ExpectError
h("p", {}, [""])           // $ExpectError
h("p", {}, ["hi"])         // $ExpectError
h("p", {}, [{}])           // $ExpectError
h("p", {}, [new Set()])    // $ExpectError
h("p", {}, [[]])           // $ExpectError
h("p", {}, [Symbol()])     // $ExpectError
h("p", {}, [() => { }])    // $ExpectError
h("p", {}, [null])         // $ExpectType VNode<unknown>
h("p", {}, [undefined])    // $ExpectType VNode<unknown>

h("p", {}, h("br", {}))        // $ExpectType VNode<unknown>
h("p", {}, [h("br", {})])      // $ExpectType VNode<unknown>
h("p", {}, [text("hello")])    // $ExpectType VNode<unknown>

// -----------------------------------------------------------------------------

h("p", text("hi"))    // $ExpectError

// $ExpectType VNode<unknown>
h("input", {
  oninput: (state, event) => event && (event.target as HTMLInputElement).value,
})
