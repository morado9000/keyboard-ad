const ContactPage = () => {
    return (
        <>
            <div className="container flex flex-col items-center px-6 mx-auto">
                <h1 className="font-bold text-4xl mt-6 mb-6">Contact Us</h1>

                <div className="flex flex-col justify-center mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../img/image-asset.png")} style={{height: 200, width: 200}} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>John Smith</p>
                        <p>johnsmith@email.com</p>
                    </div> 
                </div>

                <div className="flex flex-col mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../img/hideo_kojima_header_1-copy.jpg")} style={{height: 200, width: 200}} alt="" />
                    </div>  
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>Jack Richards</p>
                        <p>jackrichards@email.com</p>
                    </div> 
                </div>

                <div className="flex flex-col mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../img/ca-times.brightspotcdn.jpg")} style={{height: 200, width: 200}} alt="" />
                    </div>  
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>Dacid Hayter</p>
                        <p>davidhayter@email.com</p>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ContactPage;