import React from "react";
import { useForm } from "react-hook-form";
import imagemFundo from "@/src/images/car-bg.jpg";
import logocar from "@/src/images/logo-car.png";
import Image from "next/image";

const HomePage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <Image src={imagemFundo} layout="fill" objectFit="cover" alt="" />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Consulte sua placa aqui!
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Segundo texto aqui
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"></div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="bg-red-600 flex justify-center items-center">
              <div className="pt-6 w-full md:w-8/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-0 text-center inline-flex items-center justify-center w-12 h-12  shadow-lg rounded-full bg-emerald-400">
                      <Image
                        src={logocar}
                        width={200}
                        height={200}
                        className="rounded-full p-0 text-center inline-flex items-center justify-center w-12 h-12  shadow-lg rounded-full bg-emerald-400"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <form
                      action=""
                      onSubmit={handleSubmit(onSubmit)}
                      className="bg-yellow-500 w-full"
                    >
                      <h6 className="text-xl font-semibold text-black">
                        Indique a placa do veículo
                      </h6>
                      <div className="w-full bg-black">
                        <input
                          id="placa"
                          className="border rounded-3xl border-gray-300 p-2  mt-2 bg-gray-100 text-black"
                          type="text"
                          {...register("placa")}
                          placeholder="Digite a placa do veículo"
                        />
                      </div>

                      <div className="bg-teal-600 w-full">
                        <button
                          type="submit"
                          className="text-black bg-red-500  hover:bg-opacity-80 mt-4 focus:outline-none focus:ring-2"
                        >
                          Pesquisar
                        </button>
                      </div>
                    </form>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
