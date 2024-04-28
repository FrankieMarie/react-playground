import { Tasks } from '@/api/tasks/types';
import { Item } from './Item';
import Select from '../Select';

interface Props {
  tasks: Tasks | undefined;
}

export const List = ({ tasks }: Props) => {
  const todo = tasks?.filter((x) => x.status === 'todo') as Tasks;
  const inProgress = tasks?.filter((x) => x.status === 'inProgress') as Tasks;
  const done = tasks?.filter((x) => x.status === 'done') as Tasks;

  const renderItems = (x: Tasks) =>
    !tasks ? (
      <p>Fetching Tasks...</p>
    ) : (
      x.map((x) => <Item key={x.id} task={x} />)
    );

  return (
    <div className="my-8 grid shrink-0 grow grid-cols-3 gap-8">
      <section className="rounded-md border border-medium p-4">
        <div className="flex items-baseline gap-6">
          <h1 className="mb-4 text-2xl font-semibold text-secondary">
            Backlog
          </h1>
          <Select
            options={['priority', 'createdAt', 'title']}
            defaultSelected="priority"
          />
        </div>
        {renderItems(todo)}
      </section>
      <section className="rounded-md border border-medium p-4">
        <div className="flex items-baseline gap-6">
          <h1 className="mb-4 text-2xl font-semibold text-secondary">
            In Progress
          </h1>

          <Select
            options={['priority', 'createdAt', 'title']}
            defaultSelected="priority"
          />
        </div>
        {renderItems(inProgress)}
      </section>
      <section className="rounded-md border border-medium p-4">
        <div className="flex items-baseline gap-6">
          <h1 className="mb-4 text-2xl font-semibold text-secondary">Done</h1>
          <Select
            options={['priority', 'createdAt', 'title']}
            defaultSelected="title"
          />
        </div>
        {renderItems(done)}
      </section>
    </div>
  );
};
