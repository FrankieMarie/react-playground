import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/clerk-react';
import { configureServices } from './services';
import { ServiceProvider } from './components/ServiceProvider';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

function App() {
  const services = configureServices();

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ServiceProvider services={services}>
        <QueryClientProvider client={services.queryClient}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </QueryClientProvider>
      </ServiceProvider>
    </ClerkProvider>
  );
}

export default App;
