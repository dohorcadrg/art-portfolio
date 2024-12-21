class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <DIV id="header-con" class="navbar fixed-top" style="padding-left: 10px; padding-right: 10px;">
		<a style="text-decoration: none;" href="index.html"><H4 style="color:#d84c9b;">Glory's Art Portfolio</H4></a>
		<img src="https://placehold.co/50" data-bs-toggle="collapse" data-bs-target="#collapseHeader" aria-expanded="false" aria-controls="collapseHeader">
        <div class="row collapse" id="collapseHeader" style="width: 100%; padding: 10px; border-top: 1px solid white; margin: 0px;color: #d84c9b">
          <div class="container" style="">
            <h4>Quick Links</h4>
            <ul class="nav">
            <li class="nav-item"><a href="birthday2024.html" class="nav-link" style="color: #dc228b;">Birthday Drawings 2024</a></li>
            <li class="nav-item"><a href="stickerpups.html" class="nav-link" style="color: #dc228b">Sticker Pups</a></li>
            <li class="nav-item"><a href="3dsartacademy.html" class="nav-link" style="color: #dc228b">3ds Art Academy</a></li>
            <li class="nav-item"><a href="3dmodeling.html" class="nav-link" style="color: #dc228b">3D Modeling</a></li>
            <li class="nav-item"><a href="oldtraditonal.html" class="nav-link" style="color: #dc228b">Old Traditonal</a></li>
            <li class="nav-item"><a href="olddigital.html" class="nav-link" style="color: #dc228b">Old Digital</a></li>
            <li class="nav-item"><a href="notebookscraps.html" class="nav-link" style="color: #dc228b">Notebook Scraps 2020+</a></li>
            </ul>
          </div>
          <div class="container" style=" margin-top: 10px;">
            <div class="row">
              <div class="col">
            <h4>About</h4>
            <span >Just a random girl living in a random world. I love to draw, it is my passion. Pencil and paper is my favorite form of media, though I love other forms of art too. I dable in digital art, 3d modeling and painting</span>
              </div><div class="col">
            <h4>Contact</h4>
            <span>Now offering commisions. $2 for a traditional pen and paper drawing, fully colored with colored pencils. Feel free to contact for more details</span>
            <br>
            <a href="https://www.facebook.com/glory.legaspi/"><button class="btn" type="button" style="border: 1px solid #dc228b; color:#dc228b;">Facebook</button></a>
            <a href="mailto:glorylegaspi@gmail.com?subject=Commision Request"><button class="btn" type="button" style="border: 1px solid #dc228b; color:#dc228b;">Email</button></a>
            <a href=""><button class="btn" type="button" style="border: 1px solid #dc228b; color:#dc228b;">WhatsApp</button></a>
            </div>
            </div>
          </div>
        </div>
	</DIV>
    `;
  }
}

customElements.define('special-header', Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <DIV id="footer-con">
    <div class="container p-4" style="max-width: 85%; color: #e68bbe;">
    <div class="row" style="margin-top: 10px;">
      <div class="col-sm-6" style="margin-bottom: 20px; ">
        <h5 >Credits</h5>
       <span style="color: #d84c9b;"> Artwork drawn by Glory Legaspi. I don't claim to own any copyrighted characters. It's fan art. <br>
        Color pallete from <a style="text-decoration: none; color:#dc228b;" href="https://www.color-hex.com/color-palette/47182">Link</a> and <a style="text-decoration: none; color:#dc228b;" href="https://suncatcherstudio.com/color/rainbow-color-palette/#7-COLOR-RAINBOW">Link</a> <br> Powered by bootstrap and slick carsole. Site written in HTML, CSS and Javascript in Sublime Text </span>
      </div>
      <div class="col">
        <h5>Other Sites</h5>
        <a href="https://dohorcadrg.github.io/poop-collector/" style="text-decoration: none; color:#dc228b;">Poop Collector</a><br>
        <a href="https://dohorcadrg.github.io/html-adventures/" style="text-decoration: none; color:#dc228b;">HTML Adventures</a><br>
        <a href="" style="text-decoration: none; color:#dc228b;">Shephards Crossing Guide</a>
      </div>
      <div class="col">
        <h5>Follow Me At</h5>
          <div style="font-size: 1.5em; color:#dc228b;">
            <a style="color:#dc228b;" href="https://www.facebook.com/glory.legaspi"><i class="fa-brands fa-facebook"></i></a>
            <a style="color:#dc228b;" href=""><i class="fa-brands fa-instagram"></i></a>
            <a style="color:#dc228b;" href=""><i class="fa-brands fa-youtube"></i></a>
           <a style="color:#dc228b;" href="https://github.com/dohorcadrg"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
    </div>
    </div>
    <div style="background-color:#f4b8da;color: #d84c9b;" class="text-center p-3">
    ©Glory Legaspi <br>
  </DIV>
    `;
  }
}

customElements.define('special-footer', Footer);

class BannerText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <span style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px #e68bbe;"><br><br><H1 class="display-4">Glory's Art Portfolio</H1><p class="lead">Welcome to my art</p><br><br><br></span>
    `;
  }
}

customElements.define('banner-text', BannerText);