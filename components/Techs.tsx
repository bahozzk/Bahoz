import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Minecraft } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      //Minecraft Evi
      icon: <FontAwesomeIcon color={'#d64613'} size="6x" icon={faMinecraft} />,
      href: 'https://youtube.com/minecraftevi'
    }
  ]

  return (
    <div className='my-20 md:px-8 w-full flex flex-col items-center'>
      <h2 className='font-bold text-lg uppercase'>Technologies</h2>
      <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
        {techs.map((data, index) => <a target={'_blank'} rel="noreferrer" href={data.href} className={`m-6 flex flex-row items-center`} key={`techs${index}`}>
          {data.icon}
        </a>)}
      </div>
    </div>
  );
};

export default Techs;
