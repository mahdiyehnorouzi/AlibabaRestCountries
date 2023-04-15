// * Import Types
import { FC } from 'react';
import { IReduxProvider } from '../provider/redux-provider.type';

// * Import Redux
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '../configs/redux-store';

export const ReduxProviderComponent: FC<IReduxProvider> = ({ children }) => {
    return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
};
