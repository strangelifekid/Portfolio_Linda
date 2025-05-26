const header = `<header>
<nav>
<ul>
<li><a href="./index.html#top">Home</a></li>
                <div class="grow"></div>
                <li><a href="./index.html#aboutMe">Über mich</a></li>
                <li><a href="./index.html#projects">Projekte</a></li>
                <div id="contactButton" ><li id="rightContact" ><a href="./index.html#contact">Kontakt</a></li> </div>
            </ul>
        </nav>
    </header>
    `
const upButton = `<upButton>
    <button>
        <p>Up!</p>
    </button>
</upButton>
`


class headerClass extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = header;

    }
}
customElements.define( "header-class", headerClass );