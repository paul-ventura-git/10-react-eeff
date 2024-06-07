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
        <div className='entry py-2'>
          <table className="table table-sm">
            <thead className='table-light'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">-----------------------x-------------------</th>
                <th scope="col">Debe</th>
                <th scope="col">Haber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 432 Anticipos otorgados</p>
                  <p className="card-subtext text-start"> 4321 Anticipos otorgados</p>
                </td>
                <td>50,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">40</th>
                <td >
                  <p className='text-start fw-bold'>TRIBUTOS, CONTRAPRESTACIONES Y APORTES AL SISTEMA PÚBLICO DE PENSIONES Y DE SALUD POR PAGAR</p>
                  <p className="card-subtext text-start"> 401 Gobierno nacional</p>
                  <p className="card-subtext text-start"> 4011 Impuesto general a las ventas</p>
                  <p className="card-subtext text-start"> 40116 IGV destinado a operaciones gravadas</p>
                </td>
                <td>9,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 431 Facturas, boletas y otros comprobantes por pagar</p>
                  <p className="card-subtext text-start"> 4312 Emitidas</p>
                </td>
                <td>-</td>
                <td>59,000</td>
              </tr>
            </tbody> 
          </table>
          <Row className="row justify-content-start mt-4">
            <div className="col-1">
              <Link to="/" className="btn btn-primary">Agregar</Link>
            </div>
            <div className="col-1">
              <Link to="/" className="btn btn-primary">Eliminar</Link>
            </div>
          </Row>
        </div>

        <div className='entry py-2'>
          <table className="table table-sm">
            <thead className='table-light'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">-----------------------x-------------------</th>
                <th scope="col">Debe</th>
                <th scope="col">Haber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 432 Anticipos otorgados</p>
                  <p className="card-subtext text-start"> 4321 Anticipos otorgados</p>
                </td>
                <td>50,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">40</th>
                <td >
                  <p className='text-start fw-bold'>TRIBUTOS, CONTRAPRESTACIONES Y APORTES AL SISTEMA PÚBLICO DE PENSIONES Y DE SALUD POR PAGAR</p>
                  <p className="card-subtext text-start"> 401 Gobierno nacional</p>
                  <p className="card-subtext text-start"> 4011 Impuesto general a las ventas</p>
                  <p className="card-subtext text-start"> 40116 IGV destinado a operaciones gravadas</p>
                </td>
                <td>9,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 431 Facturas, boletas y otros comprobantes por pagar</p>
                  <p className="card-subtext text-start"> 4312 Emitidas</p>
                </td>
                <td>-</td>
                <td>59,000</td>
              </tr>
            </tbody> 
          </table>
          <Row className="row justify-content-start mt-4">
            <div className="col-1">
              <Link to="/" className="btn btn-primary">Agregar</Link>
            </div>
            <div className="col-1">
              <Link to="/" className="btn btn-primary">Eliminar</Link>
            </div>
          </Row>
        </div>

      
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>

  )
}

export default MyCard