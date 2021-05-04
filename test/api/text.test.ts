import { text } from "hyperapp"

text()                    // $ExpectError
text(true)                // $ExpectType TextVNode
text(false)               // $ExpectType TextVNode
text(0)                   // $ExpectType TextVNode
text(2424)                // $ExpectType TextVNode
text(-123)                // $ExpectType TextVNode
text(-Infinity)           // $ExpectType TextVNode
text(Infinity)            // $ExpectType TextVNode
text(NaN)                 // $ExpectType TextVNode
text("")                  // $ExpectType TextVNode
text("hi")                // $ExpectType TextVNode
text(new String(""))      // $ExpectType TextVNode
text(new String("hi"))    // $ExpectType TextVNode
text({})                  // $ExpectType TextVNode
text(new Set())           // $ExpectType TextVNode
text([])                  // $ExpectType TextVNode
text(Symbol())            // $ExpectError
text(() => { })           // $ExpectError
text(null)                // $ExpectType TextVNode
text(undefined)           // $ExpectType TextVNode

// text<number>()                    // $ExpectError
// text<number>(true)                // $ExpectType TextVNode
// text<number>(false)               // $ExpectType TextVNode
// text<number>(0)                   // $ExpectType TextVNode
// text<number>(2424)                // $ExpectType TextVNode
// text<number>(-123)                // $ExpectType TextVNode
// text<number>(-Infinity)           // $ExpectType TextVNode
// text<number>(Infinity)            // $ExpectType TextVNode
// text<number>(NaN)                 // $ExpectType TextVNode
// text<number>("")                  // $ExpectType TextVNode
// text<number>("hi")                // $ExpectType TextVNode
// text<number>(new String(""))      // $ExpectType TextVNode
// text<number>(new String("hi"))    // $ExpectType TextVNode
// text<number>({})                  // $ExpectType TextVNode
// text<number>(new Set())           // $ExpectType TextVNode
// text<number>([])                  // $ExpectType TextVNode

// // TODO:
// text<number>(Symbol())            // $ExpectError

// // TODO:
// text<number>(() => { })           // $ExpectError

// text<number>(null)                // $ExpectType TextVNode
// text<number>(undefined)           // $ExpectType TextVNode
