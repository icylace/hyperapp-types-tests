import { Dispatch, EffectCreator, Payload } from "hyperapp"

const runEcho = (dispatch: Dispatch<string>, data?: Payload<string>): void => {
  if (!data) return
  console.log(data)
  dispatch((state, x) => state + x, data)
}

const echo: EffectCreator<string, string> = (x) => [runEcho, x]

// $ExpectType Effect<string, string>
echo("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Unsubscribe

// -----------------------------------------------------------------------------

// Credit: https://gist.github.com/eteeselink/81314282c95cd692ea1d
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const runEchoEventually = async (dispatch: Dispatch<string>, data?: Payload<string>): Promise<void> => {
  if (!data) return
  await delay(5000)
  console.log(data)
  window.requestAnimationFrame(() => dispatch((state, x) => state + x, data))
}

const echoEventually: EffectCreator<string, string> = (x) => [runEchoEventually, x]

// $ExpectType Effect<string, string>
echoEventually("hi")

// -----------------------------------------------------------------------------

// TODO:
// => Promise<Unsubscribe>
