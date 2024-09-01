import React from "react"
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

export default function Footer2() {

    const footerNavs = [
        {
            label: "Produits",
            items: [
                {
                    href: 'javascript:void()',
                    name: "Toeme AI"
                },
                {
                    href: 'javascript:void()',
                    name: "Tarification"
                },
                {
                    href: 'javascript:void()',
                    name: "VMS"
                },
                {
                    href: 'javascript:void()',
                    name: "Toeme SaaS"
                },
                {
                    href: 'javascript:void()',
                    name: "Toeme BaaS"
                },
                {
                    href: 'javascript:void()',
                    name:" Produits & Tarifs"
                },
            ],
        },
        {
            label: "Autres",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        },
        {
            label: "Explorer",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Solutions'
                },
                {
                    href: 'javascript:void()',
                    name: 'Projets'
                },
                {
                    href: 'javascript:void()',
                    name: 'Equipe'
                },
                {
                    href: 'javascript:void()',
                    name: 'A propos'
                },
            ]
        },
        {
            label: "Communauté",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Github'
                },
                {
                    href: 'javascript:void()',
                    name: 'Twitter'
                },
                {
                    href: 'javascript:void()',
                    name: 'Facebook'
                },
                {
                    href: 'javascript:void()',
                    name: 'LinkedIn'
                },
            ],
        }
    ]

    return (
        <footer className="pt-10 bg-black text-left ml-0 rounded-md">
            <div className="max-w-screen-xl mx-auto  ml-0 px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex ml-0">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-white text-2xl font-bold">
                            Souscrire à notre newsletter.
                        </h3>
                    </div>
                    <div className=" flex-col mt-6 sm:flex-row md:mt-0">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter votre email"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="flex flex-row gap-2 items-center w-auto py-[13px] px-4 text-sm text-center text-whitegap-2 align-middle justify-center bg-[#044444] text-white font-bold active:shadow-none rounded-lg shadow">
                            <AiOutlineSend />
                                S'abonner
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-300"
                                key={idx}
                            >
                                <h4 className="text-gray-200 font-bold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="duration-150 hover:text-gray-400 text-white no-underline"

                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-gray-300">Copyright © 2024 |   ToemeXpertise  | Let unsleash creativity | Tous droits Reservés.</p>
                    <div className="flex items-center mt-0 text-gray-400 gap-4 ">
                    <BsFacebook size={24} className=" hover:text-red-500"/>
                    <BsLinkedin size={24} className=" hover:text-red-500"/>
                    <CgInstagram size={24} className=" hover:text-red-500"/>
                        
                    </div>
                </div>
            </div>
            <ScrollToTop smooth component={<FaArrowUp className="ml-3" />} />
        </footer>
    )
}