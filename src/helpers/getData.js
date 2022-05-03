const getData = async (setEstadoPersonajes) => {
  try {
    let url = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(url)
    const data = await response.json()
    setEstadoPersonajes(data.results)
  }
  catch (err) {
    alert(err);
  }
}

export default getData