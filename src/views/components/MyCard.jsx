import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/MyCard.css'

function MyCard( props ) {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="card text-center">
      <div className="card-header">
        {currentDateTime}
      </div>
      <div className="card-body">
        <h5 className="card-title">Registros del libro diario Marvisur S.A.C</h5>
        <p className="card-text">Operaciones del día: 06/06/2024</p>
        <div className='entry py-2'>
          <table className="table table-sm">
            <thead className='table-light'>
              <tr>
                <th scope="col">#</th>
                <th scope="col"><p className='sidelines'>x</p></th>
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
          <p className="card-subtext text-start fst-italic">x/x Por el anticipo otorgado a una entidad relacionada</p>

          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">------------------------------------------------------------x------------------------------------------------------------</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 431 Facturas, boletas y otros comprobantes por pagar</p>
                  <p className="card-subtext text-start"> 4312 Emitidas</p>
                </td>
                <td>59,000</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td >
                  <p className='text-start fw-bold'>EFECTIVO Y EQUIVALENTES DE EFECTIVO</p>
                  <p className="card-subtext text-start"> 104 Cuentas corrientes en instituciones financieras</p>
                  <p className="card-subtext text-start"> 1041 Cuentas corrientes operativas</p>
                </td>
                <td>-</td>
                <td>59,000</td>
              </tr>
            </tbody>             
          </table>
          <p className="card-subtext text-start fst-italic">x/x Por la cancelación de la factura por pagar</p>
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
                <th scope="row">60</th>
                <td >
                  <p className='text-start fw-bold'>COMPRAS</p>
                  <p className="card-subtext text-start"> 601 Mercaderías</p>
                  <p className="card-subtext text-start"> 6011 Mercaderías</p>
                </td>
                <td>90,000</td>
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
                <td>7,200</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">43</th>
                <td >
                  <p className='text-start fw-bold'>CUENTAS POR PAGAR COMERCIALES RELACIONADAS</p>
                  <p className="card-subtext text-start"> 431 Facturas, boletas y otros comprobantes por pagar</p>
                  <div className='text-start'>4312 Emitidas</div><div className='text-end'>47,200</div>
                  <p className="card-subtext text-start"> 432 Anticipos otorgados</p>
                  <div className='text-start'>4321 Anticipos otorgados</div><div className='text-end'>50,000</div>
                </td>
                <td>-</td>
                <td>97,200</td>
              </tr>
            </tbody> 
          </table>
          <p className="card-subtext text-start fst-italic">x/x Por la adquisición de mercaderías</p>
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