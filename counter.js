class MyCounter extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ["count"];
    }

    connectedCallback(){
        this.render();
    }

    render(){//esas comillas alt 96
        this.shadow.innerHTML=`
        <h1>Counter</h1>
        ${this.count}
        <button id='btn'>Increment</button>
        `;
    }
}
customElements.define('my-counter', MyCounter);