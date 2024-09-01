import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { SiGithub } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Support@example.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+33 745429562",
    },
  ];

  return (
    <main className="py-14 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg  gap-8 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg ml-0 text-left  space-y-3">
            <p className="text-gray-800 text-xl font-semibold sm:text-3xl">
              ToemeXpertise | let unleash creativity
            </p>
            <p>
              Nous vous accompagons dans la réalisation de vos projets,
              contactez nous.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-x-3 -ml-8">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Separator orientation="horizontal"></Separator>

            <div className="gap-2 flex flex-col  ">
              <div className="w-full flex flex-col sm:flex-row gap-2 justify-between my-4">
                <Button variant="outline" size="lg" className="felx gap-2">
                  <SiGithub />
                  Github
                </Button>

                <Button variant="outline" size="lg" className="felx gap-2">
                  <FaLinkedin />
                  LinkkedIn
                </Button>

                <Button variant="outline" size="lg" className="felx gap-2">
                  <FaFacebook />
                  Facebook
                </Button>
              </div>

              
              <div className="w-full flex flex-col sm:flex-row justify-between gap-2 my-4">
                <Button variant="outline" size="lg" className="felx gap-2">
                  <FaYoutube />
                  Youtube
                </Button>
                <Button variant="outline" size="lg" className="felx gap-2">
                  <FaInstagramSquare />
                  Instagram
                </Button>

                <Button variant="outline" size="lg" className="felx gap-2">
                  <FaTiktok />
                  TikTok
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Nom | Prénom</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Motif</label>
                <Select className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
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
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <Button className="w-full px-4 py-2 gap-4 text-white font-medium bg-[#044444] hover:bg-[#044444] active:bg-[#044444] rounded-lg duration-150">
                <IoMdSend />
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
