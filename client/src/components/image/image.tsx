import { IKImage } from 'imagekitio-react';
import { MouseEventHandler } from 'react';

type TImageProps = {
  path?: string;
  src: string;
  alt?: string;
  className?: string;
  w?: string;
  h?: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

export const Image: React.FC<TImageProps> = ({
  path,
  src,
  alt = '',
  className = '',
  w = '',
  h = '',
  onClick = () => {},
}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={src}
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
