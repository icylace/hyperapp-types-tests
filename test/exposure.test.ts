// Private types. Attempting to import them should cause errors.
/* *
import type {
  AllOrNothing,
  AtLeastOne,
  AtLeastSomething,
  EventsMap,
  Indexable,
  IndexableByKey,
  NonEmptyString,
} from "hyperapp"
/* */

// Public types. Attempting to import them should be fine.
import type {
  Action,
  App,
  ClassProp,
  CustomPayloads,
  Dispatch,
  Dispatchable,
  Effect,
  EventActions,
  MaybeVNode,
  Props,
  StyleProp,
  Subscription,
  TypedH,
  Unsubscribe,
  VNode,
} from "hyperapp"

// Public functions. Attempting to import them should be fine.
import { app, h, memo, text } from "hyperapp"
