import { defineFunction } from '@aws-amplify/backend';

export const sayGoodbye = defineFunction({
  name: 'say-goodbye',
  entry: './handler.ts',
  environment: {
    BYE: "my sweety. (from env.NAME)"
  }
});