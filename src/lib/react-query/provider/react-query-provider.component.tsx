// * Import Types
import { FC } from 'react';

// * Import Tools
import { QueryClientProvider } from 'react-query';
import { reactQueryConfig } from '../config/react-query-config';
import { IReactQueryProvider } from './react-query-provider.type';

export const ReactQueryProviderComponent: FC<IReactQueryProvider> = ({
    children,
}) => {
    return (
        <QueryClientProvider client={reactQueryConfig}>
            {children}
        </QueryClientProvider>
    );
};
