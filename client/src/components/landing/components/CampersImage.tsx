/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-responsive';
import wideImg from '../../../assets/images/landing/wide-image.png';
import { Spacer, ImageLoader } from '../../helpers';

interface Props {
  page?: string;
}

interface ImageConfig {
  spacerSize: number;
  height: number;
  width: number;
}

const LARGE_SCREEN_SIZE = 1200;

const imageConfig = {
  donate: {
    spacerSize: 0,
    height: 345,
    width: 585
  },
  landing: {
    spacerSize: 2,
    height: 442,
    width: 750
  }
};

function CampersImage({ page = 'landing' }: Props): JSX.Element {
  const { t } = useTranslation();
  const { spacerSize, height, width }: ImageConfig =
    page === 'donate' ? imageConfig.donate : imageConfig.landing;

  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <Spacer size={spacerSize} />
      <ImageLoader
        alt={t('landing.hero-img-description')}
        className='landing-page-image'
        height={height}
        src={wideImg}
        width={width}
      />
      <p className='text-center caption'>{t('landing.hero-img-description')}</p>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
export default CampersImage;
