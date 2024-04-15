

const PlainHero = ({block}) => {
    console.log(block)
    return (
        <div
            className="h-[1000px] lg:h-[400px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${`http://localhost:3000/block-media/${block.media.filename}`})` }}
        >
            <div className="flex flex-row justify-center pt-32">
                <div className="max-w-full mx-auto text-left">
                    <div className="w-full md:w-[80vw] lg:w-[60vw] px-5 font-bold text-3xl md:text-5xl">{block.headline}</div>
                </div>
            </div>
        </div>
    )
}

export default PlainHero