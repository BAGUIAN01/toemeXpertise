import * as React from "react";

import { cn } from "../lib/utils";
import { useMediaQuery } from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SiGithub } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { MdPhoneCallback } from "react-icons/md";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { IoMdSend } from "react-icons/io";

export default function ContactUsCard({ icon, name, bt_style }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            // variant="outline"
            className={bt_style}
          >
            {icon}
            {name}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[800px] h-[550px] mt-10">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              ToemeXpertise | let unleash creativity
            </DialogTitle>
            <DialogDescription className="font-bold">
              Nous vous accompagons dans la réalisation de vos projets,
              contactez nous.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-row w-full gap-5">
            <div className="w-[40%] h-[400px] ">
              <div>
                <h1 className="ml-7 ">Contact</h1>
              </div>
              <div>
                <ul>
                  <li>
                    Email:{" "}
                    <a
                      href="baguian.harouna7231@gmail.com"
                      className="text-sm text-green-950"
                    >
                      baguian.harouna7231@gmail.com
                    </a>
                  </li>
                  <li>
                    Téléphone:
                    <ul className="">
                      <li>
                        <a href="tel:+33745429562" className="text-green-950">
                          +33745429562 | WhatsApp
                        </a>
                      </li>
                      <li>
                        <a href="tel:+22672310963" className="text-green-950">
                          +22672310963 | Burkina Faso
                        </a>
                      </li>
                      <li>
                        <a href="tel:+33745371282" className="text-green-950">
                          +33745371282 | France
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <Separator orientation="horizontal"></Separator>

              <div className="gap-0">
                <div className="w-full flex flex-row gap-2 m-4">
                  <Button variant="outline" size="lg">
                    <SiGithub />
                    Github
                  </Button>

                  <Button variant="outline" size="lg">
                    <FaLinkedin />
                    LinkkedIn
                  </Button>
                </div>

                <div className="w-full flex flex-row gap-2 m-4">
                  <Button variant="outline" size="lg">
                    <FaFacebook />
                    Facebook
                  </Button>

                  <Button variant="outline" size="lg">
                    <FaInstagramSquare />
                    Instagram
                  </Button>
                </div>
                <div className="w-full flex flex-row gap-2 m-4">
                  <Button variant="outline" size="lg">
                    <FaYoutube />
                    Youtube
                  </Button>

                  <Button variant="outline" size="lg">
                    <FaTiktok />
                    TikTok
                  </Button>
                </div>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="w-[50%] h-[400px] ">
              <div className="grid w-full items-center gap-3 h-8">
                <Input
                  type="email"
                  id="email"
                  placeholder="Nom Prénom"
                  className="h-12"
                />
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="h-12"
                />

                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue
                      placeholder="Demande de Devis"
                      className="h-12"
                    />
                  </SelectTrigger>

                  <SelectContent position="popper">
                    <SelectItem value="next">Demande de Devis</SelectItem>
                    <SelectItem value="sveltekit">
                      Demande d'informations
                    </SelectItem>
                    <SelectItem value="astro">Autres</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Type your message here." />
                <Button className=" bg-green-950 gap-3 font-bold !important">
                  Envoyer
                  <IoMdSend />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MdPhoneCallback />
          Contacter
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
