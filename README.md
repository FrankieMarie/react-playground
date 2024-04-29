# React Playground

This is a fullstack repo where I try things for fun and experiment with tools I am interested in.
Both front and backend utilize [TypeScript](https://www.typescriptlang.org/).

## CLIENT

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/)
- [React Router](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/)

## API

- [Bun](https://bun.sh/)
- [ElysiaJS](https://elysiajs.com/)
- [Drizzle](https://orm.drizzle.team/)
- [SQLite3](https://bun.sh/docs/api/sqlite)

---

To run local server:

```
bun install
```

(optional) create a seed.ts file:

```
import { db } from "./db.js";
import * as schema from "./schema.js";

const tasks = {...};

await db.insert(schema.tasks).values([ ...tasks ]);
```

```
bun run generate
```

```
bun run migrate
```

```
bun run seed
```

```
bun dev
```

To run local client:

```
cd client/
```

```
bun install
```

```
bun dev
```
