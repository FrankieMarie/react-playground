import { useState } from 'react';
import { Input } from '../Input';
import Select from '../Select';

export const TaskForm = () => {
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('todo');

  return (
    <form className="flex flex-col gap-6">
      <div className="flex justify-between gap-6">
        <div className="w-full">
          <label className="text-sm font-semibold">Priority</label>
          <Select
            selected={priority}
            options={['High', 'Medium', 'Low']}
            onChange={setPriority}
          />
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold">Status</label>
          <Select
            selected={status}
            options={['todo', 'inProgress', 'done']}
            onChange={setStatus}
          />
        </div>
      </div>
      <Input name="title" label="Title" />
      <Input name="description" label="Description" />
    </form>
  );
};
