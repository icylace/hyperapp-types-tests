import { text } from "hyperapp"

text()                    // $ExpectError
text(true)                // $ExpectType VDOM<unknown>
text(false)               // $ExpectType VDOM<unknown>
text(0)                   // $ExpectType VDOM<unknown>
text(2424)                // $ExpectType VDOM<unknown>
text(-123)                // $ExpectType VDOM<unknown>
text(-Infinity)           // $ExpectType VDOM<unknown>
text(Infinity)            // $ExpectType VDOM<unknown>
text(NaN)                 // $ExpectType VDOM<unknown>
text("")                  // $ExpectType VDOM<unknown>
text("hi")                // $ExpectType VDOM<unknown>
text(new String(""))      // $ExpectType VDOM<unknown>
text(new String("hi"))    // $ExpectType VDOM<unknown>
text({})                  // $ExpectType VDOM<unknown>
text(new Set())           // $ExpectType VDOM<unknown>
text([])                  // $ExpectType VDOM<unknown>
text(Symbol())            // $ExpectError
text(() => { })           // $ExpectError
text(null)                // $ExpectType VDOM<unknown>
text(undefined)           // $ExpectType VDOM<unknown>

text<number>()                    // $ExpectError
text<number>(true)                // $ExpectType VDOM<number>
text<number>(false)               // $ExpectType VDOM<number>
text<number>(0)                   // $ExpectType VDOM<number>
text<number>(2424)                // $ExpectType VDOM<number>
text<number>(-123)                // $ExpectType VDOM<number>
text<number>(-Infinity)           // $ExpectType VDOM<number>
text<number>(Infinity)            // $ExpectType VDOM<number>
text<number>(NaN)                 // $ExpectType VDOM<number>
text<number>("")                  // $ExpectType VDOM<number>
text<number>("hi")                // $ExpectType VDOM<number>
text<number>(new String(""))      // $ExpectType VDOM<number>
text<number>(new String("hi"))    // $ExpectType VDOM<number>
text<number>({})                  // $ExpectType VDOM<number>
text<number>(new Set())           // $ExpectType VDOM<number>
text<number>([])                  // $ExpectType VDOM<number>

// TODO:
text<number>(Symbol())            // $ExpectError

// TODO:
text<number>(() => { })           // $ExpectError

text<number>(null)                // $ExpectType VDOM<number>
text<number>(undefined)           // $ExpectType VDOM<number>
