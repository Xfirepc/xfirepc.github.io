import React from 'react'


function BlogContent ( props ) {

  if(props.item != ''){
    let x = 0;
    let push = ''
    let pull = ''

    
    return (
      props.item.map(( data ) => {
        if (x % 2 == 0) {
          pull = 'col-md-pull-6'
          push = 'col-md-push-6'
        } else {
          pull = ''
          push = ''
        }
        x++
        return (
          //Codigo html
          <div className="blog-list-item row wow fadeInUp" key={data.id}>
            <div className={'col col-md-6 no-padding ' + push}>
            <a href="#" className="bco blog-list-image bg-image" 
              style={{backgroundImage: `url(${data.url_image})`, backgroundPosition: '50% 50%'}}></a>
            </div>
            <div className={'col col-md-6 no-padding ' + pull}>
              <div className="bco blog-list-info">
                <h2 className="blog-list-title"><a href="#" title="Aenean Odio Metus">{ data.title }</a></h2>
                <div className="blog-list-meta">
                  <a href="#" className="article-time">{ data.date }</a> - in &nbsp;
                  <a href="#" className="article-category">{ data.mentions }</a>
                </div>
                <p className="blog-list-desc">
                  { data.description }
                </p>
              </div>
            </div>

          </div>
          //Codigo html

        )

      }) //mapping data
    )
  }
  else
    return null   
  
}

export default BlogContent