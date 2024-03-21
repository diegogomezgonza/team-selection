import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='justify-content-center d-flex align-items-center'>
      <div className="container text-center justify-content-center align-items-center">
        <div className="mb-4 shadow-container justify-content-center align-items-center">
          <h1 className="display-4 justify-content-center align-items-center">SEND YOUR TEAM</h1>
          <form onSubmit={handleSubmit}>
            <div className="p-3 bg-white rounded">
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre" placeholder="Introduce tu nombre" />
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
              <button type="submit" className="btn btn-primary btn-block mt-1">Enviar</button>
            </div>
          </form>
        </div>
        <div className="mb-4 shadow-container">
          <div className="p-3 bg-white rounded">
            <h2 className="mb-4">Trabajadores</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <div>
                  <h5>Juan</h5>
                  <p><strong>Cargo:</strong> Desarrollo</p>
                  <p><strong>Soft Skill:</strong> Trabajo en equipo</p>
                  <p><strong>Tiempo Trabajado:</strong> 2 años</p>
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  <h5>María</h5>
                  <p><strong>Cargo:</strong> Diseño</p>
                  <p><strong>Soft Skill:</strong> Creatividad</p>
                  <p><strong>Tiempo Trabajado:</strong> 3 años</p>
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  <h5>Pedro</h5>
                  <p><strong>Cargo:</strong> Marketing</p>
                  <p><strong>Soft Skill:</strong> Comunicación</p>
                  <p><strong>Tiempo Trabajado:</strong> 1 año</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center mt-4">
            <button type="button" className="btn btn-success mr-2 mx-2">Admitir</button>
            <button type="button" className="btn btn-danger">Denegar</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Equipo enviado</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Tu equipo ha sido enviado correctamente.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
