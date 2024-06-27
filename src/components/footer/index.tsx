import React from "react";
import Image from "next/image";
import foto from "@/src/images/bg-footer.png"

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div>
            <Image src={foto} alt="Flowbite Logo" width={200} height={200} />
          </div>
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Consulte a placa de um carro e veja informações sobre ele.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Termos de Uso
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Campanhas
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contato
            </a>
          </li>
        </ul>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2024{" "}
          <a href="#" className="hover:underline">
            Consulta Placas™
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
