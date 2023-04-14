import "./App.css";
import React from 'react';
import { HomePage } from './components/pages/home/home.page';
import { RouteComponent } from "./components/routing/route";
import { CoreProviderComponents } from "./components/providers/core/core-provider.component";
import { HeaderComponents } from "./components/features/header/header.component";


function App() {

  return (
    <CoreProviderComponents>
      <HeaderComponents />
      <RouteComponent>

      </RouteComponent>
    </CoreProviderComponents>
  );
}
export default App;
