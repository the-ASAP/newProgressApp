import React from 'react';
import ModalBackdrop from 'components/common/ModalBackdrop';
import { CloseButton, PrimaryButton } from 'components/common/Buttons';
import Link from 'next/link';
import { telegram } from 'constants/contacts';
import { useRouter } from 'next/router';
import style from './index.module.scss';

const ModalSuccess = ({ hideModal }) => {
  const router = useRouter();

  const goToMain = () => {
    router.push('/');
    hideModal();
  };

  return (
    <ModalBackdrop hideModal={hideModal}>
      <div className={style.success}>
        <CloseButton onClick={hideModal} customClassName={style.close__success__btn} />
        <div className={style.success__content}>
          <h3 className={style.success__title}>Спасибо. До встречи!</h3>
          <PrimaryButton onClick={goToMain} customClassName={style.success__button}>
            На главную
          </PrimaryButton>
          <div onClick={goToMain}>
            <Link href={telegram}>
              <a target="blank" className={style.success__link}>
                Подписывайтесь на телеграм-канал Progress app
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

export default ModalSuccess;
