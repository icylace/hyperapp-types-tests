import { Action, Dispatch, Subscription, Unsubscribe, app } from "hyperapp"

// -----------------------------------------------------------------------------

type SubOpts<S> = { foo: Action<S, string> }

const _subscriber = <S>(
  dispatch: Dispatch<S>,
  options: unknown
): Unsubscribe => {
  const knownOptions = options as SubOpts<S>
  // Now use `knownOptions` where you need it...

  return () => {}
}

const subscribe = <S>(foo: Action<S, string>): Subscription<S, unknown> =>
  [_subscriber, { foo }]

// ----

const GotSubData: Action<string, string> = (state, data) => state

app({
  init: 'boop',
  subscriptions: state => [
    subscribe(GotSubData)
  ],
})
