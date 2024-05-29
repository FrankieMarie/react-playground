import { db } from "./db.js";
import * as schema from "./schema.js";
import type { Task } from "./schema.js";

const tasks: Task[] = [
  {
    id: 1,
    title: 'Clean Kitchen',
    description: 'Vacuum and mop floor, clean out refrigerator, take out trash, water the plants above the sink.',
    priority: 'Medium',
    status: 'inProgress',
  },
  {
    id: 2,
    title: 'Yard Work',
    description: 'Mow the lawn, pick up sticks, trim trees and bushes, edge grass around sidewalk.',
    priority: 'Low',
    status: 'todo',
  },
  {
    id: 3,
    title: 'Interview Prep',
    description: 'Reflect on STAR stories, brush up website, do some leetcode.',
    priority: 'High',
    status: 'done',
  },
];

await db.insert(schema.tasks).values([ ...tasks ]);