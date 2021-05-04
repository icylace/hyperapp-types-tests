import { h, text, memo } from "hyperapp"

memo()                    // $ExpectError
memo(true)                // $ExpectError
memo(false)               // $ExpectError
memo(0)                   // $ExpectError
memo(2424)                // $ExpectError
memo(-123)                // $ExpectError
memo(-Infinity)           // $ExpectError
memo(Infinity)            // $ExpectError
memo(NaN)                 // $ExpectError
memo("")                  // $ExpectError
memo("hi")                // $ExpectError
memo(new String(""))      // $ExpectError
memo(new String("hi"))    // $ExpectError
memo({})                  // $ExpectError
memo(new Set())           // $ExpectError
memo([])                  // $ExpectError
memo(Symbol())            // $ExpectError
memo(() => { })           // $ExpectError
memo(null)                // $ExpectError
memo(undefined)           // $ExpectError

memo<number>()                    // $ExpectError
memo<number>(true)                // $ExpectError
memo<number>(false)               // $ExpectError
memo<number>(0)                   // $ExpectError
memo<number>(2424)                // $ExpectError
memo<number>(-123)                // $ExpectError
memo<number>(-Infinity)           // $ExpectError
memo<number>(Infinity)            // $ExpectError
memo<number>(NaN)                 // $ExpectError
memo<number>("")                  // $ExpectError
memo<number>("hi")                // $ExpectError
memo<number>(new String(""))      // $ExpectError
memo<number>(new String("hi"))    // $ExpectError
memo<number>({})                  // $ExpectError
memo<number>(new Set())           // $ExpectError
memo<number>([])                  // $ExpectError
memo<number>(Symbol())            // $ExpectError
memo<number>(() => { })           // $ExpectError
memo<number>(null)                // $ExpectError
memo<number>(undefined)           // $ExpectError

// -----------------------------------------------------------------------------

memo(true, {})                // $ExpectError
memo(false, {})               // $ExpectError
memo(0, {})                   // $ExpectError
memo(2424, {})                // $ExpectError
memo(-123, {})                // $ExpectError
memo(-Infinity, {})           // $ExpectError
memo(Infinity, {})            // $ExpectError
memo(NaN, {})                 // $ExpectError
memo("", {})                  // $ExpectError
memo("hi", {})                // $ExpectError
memo(new String(""), {})      // $ExpectError
memo(new String("hi"), {})    // $ExpectError
memo({}, {})                  // $ExpectError
memo(new Set(), {})           // $ExpectError
memo([], {})                  // $ExpectError
memo(Symbol(), {})            // $ExpectError
memo(() => { }, {})           // $ExpectError
memo(null, {})                // $ExpectError
memo(undefined, {})           // $ExpectError

memo<number>(true, {})                // $ExpectError
memo<number>(false, {})               // $ExpectError
memo<number>(0, {})                   // $ExpectError
memo<number>(2424, {})                // $ExpectError
memo<number>(-123, {})                // $ExpectError
memo<number>(-Infinity, {})           // $ExpectError
memo<number>(Infinity, {})            // $ExpectError
memo<number>(NaN, {})                 // $ExpectError
memo<number>("", {})                  // $ExpectError
memo<number>("hi", {})                // $ExpectError
memo<number>(new String(""), {})      // $ExpectError
memo<number>(new String("hi"), {})    // $ExpectError
memo<number>({}, {})                  // $ExpectError
memo<number>(new Set(), {})           // $ExpectError
memo<number>([], {})                  // $ExpectError
memo<number>(Symbol(), {})            // $ExpectError
memo<number>(() => { }, {})           // $ExpectError
memo<number>(null, {})                // $ExpectError
memo<number>(undefined, {})           // $ExpectError

// -----------------------------------------------------------------------------

memo(text("hi"))               // $ExpectError
memo(text("hi"), undefined)    // $ExpectError
memo(text("hi"), null)         // $ExpectError
memo(text("hi"), {})           // $ExpectError

memo<number>(text("hi"))               // $ExpectError
memo<number>(text("hi"), undefined)    // $ExpectError
memo<number>(text("hi"), null)         // $ExpectError
memo<number>(text("hi"), {})           // $ExpectError

memo(text, "hi")                  // $ExpectType VNode<unknown>
memo(text, ["hi"])                // $ExpectType VNode<unknown>
memo(text, new String("hi"))      // $ExpectType VNode<unknown>
memo(text, new String(["hi"]))    // $ExpectType VNode<unknown>

memo<number>(text, "hi")                  // $ExpectType VNode<number>
memo<number>(text, ["hi"])                // $ExpectType VNode<number>
memo<number>(text, new String("hi"))      // $ExpectType VNode<number>
memo<number>(text, new String(["hi"]))    // $ExpectType VNode<number>

memo<string>(text, "hi")                  // $ExpectType VNode<string>
memo<string>(text, ["hi"])                // $ExpectType VNode<string>
memo<string>(text, new String("hi"))      // $ExpectType VNode<string>
memo<string>(text, new String(["hi"]))    // $ExpectType VNode<string>

// $ExpectType VNode<unknown>
memo((data) => h("div", {}, text(data)), "hi")

// $ExpectType VNode<number>
memo<number>((data) => h("div", {}, text(data)), "hi")

// $ExpectType VNode<string>
memo<string>((data) => h("div", {}, text(data)), "hi")

// $ExpectType ElementVNode<unknown>
h("div", {}, memo(text, ["hi"]))
