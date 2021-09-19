import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useState } from 'react'

type HomeType = {
  title : string
  task : string 
  coordinates: {
    lat: number
    lng: number
  }
  image: {
    url: string,
    alt: string
  },
  placeholder : string,
  validateAnswer: (value:string) => boolean
  nextState?: (value:any) => void
}

export default function Home({ 
  title,
  task ,
  coordinates,
  image,
  placeholder,
  validateAnswer,
  nextState
}:HomeType) {
  const [value, setValue] = useState('')
  const validate = ( ) => {
    return validateAnswer(value)
  }

  const submit = () => {
    console.log("value", value)
    if (validateAnswer(value)) {
      nextState(value)
    }
  }

  return (
    <div className="container">
      {image?
        <img src={image.url} alt={image.alt} className="logo" />
      :
        null
      }

      <main>
        <h1 className="title">
          {title}
        </h1>

        {task ?
          <p className="description">
            {task}          
          </p>
        :
          null
        }

        {coordinates ?
          <p className="description">
            {coordinates.lat},   
            {coordinates.lng}
          </p>
        :
          null
        }
        
        <div className="grid">
            <label htmlFor=""></label>
            { placeholder ? 
              <input type="text" placeholder={placeholder} value={value} onChange={(e) => {setValue(e.target.value)}}/>
            : 
              null
            }
            <button type="button" onClick={()=> submit()} className="button">bekraeft</button>
        </div>
      </main>

      <footer>        
          Powered by{' Jensen Jensen og Jensen '}
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        input[type=text] {
          border: none;
          background-color: #f4f4f4;
          border: 2px solid #ccc;
          width: 80%;
          padding: 1em 1em;
          margin-bottom: 2em;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
          width: 100%;
          flex-direction: column;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
