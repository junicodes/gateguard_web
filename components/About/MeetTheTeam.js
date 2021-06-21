import StyledImage from '../static-components/StyledImage';
import styles from './About.module.scss';
import Image from 'next/image';

const MeetTheTeam = () => {
    
    return (
        <div className="wrapper relative animate__animated animate__fadeIn">
            <div className="px-4 md:px-10 xl:px-36 item md:my-10">
                <h1 className="text-4xl sm:text-5xl xl:text-7xl text-center w-full font-semibold">
                      Meet the team
                </h1>
                <p className="mt-5 w-full text-lg sm:text-base lg:text-xl text-center ">
                     Meet our exceptionally talent team of innovators helping to <br className="hidden lg:flex"></br> build an exceptional estate management solution
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 team-block">
                <div className="my-8">
                    <img src="https://res.cloudinary.com/gateguard-co/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1600253212/gateguard/team/default-avatar-profile-icon-vector-18942381_tk1ftt.png"
                    alt="Oluwamayowa Fadairo" className="team-img mx-auto" />

                    <h1 className="text-base text-center w-full font-semibold mt-3">
                      Oluwamayowa Fadairo
                    </h1>
                    <p className="mt-3 w-full text-sm text-center ">
                       CEO/COO
                    </p>
                    <div className="flex justify-center text-left mt-3">
                        <a href="https://twitter.com/Mawhizzle" className="mr-3 ml-3">
                            <Image src="/images/social-icons/twitter.svg" width={25} height={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/oluwamayowa-fadairo-6460b282" className="mx-3">
                            <Image src="/images/social-icons/linkedlin.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
                <div className="my-8">
                   <img src="https://res.cloudinary.com/gateguard-co/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1600253212/gateguard/team/junicodes_aoqxj4.png"
                    alt="Okechukwu Obi" className="team-img mx-auto" />
                    <h1 className="text-base text-center w-full font-semibold mt-3">
                        Okechukwu Obi
                    </h1>
                    <p className="mt-3 w-full text-sm text-center ">
                        CTO/Software Engineer
                    </p>
                    <div className="flex justify-center text-left mt-3">
                        <a href="https://twitter.com/junicodes" className="mr-3 ml-3">
                            <Image src="/images/social-icons/twitter.svg" width={25} height={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/okechukwu-obi-746161196" className="mx-3">
                            <Image src="/images/social-icons/linkedlin.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
                <div className="my-8">
                   <img src="https://res.cloudinary.com/gateguard-co/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1600253212/gateguard/team/Frederick_Damasus_cx5utq.jpg"
                    alt="Frederick Damasus" className="team-img mx-auto" />
                    <h1 className="text-base text-center w-full font-semibold mt-3">
                      Frederick Damasus
                    </h1>
                    <p className="mt-3 w-full text-sm text-center ">
                      Product Designer
                    </p>
                    <div className="flex justify-center text-left mt-3">
                        <a href="https://twitter.com/freddamasus" className="mr-3 ml-3">
                            <Image src="/images/social-icons/twitter.svg" width={25} height={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/frederickdamasus/" className="mx-3">
                            <Image src="/images/social-icons/linkedlin.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
                <div className="my-8" >
                    <img src="https://res.cloudinary.com/gateguard-co/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1600253212/gateguard/team/judeJohnathan_vocqjr.jpg"
                    alt="Jude Jonathan" className="team-img mx-auto" />
                    <h1 className="text-base text-center w-full font-semibold mt-3">
                      Jude Jonathan
                    </h1>
                    <p className="mt-3 w-full text-sm text-center ">
                      Software Engineer
                    </p>
                    <div className="flex justify-center text-left mt-3">
                        <a href="https://twitter.com/_JudeJay" className="mr-3 ml-3">
                            <Image src="/images/social-icons/twitter.svg" width={25} height={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/jude-jonathan/" className="mx-3">
                            <Image src="/images/social-icons/linkedlin.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
                {/* <div className="mx-auto my-8" >5</div>
                <div className="mx-auto my-8" >6</div> */}
            </div>

            <style jsx>{`

                .team-img {
                    width: 160px;
                    height: 160px;
                    object-fit: contain;
                    border-radius: 50%;
                    border: 1px solid #e6e6e6;
                }
                img {
                    vertical-align: middle;
                }

                h1 {
                    line-height: 1.2em;
                }
            
            `}
            </style>
        </div>
    )
}

export default MeetTheTeam;