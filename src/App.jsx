import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import ProdottoDetailPage from './pages/ProdottoDetailPage'
import NotFound404 from './pages/NotFound404'

function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path='/chisiamo' element={<ChiSiamo />} />
                    <Route path='/prodotti'>
                        <Route index element={<Prodotti />} />
                        <Route path=':id' element={<ProdottoDetailPage />} />
                    </Route>
                </Route>
                <Route path='/notfound' element={<NotFound404 />} />
                <Route path='*' element={<NotFound404 />} />
            </Routes>

        </BrowserRouter >
    )

}

export default App
