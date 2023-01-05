
const AboutPage = () => {
    

    return (
        <>
        <section id="intro">
          <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-20 md:space-x-5 md:space-y-0">
              <div className="md:w-1/2">
                  <img className="rounded-lg" src={require("../img/North-1080x675.jpg")} alt="" />
              </div>
  
              <div className="flex mb-32 space-y-12 md:w-1/2">
                  <p>We've been in the valley for 32 years, serving our neighbors and the city at large. We've started in a small one room office, with our only buisness being the locals. Our keyboards would then be popularized through word of mouth, and as that growed so did our team and workspace. Now we're a countrywide titan in the keyboard buisness, but we will never forget our local roots.</p>
              </div>
          </div>
      </section>
        </>
    )
}

export default AboutPage;