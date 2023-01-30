import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        label:'Home',
        route: '/'
    },
    {
        label:'Services',
        route: '/services'
    },
    {
        label:'About',
        route: '/about-us'
    },
    {
        label:'Contact',
        route:'/contact-us'
    }
];

const Tabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    console.log(activeTabIndex)
    return (
        <div className='w-[400px]  md:flex justify-between relative'>
            {
                links.map((link, i) => (
                    <ul key={i} className={`py-2 border-b-4 transition-colors duration-300  ${
                i === activeTabIndex
                  ? " border-b-red-600"
                  : "border-transparent hover:border-red-200"
              }`}>
                        <li onClick={() => setActiveTabIndex(i)} className={`${activeTabIndex === i? 'border-b-4 border-b-red-500 border-solid transition-all duration-300':''}`}><Link to={link.route}>{link?.label}</Link></li>
                    </ul>
                ))
            }
        </div>
    );
};

export default Tabs;