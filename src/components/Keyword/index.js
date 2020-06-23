
import React, { useState } from 'react';
import './index.less';
const Keyword = (obj) => {
  const { categoryBox, details } = obj.props.state;
  const { attributes } = details;
  const list = Object.entries(attributes);
  const data = [];
  const [choose, setChoose] = useState(obj.props.state.choose);
  const [clicked, setClicked] = useState(obj.props.state.clicked);
  const handeSeeMore = (index) => {
    setChoose(index);
    setClicked(!clicked);
  }
  list.map((item, index) => {
    data.push(
      {
        key: index,
        ...item
      }
    )
    return data;
  })
  return (
    <ul>
      {
        data.map((item, index) => {
          return (
            <li className='category-box'>
              <span className="details-category">{item[0]}</span>
              <li className='category-list' style={{ height: choose === item.key && clicked ? "auto" : "40px" }}>
                {
                  item[1].map((item) => {
                    return (
                      <span className="category-text" id="categoryList" onClick={(e) => obj.getDetails(item)} key={item.key}>{item}</span>
                    )
                  })
                }
                {
                  Number(item[1].length * 100) > Number(categoryBox) ? (<span className={choose === item.key && clicked ? "packup" : "more"} onClick={() => handeSeeMore(index)} />) : null
                }
              </li>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Keyword;
