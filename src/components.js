const header = `<header>
<nav>
<ul>
<li><a href="./index.html#top">Home</a></li>
                <div class="grow"></div>
                <li><a href="./index.html#aboutMe">About me</a></li>
                <li><a href="./index.html#projects">Projects</a></li>
                <div id="contactButton" ><li id="rightContact" ><a href="./index.html#contact">Contact</a></li> </div>
            </ul>
        </nav>
    </header>
    `

class headerClass extends HTMLElement {
    constructor () {
        super();
        this.innerHTML=header;

    }
}
customElements.define("header-class",headerClass);