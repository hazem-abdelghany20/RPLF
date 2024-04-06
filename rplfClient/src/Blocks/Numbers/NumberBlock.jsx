import "./css.css"

const NumbersBlock = ({ block }) => {

    return (
        <div className="h-full  bg-[#063948]">
            <div className="flex flex-col justify-center">
                <b><h2 className="text-center text-[#d39e4f] text-4xl pt-[20px] pb-[20px] ">{block.headline}</h2></b>
                <div className="text-center flex flex-row justify-center">
                    <span style={{ width: "55%", color: "white" }} >{block.paragraph}</span>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col lg:flex-row xs:flex-col justify-center gap-[100px] mt-[50px] pb-[50px]">
                    {/* Left Block */}
                    <div className="flex flex-col w-[250px] lg:w-[300px] lg:ml-[20px] lg:text-[14px] h-[250px] pt-[25px] ml-[20px]" >
                        <div className="bg-[#dee5f6] flex flex-row justify-center align-center h-[40%] text-[black] font-bold text-[55px]">
                            <p>{block.number1}</p>
                        </div>

                        <div className="bg-[#2494a2] flex flex-col justify-center h-[60%] text-[black]">
                            <h5>{block.sub_headline_1}</h5>
                            <span>{block.sub_paragraph_1}</span>
                        </div>

                    </div>
                    {/* Centre Block */}
                    <div className="flex flex-col w-[300px] h-[300px]">

                        <div className="bg-[#dee5f6] flex flex-row justify-center align-center h-[40%] text-[black] font-bold text-[55px] pt-[15px]">
                            <p>{block.number2}</p>
                        </div>

                        <div className="bg-[#2494a2] flex flex-col justify-center h-[60%] text-[black]" style={{ backgroundColor: "#d59a45" }}>
                            <h5>{block.sub_headline_2}</h5>
                            <span>{block.sub_paragraph_2}</span>
                        </div>



                    </div>
                    {/* Right Block */}
                    <div className="flex flex-col w-[250px] lg:w-[300px] lg:ml-[20px] lg:text-[14px] h-[250px] pt-[25px] ml-[20px]">

                        <div className="bg-[#dee5f6] flex flex-row justify-center align-center h-[40%] text-[black] font-bold text-[55px]">
                            <p>{block.number3}</p>
                        </div>

                        <div className="bg-[#2494a2] flex flex-col justify-center h-[60%] text-[black]">
                            <h5>{block.sub_headline_3}</h5>
                            <span>{block.sub_paragraph_3}</span>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default NumbersBlock