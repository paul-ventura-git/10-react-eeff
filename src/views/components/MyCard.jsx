import React from 'react'
import Row from 'react-bootstrap/Row';

function MyCard( props ) {
  return (
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Registros del libro diario</h5>
        <p class="card-text">Operaciones del día: 06/06/2024</p>
        <Row>
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">--------------x------------</h5>
                <p class="card-text">65 OTROS GASTOS DE GESTIÓN</p>
                <p class="card-subtext"> 655 Costo neto de enajenación de activos inmovilizados y operaciones discontinuadas</p>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Debe</h5>
                <p class="card-text">80000</p>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Haber</h5>
                <p class="card-text">80000</p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">--------------x------------</h5>
                <p class="card-text">39 DEPRECIACIÓN Y AMORTIZACIÓN ACUMULADOS</p>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Debe</h5>
                <p class="card-text">80000</p>
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Haber</h5>
                <p class="card-text">80000</p>
              </div>
            </div>
          </div>
        </Row>
        <a href="/" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>

  )
}

export default MyCard