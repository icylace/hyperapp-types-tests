import type { Action, MaybeVNode, VNode } from "hyperapp"

import { h, text } from "hyperapp"

type State = {
  coins: number
  onlyQuestionBlockOpened: false
}

const HitBlockFromBottom: Action<State> = (state, _data) => ({ ...state })

const coinsDisplay = (state: State): VNode<State> =>
  h("div", { class: "coins-display" }, text(state.coins))

const questionBlock = (opened: boolean): VNode<State> =>
  opened
    ? h("button", { class: "question-block opened" }, text("?"))
    : h(
        "button",
        {
          class: "question-block",
          onclick: [
            HitBlockFromBottom,
            { revealItem: "beanstalk" },
          ],
        },
        text("?")
      )


const maybeBlock = (opened: boolean): MaybeVNode<State> =>
  opened
    ? null
    : h(
        "button",
        {
          class: "question-block",
          onclick: [
            HitBlockFromBottom,
            { revealItem: "beanstalk" },
          ],
        },
        text("?")
      )

const level = (state: State): VNode<State> =>
  h("div", { class: "level" }, [
    // $ExpectType VNode<State>
    coinsDisplay(state),

    // $ExpectType VNode<State>
    questionBlock(state.onlyQuestionBlockOpened),

    // $ExpectType MaybeVNode<State>
    maybeBlock(state.onlyQuestionBlockOpened),
  ])
