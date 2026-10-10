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
