import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useState } from 'react'

import Head from 'next/head'

import Home from './components/Home'
import Header from './components/Header'
import content from '../data/content'

export default function Index({}) {

  const [teamName, setTeamName] = useState("")
  const [headerTitle, setHeaderTitle] = useState("")
  const [title, setTitle] = useState("Velkommen til stjerneloebet om IT")
  const [task, setTask] = useState("Gaa til neaste lokation")
  const [placeholder, setPlaceholder] = useState("Giv jeres svar her")
  const [coordinates, setCoordinates] = useState({lat: 55.6, lng: 10.5})
  const [progressIndex, setProgressIndex] = useState(0)

  const nextState = (value:any) => {
    switch (progressIndex) {
      case 0:
        setTeamName(value)
        setProgressIndex(progressIndex + 1)
        break;
      case 1:
        setTeamName(value)
        setProgressIndex(progressIndex + 1)
        break;
      case 2:
        setTeamName(value)
        setProgressIndex(progressIndex + 1)
        break;
        
      default:
        break;
    }
  }


  return (
    <div>
      <Head>
        <title>{headerTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        teamName={teamName}
      />
      <Home
        title={content[progressIndex].title}
        task={content[progressIndex].task} 
        coordinates={content[progressIndex].coordinates}
        image={content[progressIndex].image}
        placeholder= {content[progressIndex].placeholder}
        validateAnswer={content[progressIndex].validateAnswer}
        nextState={nextState}
      ></Home>
    </div>
  )
}
