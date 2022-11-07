import Head from '../components/HeadSite';
import Header from '../components/Header';


const Layout = (props) => {
    return (
        <div className={`float-left w-full h-[100vh] ${ props.bgType }`}>
            <Head />

            { /* 1. Main Navigation Bar */ }
            <Header />

            {props.children}
        </div>
    );
}

export default Layout;