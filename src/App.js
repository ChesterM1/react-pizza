import { Routes, Route } from "react-router-dom";
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

import Header from "./Components/Header/Header";
import CardsPage from "./pages/CardsPage";
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {

    return (
        <>
          <Provider store={store}>
          <div className="container">
              {/* HEADER */}
              <Header/>
                {/* <!-- PIZZA-BLOCK --> */}
                <section className="pizza">
                      <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/cards" element={<CardsPage />} />
                        <Route path="*" element={<NotFoundPage/>}/>
                      </Routes>
                      
                    
                </section>
            </div>
          </Provider>

        </> 
    );
}

export default App;
