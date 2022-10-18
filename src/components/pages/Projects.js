import { useLocation } from 'react-router-dom'
import styles from './Projects.module.css'
import Message from "../layouts/Message"
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from '../projects/ProjectCard'
import { useState, useEffect } from 'react'
import Loader from '../layouts/Loader'

function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then((data) => {setProjects(data); setRemoveLoading(true)}).catch(err => console.log(err))
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json()).then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto Removido com Sucesso')
        }).catch(err => console.log(err))
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
            </div>
            {message && <Message type="sucess" msg={message} />} 
            {projectMessage && <Message type="sucess" msg={projectMessage} />} 
            <Container customClass="start">
                { projects.length > 0 && projects.map((project)=> (
                    <ProjectCard id={project.id} budget={project.budget} category={project.category.name} name={project.name} key={project.id} handleRemove={removeProject}></ProjectCard>
                ))}
                {
                    !removeLoading && <Loader></Loader>
                }
                {
                    removeLoading && projects.length === 0 &&(
                        <p>Não Projetos Cadastrados</p>
                    )
                }
            </Container>
        </div>
    )

}

export default Projects