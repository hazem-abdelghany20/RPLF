import './css.css'


const ContentBlock = ({content}) =>{
    //console.log(content.blockType)
    return(
        <div className={content.blockType} >
            <div style={{display:"flex",flexDirection: "column" , justifyContent : "center" , paddingLeft : "100px"}}>
                <h2>{content.headline}</h2>
                <p style={{textAlign : "left"}}>{content.paragraph}</p>
            </div>
            <img src="pharoah.png" width={"500px"} height={"400px"}></img>
        </div>
    )
}

export default ContentBlock