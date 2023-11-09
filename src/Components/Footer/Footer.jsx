import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto p-10">
                <div className="flex flex-col items-center md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <img className="w-16 mx-auto" src="/assets/favicon.png" alt="Company Logo" />
                        <p className="font-bold text-xl">JobQ Ltd.</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-justify">
                        <p className="font-bold">Email: job@gmail.com</p>
                        <p className="font-bold">TelePhone: +18726305371</p>
                        <p className="font-bold" data-tip="Address">Address: 75 jon-Street, NY,  USA</p>
                    </div>
                    <div>
                        <p>Copyright © 2023 - All rights reserved</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center md:justify-end">
                    <a href="https://twitter.com/" className="text-2xl hover:text-blue-500 mx-2">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/" className="text-2xl hover:text-blue-500 mx-2">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/" className="text-2xl hover:text-blue-500 mx-2">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
