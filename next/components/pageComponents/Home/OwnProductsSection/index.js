import React from 'react';
import clsx from 'clsx';
import Project from 'components/mainComponents/Project';
import { ownProducts } from 'constants/data';
import style from './index.module.scss';

const imgMini = [0];

const OwnProductsSection = () => {
  return (
    <div className={clsx(style.products, 'wrapper')}>
      <h2 className={style.products__title}>
        Собственные <span>продукты</span>
      </h2>

      <div className={style.product__list}>
        {!!ownProducts?.length &&
          ownProducts.map((product, index) => (
            <Project key={product.id} {...product} isSmall={imgMini.includes(index)} isLink />
          ))}
      </div>
    </div>
  );
};

export default OwnProductsSection;
