import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyCard( props ) {
  return (
    <div className="card text-center">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Registros del libro diario</h5>
        <p className="card-text">Operaciones del día: 06/06/2024</p>
        <Row>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">--------------x------------</h5>
                <p className="card-text">65 OTROS GASTOS DE GESTIÓN</p>
                <p className="card-subtext"> 655 Costo neto de enajenación de activos inmovilizados y operaciones discontinuadas</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Debe</h5>
                <p className="card-text">80000</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Haber</h5>
                <p className="card-text">80000</p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">--------------x------------</h5>
                <p className="card-text">39 DEPRECIACIÓN Y AMORTIZACIÓN ACUMULADOS</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Debe</h5>
                <p className="card-text">80000</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Haber</h5>
                <p className="card-text">80000</p>
              </div>
            </div>
          </div>
        </Row>
        <Row className="row justify-content-start mt-4">
          <div className="col-1">
            <Link to="/" className="btn btn-primary">Agregar</Link>
          </div>
          <div className="col-1">
            <Link to="/" className="btn btn-primary">Eliminar</Link>
          </div>
        </Row>        
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>

  )
}

export default MyCard