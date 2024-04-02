import './css.css'


const ContentBlock = ({content}) =>{
    //console.log(content.blockType)
    return(
        <div className={content.blockType} >
            <div style={{display:"flex",flexDirection: "column" , justifyContent : "center" , paddingLeft : "100px"}}>
                <h2>{content.headline}</h2>
                <p className='text__container' style={{textAlign : "left"}}>{content.paragraph}</p>
            </div>
            {content.blockType !== 'content_with_no_media' && 
            <img className="content__image" src="pharoah.png"></img>}
        </div>
    )
}

export default ContentBlock