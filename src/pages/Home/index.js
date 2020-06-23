import React from 'react';
import { connect } from 'umi';
import { Input } from 'antd';
// import http from '../../utils/http';
import helper from '../../utils/helper';
import { ImageUrl } from '../../utils/index';
import Hotlabels from '@/components/Hotlabels';
import './index.less';

const { Search } = Input;
@connect(({ index, loading }) => ({
    ...index,
    // loading: loading.effects['index/getPatternsearch']
}))

class HomePage extends React.PureComponent {
    state = {
        hotList: []
    }
    componentDidMount() {
        this.patternsearch()
    }
    onSearch = (val) => {
        sessionStorage.setItem('val', val);
        window.location.href = '/list';
    }
    handelResult = async (item) => {
        await sessionStorage.setItem('datalis', JSON.stringify(item));
        window.open("/details");
    }
    onTitle = async (val) => {
        await sessionStorage.setItem('val', val);
        window.location.href = '/list';
    }
    patternsearch = async () => {
        await this.props.dispatch({
            type: 'index/getPatternsearch',
        });
        const { patternsearch } = this.props;
        const dataList = Object.entries(patternsearch)
        dataList.forEach(element => {
            JSON.parse(element[1]).forEach(item => {
                if (item.elementId) {
                    helper.preloadImage(`${ImageUrl}/${item.elementId}.png`);
                }
            })
        });
        this.setState({
            hotList: patternsearch
        })
    }
    render() {
        const { hotList = [] } = this.state;
        const list = Object.entries(hotList);
        return (
            <div className="container-center">
                <div className="wrapper">
                    <Search
                        style={{ width: '60%', height: '60px' }}
                        placeholder="请输入灵感关键词"
                        enterButton="搜索"
                        size="large"
                        onSearch={this.onSearch}
                    />
                    <div className='nav'>
                        <h1 className="hot-label">热门搜索标签</h1>
                        {
                            list.map((item, index) => {
                                return (<Hotlabels datarouse={item} handelResult={this.handelResult} onTitle={this.onTitle} key={item} />)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;