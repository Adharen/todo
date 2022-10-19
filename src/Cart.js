import React from 'react'

function Cart({ title, mess, removeFromoCart, handleEditClick }) {
  return (
    <>
      <div class="card mb-3" style={{ maxwidth: "540px", marginTop: '20px' }}>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">Title:{title}</h3>
              <p class="card-text">Message:{mess}</p>
              <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
                <button class="btn btn-primary text-center" type="submit" onClick={handleEditClick}>Edit</button>
                <button class="btn btn-primary text-center" type="submit" onClick={removeFromoCart}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart