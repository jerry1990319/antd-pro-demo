import React from 'react';
import Header from '@/components/Header';


class BasicLayout extends React.PureComponent {
  onChangeVal = async (e) => {
    await sessionStorage.setItem('val', e.target.value);
    window.location.href = '/list';
  }
  Callback = () => {
    window.location.href = '/';
  }
  render() {
    const { children, location: { pathname } } = this.props;
    const isShow = pathname.toString() === '/index' ? false : true;
    return (
      <div className="container">
        <Header isShow={isShow} onChangeVal={this.onChangeVal} Callback={this.Callback} />
        {children}
      </div>
    );
  }
}
export default BasicLayout;