

const Content = ({ content, media , style }) => {
    console.log(content)
    console.log(media)
    return (
        <div className={style}>
            <div>
                {
                    media.map(one => (
                        <img src={one.value.filename} />
                    ))
                }
                
            </div>

            <div>
                {
                    content.map(block => {
                        switch (block.type) {
                            case "h1":
                                return (
                                    <h1>{block.children[0].text}</h1>
                                )
                            case "h2":
                                return (
                                    <h2>{block.children[0]}</h2>
                                )
                            case "h3":
                                return (
                                    <h3>{block.children[0]}</h3>
                                )
                            case "h4":
                                return (
                                    <h4>{block.children[0]}</h4>
                                )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Content