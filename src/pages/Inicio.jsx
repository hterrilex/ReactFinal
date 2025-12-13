import React from 'react'

function Inicio() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem' }}>DISQUERA OLD MONEY</h1>
        <h2>La música es lo único que puede salvar al mundo.</h2>
        <hr />
        <main>
          <p style={{ whiteSpace: 'pre-line' }}>
            <strong>Pura suerte</strong>
            {`
Que un sueño acabó, ya te dijeron,
pero no, que todos los sueñitos, no.
Arrugar no es ir al saladero,
pero ¡ay!, mi viejo, ¡ay qué rabia da!

Yo no puedo librarme
a lo que te debo como ilusión.

Si pudiera, como si fuera un chico,
emborrachar el ritmo de un maldito rock.

Pero hay un par de ojos inclaudicables
que valió la pena alquilar para ver.

Imaginá los planes
que en mi mente están, tan sin dolor.

Esto ya
esto ya no es rock, mi amor
es pura suerte.

Esto ya
esto ya no es rock, mi amor
es pura suerte.`}
          </p>
          <img 
            src="https://cdn.pixabay.com/photo/2018/10/09/19/56/music-3735836_1280.jpg"
            alt="Imagen decorativa música"
            style={{ maxWidth: '100%', width: '500px', height: 'auto', marginTop: '20px', borderRadius: '8px' }}
          />
        </main>
      </div>
    </>
  )
}

export default Inicio
