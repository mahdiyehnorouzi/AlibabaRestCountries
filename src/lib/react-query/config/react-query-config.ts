// * Import Tools
import { QueryClient } from 'react-query';

export const reactQueryConfig = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 0 
        }
    }
});
