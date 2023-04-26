import { useState } from 'react';

import Wrapper from '../../assets/wrapper/mid_28/Menu_28';

const MenuStaticPage_28 = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');
  return (
    <Wrapper>
      <section className='menu'></section>
    </Wrapper>
  );
};

export default MenuStaticPage_28;
