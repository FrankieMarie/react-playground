import { Fragment, JSX } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from './Button';

interface Props {
  isOpen: boolean;
  title: string;
  children: JSX.Element;
  closeButtonText: string;
  setOpen: (x: boolean) => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  closeButtonText,
  setOpen
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-mediumDark w-full max-w-lg transform overflow-hidden rounded-2xl p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-xl font-medium text-secondary"
                >
                  {title}
                </Dialog.Title>
                {children}
                <div className="mt-6">
                  <Button variant="default" onClick={() => setOpen(false)}>
                    {closeButtonText}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
