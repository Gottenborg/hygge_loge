type HomeType = {
  headerTitle?: string 
  title : string
  task : string 
  coordinates?: {
    lat: number
    lng: number
  }
  image?: {
    url: string,
    alt: string
  },
  placeholder?: string,
  validateAnswer: (value) => boolean | any | string
}

const content:HomeType[] = [
  {
    title:"Holdnavn",
    task: 'Indtast jeres holdnavn',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Holdnavn',
    validateAnswer: (value:string) => {
      console.log('value', value)
      return value.trim().length > 0
    }
  },
  {
    title:"Port",
    task: 'Hvilket port nr skal der bruges?',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Port',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() == '22'
    }
  },
  {
    title:"IP adresse",
    task: 'Hvilket IP Adresse skal bruges?',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'IP adresse',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'private' || value.trim().toLowerCase() === 'privat'
    }
  },
  {
    title:"Kode til ISP (Internet Service provider)",
    task: 'Angiv adgangskoden til jeres ISP:',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Password',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'stenen'
    }
  },
  {
    title:"Tillykke I er nu paa nettet.",
    task: 'Lad os nu etablere en sikker forbindelse til en hjemmeside',
    image: {
      url: '', 
      alt: ''
    },
    validateAnswer: (value:string) => {
      return true
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Sig "hej" til serveren, tag svaret med tilbage',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Serveren svarede?',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'hej'
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Tag Jeres Client token med til Serveren (Udleveres af Mark)',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Serverens Token?',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'Runes Token'
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Tag Jeres Client token med til Serveren (Udleveres af Mark)',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    placeholder: 'Serverens Token og Cipher options?',
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'Runes Token'
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Generer jeres Key, Cipher Spec.',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'Runes Token'
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Tag Jeres Client Key og Cipher med til serveren',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'Runes Token'
    }
  },
  {
    title:"Etabler TLS Handshake med en server",
    task: 'Decrypt serverens svar.',
    coordinates: {
      lat: 55.6,
      lng: 10.5
    },
    image: {
      url: '', 
      alt: ''
    },
    validateAnswer: (value:string) => {
      return value.trim().toLowerCase() === 'Runes Token'
    }
  }
]

export default content