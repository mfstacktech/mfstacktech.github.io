"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [{ name: "Pricing", href: "#" }];

export default function PPHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
      <nav
        aria-label="Global"
        className="w-full flex items-center justify-between py-4 lg:px-0"
      >
        <div className="flex items-center gap-x-12">
          <a href="/" className=" flex gap-x-2 items-center">
            <img alt="" src="logos/logo.svg" className="h-8 w-auto" />
            <span className="font-sans font-semibold text-lg text-black">
              MF Stack
            </span>
          </a>
          <div className="hidden lg:flex lg:gap-x-12"></div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex items-center justify-center bg-transparent rounded-md p-2.5  border-none"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a
            href="/"
            className="text-mf-stack-blue-dark hover:cursor-pointer  block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-0"
          >
            Pricing
          </a>
          <a
            href="https://cal.com/manasa-madapu"
            target="blank"
            className="bg-mf-stack-blue-dark  text-white hover:text-white shadow-sm hover:bg-mf-stack-blue block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Setup a 30 min free call
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="">
            <div className="p-4 flex items-center justify-between">
              <a href="#" className=" flex gap-x-2 items-center">
                <img alt="" src="logos/logo.svg" className="h-8 w-auto" />
                <span className="font-sans font-semibold text-lg text-black">
                  MF Stack
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className=" rounded-md p-0 bg-transparent border-none"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-8 " />
              </button>
            </div>
            <div className="px-6 mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 p-4   w-full  bg-mf-stack-gray-primary border-solid border-x-0 border-b-0 border-gray-200 border-t text-center">
            <a
              target="_blank"
              href="https://cal.com/manasa-madapu"
              className="w-full px-5 rounded-md my-0 py-2.5 bg-mf-stack-purple-dark hover:bg-mf-stack-blue text-base/7 font-semibold text-white hover:text-white"
            >
              Setup a 30 min free call
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
