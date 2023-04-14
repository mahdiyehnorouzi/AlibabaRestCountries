// * Import Types
import { FC } from 'react';
import { ICoreProvider } from './core-provider.type';

// * Import Providers
import { ReactQueryProviderComponent } from '../../lib/react-query/provider/react-query-provider.component';
import { ReduxProviderComponent } from '../../lib/redux/provider/redux-provider.component';

export const CoreProviderComponents: FC<ICoreProvider> = ({ children }) => {
    return (
        <ReduxProviderComponent>
            <ReactQueryProviderComponent>
                {children}
            </ReactQueryProviderComponent>
        </ReduxProviderComponent>
    );
};
