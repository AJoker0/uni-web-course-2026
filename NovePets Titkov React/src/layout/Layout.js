import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Header />
            <main id="main">
                <Outlet /> {/* Сюда будут подставляться страницы */}
            </main>
            <Footer />
        </>
    );
}
export default Layout;