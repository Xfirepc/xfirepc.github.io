import React from 'react'


function BlogContent ( props ) {

  if(props.item != ''){
    return (
      props.item.map(( data ) => {
        return (
          //Codigo html
          <div className="blog-list-item row wow fadeInUp">

            <div className="col col-md-6 no-padding">
              <a href="#" className="bco blog-list-image bg-image" 
              style={{backgroundImage: 'url(assets/img/blog/blog-1.jpg)', backgroundPosition: '50% 50%'}}></a>
            </div>

            <div className="col col-md-6 no-padding">
              <div className="bco blog-list-info">
                <h2 className="blog-list-title"><a href="#" title="Aenean Odio Metus">Aenean Odio Metus</a></h2>
                <div className="blog-list-meta">
                  <a href="#" className="article-time">29 jan 2016</a> - in
                  <a href="#" className="article-category">#web design</a>
                </div>
                <p className="blog-list-desc">
                  Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat...
                </p>
              </div>
            </div>

          </div>
          //Codigo html
        )
      })
    )
  }else{
    return null   
  }
  
}

export default BlogContent