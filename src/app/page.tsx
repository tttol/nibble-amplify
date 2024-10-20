"use client";

import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function Home() {
  const sayHello = async () => {
    const res = await client.queries.sayHello({
      name: "Amplify"
    })
    console.log(`result=${JSON.stringify(res)}`);
  }

  return (
    <>
      <h1>Hello Nibble Amplify</h1>
      <button onClick={sayHello}>sayHello</button>
    </>
  );
}
