import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

import { logoDark } from "@/utils/images";

import { Button } from "../ui/button";

const MobileMenu = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-card lg:hidden   ">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center">
          <Image className="h-6 w-auto" src={logoDark} alt="Logo" />
          <span className="ml-2 text-lg font-semibold">ViewMarket</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X />
        </Button>
      </div>
      <nav className="p-6">
        <ul className="">
          <h3 className="border-b border-border py-2 pl-3 pr-4">Product</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Developers</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Pricing</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Docs</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Blog</h3>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 flex gap-5 bg-background p-4">
        <Button
          className="w-full bg-secondary text-xs"
          size="xs"
          variant="outline"
        >
          Sign in
        </Button>
        <Button className="w-full text-xs" size="sm">
          Start your project
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
