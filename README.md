# React Playground

This is a fullstack repo where I try things for fun and experiment with tools I am interested in.

## CLIENT

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/)
- [React Router](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/)

## API

- [Bun](https://bun.sh/)
- [Drizzle](https://orm.drizzle.team/)
- [SQLite3](https://bun.sh/docs/api/sqlite)

---

To run local dev API:

```
bun install
```

```
bun run migrate
```

(optional) create a seed.ts file:

```
import { db } from "./db.js";
import * as schema from "./schema.js";

const tasks = {...};

await db.insert(schema.tasks).values([ ...tasks ]);
```

```
bun seed
```

```
bun dev
```

To run local dev Client:

```
cd client/
```

```
bun install
```

```
bun dev
```
