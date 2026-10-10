function showWorkers() {

  document.getElementById("content").innerHTML = `

    <div class="card">
      <h3>👷 Mason</h3>
      <p>Available for construction work</p>
      <button>Contact Worker</button>
    </div>

    <div class="card">
      <h3>🔧 Electrician</h3>
      <p>Available for electrical work</p>
      <button>Contact Worker</button>
    </div>

    <div class="card">
      <h3>🎨 Painter</h3>
      <p>Available for painting work</p>
      <button>Contact Worker</button>
    </div>

  `;
}

function showJob() {

  document.getElementById("content").innerHTML = `

    <div class="card">
      <h3>Looking for Work?</h3>
      <p>Register yourself and find suitable work.</p>

      <button onclick="alert('Registration coming soon!')">
        Register
      </button>
    </div>

  `;
    }


.owner-section {
  background: #f4f7fb;
  padding: 40px 20px;
  text-align: center;
}

.owner-card {
  background: white;
  max-width: 400px;
  margin: 20px auto;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 18px #ccc;
}

.owner-card h3 {
  color: #172554;
  margin-bottom: 15px;
}

.owner-card p {
  margin: 10px 0;
}

.owner-card a {
  color: #2563eb;
  text-decoration: none;
}

.owner-note {
  font-size: 13px;
  color: #666;
  margin-top: 20px !important;
}

