export const dev = process.env.NODE_ENV !== 'production'

export const SERVER_URL = dev
    ? 'http://localhost:3000'
    : 'https://germanyn.github.io/nextjs-typescript-hello-world'