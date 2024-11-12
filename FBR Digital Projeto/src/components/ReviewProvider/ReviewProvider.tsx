import "./ReviewProvider.css";
import { useEffect, useState } from "react";

export default function ReviewProvider() {
  useEffect(() => {
    document.title = "Revisão Provedor";
  }, []);

  const [serviceType, setServiceType] = useState("Instalação");
  const [date, setDate] = useState("10/12/2024");
  const [hour, setHour] = useState("14:00 - 15:00");
  const [description, setDescription] = useState(
    "Tenha cuidado com o cachorro ao entrar na residencia"
  );

  const [isEditable, setIsEditable] = useState(false);

  const handleconfirm = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <>
      <div>
        <h1>Revisão Provedor</h1>
        <div id="pop-up">
          <h2>Tipo De Serviço</h2>
        </div>
      </div>
    </>
  );
}
