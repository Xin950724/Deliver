import Routes from "./routes/Routes";
import { Provider } from "react-redux";
// import { Provider as PaperProvider } from 'react-native-paper';
import { store } from "./states/store";
export default function App() {
    return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
