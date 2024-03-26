


const ContentBlock = ({content}) =>{

    return(
        <div style={{display : "flex", flexDirection : "row" ,justifyContent:"space-around" , gap:"200px",backgroundColor : "#0c2c34" }}>
            <div style={{display:"flex",flexDirection: "column" , justifyContent : "center" , paddingLeft : "100px"}}>
                <h2 style={{textAlign : "left" , fontSize : "40px" , width : "110%"}}>{"Business Dispute Litigation in Cairo"}</h2>
                <p style={{textAlign : "left"}}>{"Stuart Chelin brings a unique combination of experience and skills to serve clients looking for an attorney to represent them in corporate/commercial business disputes and business arrangements and agreements. Please read Stuart’s full bio."}</p>
            </div>
            <img src="pharoah.png" width={"500px"} height={"400px"}></img>
        </div>
    )
}

export default ContentBlock