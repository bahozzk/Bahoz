import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUbuntu } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      //Minecraft Evi
      href: 'https://youtube.com/minecraftevi'
      icon: 'https://media.discordapp.net/attachments/1077331799262363649/1083800777799249930/minecraftevi.png'
    }
  ]

  return (
    <div className='my-20 md:px-8 w-full flex flex-col items-center'>
      <h2 className='font-bold text-lg uppercase'>Ekstralar</h2>
      <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
        {techs.map((data, index) => <a target={'_blank'} rel="noreferrer" href={data.href} className={`m-6 flex flex-row items-center`} key={`techs${index}`}>
          {data.icon}
        </a>)}
      </div>
    </div>
  );
};

export default Techs;
