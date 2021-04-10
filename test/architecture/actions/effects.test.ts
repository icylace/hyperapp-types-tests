import { Dispatch, Effect } from "hyperapp"

const runEcho = (dispatch: Dispatch<string>, data: string): void => {
  console.log(data)
  dispatch((state, x) => state + x, data)
}

// TODO:
// - remove `EffectCreator` if possible
// - write more type tests, especially for effects and subscriptions
// - consolidate latest type changes into single PR
// - test if the `_` in `TypedH` is really helpful/necessary
//   - ultimately it might not be
// - remove `Payload` because it doesn't do enough to justify its existence

const echo = (x: string): Effect<string, string> => [runEcho, x]

// $ExpectType Effect<string, string>
echo("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Unsubscribe

// -----------------------------------------------------------------------------

// Credit: https://gist.github.com/eteeselink/81314282c95cd692ea1d
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const runEchoEventually = async (dispatch: Dispatch<string>, data: string): Promise<void> => {
  await delay(5000)
  console.log(data)
  window.requestAnimationFrame(() => dispatch((state, x) => state + x, data))
}

const echoEventually = (x: string): Effect<string, string> => [runEchoEventually, x]

// $ExpectType Effect<string, string>
echoEventually("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Promise<Unsubscribe>
