import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen ">
            <Nav />

            <main className="font-nunito">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout