import axios from 'axios'
import { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Hero from '../Blocks/Hero/Hero'
import ContentBlock from '../Blocks/Content/ContentBlock'
import NumbersBlock from '../Blocks/Numbers/NumberBlock'
import { useSearchParams } from 'react-router-dom'
import CardList from '../Blocks/Text Slider/CardList'
import CTABlock3 from '../Blocks/CTA3/CTABlock3'
import PlainHero from '../Blocks/Plain Hero'


const Home = () => {
    const [data, setData] = useState(null)
    const [docs, setDocs] = useState(null)
    useEffect(() => {
        getInfo()
    },[])
    const getInfo = async () => {
        await axios.get('http://localhost:3000/api/pages').then(response => {
            const data = response.data.docs.filter(page => page.title.toLowerCase() == "home")
            console.log(response.data.docs.filter(page => page.title.toLowerCase() == "about us"))
            setData(data[0])
            setDocs(response.data.docs)
        })
    }

    if (data !== null && docs != null) {
        return (
            <div style={{ width: "100%" }}>
                <Header docs={docs} />

                {
                    data.layout.map(block => {
                        //console.log(block)
                        switch (block.blockType) {
                            case "hero":
                                return (
                                    <Hero hero={block} />
                                )
                            case "background_with_title":
                                return(
                                    <PlainHero block={block}/>
                                )
                            case "content_left_media":
                            case "content_right_media":
                            case "content_below_media":
                            case "content_above_media":
                                return (
                                    <ContentBlock content={block} />
                                )
                            case "content_slider":
                                return(
                                    <CardList block={block} />
                                )
                            case "numbers" :
                                return(
                                    <NumbersBlock block={block} />
                                )
                            case "cta" :
                                //console.log("cta")
                                return(
                                    <CTABlock3 block={block}/>
                                )
                        }
                    })
                }




            </div>
        )
    }
}

export default Home