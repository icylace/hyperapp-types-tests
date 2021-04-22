// Minimum TypeScript Version: 4.2

// This requires every property of an object or none at all.
type AllOrNothing<T> = T | { [K in keyof T]?: never }

// This ensures at least one property in an object is present.
type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T]
// Credit: https://stackoverflow.com/a/59987826/1935675

// This ensures at least one object property group is present.
type AtLeastSomething<T, U> = U | AtLeastOne<T> & AllOrNothing<U>

// Most event typings are provided by TypeScript itself.
type EventsMap =
  & { [K in keyof HTMLElementEventMap as `on${K}`]: HTMLElementEventMap[K] }
  & { [K in keyof WindowEventMap as `on${K}`]: WindowEventMap[K] }
  & { onsearch: Event }

// Indexable values are able to use subscripting.
type Indexable = string | unknown[] | Record<string, any>

// This validates plain objects while invalidating array objects and string
// objects by disallowing numerical indexing.
type IndexableByKey = Record<number, never>

// `h()` can't handle the abscence of a tag name.
type NonEmptyString<T> = T extends "" ? never : T

// -----------------------------------------------------------------------------

declare module "hyperapp" {
  // `app()` initiates a Hyperapp instance. `app()` along with runners and
  // subscribers are the only places where side effects are allowed.
  function app<S>(props: App<S>): Dispatch<S>

  // `h()` builds a virtual DOM node.
  function h<S, C = unknown, T extends string = string>(
    tag: NonEmptyString<T>,
    props: CustomPayloads<S, C> & Props<S>,
    children?: MaybeVNode<S> | readonly MaybeVNode<S>[]
  ): VNode<S>

  // `memo()` stores a view along with any given data for it.
  function memo<S, D extends Indexable = Indexable>(
    view: (data: D) => VNode<S>,
    data: D
  ): VNode<S>

  // `text()` creates a virtual DOM node representing plain text.
  function text<S, T = unknown>(
    // Values, aside from symbols and functions, can be handled.
    value: T extends symbol | ((..._: unknown[]) => unknown) ? never : T
  ): VNode<S>

  // ---------------------------------------------------------------------------

  // This lets you use a version of `h` which assumes your particular app state.
  // The `_ extends never` ensures that any such state-aware `h` doesn't have
  // an explicitly set state type that contradicts the type it actually uses.
  interface TypedH<S> {
    <_ extends never, C = unknown, T extends string = string>(
      tag: NonEmptyString<T>,
      props: CustomPayloads<S, C> & Props<S>,
      children?: MaybeVNode<S> | readonly MaybeVNode<S>[]
    ): VNode<S>
  }

  // ---------------------------------------------------------------------------

  // An action transforms existing state and/or wraps another action.
  type Action<S, P = any> = (state: S, payload: P) => Dispatchable<S>

  // A Hyperapp instance generally has an initial state and a base view and is
  // mounted over an available DOM element.
  type App<S> = Readonly<AtLeastSomething<{
    // State is established through either direct assignment or an action.
    init: Dispatchable<S>

    // The subscriptions function manages a set of subscriptions.
    subscriptions: (state: S) => (boolean | undefined | Subscription<S>)[]

    // Dispatching can be augmented to do custom processing.
    dispatch: (dispatch: Dispatch<S>) => Dispatch<S>
  }, {
    // A view builds a virtual DOM node depending on the application state.
    view: (state: S) => VNode<S>

    // The mount node is where a Hyperapp instance will get created.
    node: Node
  }>>

  // The `class` property represents an HTML class attribute string.
  type ClassProp =
    | boolean
    | string
    | undefined
    | Record<string, boolean | undefined>
    | ClassProp[]

  // This lets event handling actions accept custom payloads.
  type CustomPayloads<S, T> = {
    [K in keyof T]?:
      K extends "style"
      ? StyleProp
      : T[K] extends [action: Action<S, infer P>, payload: unknown]
      ? [action: Action<S, P>, payload: P]
      : T[K]
  }

  // A dispatched action handles an event in the context of the current state.
  type Dispatch<S> = (dispatchable: Dispatchable<S>, payload?: unknown) => void

  // A dispatchable entity, when processed, causes a state transition.
  type Dispatchable<S, P = any> =
    | S
    | [state: S, ...effects: Effect<S, P>[]]
    | Action<S, P>
    | [action: Action<S, P>, payload: P]

  // An effect is where side effects and any additional dispatching may occur.
  type Effect<S, P = unknown> = [
    effecter: (dispatch: Dispatch<S>, payload: P) => void | Promise<void>,
    payload: P
  ]

  // Event handlers are implemented using actions.
  type EventActions<S> = {
    [K in keyof EventsMap]:
      | Action<S, EventsMap[K]>
      | [action: Action<S>, payload: unknown]
  }

  // In certain places a virtual DOM node can be made optional.
  type MaybeVNode<S> = boolean | null | undefined | VNode<S>

  // Virtual DOM properties will often correspond to HTML attributes.
  type Props<S> =
    Readonly<
      Partial<
        Omit<HTMLElement, keyof (
          DocumentAndElementEventHandlers &
          ElementCSSInlineStyle &
          GlobalEventHandlers
        )> &
        ElementCreationOptions &
        EventActions<S>
      > &
      {
        [_: string]: unknown
        class?: ClassProp
        key?: VNode<S>["key"]
        style?: StyleProp

        // By disallowing `_VDOM` we ensure that values having the `VDOM` type
        // are not mistaken for also having `PropList`.
        _VDOM?: never
      }
    >

  // The `style` property represents inline CSS.
  //
  // NOTE: This relies on what TypeScript itself recognizes as valid CSS
  // properties. Custom properties are not covered as well as any newer
  // properties that are not yet recognized by TypeScript. Apparently,
  // the only way to accommodate them is to relax the adherence to
  // TypeScript's CSS property definitions. The trade-off doesn't
  // seem worth it given the chances of using such properties.
  // However, you can use type casting if you want to them.
  type StyleProp = IndexableByKey & {
    [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K] | null
  }

  // A subscription reacts to external activity.
  type Subscription<S, P = unknown> = [
    subscriber: (dispatch: Dispatch<S>, payload: P) => void | Unsubscribe,
    payload: P
  ]

  // An unsubscribe function cleans up a canceled subscription.
  type Unsubscribe = () => void

  // A virtual DOM node represents an actual DOM element.
  type VNode<S> = {
    readonly props: Props<S>
    readonly children: MaybeVNode<S>[]
    node: null | undefined | Node
    memo?: Props<S>
    events?: Record<string, Action<S> | [action: Action<S>, payload: unknown]>

    // A key can uniquely associate a virtual DOM node with a certain DOM element.
    readonly key: string | null | undefined

    // A virtual DOM node's tag has metadata relevant to it. Virtual DOM nodes
    // are tagged by their type to assist rendering.
    readonly tag: string | ((state: S) => VNode<S>)

    // These values are based on actual DOM node types:
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    readonly type: 1 | 3

    // `_VDOM` is a guard property which gives us a way to tell `VDOM` objects
    // apart from `PropList` objects. Since we don't expect users to manually
    // create their own VNodes, we can take advantage of this trick that's
    // specific to TypeScript without forcing the user to do
    // anything different.
    _VDOM: true
  }
}
