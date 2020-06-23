import React from 'react';
import { Row, Col, Button } from 'antd';
import { downAttendanceList, ImageUrl } from '../../utils/index';
import Keyword from '@/components/Keyword';
import './index.less';
class WansliDetails extends React.PureComponent {
    state = {
        details: JSON.parse(sessionStorage.getItem('datalis')),
        clicked: false,
        choose: 0,
        isShow: false,
        categoryBox: 100
    }
    componentDidMount(){
        const categoryBox = document.getElementById('categoryBox').offsetWidth;
        this.setState({
          categoryBox
        })
    }
    onDownloadDetails = (id) => {
        downAttendanceList(id, true);
    }

      getDetails = async (item) => {
        await sessionStorage.setItem('val', item);
        window.location.href = "/list";
      }
    render() {
        const { details } = this.state;
        return (
            <div className="container-center details-nav">
                <Row>
                    <Col span={11}>
                        <div className='details-box'>
                            <div className="details-name">
                                <p>{`纹样编号：${details.elementId}`}</p>
                                <Button className="download" onClick={() => { this.onDownloadDetails(details.elementId) }}>下载</Button>
                            </div>
                            <div className='details-img'>
                                <img src={`${ImageUrl}/${details.elementId}.png`} onError={e => {
                                    e.target.src = `${ImageUrl}/wansili22,571.png`
                                }} />
                            </div>
                        </div>
                    </Col>
                    <Col span={13} id="categoryBox">
                        <div className='attribute-detals-box'>
                            <div className="detalis-top">
                                <span className="category">类别</span>
                                <span className="tages">标签</span>
                            </div>
                            <div className="details-container">
                                <Keyword props={this} getDetails={this.getDetails} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default WansliDetails;