import { Header, Body, Footer } from './components/index'

export default function App() { //Components 101, make function
    return ( //retrun whatever the component may be using HTML, <> </> this be called a fragment, its an empty tag lol makes it clean tho
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}