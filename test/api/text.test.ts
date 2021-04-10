import { text } from "hyperapp"

text()                    // $ExpectError
text(true)                // $ExpectType VDOM<unknown, unknown>
text(false)               // $ExpectType VDOM<unknown, unknown>
text(0)                   // $ExpectType VDOM<unknown, unknown>
text(2424)                // $ExpectType VDOM<unknown, unknown>
text(-123)                // $ExpectType VDOM<unknown, unknown>
text(-Infinity)           // $ExpectType VDOM<unknown, unknown>
text(Infinity)            // $ExpectType VDOM<unknown, unknown>
text(NaN)                 // $ExpectType VDOM<unknown, unknown>
text("")                  // $ExpectType VDOM<unknown, unknown>
text("hi")                // $ExpectType VDOM<unknown, unknown>
text(new String(""))      // $ExpectType VDOM<unknown, unknown>
text(new String("hi"))    // $ExpectType VDOM<unknown, unknown>
text({})                  // $ExpectType VDOM<unknown, unknown>
text(new Set())           // $ExpectType VDOM<unknown, unknown>
text([])                  // $ExpectType VDOM<unknown, unknown>
text(Symbol())            // $ExpectError
text(() => { })           // $ExpectError
text(null)                // $ExpectType VDOM<unknown, unknown>
text(undefined)           // $ExpectType VDOM<unknown, unknown>
