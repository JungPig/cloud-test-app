import React, { useState, useEffect } from 'react';

const Menupage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://www.jungpigapp.shop:443/menu/select')
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  return (
    <>
      <h1>우리가 메뉴를 불러와서 보여줄 페이지</h1>
      <ul>
        {menu.length > 0 ? (
          menu.map((item, index) => (
            <li key={index}>
              <h2>{item.menuName}</h2>
              <p>{item.menuPrice}</p>
              <p>Price: {item.categoryCode}</p>
            </li>
          ))
        ) : (
          <p>메뉴를 불러오는 중...</p>
        )}
      </ul>
    </>
  );
};

export default Menupage;
