import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.js'

export default class Details extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

    render () {
      const {match, location, history } = this.props
      return (
        <div className="details-page">
          <div className="container">
            <div className="white-box">
              <section className="submenu">
                <div className="direction">
                  <a href="#" className="prev">Prev</a>
                  <a href="#" className="next">Next</a>
                </div>

                <nav className="sub-links">
                  <a href="#">More Ads by User</a>
                  <a href="#">Print</a>
                  <a href="#">Share</a>
                  <a href="#">Contact Seller</a>
                </nav>
              </section>

              <section className="content-area">
                <div className="media-column">
                  <Gallery />
                </div>
                <div className="details-column">
                  <div className="date">Posted: February 28th, 2018</div>
                  <h3 className="title">Red 2017 Tesla</h3>
                  <h4 className="price">$46,000</h4>
                  <div className="more-details">
                    <div className="info">
                      <label>Vin</label>
                      <h5>qwerqwerwerf</h5>
                    </div>
                    <div className="info">
                      <label>Mileage</label>
                      <h5>34255</h5>
                    </div>
                    <div className="info">
                      <label>Transmission</label>
                      <h5>Manual</h5>
                    </div>
                    <div className="info">
                      <label>Vin</label>
                      <h5>qwerqwerwerf</h5>
                    </div>
                    <div className="info">
                      <label>Mileage</label>
                      <h5>34255</h5>
                    </div>
                    <div className="info">
                      <label>Transmission</label>
                      <h5>Manual</h5>
                    </div>
                  </div>
                  <div className="description">
                    <label>Description</label>
                    <p>Brizzle egizzle funky fresh. Nullizzle sit sizzle diam izzle i saw beyonces tizzles and my pizzle went crizzle tincidunt that's the shizzle. Mammasay mammasa mamma oo sa et you son of a bizzle. Vivamus lectizzle sapizzle, lacinia sit amizzle, vulputate vitae, condimentum break yo neck, yall, nunc. Own yo' funky fresh amizzle maurizzle. Nullizzle funky fresh mattis get down get down. Morbi vulputate, elit in ultricizzle fo shizzle, things da bomb shizzlin dizzle justo, sed condimentum lacus mammasay mammasa mamma oo sa shizzle my nizzle crocodizzle shut the shizzle up. Sizzle fermentum pulvinar nunc. Dope dignissim. In hac habitasse platea dictumst. Shiznit sizzle amet dui. Get down get down sed yippiyo. Aenizzle in daahng dawg. Nizzle lobortizzle, owned egizzle boom shackalack suscipit, massa nulla crazy lorizzle, break yo neck, yall fermentizzle ipsum black crunk risizzle.</p>
                    <p>Brizzle egizzle funky fresh. Nullizzle sit sizzle diam izzle i saw beyonces tizzles and my pizzle went crizzle tincidunt that's the shizzle. Mammasay mammasa mamma oo sa et you son of a bizzle. Vivamus lectizzle sapizzle, lacinia sit amizzle, vulputate vitae, condimentum break yo neck, yall, nunc. Own yo' funky fresh amizzle maurizzle. Nullizzle funky fresh mattis get down get down. Morbi vulputate, elit in ultricizzle fo shizzle, things da bomb shizzlin dizzle justo, sed condimentum lacus mammasay mammasa mamma oo sa shizzle my nizzle crocodizzle shut the shizzle up. Sizzle fermentum pulvinar nunc. Dope dignissim. In hac habitasse platea dictumst. Shiznit sizzle amet dui. Get down get down sed yippiyo. Aenizzle in daahng dawg. Nizzle lobortizzle, owned egizzle boom shackalack suscipit, massa nulla crazy lorizzle, break yo neck, yall fermentizzle ipsum black crunk risizzle.</p>
                    <p>Brizzle egizzle funky fresh. Nullizzle sit sizzle diam izzle i saw beyonces tizzles and my pizzle went crizzle tincidunt that's the shizzle. Mammasay mammasa mamma oo sa et you son of a bizzle. Vivamus lectizzle sapizzle, lacinia sit amizzle, vulputate vitae, condimentum break yo neck, yall, nunc. Own yo' funky fresh amizzle maurizzle. Nullizzle funky fresh mattis get down get down. Morbi vulputate, elit in ultricizzle fo shizzle, things da bomb shizzlin dizzle justo, sed condimentum lacus mammasay mammasa mamma oo sa shizzle my nizzle crocodizzle shut the shizzle up. Sizzle fermentum pulvinar nunc. Dope dignissim. In hac habitasse platea dictumst. Shiznit sizzle amet dui. Get down get down sed yippiyo. Aenizzle in daahng dawg. Nizzle lobortizzle, owned egizzle boom shackalack suscipit, massa nulla crazy lorizzle, break yo neck, yall fermentizzle ipsum black crunk risizzle.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    )
  }
}
