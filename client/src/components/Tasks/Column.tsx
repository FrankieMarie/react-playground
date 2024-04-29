import { TaskKeys, Tasks } from '@/api/tasks/types';
import Select from '../Select';
import { Item } from './Item';

interface Props {
  title: string;
  tasks: Tasks;
  selectedSort: TaskKeys;
  onChangeSort: (value: TaskKeys) => void;
}

export const Column = ({ title, tasks, selectedSort, onChangeSort }: Props) => {
  const renderItems = () =>
    !tasks ? (
      <p>Fetching Tasks...</p>
    ) : (
      tasks.map((x) => <Item key={x.id} task={x} />)
    );

  return (
    <section className="rounded-md border border-medium p-4">
      <div className="flex items-baseline gap-6">
        <h1 className="mb-4 text-2xl font-semibold text-secondary">{title}</h1>
        <Select
          options={['priority', 'title']}
          selected={selectedSort}
          onChange={(value) => onChangeSort(value as TaskKeys)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">{renderItems()}</div>
    </section>
  );
};
