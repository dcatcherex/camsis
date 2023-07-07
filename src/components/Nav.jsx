import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import logo_gold from '../assets/images/logo-gold.png'

const programme = [
    {name: 'CAMBRIDGE YOUNG ENTREPRENEURS (CYE)', link: 'cye'},
    {name: 'UNIVERSITY SUBJECT DISCOVERY (USD)', link: 'usd'},
    {name: 'SCHOOL LEADERSHIP PROGRAMME (SLP)', link: 'slp'}
]

const Nav = () => {
  return (
    <nav className="max-w-[1280px] mx-auto flex  justify-between items-center font-semibold p-4">
      <Link to={'home'}><img className="max-w-[120px]" src={logo_gold} alt="" /></Link>
      <ul className="list-none flex text-sm gap-6 p-4 uppercase font-semibold">
        <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1  text-gray-900 uppercase">
        <li>Programme</li>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink rounded-md bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            {programme.map((item) => (
              <Link to={item.link} key={item.name}  className="block p-2 hover:text-indigo-600">
                {item.name}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
        <li className="hidden sm:block">about us</li>
        <li className="hidden sm:block">scholarship</li>
        <li className="hidden sm:block">contact us</li>
      </ul>
      
      <div>
        <button className="hidden sm:block uppercase btn">apply now</button>
      </div>
    </nav>
  );
};

export default Nav;
