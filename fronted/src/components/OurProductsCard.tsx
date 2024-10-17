import { ReactNode } from 'react';

interface OurProductsCardProps {
  svg: ReactNode;
  text: string;
  header: string;
  reverseLayout?: boolean;
}

const OurProductsCard = ({
  svg,
  text,
  header,
  reverseLayout,
}: OurProductsCardProps) => {
  const containerClasses = reverseLayout ? 'flex-row-reverse' : 'flex-row';
  const textClasses = reverseLayout ? 'text-right mr-4 ' : 'text-left ml-4';

  return (
    <div className={`flex items-center gap-4 ${containerClasses}`}>
      <div className='flex items-center justify-center'>
        <div className='w-[432px] h-[327px]'>{svg}</div>
      </div>
      <div
        className={`flex flex-col max-w-[1240px] max-h-[417px] justify-center gap-4 pb-4 ${textClasses}`}
      >
        <p className='font-semibold text-2xl text-[#FF4D00]'>{header}</p>
        <p className='text-white leading-relaxed text-xl'>{text}</p>
      </div>
    </div>
  );
};

export default OurProductsCard;
