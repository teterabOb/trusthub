import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";

export const CardUser = () => {
  return (
    <div
      style={{ background: "linear-gradient(45deg, #8B8589, #4A4A4A, #8B8589)" }}
      className="flex flex-row justify-center items-center w-full max-w-[350px] rounded-3xl p-5"
    >
      <div className="flex flex-col justify-center items-center w-1/2 gap-0.5">
        <Image
          className="rounded-full w-28 h-28"
          src="https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png"
          alt="user"
        />
        <div style={{ background: "#33EAFF" }} className="rounded-full h-10 w-10 flex justify-center items-center ">
          <MdVerifiedUser color="0F172A" size={25} />
        </div>
        <h1 className="font-semibold text-xl m-0 p-0">Elon</h1>
        <p className="font-regular text-sm text-gray-300 m-0 p-0">Propietario</p>
      </div>
      <div className="flex justify-center w-1/2">
        <ul className="flex flex-col gap-0.5">
          <li className="flex flex-col gap-0.5 m-0 p-0">
            <p className="font-semibold text-xl m-0 p-0">14</p>
            <p className="font-regular text-sm m-0 p-0  text-gray-300">Evaluaciones</p>
          </li>
          <li className="flex flex-col gap-0.5 m-0 p-0">
            <p className="font-semibold text-xl m-0 p-0">2</p>
            <p className="font-regular text-sm m-0 p-0  text-gray-300">Propiedades</p>
          </li>
          <li className="flex flex-col gap-0.5 m-0 p-0">
            <p className="font-semibold text-xl m-0 p-0">29</p>
            <p className="font-regular text-sm m-0 p-0  text-gray-300">Reservas totales</p>
          </li>
          <li className="flex flex-col gap-0.5 m-0 p-0">
            <p className="font-semibold text-xl m-0 p-0">27%</p>
            <p className="font-regular text-sm m-0 p-0  text-gray-300">Factor de ocupación</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
