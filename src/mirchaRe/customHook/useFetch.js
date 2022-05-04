// react nos permite crear nuestras propios hooks

// creando un custom hook para realizar un petición fetch

import { useState, useEffect } from 'react'

const manejoError = (res) => {
  if (!res.ok) {
    throw new Error({
      status: res.status,
      ok: res.ok,
      statusText: 'Ocurrió error' || res.statusText,
    })
  }
}

// debe empezar por use el nombre para que react sepa que se trata de un hook personalizado

export const useFetch = (url) => {
  // doy múltiples opciones para que sea realmente moldeable el uso del hoom que 
  const [data, setData] = useState(null || [] || {})
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null || {})

  const manejoError = (response) => {
    if(!response.ok){
      throw{
        err: true,
        status: response.status,
        ok: response.ok,
      }
    }
  }
  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url)
        console.log(res)
        // se ejucuta la función manejadora del error
        manejoError(res)
        let datos = await res.json()
        setIsPending(false)
        setData(datos)
        setError({ err: false })
      }
      catch (err) {
        setIsPending(true)
        setError(err)
      }
    }
    getData(url)
  }, [url])

  return { data, isPending, error }
}



