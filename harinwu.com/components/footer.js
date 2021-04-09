//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <footer class="page_footer">
    <p>
      <a href="mailto:harinwu99@gmail.com">
        <div>
          <img src="../../images/Gmail.png" height="30px" style="margin: 10px;" />
        </div>
      </a>

      <a href="https://github.com/Harin329">
        <div>
          <img src="../../images/Github.png" height="30px" style="margin: 10px;" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/hao-harin-wu-28a59a160">
        <div>
          <img src="../../images/LinkedIn.png" height="30px" style="margin: 10px;" />
        </div>
      </a>

      <a href="https://www.facebook.com/harin.wu">
        <div>
          <img src="../../images/Facebook.png" height="35px" style="margin: 5px;" />
        </div>
      </a>
      <a href="https://www.instagram.com/harinwu">
        <div>
          <img src="../../images/Instagram.png" height="50px" style="margin-left: 5px;" />
        </div>
      </a>
      <a href="https://twitter.com/harinhaowu">
        <div>
          <img src="../../images/Twitter.svg" height="55px" style="margin: 0px;" />
        </div>
      </a>
      </p>
      </footer>
      `;
  }
}

customElements.define("main-footer", Footer);
