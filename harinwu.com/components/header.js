//Header

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <!-- Header -->
    <header class="page_header">
      <p>
        <a href="../">Home</a><span class="divider"></span> <a href="../goals/">About Me</a><span
          class="divider"></span> <a onclick="document.getElementById('downloadResume').style.display='block'"
          style="cursor: pointer;">Resume</a>
      </p>
    </header>
      
      <!-- Resume Modal -->
      <div id="downloadResume" class="w3-modal w3-animate-opacity">
        <div class="w3-modal-content" style="padding:32px">
          <div class="w3-container w3-white">
            <span onclick="document.getElementById('downloadResume').style.display='none'" class="close">&times;</span>
            <h1 class="w3-large">Download Resume Below</h1>
            <p class="w3-medium"><a href="../2020HarinWu.docx" target="_blank" class="w3-hover-text-red">.DOCX
                Download</a>
            </p>
            <p class="w3-medium"><a href="../2020HarinWu.pdf" target="_blank" class="w3-hover-text-red">.PDF
                Download</a>
            </p>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("main-header", Header);
