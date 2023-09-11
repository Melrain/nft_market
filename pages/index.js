import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Banner, CreatorCard } from '../components/index';
import images from '../assets';
import { makeId } from '../utils/makeId';

// 主页
const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const [isHideButtons, setIsHidenButtons] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // 滚动箭头显示逻辑
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setIsHidenButtons(false);
    } else {
      setIsHidenButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <div className="flex justify-center sm:px p-12">
      <div className="w-full minmd:w-4/5">
        {/* 横幅 */}
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl"
          name="Discover, collect, and sell extraordinary NFTs"
        />
        <div>
          <h1
            className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4"
            id="top sellers"
          >
            Best Creator
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(2)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}

              {/* scroll左右箭头 */}
              {!isHideButtons ? (
                <>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 cursor-pointer left-0 top-45"
                    onClick={() => {
                      handleScroll('left');
                    }}
                  >
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      alt="left_arrow"
                      className={
                        theme === 'light' ? 'filter invert' : undefined
                      }
                    />
                  </div>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 cursor-pointer right-0 top-45"
                    onClick={() => {
                      handleScroll('right');
                    }}
                  >
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      alt="left_arrow"
                      className={
                        theme === 'light' ? 'filter invert' : undefined
                      }
                    />
                  </div>
                </>
              ) : (
                <> </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
