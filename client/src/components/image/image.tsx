import { IKImage } from 'imagekitio-react';
import { MouseEventHandler } from 'react';

type TImageProps = {
  path: string;
  alt?: string;
  className?: string;
  w?: string;
  h?: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

export const Image: React.FC<TImageProps> = ({
  path,
  alt = '',
  className = '',
  w = '',
  h = '',
  onClick = () => {},
}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading='lazy'
      lqip={{ active: true, quality: 20 }}
      className={className}
      onClick={onClick}
    />
  );
};
