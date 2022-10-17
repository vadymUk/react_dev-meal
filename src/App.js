import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
function App() {
    return (
        <>
            <Router basename='/react_dev-meal'>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='*'
                        element={<NotFound />}
                    />
                    <Route
                        path='/category/:name'
                        element={<Category />}
                    />
                    <Route
                        path='/meal/:id'
                        element={<Recipe />}
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
