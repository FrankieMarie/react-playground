import { db } from "./db.js";
import * as schema from "./schema.js";

await db.insert(schema.tasks).values([
  {
    title: "Clean Kitchen",
    description:
      "Do dishes, mop the floor, polish the sink, and finish putting trim around the chimney.",
    order: 1,
    priority: "High",
  },
  {
    title: "Change Oil",
    description:
      "ATV and truck need oil changes. Truck takes 15w-40, also needs tire rotation.",
    order: 2,
    priority: "High",
  },
  {
    title: "Rake Leaves",
    description:
      "Spring time is here. Rake leaves and pick up sticks before the city comes to clean up.",
    order: 3,
    priority: "Medium",
  },
  {
    title: "Read Network Basics Book",
    description:
      "Update thinkpad software. Go through exercises in Networking Basics for Hackers book.",
    order: 4,
    priority: "Low",
  },
]);

console.log(`Seeding complete.`);
