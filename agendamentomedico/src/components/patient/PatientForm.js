import style from "./PatientForm.module.css";

import Input from "../form/Input";
import Break from "../layout/Break"
import Submit from "../form/Submit";

function PatientForm() {
    return (
        <>
            <form className={style.form}>
                <div className={style.column1}>
                    <Input
                        type="text"
                        name="nome"
                        text="Nome"
                        placeholder="Nome"
                        customClass="customInput"
                    />

                    <Input
                        type="text"
                        name="sobrenome"
                        text="Sobrenome"
                        placeholder="Sobrenome"
                        customClass="customInput"
                    />

                    <Input
                        type="email"
                        name="email"
                        text="E-mail"
                        placeholder="xxx@xxx.com"
                        customClass="customInput"
                    />

                    <Input
                        type="tel"
                        name="telefone"
                        text="Telefone"
                        placeholder="(XX) XXXXX-XXXX"
                        customClass="customInput"
                    />
                </div>
                <div className={style.column2}>
                    <Input
                        type="file"
                        name="file"
                        text="Foto de Perfil"
                        customClass="customFile"
                    />
                </div>
                
                <Break/>
                
                <div className={style.column3}>
                    <Submit text="Cadastrar"/>
                </div>
            </form>
        </>
    );
}

export default PatientForm;