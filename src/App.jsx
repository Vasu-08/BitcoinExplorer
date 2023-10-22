import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import WalletDashboard from './components/Wallets/WalletDashboard';
import TransactionsDashboard from './components/Transactions/TransactionsDashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<WalletDashboard />} />
          <Route path='/transactions' element={<TransactionsDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
