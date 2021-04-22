import { text } from "hyperapp"

text()                    // $ExpectError
text(true)                // $ExpectType VNode<unknown>
text(false)               // $ExpectType VNode<unknown>
text(0)                   // $ExpectType VNode<unknown>
text(2424)                // $ExpectType VNode<unknown>
text(-123)                // $ExpectType VNode<unknown>
text(-Infinity)           // $ExpectType VNode<unknown>
text(Infinity)            // $ExpectType VNode<unknown>
text(NaN)                 // $ExpectType VNode<unknown>
text("")                  // $ExpectType VNode<unknown>
text("hi")                // $ExpectType VNode<unknown>
text(new String(""))      // $ExpectType VNode<unknown>
text(new String("hi"))    // $ExpectType VNode<unknown>
text({})                  // $ExpectType VNode<unknown>
text(new Set())           // $ExpectType VNode<unknown>
text([])                  // $ExpectType VNode<unknown>
text(Symbol())            // $ExpectError
text(() => { })           // $ExpectError
text(null)                // $ExpectType VNode<unknown>
text(undefined)           // $ExpectType VNode<unknown>

text<number>()                    // $ExpectError
text<number>(true)                // $ExpectType VNode<number>
text<number>(false)               // $ExpectType VNode<number>
text<number>(0)                   // $ExpectType VNode<number>
text<number>(2424)                // $ExpectType VNode<number>
text<number>(-123)                // $ExpectType VNode<number>
text<number>(-Infinity)           // $ExpectType VNode<number>
text<number>(Infinity)            // $ExpectType VNode<number>
text<number>(NaN)                 // $ExpectType VNode<number>
text<number>("")                  // $ExpectType VNode<number>
text<number>("hi")                // $ExpectType VNode<number>
text<number>(new String(""))      // $ExpectType VNode<number>
text<number>(new String("hi"))    // $ExpectType VNode<number>
text<number>({})                  // $ExpectType VNode<number>
text<number>(new Set())           // $ExpectType VNode<number>
text<number>([])                  // $ExpectType VNode<number>

// TODO:
text<number>(Symbol())            // $ExpectError

// TODO:
text<number>(() => { })           // $ExpectError

text<number>(null)                // $ExpectType VNode<number>
text<number>(undefined)           // $ExpectType VNode<number>
