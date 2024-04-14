import { useParams } from 'react-router-dom'
import Header from '../Header'
import { useEffect, useState } from 'react'
import ContentBlock from '../../Blocks/Content/ContentBlock'
import axios from 'axios'
import Hero from '../../Blocks/Hero/Hero'
import CardList from '../../Blocks/Text Slider/CardList'
import CTABlock3 from '../../Blocks/CTA3/CTABlock3'
import NumbersBlock from '../../Blocks/Numbers/NumberBlock'
import PlainHero from '../../Blocks/Plain Hero'
import ImageSlider from '../../Blocks/Slider/Slider'

const Page = () => {
    const [data, setData] = useState(null)
    const [docs, setDocs] = useState(null)
    const { title } = useParams()
    //console.log(title)
    const callApi = async () => {
        await axios.get('http://localhost:3000/api/pages').then(response => {
            //console.log(response.data.docs)
            setData(response.data.docs.filter(one => one.slug == title)[0])
            //console.log(response.data.docs.filter(one => one.title == title))
            setDocs(response.data.docs)
        })
    }
    useEffect(() => {
        callApi()
    }, [])
    if (data != null && docs != null) {
        return (
            <div>
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
                                return (
                                    <CardList block={block} />
                                )
                            case "numbers":
                                return (
                                    <NumbersBlock block={block} />
                                )
                            case "cta":
                                //console.log("cta")
                                return (
                                    <CTABlock3 block={block} />
                                )
                            case "image_slider":
                                return(
                                    <ImageSlider images={block.images}/>
                                )
                        }
                    })
                }
            </div>
        )
    }

}

export default Page