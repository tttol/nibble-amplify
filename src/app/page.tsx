"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import Todo from "./component/Todo";

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <h1>Hello nibble-amplify!</h1>
          <Todo />
        </>
      )}
    </Authenticator>
  );
}
