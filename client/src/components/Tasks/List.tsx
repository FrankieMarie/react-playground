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

  const todo = tasks
    ?.filter((x) => x.status === 'todo')
    .sort((a, b) =>
      `${a[sort.todo]}`.localeCompare(`${b[sort.todo]}`)
    ) as Tasks;

  const inProgress = tasks
    ?.filter((x) => x.status === 'inProgress')
    .sort((a, b) =>
      `${a[sort.inProgress]}`.localeCompare(`${b[sort.inProgress]}`)
    ) as Tasks;

  const done = tasks
    ?.filter((x) => x.status === 'done')
    .sort((a, b) =>
      `${a[sort.done]}`.localeCompare(`${b[sort.done]}`)
    ) as Tasks;

  return (
    <div className="my-8 grid shrink-0 grow grid-cols-3 gap-8">
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
