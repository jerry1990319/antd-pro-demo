import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.less';

const Header = (props) => {
    const { isShow } = props;
    return (
        <div className="header">
            <h1>西湖一号纹样搜索系统</h1>
            {
                isShow ? <span onClick={props.Callback}>首页</span> : null
            }
            {
                isShow ? (<Input
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                    placeholder={sessionStorage.getItem('val')}
                    onPressEnter={props.onChangeVal}
                    defaultValue={sessionStorage.getItem('val')}
                />) : null
            }
        </div>
    )
}
export default Header;
