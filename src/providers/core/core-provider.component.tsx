import { FC } from 'react';
import { ReactQueryProviderComponent } from '../../lib/react-query/provider/react-query-provider.component';
import { ReduxProviderComponent } from '../../lib/redux/provider/redux-provider.component';
import { ICoreProvider } from './core-provider.type';

export const CoreProviderComponents: FC<ICoreProvider> = ({ children }) => {
    return (
        <ReduxProviderComponent>
            <ReactQueryProviderComponent>
                {children}
            </ReactQueryProviderComponent>
        </ReduxProviderComponent>
    );
};
