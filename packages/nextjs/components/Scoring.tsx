import { BsStars } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineRoomService } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { CardProperty } from "~~/components/CardProperty";
import { CardUser } from "~~/components/CardUser";

export const Scoring = () => {
  return (
    <div className="flex flex-col justify-center px-5">
      <CardUser />
      <section className="w-full max-w-[350px]">
        <ul className="flex flex-col">
          <li className="flex flex-row items-center gap-2.5">
            <PiGraduationCap color="white" />
            <p className="font-regular text-base">Estudié en Universidad de Buenos Aires</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoBriefcaseOutline color="white" />
            <p className="font-regular text-base">Mi trabajo: Capitan del mundo</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoMusicalNotesOutline color="white" />
            <p className="font-regular text-base">Canción favorita en la secundaria: Billie Jean</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <MdOutlineRoomService color="white" />
            <p className="font-regular text-base">
              Algo que hago en todas las estadías: Preparar galletas con chips de chocolate
            </p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoPawOutline color="white" />
            <p className="font-regular text-base">Mascotas: Tao, mi golden retriever</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <LiaBirthdayCakeSolid color="white" />
            <p className="font-regular text-base">Nació en la década de los 70</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoMdTime color="white" />
            <p className="font-regular text-base">Dedico mucho tiempo a: el espacio y al futuro</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoLanguageOutline color="white" />
            <p className="font-regular text-base">Habla Inglés, Italiano y Español</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoMdHeartEmpty color="white" />
            <p className="font-regular text-base">Me encanta: programar y aprender cosas nuevas</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoBookOutline color="white" size={25} />
            <p className="font-regular text-base">Título de mi biografía: El camino a la competencia</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <IoLocationOutline color="white" size={20} />
            <p className="font-regular text-base">Vive en San Francisco, California</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <BsStars color="white" size={25} />
            <p className="font-regular text-base">Mi alojamiento es único porque parece un habitad de Marte</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <CgCoffee color="white" size={35} />
            <p className="font-regular text-base">
              Para desayunar preparo: Café sin azúcar, avena con leche y alguna fruta
            </p>
          </li>
        </ul>
      </section>
      <hr className="my-5" />
      <section>
        <h1 className="font-semibold text-2xl">Información confirmada de Elon</h1>
        <ul className="flex flex-col">
          <li className="flex flex-row items-center gap-2.5">
            <FaCheck color="33EAFF" size={25} />
            <p className="font-regular text-base">Identidad</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <FaCheck color="33EAFF" size={25} />
            <p className="font-regular text-base">Dirección de correo electrónico</p>
          </li>
          <li className="flex flex-row items-center gap-2.5">
            <FaCheck color="33EAFF" size={25} />
            <p className="font-regular text-base">Número de teléfono</p>
          </li>
        </ul>
        <p className="font-regular text-base underline">Más información sobre la verificación de identidad</p>
      </section>
      <hr className="my-5" />
      <section>
        <h1 className="font-semibold text-2xl">Propiedades de Elon</h1>
        <CardProperty />
      </section>
    </div>
  );
};
