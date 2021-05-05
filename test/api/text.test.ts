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
