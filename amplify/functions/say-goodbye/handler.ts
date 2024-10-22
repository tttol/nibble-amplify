import { env } from '$amplify/env/say-hello';
// import { env } from '$amplify/env/say-goodbye';
import type { Schema } from "../../data/resource";

export const handler: Schema["sayGoodbye"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // return typed from `.returns()`
  return `Goodbye ${env.NAME}!`
}