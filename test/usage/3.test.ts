// Credit:
// https://discord.com/channels/804672552348680192/805746611467583499/835126064559947866

import type { Action, Dispatch, Subscription, Unsubscribe } from "hyperapp"

import { app } from "hyperapp"

type SubOpts<S> = { action: Action<S, string> }

const subscriber = <S>(
  _dispatch: Dispatch<S>,
  _options: SubOpts<S>
): Unsubscribe => {
  return () => {}
}

const subscribe = <S>(action: Action<S, string>): Subscription<S, SubOpts<S>> =>
  [subscriber, { action }]

const GotSubData: Action<string, string> = (state) => state

app({
  init: "boop",
  subscriptions: (_state) => [
    subscribe(GotSubData)
  ],
})
