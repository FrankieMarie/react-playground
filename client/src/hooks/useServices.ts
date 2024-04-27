import { useContext } from 'react';
import { ServiceCollection } from '@/services';
import { ServiceProviderContext } from '@/components/ServiceProvider';

export const useServices = (): ServiceCollection => {
  const services = useContext(ServiceProviderContext);

  if (!services) {
    throw new Error('No services were found...');
  }

  return services;
};
