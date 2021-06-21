import React from 'react';
import Sala1 from '../../assets/clinic/sala1.png';
import Sala2 from '../../assets/clinic/sala2.png';
import Sala3 from '../../assets/clinic/sala3.jpeg';
import 'antd/dist/antd.css'
import {Card,Row,Col,Carousel} from 'antd';

class CarouselSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                 <Card className="card-wrap" style={{backgroundColor: "#ededf4"}} >
                    <Carousel autoplay effect="fade">
                        <div>
                            <img className= "PhotoSlider" style={{width: "40vw", height: "80vh", backgroundColor: "#ededf4"}} src={Sala1} alt =""/>
                        </div>
                        <div>
                            <img className= "PhotoSlider" style={{width: "40vw", height: "80vh", backgroundColor: "#ededf4"}} src={Sala2} alt=""/>
                        </div>
                        <div>
                            <img className= "PhotoSlider" style={{width: "40vw", height: "80vh", backgroundColor: "#ededf4"}} src={Sala3} alt=""/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}
export default CarouselSlider;