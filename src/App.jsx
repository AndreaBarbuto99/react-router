import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'

function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path='chisiamo' element={<ChiSiamo />} />
                    <Route path='prodotti' element={<Prodotti />} />

                </Route>
            </Routes>

        </BrowserRouter>
    )

}

export default App
