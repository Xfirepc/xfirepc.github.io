import React from 'react'

function PortfolioContent (props) {

  if(props.item != ''){
    return props.item.map((data)=> {

      console.log(data)
      return (<div key={data.id}>
        <div className="isotope-item photography wow fadeInUp">
        	<div className="portfolio-item-wrap">
									<div className="portfolio-item">
										<a ref={props.setRef} className={"item-link inline-popup-trigger " + data.id} onClick={props.handleClick} href={`#portfolio-${data.id}`}>
											<span className="cover bg-transparent-9-main"></span>
											<img className="item-img" src={props.url_image} alt="image"/>
											<div className="item-info text-white">
												<h3 className="item-info-title">{data.title}</h3>
												<p className="item-info-text">{data.catedory}</p>
											</div>
										</a>
									</div>

									<div id={`portfolio-${data.id}`} className="inline-popup mfp-hide">
										<div className="inline-popup-inner">

											<div className="inline-popup-image bg-image" style={{backgroundImage: props.url_image, backgroundPosition: '10% 50%'}}></div>

											<div className="row margin-top-40">
												<div className="col-md-8 margin-bottom-20">
													<h2 className="no-margin-top">{data.name}</h2>
													<p>{data.description}</p>
												</div>
												<div className="col-md-4 margin-bottom-20 padding-left-40">
													<ul className="list-unstyled">
														<li>Client: <strong><a>{data.client}</a></strong></li>
														<li>Date: <strong><a>{data.date}</a></strong></li>
														<li>Category <strong><a>{data.category}</a></strong></li>
														<li>Copyright ©2018, All Rights Reserved</li>
													</ul>
													<a href={data.link} target="_blank" className="btn btn-primary btn-rounded btn-lg margin-top-20">View Project</a>
												</div>
											</div>

										</div>

										<a className="inline-popup-close" href="#"><i className="fa fa-times"></i></a>

									</div>
								</div>
              </div>
      </div>)

    })
  }

  return null
}

export default PortfolioContent