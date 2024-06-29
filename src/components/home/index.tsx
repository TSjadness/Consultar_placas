import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import imagemFundo from "@/src/images/car-bg.jpg";
import logocar from "@/src/images/logo-car.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const { register, handleSubmit } = useForm();
  const [carInfo, setCarInfo] = useState<null | {
    marca: any;
    modelo: any;
    ano: any;
    cor: any;
  }>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true); // Inicia o estado de carregamento
    try {
      const response = await axios.post(
        "https://sinespcidadao.sinesp.gov.br/sinesp-cidadao/mobile/consultar-placa/v4",
        {
          codigoSegurancaCaptchta: "",
          numero: data.placa,
        }
      );

      if (response.data.returnCode === 0) {
        const carData = {
          marca: response.data.marca,
          modelo: response.data.modelo,
          ano: response.data.ano,
          cor: response.data.cor,
        };
        setCarInfo(carData as { marca: any; modelo: any; ano: any; cor: any });
      } else {
        console.error("Erro ao consultar a placa:", response.data.message);
        toast.error("Erro ao consultar a placa", {
          autoClose: 2000,
        });
        setCarInfo(null);
      }
    } catch (error) {
      console.error("Erro ao consultar a API:", error);
      toast.error("Erro ao consultar a API", {
        autoClose: 2000,
      });
      setCarInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                  <p className="mt-4 text-lg text-white">Segundo texto aqui</p>
                </div>
              </div>
            </div>
          </div>

          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"></div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
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
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                      <h6 className="text-xl font-semibold text-black">
                        Indique a placa do veículo
                      </h6>
                      <div className="w-full">
                        <input
                          id="placa"
                          placeholder="Digite a placa do veículo"
                          className="border text rounded-sm uppercase border-gray-300 p-2 mt-2 bg-gray-100 text-black"
                          type="text"
                          {...register("placa")}
                        />
                      </div>
                      <div className="w-full">
                        <button
                          type="submit"
                          className={`text-white bg-blue-700 w-60 py-2 hover:bg-opacity-80 mt-4 focus:outline-none focus:ring-2 ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          disabled={loading}
                        >
                          {loading ? "Pesquisando..." : "Pesquisar"}
                        </button>
                      </div>
                    </form>
                    {carInfo && (
                      <div className="mt-6 bg-gray-200 p-4 rounded-lg">
                        <p className="text-lg font-semibold">
                          Informações do Veículo:
                        </p>
                        <p>Marca: {carInfo.marca}</p>
                        <p>Modelo: {carInfo.modelo}</p>
                        <p>Ano: {carInfo.ano}</p>
                        <p>Cor: {carInfo.cor}</p>
                      </div>
                    )}
                    <p className="mt-4 mb-4 text-blueGray-500">
                      Digite a placa sem hífen em um dos seguintes formatos:
                      ABC1234, ABC1D23.
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
