import React from 'react'
import { Header } from "./components/Header/Header"
import { Body } from "./components/Body/Body"
import { Footer } from "./components/Footer/Footer"

export default function App() { //Components 101, make function
    return ( //retrun whatever the component may be using HTML, <> </> this be called a fragment, its an empty tag lol makes it clean tho
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}