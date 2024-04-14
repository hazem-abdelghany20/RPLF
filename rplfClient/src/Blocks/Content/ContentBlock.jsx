import React from 'react';
const ContentBlock = ({ content }) => {
    console.log(content.media.filename)
    switch (content.blockType) {
        case "content_right_media":
            return (
                <div className={`flex flex-row pt-10 justify-between`}>
                    <div className="flex flex-col justify-center pl-24 w-[55%] md:w-[45%] xs:pl-5 space-y-8">
                        <b><h2 className='text-xl md:text-4xl text-left'>{content.headline}</h2></b>
                        <p className="text-left">{content.paragraph}</p>
                    </div>
                    {/*  */}
                    <img className="size-9/12 md:size-5/12 pr-24" src={`http://localhost:3000/block-media/${content.media.filename}`} alt="Content Image"></img>
                </div>
            )
        case "content_left_media":
            return (
                <div className={`flex flex-row-reverse pt-10 justify-between`}>
                    <div className="flex flex-col justify-center w-[55%] md:w-[45%] xs:pl-5 space-y-8">
                        <b><h2 className='text-xl md:text-4xl text-left'>{content.headline}</h2></b>
                        <p className="text-left text-wrap overflow-wrap">{content.paragraph}</p>
                    </div>
                    <img className="size-9/12 md:size-5/12 pl-24" src={`http://localhost:3000/block-media/${content.media.filename}`} alt="Content Image"></img>
                </div>

            )
        case "content_no_media":
            return (
                <div className={`flex flex-row justify-center pt-10`}>
                    <div className="flex flex-col justify-center pl-24 xs:pl-5 space-y-8">
                        <b><h2 className='text-4xl'>{content.headline}</h2></b>
                        <p className="text-left">{content.paragraph}</p>
                    </div>
                </div>
            )
        case "content_under_media":
            return (
                <div className={`flex flex-col sm:flex-row pt-10`}>
                    <div className="flex flex-col justify-center pl-24 xs:pl-5 space-y-8">
                        <b><h2 className='text-4xl'>{content.headline}</h2></b>
                        <p className="text-left">{content.paragraph}</p>
                    </div>
                    <img className="xs:w-[200px] xs:h-[290px] md:w-500 md:h-400" src={`http://localhost:3000/block-media/${content.media.filename}`}alt="Content Image"></img>
                </div>
            )
        case "content_above_media":
            return (
                <div className={`flex flex-col-reverse sm:flex-row pt-10`}>
                    <div className="flex flex-col justify-center pl-24 xs:pl-5 space-y-8">
                        <b><h2 className='text-4xl'>{content.headline}</h2></b>
                        <p className="text-left">{content.paragraph}</p>
                    </div>
                    <img className="xs:w-[200px] xs:h-[290px] md:w-500 md:h-400 mt-20" src={`http://localhost:3000/block-media/${content.media.filename}`} alt="Content Image"></img>
                </div>

            )
    }
}

export default ContentBlock;