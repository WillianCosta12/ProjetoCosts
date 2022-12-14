import { useState } from 'react'
import Input from '../form/Input'
import SubmitBtn from '../form/SubmitBtn'
import styles from '../projects/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState([])

    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name]:[e.target.value]})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="nome do serviço" name="name" placeholder="insira o nome do serviço" handleOnChange={handleChange} ></Input>
            <Input type="number" text="custo do serviço" name="cost" placeholder="insira o valor total" handleOnChange={handleChange} ></Input>
            <Input type="text" text="descrição do serviço" name="description" placeholder="descreva o serviço" handleOnChange={handleChange} ></Input>
            <SubmitBtn text={btnText} ></SubmitBtn>
        </form>
    )
}

export default ServiceForm