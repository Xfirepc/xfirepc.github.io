import React from 'react'

function PortfolioContent (props) {

  if(props.item != ''){
    return props.item.map((data)=> {
      //console.log(data)
      return (<div key={data._id}>
        <div className="isotope-item wow fadeInUp">
        	<div className="portfolio-item-wrap">
					
									<div className="portfolio-item">
										<a className={"item-link inline-popup-trigger " + data._id} onClick={ () => {
											props.handleClick(data._id)
										}} href={`#portfolio-${data._id}`}>
											<span className="cover bg-transparent-9-main"></span>
											<img className="item-img" alt="image" src={data.image} width="100%" height="320px"/>
											<div className="item-info text-white">
												<h3 className="item-info-title">{data.title}</h3>
												<p className="item-info-text"><strong>{data.category}</strong></p>
												<p className="item-info-text"> Tap to show! </p>
												
											</div>
										</a>
									</div>

									<div id={`portfolio-${data._id}`} className="inline-popup mfp-hide">
										<div className="inline-popup-inner">


											<div className="row margin-top-40">
												<div className="col-md-8 margin-bottom-20">
													<h2 className="no-margin-top">{data.title}</h2>
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
											<div className="inline-popup-image bg-image" style={{backgroundImage: `url(${data.image})`, backgroundSize: '50%'}}></div>

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