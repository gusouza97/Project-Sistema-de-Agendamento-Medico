import style from "./SchedulingForm.module.css";
import Input from "../form/Input";

function SchedulingForm() {
    return (
        <>
            <form>
                <Input
                    type="text"
                    name="nome"
                    text="Nome do Paciente"
                    id="nome"
                    placeholder="Nome Completo"
                    value=""
                />
            </form>
        </>
    );
}

export default SchedulingForm;