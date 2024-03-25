import axios from 'axios'
import { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'

const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3000/api/pages').then(response => {
            //console.log(response.data.docs)
            setData(response.data.docs)
        })
    })
    const getInfo = async () => {

    }

    if (data !== null) {
        return (
            <div>
                <Header/>
                <Hero layout={data[0].layout.filter(block => block.blockType == "hero")} />
            </div>
        )
    }
}

export default Home