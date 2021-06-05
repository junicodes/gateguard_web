import StyledImage from '../static-components/StyledImage';

const Features = () => {
    
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between mt-32 sm:mt-48 md:mt-10 xl:mt-32">

            <div className="w-full mt-10 xl:mt-5">

                <div className="mx-4 xl:mx-52 md:flex justify-around">
                    <h1 className="font-bold text-3xl md:text-4xl text-left md:w-1/2">
                        All in one Estate <br></br> Management Solution
                    </h1>
                    <p className="my-5 md:mt-0 md:w-1/2 md:px-4">
                    Innovative features designed to enhance security of gated communities 
                    and provide better convenience for residents, association members, estate managers and security staff.
                    </p>
                </div>

                <div className="mx-4 xl:mx-52 md:flex justify-around my-14">

                    <div className="md:flex justify-start md:w-1/2 my-10 md:my-5">

                       <div className="w-full md:w-1/4 my-4">
                              <StyledImage src="/images/home-page/visitor-feature-icon.svg" className="" width={92} height={92} />
                        </div>

                        <div className="w-full md:w-3/4 my-4">

                            <h1 className="font-bold text-2xl text-left text-primaryFontColor">
                                Visitor Management
                            </h1>

                            <p className="my-2 md:mt-0 text-lg text-primaryFontColor">
                                Go digital with a passcode-based check-in system
                            </p>

                        </div>

                    </div>

                    <div className="md:flex justify-start md:w-1/2 my-10 md:my-5">

                        <div className="w-full md:w-1/4 my-4">
                              <StyledImage src="/images/home-page/bill-management-icon.svg" className="" width={92} height={92} />
                        </div>

                        <div className="w-full md:w-3/4 my-4">

                            <h1 className="font-bold text-2xl text-left text-primaryFontColor">
                                 Bills Management
                            </h1>

                            <p className="my-2 md:mt-0 text-lg text-primaryFontColor">
                                 Receive, generate reports for payments and dues 
                            </p>

                        </div>
                        
                    </div>

                </div>


                <div className="mx-4 xl:mx-52 md:flex justify-around my-14">

                    <div className="md:flex justify-start md:w-1/2 my-10 md:my-5">

                        <div className="w-full md:w-1/4 my-4">
                              <StyledImage src="/images/home-page/service-directory-icon.svg" className="" width={92} height={92} />
                        </div>

                        <div className="w-full md:w-3/4 my-4">

                            <h1 className="font-bold text-2xl text-left text-primaryFontColor">
                                Service Directory
                            </h1>

                            <p className="my-2 md:mt-0 text-lg text-primaryFontColor">
                                Manage vendors that serve your estate
                            </p>

                        </div>

                    </div>

                    <div className="md:flex justify-start md:w-1/2 my-10 md:my-5">

                        <div className="w-full md:w-1/4 my-4">
                              <StyledImage src="/images/home-page/admin-web-portal-icon.svg" className="" width={92} height={92} />
                        </div>

                        <div className="w-full md:w-3/4 my-4">

                            <h1 className="font-bold text-2xl text-left text-primaryFontColor">
                                 Admin Web Portal
                            </h1>

                            <p className="my-2 md:mt-0 text-lg text-primaryFontColor">
                                 Take total control of your estate via our intuitive admin web portal.
                            </p>

                        </div>
                        
                    </div>

                </div>

            </div>

            <style jsx>{`

                .wrapper {
                    height: 750px;
                }

                @media screen and (max-width: 768px) {

                }
            
            `}
            </style>
        </div>
    )
}

export default Features;