import { Routes, Route } from "react-router-dom";
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import {lazy, Suspense} from 'react'
import Header from "./Components/Header/Header";
// import CardsPage from "./pages/CardsPage";
import Home from './pages/Home';
// import NotFoundPage from './pages/NotFoundPage';
import Spinner from "./Components/Spinner/Spinner";

const CardsPage = lazy(()=> import('./pages/CardsPage'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage'));


function App() {

    return (
        <>
          <Provider store={store}>
          <Suspense fallback={<Spinner/>}>
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
            </Suspense>
          </Provider>

        </> 
    );
}

export default App;
