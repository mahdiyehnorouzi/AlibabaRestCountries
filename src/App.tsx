import "./App.css";
import { RouteComponent } from "./routing/route";
import { HeaderComponents } from "./components/header/header.component";
import { CoreProviderComponents } from "./providers/core/core-provider.component";


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
