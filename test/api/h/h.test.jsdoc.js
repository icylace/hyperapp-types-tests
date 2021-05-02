// @ts-check

// NOTE: JSDoc doesn't yet let you define type defaults for generics:
// https://github.com/microsoft/TypeScript/issues/29401

/**
 * @template S
 * @typedef { import("hyperapp").VNode<S> } VNode
 */

import { h, text, app } from "hyperapp"

/** @type {() => VNode<any>} */
const p0 = () => h("p", {})

// The following are erroneous:
//
// /** @type {() => VNode<unknown>} */
// const p1 = () => h("p", {})
//
// /** @type {<S>() => VNode<S>} */
// const p2 = () => h("p", {})
