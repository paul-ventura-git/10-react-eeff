import React from 'react'

function Jumbotron() {
  return (
    <div className="container">
      <div className="jumbotron py-2 mb-4">
        <h1 className="display-4">Willkommen zurück!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"></hr>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
      </div>
    </div>

  )
}

export default Jumbotron