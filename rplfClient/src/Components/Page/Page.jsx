import { useParams } from 'react-router-dom'
import Header from '../Header'
import { useEffect, useState } from 'react'
import ContentBlock from '../../Blocks/Content/ContentBlock'
import axios from 'axios'

const Page = () => {
    const [data, setData] = useState(null)
    const[docs,setDocs] = useState(null)
    const { title } = useParams()
    //console.log(title)
    useEffect(() => {
        axios.get('http://localhost:3000/api/pages').then(response => {
            //console.log(response.data.docs)
            setData(response.data.docs.filter(one => one.title == title)[0])
            //console.log(response.data.docs.filter(one => one.title == title))
            setDocs(response.data.docs)
        })
    }, [])
    if (data != null && docs != null) {
        return (
            <div>
                <Header docs={docs} />
                {
                    data.layout.map(block => {
                        switch(block.blockType){
                            case "content_left_media":
                            case "content_right_media":
                            case "content_below_media":
                            case "content_above_media":
                                return(
                                    <ContentBlock content={block}/>
                                )
                             
                        }
                    })
                }
            </div>
        )
    }

}

export default Page