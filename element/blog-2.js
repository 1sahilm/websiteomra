import BlogSlider2 from "../component/blogSlider";


function Blog2() {
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/2ac58ca3c5e1d553148f12ba1d7a38e8.jpg)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">OUR BLOG</h6>
					<h2 className="title">Latest News & Blog</h2>
				</div>
				<BlogSlider2/>
			</div>
		</section>
    </>
  )
}

export default Blog2;