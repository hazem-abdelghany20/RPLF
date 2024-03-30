import axios from 'axios'
import { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Hero from '../Blocks/Hero/Hero'
import ContentBlock from '../Blocks/Content/ContentBlock'
import NumbersBlock from '../Blocks/Numbers/NumberBlock'
import { useSearchParams } from 'react-router-dom'
import CardList from '../Blocks/Text Slider/CardList'


const Home = () => {
    const [data, setData] = useState(null)
    const[docs,setDocs] = useState(null)
    useEffect(() => {
        getInfo()
    })
    const getInfo = async () => {
        axios.get('http://localhost:3000/api/pages').then(response => {
            const data = response.data.docs.filter(page => page.title.toLowerCase() == "home")
            //console.log(response.data.docs.filter(page => page.title.toLowerCase() == "home"))
            setData(data[0])
            setDocs(response.data.docs)
        })
    }

    if (data !== null && docs != null) {
        return (
            <div style={{width: "100%"}}>
                <Header docs={docs}/>
                
                {
                    data.layout.filter(block => block.blockType == "hero").map(hero => (
                        <Hero hero={hero}/>
                    ))
                }
                {
                    data.layout.filter(block => block.blockType == "content_right_media" || block.blockType == "content_left_media" || block.blockType == "content_above_media" || block.blockType == "content_below_media").map(content => (
                        <ContentBlock content={content}/>
                    ))
                }
                <NumbersBlock/>
                <CardList/>
                
            </div>
        )
    }
}

export default Home