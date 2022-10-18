import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, projectData}){
    
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then((data) => setCategories(data)).catch(err => console.log(err))
    }, [])

    const submit = (e) =>
    {
       e.preventDefault()
       //console.log(project)
       handleSubmit(project) 
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({ ...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,        } })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input handleOnChange={handleChange} type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto" value={project.name ? project.name : ''} ></Input>
            <Input handleOnChange={handleChange} type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total" value={project.budget ? project.budget : ''}></Input>
            <Select handleOnChange={handleCategory} name="category_id" text="Selecione a categoria" options={categories} value={project.category ? project.category.id : ''}></Select>
            <SubmitBtn text={btnText}></SubmitBtn>
        </form>
    )
}

export default ProjectForm