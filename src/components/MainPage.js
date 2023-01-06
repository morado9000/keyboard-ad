
const MainPage = () => {

    return (
        <>
      <section id="intro">
          <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-20 mb-32 md:space-x-5 md:space-y-0">
              <div className="md:w-1/2">
                  <img className="rounded-lg" src={require("../img/das-keyboards-5q-smart-keyboard.jpg")} alt="" />
              </div>
  
              <div className="flex mb-32 space-y-12 md:w-1/2">
                  <p>Come and see our latest groundbreaking technology in keyboards. Whether you're a head of a company looking to face lift their tech infastructure, or a gamer trying to find the perfect device for play, we have a multitude of options that'll surely satisfy.</p>
              </div>
          </div>
      </section>
  
      <section id="features">
          <div className="container flex flex-col items-center mx-auto mb-32 md:space-y-0 md:flex-row">
              <div className="flex flex-col space-y-5 md:w-1/2">
                  <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                      Modern
                  </h2>
                  <p className="max-w-sm text-center text-gray-400 md:text-left">
                      Modern problems requre modern solutions.
                  </p>
  
                  <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                      Simple
                  </h2>
                  <p className="max-w-sm text-center text-gray-400 md:text-left">
                      Simplicity for everyone.
                  </p>
  
                  <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                      Stylish
                  </h2>
                  <p className="max-w-sm text-center text-gray-400 md:text-left">
                      Not only being cool but looking cool.
                  </p>
              </div>
              <div className="md:w-1/2">
                  <img className="rounded-lg" src={require("../img/CHERRY_STREAM_HERO_1_900.jpg")} alt="" />
              </div>
          </div>
      </section>
  
      <section id="join">
          <div className="container flex flex-col items-center mx-auto mb-32 md:space-y-0">
              <h2 className="max-w-md text-4xl font-bold mb-6 text-center">
                  Join Us
              </h2>
              <img className="rounded-lg" src={require("../img/Keyboard.jpg")} alt="" />
          </div>
      </section>
  
     
      </>
    )
}

export default MainPage;