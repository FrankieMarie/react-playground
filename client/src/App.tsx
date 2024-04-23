import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { AuthProvider } from './components/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
