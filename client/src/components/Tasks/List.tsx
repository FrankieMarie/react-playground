import { TaskKeys, TaskStatus, Tasks } from '@/api/tasks/types';
import { useState } from 'react';
import { Column } from './Column';

interface Props {
  tasks: Tasks | undefined;
}

export const List = ({ tasks }: Props) => {
  const [sort, setSort] = useState<Record<TaskStatus, TaskKeys>>({
    todo: 'priority',
    inProgress: 'priority',
    done: 'title'
  });

  // @ts-expect-error
  // sortTasks defined as Array.prototype in utils
  const todo = tasks?.filter((x) => x.status === 'todo').sortTasks(sort.todo);

  const inProgress = tasks
    ?.filter((x) => x.status === 'inProgress')
    // @ts-expect-error
    .sortTasks(sort.inProgress);

  // @ts-expect-error
  const done = tasks?.filter((x) => x.status === 'done').sortTasks(sort.done);

  return (
    <div className="my-8 flex  grow flex-col gap-8 lg:grid lg:grid-cols-3">
      <Column
        title="Backlog"
        tasks={todo}
        selectedSort={sort.todo}
        onChangeSort={(value) => setSort({ ...sort, todo: value })}
      />

      <Column
        title="In Progress"
        tasks={inProgress}
        selectedSort={sort.inProgress}
        onChangeSort={(value) => setSort({ ...sort, inProgress: value })}
      />

      <Column
        title="Done"
        tasks={done}
        selectedSort={sort.done}
        onChangeSort={(value) => setSort({ ...sort, done: value })}
      />
    </div>
  );
};
