import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.studio.thegraph.com/query/54646/pixie-chess/v0.0.2/',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/lib/types/graphql/generated/': {
      preset: 'client',
    }
  },
  ignoreNoDocuments: true,
};

export default config;