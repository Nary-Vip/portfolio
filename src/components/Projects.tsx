import React from 'react'
import SectionHeading from './section-heading'
import { projectData } from '@/lib/data'
import { StaticImageData } from 'next/image'

type Props = {}

const ProjectsPage = (props: Props) => {
  return (
    <section>
        <SectionHeading>
          <>My Projects</>
        </SectionHeading>
        <div>
            {
                projectData.map((project, index) => {
                    return (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ProjectsPage


type ProjectProps = (typeof projectData)[number]

function Project({
    name,
    description,
    tags,
    github,
    image
}: ProjectProps){
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}