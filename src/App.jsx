import React from 'react';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center">
        <h1 className="display-1">SEND YOUR TEAM</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="shadow p-3 mb-5 bg-white rounded">
              <div className="form-group">
                  <label htmlFor="cargo">Nombre:</label>
                  <input type="text" className="form-control" id="cargo" placeholder="Introduce tu cargo" />
                </div>
                <div className="form-group">
                  <label htmlFor="cargo">Tu cargo:</label>
                  <input type="text" className="form-control" id="cargo" placeholder="Introduce tu cargo" />
                </div>
                <div className="form-group">
                  <label htmlFor="softSkill">Soft skill descriptiva:</label>
                  <input type="text" className="form-control" id="softSkill" placeholder="Introduce tu soft skill descriptiva" />
                </div>
                <div className="form-group">
                  <label htmlFor="tiempoTrabajado">Tiempo trabajado en la empresa:</label>
                  <input type="text" className="form-control" id="tiempoTrabajado" placeholder="Introduce el tiempo trabajado en la empresa" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <h2>Trabajadores</h2>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span>Juan</span><br />
                    <small>Cargo: Desarrollo</small><br />
                    <small>Soft Skill: Trabajo en equipo</small><br />
                    <small>Tiempo Trabajado: 2 años</small>
                  </div>
                  <span className="badge badge-primary badge-pill">Desarrollo</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span>María</span><br />
                    <small>Cargo: Diseño</small><br />
                    <small>Soft Skill: Creatividad</small><br />
                    <small>Tiempo Trabajado: 3 años</small>
                  </div>
                  <span className="badge badge-primary badge-pill">Diseño</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span>Pedro</span><br />
                    <small>Cargo: Marketing</small><br />
                    <small>Soft Skill: Comunicación</small><br />
                    <small>Tiempo Trabajado: 1 año</small>
                  </div>
                  <span className="badge badge-primary badge-pill">Marketing</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-success mr-2">Admitir</button>
              <button type="button" className="btn btn-danger">Denegar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
