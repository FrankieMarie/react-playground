import { ReactNode, createContext } from 'react';
import { ServiceCollection } from '@/services';

interface ServiceProviderProps {
  services: ServiceCollection;
  children?: ReactNode;
}

export const ServiceProviderContext = createContext<ServiceCollection | null>(
  null
);

export const ServiceProvider = (props: ServiceProviderProps) => {
  const { services } = props;

  return (
    <ServiceProviderContext.Provider value={services}>
      {props.children}
    </ServiceProviderContext.Provider>
  );
};
