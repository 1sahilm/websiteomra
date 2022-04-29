import LeadershipSlider from "../component/leadershiSlider";


function Leadership() {
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/2ac58ca3c5e1d553148f12ba1d7a38e8.jpg)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
      <div className="omra-leadersection">
        <div className="container">
            <div className="row">
                <div className="col-3 omra-leadership">
                    <h2 className="text-white">Thought Leadership
</h2>
                </div>
                <div className="col-9">
                <LeadershipSlider/>
                </div>
            </div>
        </div>
        </div>
		</section>
       
    </>
  )
}

export default Leadership;