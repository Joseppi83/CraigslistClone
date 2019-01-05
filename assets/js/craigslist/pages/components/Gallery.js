import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }
  componentWillMount(){
    const allImgs = [
      'https://pixel.nymag.com/imgs/daily/selectall/2018/03/13/13-tesla-1.w1200.h630.jpg',
      'https://amp.businessinsider.com/images/5abd6770295fa226008b45b0-750-375.jpg', 'https://static1.squarespace.com/static/57d031e5579fb34aca61922e/t/57d6f47546c3c41dfbc9034b/1473705089142/', 'https://s3.amazonaws.com/cn-static/si/sw1280/8319/8319_st1280_119.jpg', 'https://cdn.shopify.com/s/files/1/1724/5219/files/black-tesla-model-s-purple-rain-ts115-21-inch-forged-wheels-matte-black-ferrari-leather-alcantara-interior-signature-square-quilt-gloss-carbon-fiber-trim-steering-wheel-34_345x@2x.jpg?v=1517024763', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/tesla-model-s-95d-dashboard.jpg?itok=ScqOqjaU'
    ]
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }
  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return(
        <div key={i} onClick={this.clickedThumb.bind(null, i)} className="thumb-img" style={{
          "backgroundImage": `url('${item}')`
        }}></div>
      )
    })
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.allImgs.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }
  prevBtn = () => {
    if(this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }
  clickedThumb = (index) => {
    this.setState({
      currentIndex: index
    })
  }
    render () {
      const {match, location, history } = this.props
      return (
                  <div className="gallery">
                    <div className="slider">
                      <div className="main-image">
                        <div className="arrows left-arrow" onClick={this.prevBtn}>
                          <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className="arrows right-arrow" onClick={this.nextBtn}>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className="image-1" style={{
                          "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
                        }}>
                        </div>
                      </div>
                    </div>
                    <div className="thumbnails">
                      {this.allImgsLoop()}
                    </div>
                  </div>

    )
  }
}
