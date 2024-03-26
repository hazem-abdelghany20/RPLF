import axios from 'axios'
import { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Hero from '../Blocks/Hero/Hero'
import ContentBlock from '../Blocks/Content/ContentBlock'
import NumbersBlock from '../Blocks/Numbers/NumberBlock'


const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3000/api/pages').then(response => {
            //console.log(response.data.docs)
            setData(response.data.docs[0])
        })
    })
    const getInfo = async () => {

    }

    if (data !== null) {
        return (
            <div>
                <Header/>
                
                {
                    data.layout.filter(block => block.blockType == "hero").map(hero => (
                        <Hero hero={hero}/>
                    ))
                }

                <ContentBlock/>
                <NumbersBlock/>
                
            </div>
        )
    }
}

export default Home