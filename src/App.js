import './App.css';

function App() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav style={{ padding: "10px", background: "#333", color: "white" }}>
        <a href="#about" style={{ margin: "10px", color: "white" }}>About</a>
        <a href="#skills" style={{ margin: "10px", color: "white" }}>Skills</a>
        <a href="#projects" style={{ margin: "10px", color: "white" }}>Projects</a>
        <a href="#contact" style={{ margin: "10px", color: "white" }}>Contact</a>
      </nav>

      {/* Header */}
      <h1>Amrut's Portfolio</h1>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>I am a web developer learning React.</p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><b>Portfolio Website</b> – Built using React</li>
          <li><b>Todo App</b> – Task management application</li>
          <li><b>Calculator</b> – Performs basic calculations</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" /><br /><br />
          <input type="email" placeholder="Your Email" /><br /><br />
          <textarea placeholder="Your Message"></textarea><br /><br />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;