import React from 'react';
import { ImageUrl } from '../../utils/index';
import './index.less';
const Hotlabels = props => {
    const { datarouse } = props;
    const data = JSON.parse(datarouse[1]);
    return (
        <div className="lable-box">
            <h1 onClick={() => { props.onTitle(datarouse[0]) }}>{datarouse[0]}</h1>
            <div className="images-box">
                {
                    data.map(item => {
                        return (
                            <div className="special-img" key={item.elementId}>
                                <img src={`${ImageUrl}/${item.elementId}.png`} onClick={() => { props.handelResult(item) }} onError={e => {
                                    e.target.src = `${ImageUrl}/wansili22,571.png`
                                }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Hotlabels;