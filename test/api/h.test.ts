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
h("hi", {})                // $ExpectType VDOM<unknown>
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
h<number>("hi", {})                // $ExpectType VDOM<number>
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
h("p", {})                  // $ExpectType VDOM<unknown>
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
h<number>("p", {})                  // $ExpectType VDOM<number>
h<number>("p", new Set())           // $ExpectError
h<number>("p", [])                  // $ExpectError
h<number>("p", Symbol())            // $ExpectError
h<number>("p", () => { })           // $ExpectError
h<number>("p", null)                // $ExpectError
h<number>("p", undefined)           // $ExpectError

h("p", {}, true)                // $ExpectType VDOM<unknown>
h("p", {}, false)               // $ExpectType VDOM<unknown>
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
h("p", {}, [])                  // $ExpectType VDOM<unknown>
h("p", {}, Symbol())            // $ExpectError
h("p", {}, () => { })           // $ExpectError
h("p", {}, null)                // $ExpectType VDOM<unknown>
h("p", {}, undefined)           // $ExpectType VDOM<unknown>

h<number>("p", {}, true)                // $ExpectType VDOM<number>
h<number>("p", {}, false)               // $ExpectType VDOM<number>
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
h<number>("p", {}, [])                  // $ExpectType VDOM<number>
h<number>("p", {}, Symbol())            // $ExpectError
h<number>("p", {}, () => { })           // $ExpectError
h<number>("p", {}, null)                // $ExpectType VDOM<number>
h<number>("p", {}, undefined)           // $ExpectType VDOM<number>

// -----------------------------------------------------------------------------

h("p", { class: true })                // $ExpectType VDOM<unknown>
h("p", { class: false })               // $ExpectType VDOM<unknown>
h("p", { class: 0 })                   // $ExpectError
h("p", { class: 2424 })                // $ExpectError
h("p", { class: -123 })                // $ExpectError
h("p", { class: -Infinity })           // $ExpectError
h("p", { class: Infinity })            // $ExpectError
h("p", { class: NaN })                 // $ExpectError
h("p", { class: "" })                  // $ExpectType VDOM<unknown>
h("p", { class: "hi" })                // $ExpectType VDOM<unknown>
h("p", { class: new String("") })      // $ExpectError
h("p", { class: new String("hi") })    // $ExpectError
h("p", { class: {} })                  // $ExpectType VDOM<unknown>
h("p", { class: new Set() })           // $ExpectError
h("p", { class: [] })                  // $ExpectType VDOM<unknown>
h("p", { class: Symbol() })            // $ExpectError
h("p", { class: () => { } })           // $ExpectError
h("p", { class: null })                // $ExpectError
h("p", { class: undefined })           // $ExpectType VDOM<unknown>

h<number>("p", { class: true })                // $ExpectType VDOM<number>
h<number>("p", { class: false })               // $ExpectType VDOM<number>
h<number>("p", { class: 0 })                   // $ExpectError
h<number>("p", { class: 2424 })                // $ExpectError
h<number>("p", { class: -123 })                // $ExpectError
h<number>("p", { class: -Infinity })           // $ExpectError
h<number>("p", { class: Infinity })            // $ExpectError
h<number>("p", { class: NaN })                 // $ExpectError
h<number>("p", { class: "" })                  // $ExpectType VDOM<number>
h<number>("p", { class: "hi" })                // $ExpectType VDOM<number>
h<number>("p", { class: new String("") })      // $ExpectError
h<number>("p", { class: new String("hi") })    // $ExpectError
h<number>("p", { class: {} })                  // $ExpectType VDOM<number>
h<number>("p", { class: new Set() })           // $ExpectError
h<number>("p", { class: [] })                  // $ExpectType VDOM<number>
h<number>("p", { class: Symbol() })            // $ExpectError
h<number>("p", { class: () => { } })           // $ExpectError
h<number>("p", { class: null })                // $ExpectError
h<number>("p", { class: undefined })           // $ExpectType VDOM<number>

h("p", { class: { a: true } })                // $ExpectType VDOM<unknown>
h("p", { class: { a: false } })               // $ExpectType VDOM<unknown>
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
h("p", { class: { a: undefined } })           // $ExpectType VDOM<unknown>

h<number>("p", { class: { a: true } })                // $ExpectType VDOM<number>
h<number>("p", { class: { a: false } })               // $ExpectType VDOM<number>
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
h<number>("p", { class: { a: undefined } })           // $ExpectType VDOM<number>

h("p", { class: [true] })                // $ExpectType VDOM<unknown>
h("p", { class: [false] })               // $ExpectType VDOM<unknown>
h("p", { class: [0] })                   // $ExpectError
h("p", { class: [2424] })                // $ExpectError
h("p", { class: [-123] })                // $ExpectError
h("p", { class: [-Infinity] })           // $ExpectError
h("p", { class: [Infinity] })            // $ExpectError
h("p", { class: [NaN] })                 // $ExpectError
h("p", { class: [""] })                  // $ExpectType VDOM<unknown>
h("p", { class: ["hi"] })                // $ExpectType VDOM<unknown>
h("p", { class: [new String("")] })      // $ExpectError
h("p", { class: [new String("hi")] })    // $ExpectError
h("p", { class: [{}] })                  // $ExpectType VDOM<unknown>
h("p", { class: [new Set()] })           // $ExpectError
h("p", { class: [[]] })                  // $ExpectType VDOM<unknown>
h("p", { class: [Symbol()] })            // $ExpectError
h("p", { class: [() => { }] })           // $ExpectError
h("p", { class: [null] })                // $ExpectError
h("p", { class: [undefined] })           // $ExpectType VDOM<unknown>

h<number>("p", { class: [true] })                // $ExpectType VDOM<number>
h<number>("p", { class: [false] })               // $ExpectType VDOM<number>
h<number>("p", { class: [0] })                   // $ExpectError
h<number>("p", { class: [2424] })                // $ExpectError
h<number>("p", { class: [-123] })                // $ExpectError
h<number>("p", { class: [-Infinity] })           // $ExpectError
h<number>("p", { class: [Infinity] })            // $ExpectError
h<number>("p", { class: [NaN] })                 // $ExpectError
h<number>("p", { class: [""] })                  // $ExpectType VDOM<number>
h<number>("p", { class: ["hi"] })                // $ExpectType VDOM<number>
h<number>("p", { class: [new String("")] })      // $ExpectError
h<number>("p", { class: [new String("hi")] })    // $ExpectError
h<number>("p", { class: [{}] })                  // $ExpectType VDOM<number>
h<number>("p", { class: [new Set()] })           // $ExpectError
h<number>("p", { class: [[]] })                  // $ExpectType VDOM<number>
h<number>("p", { class: [Symbol()] })            // $ExpectError
h<number>("p", { class: [() => { }] })           // $ExpectError
h<number>("p", { class: [null] })                // $ExpectError
h<number>("p", { class: [undefined] })           // $ExpectType VDOM<number>

h("p", { class: [{ a: true }] })       // $ExpectType VDOM<unknown>
h("p", { class: [{ a: false }] })      // $ExpectType VDOM<unknown>
h("p", { class: [false && "foo"] })    // $ExpectType VDOM<unknown>
h("p", { class: [true || "foo"] })     // $ExpectType VDOM<unknown>

h<number>("p", { class: [{ a: true }] })       // $ExpectType VDOM<number>
h<number>("p", { class: [{ a: false }] })      // $ExpectType VDOM<number>
h<number>("p", { class: [false && "foo"] })    // $ExpectType VDOM<number>
h<number>("p", { class: [true || "foo"] })     // $ExpectType VDOM<number>

// -----------------------------------------------------------------------------

h("p", { draggable: true })    // $ExpectType VDOM<unknown>
h("p", { draggable: "hi" })    // $ExpectError
h("p", { draggable: 42 })      // $ExpectError

h("p", { id: "hi" })    // $ExpectType VDOM<unknown>
h("p", { id: 42 })      // $ExpectError

h("p", { tabIndex: "hi" })    // $ExpectError
h("p", { tabIndex: 42 })      // $ExpectType VDOM<unknown>

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
h("p", { style: {} })                  // $ExpectType VDOM<unknown>
h("p", { style: new Set() })           // $ExpectError
h("p", { style: [] })                  // $ExpectError
h("p", { style: Symbol() })            // $ExpectError
h("p", { style: () => { } })           // $ExpectError
h("p", { style: null })                // $ExpectError
h("p", { style: undefined })           // $ExpectType VDOM<unknown>

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
h<number>("p", { style: {} })                  // $ExpectType VDOM<number>
h<number>("p", { style: new Set() })           // $ExpectError
h<number>("p", { style: [] })                  // $ExpectError
h<number>("p", { style: Symbol() })            // $ExpectError
h<number>("p", { style: () => { } })           // $ExpectError
h<number>("p", { style: null })                // $ExpectError
h<number>("p", { style: undefined })           // $ExpectType VDOM<number>

h("p", { style: { color: true } })                // $ExpectError
h("p", { style: { color: false } })               // $ExpectError
h("p", { style: { color: 0 } })                   // $ExpectError
h("p", { style: { color: 2424 } })                // $ExpectError
h("p", { style: { color: -123 } })                // $ExpectError
h("p", { style: { color: -Infinity } })           // $ExpectError
h("p", { style: { color: Infinity } })            // $ExpectError
h("p", { style: { color: NaN } })                 // $ExpectError
h("p", { style: { color: "" } })                  // $ExpectType VDOM<unknown>
h("p", { style: { color: "hi" } })                // $ExpectType VDOM<unknown>
h("p", { style: { color: new String("") } })      // $ExpectError
h("p", { style: { color: new String("hi") } })    // $ExpectError
h("p", { style: { color: {} } })                  // $ExpectError
h("p", { style: { color: new Set() } })           // $ExpectError
h("p", { style: { color: [] } })                  // $ExpectError
h("p", { style: { color: Symbol() } })            // $ExpectError
h("p", { style: { color: () => { } } })           // $ExpectError
h("p", { style: { color: null } })                // $ExpectType VDOM<unknown>
h("p", { style: { color: undefined } })           // $ExpectType VDOM<unknown>
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
h<number>("p", { style: { color: "" } })                  // $ExpectType VDOM<number>
h<number>("p", { style: { color: "hi" } })                // $ExpectType VDOM<number>
h<number>("p", { style: { color: new String("") } })      // $ExpectError
h<number>("p", { style: { color: new String("hi") } })    // $ExpectError
h<number>("p", { style: { color: {} } })                  // $ExpectError
h<number>("p", { style: { color: new Set() } })           // $ExpectError
h<number>("p", { style: { color: [] } })                  // $ExpectError
h<number>("p", { style: { color: Symbol() } })            // $ExpectError
h<number>("p", { style: { color: () => { } } })           // $ExpectError
h<number>("p", { style: { color: null } })                // $ExpectType VDOM<number>
h<number>("p", { style: { color: undefined } })           // $ExpectType VDOM<number>
h<number>("p", { style: { clor: null } })                 // $ExpectError
h<number>("p", { style: { clor: "hi" } })                 // $ExpectError

// We need to use type casting if we want to use custom properties.
h("p", { style: { "--clor": null } })           // $ExpectError
h("p", { style: { "--clor": null } as any })    // $ExpectType VDOM<unknown>
h("p", { style: { "--clor": "hi" } })           // $ExpectError
h("p", { style: { "--clor": "hi" } as any })    // $ExpectType VDOM<unknown>

h<number>("p", { style: { "--clor": null } })           // $ExpectError
h<number>("p", { style: { "--clor": null } as any })    // $ExpectType VDOM<number>
h<number>("p", { style: { "--clor": "hi" } })           // $ExpectError
h<number>("p", { style: { "--clor": "hi" } as any })    // $ExpectType VDOM<number>

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

// $ExpectType VDOM<unknown>
h("p", { customThingy: "blahbiddyblah"}, text("hi"))

// $ExpectType VDOM<unknown>
h("p", { "data-thingy": "blahbiddyblah"}, text("hi"))

// $ExpectType VDOM<unknown>
h("a", { id: "unique" }, [h("br", {})])

// $ExpectType VDOM<unknown>
h("a", { onclick: (state) => state }, [h("br", {})])

// $ExpectError
h("a", { onclick: (state) => ({ ...state }) }, [h("br", {})])

// $ExpectType VDOM<unknown>
h("a", { onclick: (state) => [state] }, [h("br", {})])

// $ExpectError
h("a", { onclick: (state) => [{ ...state }] }, [h("br", {})])

// $ExpectType VDOM<number>
h("a", { onclick: ((state: number) => state * 2) }, [h("br", {})])

// $ExpectType VDOM<number>
h<number>("a", { onclick: (state) => state * 2 }, [h("br", {})])

// -----------------------------------------------------------------------------

type Test = { bar?: number, foo: number }

// $ExpectType VDOM<Test>
h<Test, any>("button", {
  onclick: (state) => ({ ...state, bar: state.foo * 2 })
}, [text("clicky")])

// -----------------------------------------------------------------------------

h("p", {}, [true])         // $ExpectType VDOM<unknown>
h("p", {}, [false])        // $ExpectType VDOM<unknown>
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
h("p", {}, [null])         // $ExpectType VDOM<unknown>
h("p", {}, [undefined])    // $ExpectType VDOM<unknown>

h("p", {}, h("br", {}))        // $ExpectType VDOM<unknown>
h("p", {}, [h("br", {})])      // $ExpectType VDOM<unknown>
h("p", {}, [text("hello")])    // $ExpectType VDOM<unknown>

// -----------------------------------------------------------------------------

h("p", text("hi"))    // $ExpectError

// $ExpectType VDOM<unknown>
h("input", {
  oninput: (state, event) => event && (event.target as HTMLInputElement).value,
})
