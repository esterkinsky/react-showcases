import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContextProvider } from './context';
import Shop from './components/layout/Shop';

function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
