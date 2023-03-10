import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const AboutMe: NextPage = (pageProps: PageProps): JSX.Element => {
    const links = [
        {
            icon: faInstagram,
            href: 'https://instagram.com/bahozzx'
        },
        {
            icon: faTwitter,
            href: '/twitter'
        },
        {
            icon: faDiscord,
            href: 'https://discord.com/users/673849208154882078'
        },
        {
            icon: faYoutube,
            href: 'https://youtube.com/@BahozK'
        }
    ];

    const content = <p className='text-center my-4 text-lg text-white/80'>
        Merhaba! Ben&apos; Bahoz lise öğrencisiyim
        <br></br>
        Also, since I&apos;m a high school student, I can only code in my spare time.
        <br></br>
        But if you have a project in your mind, don&apos;t hesitate to contact me, I&apos;m a freelancer!
        <br></br>
        .... <a className='text-orange-400/90' target={'_blank'} href='https://con.city/' rel="noreferrer">ConCity</a>!
    </p>

    return (
        <div id="aboutme" className='my-4 md:px-8 w-full mb-20 flex flex-col items-center'>
            <h2 className='font-bold text-lg uppercase'>Hakkımda</h2>
            <div className='flex flex-row flex-wrap items-center justify-center max-w-4xl'>
                <div className='block'>
                    {content}
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        {links.map((data, index) => <a className='m-3' rel="noreferrer" target={'_blank'} href={data.href} key={`link${index}`}>
                            <FontAwesomeIcon className='text-white/90 hover:text-purple-400/90 duration-150' size={'2x'} icon={data.icon} />
                        </a>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
