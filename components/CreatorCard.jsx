import Image from 'next/image';
import images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => (
  <div
    className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark  dark:border-nft-black-3 border-nft-gray-1 rounded-3xl
   flex flex-col p-4 m-4"
  >
    {/* 左上数字 */}
    <div className="w-8 h-8 minlg:w-10 minlg:h-10 bg-nft-red-violet flexCenter rounded-full">
      <p className="font-poppins text-white font-semibold text-base minlg:text-lg">
        {rank}
      </p>
    </div>

    {/* 中间头像和绿勾 */}
    <div className="my-2 flex  justify-center">
      <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
        <Image
          src={creatorImage}
          layout="fill"
          objectFit="cover"
          alt="creatorName"
          className="rounded-full"
        />
        <div className="absolute w-4 h-4 bottom-2 -right-0 minlg:w-7 minlg:h-7">
          <Image
            src={images.tick}
            layout="fill"
            objectFit="contain"
            alt="tick"
          />
        </div>
      </div>
    </div>

    {/* 下方名字和ETH */}
    <div className="mt-3 minlg:mt-7 text-center flexCenter flex-col">
      <p className="font-semibold text-base font-poppins">{creatorName}</p>
      <p className="mt-1 font-poppins font-semibold text-base">
        {creatorEths.toFixed(2)} <span className="font-normal">ETH</span>
      </p>
    </div>
    <div />
  </div>
);

export default CreatorCard;
