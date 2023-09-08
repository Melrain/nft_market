import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins mb-10 text-xl">{heading}</h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="font-poppins cursor-pointer hover:text-nft-black-1 my-3"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      {/* 左侧 */}
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:p-4 p-16">
        {/* Email部分 */}
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-auto">
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="ml-1 dark:text-white text-nft-black-1 font-semibold text-lg">
              CryptoKet
            </p>
          </div>
          <p className="font-poppins dark:text-white text-nft-dark font-semibold text-base mt-6">
            Get the latest update
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 broder-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your email"
              className="w-full flex-1 px-4 py-2 dark:bg-nft-black-2 bg-white dark:text-white text-nft-black-1 font-poppins font-semibold outline-none text-base"
            />
            <div className="flex-initial">
              <Button btnName="Email Me" classStyles="rounded-md" />
            </div>
          </div>
        </div>
        {/* FooterLinks */}
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="CryptoKet"
            items={['Explore', 'How it works', 'Contact Us']}
          />
          <FooterLinks
            heading="Support"
            items={[
              'Help Center',
              'Term of Service',
              'Legal',
              'Privacy Policy',
            ]}
          />
        </div>
      </div>
      {/* 最底下copyrights */}
      <div className="flexCenter w-full mt-5 border-t border-5 dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            CryptoKet, Inc. All Rights Reversed
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, index) => (
              <div className="mx-2 text-center cursor-pointer" key={index}>
                <Image
                  src={image}
                  width={24}
                  height={24}
                  objectFit="contain"
                  alt="social"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
