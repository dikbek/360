<script>
  //js imports
  import { Link, Router, navigate } from "svelte-navigator"
  //stores
  import { Routes } from "../stores/routes"

  import { fade, scale, slide } from "svelte/transition"
  import { cubicInOut, elasticOut } from "svelte/easing"

  //     //button





</script>


  <div class="wrapper">
    <div class="logo" href="/">
      <a href="http://www.illustrative.dev"  target="_blank" class="letter let1">360&deg;</a>   
    </div>
  </div>
   

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  * {
    margin: 0;
    padding: 0;
  }

  

  .icons-container {
    display: flex;
    flex: 2.5em 2.5em 2.5em 2.5em;
    height: max-content;
    border-top: solid 2px #ffffff60;
    margin-top: 10px;

  }

  .icon {
    margin-top: 10px;
    height: 1.5em;
    width: 1.5em;
    cursor: pointer;
  }

  .mail {
    background-image: url(/assets/images/icons/mail.svg);

  }
  .git {
    background-image: url(/assets/images/icons/github.svg);

  }
  .insta {
    background-image: url(/assets/images/icons/instagram.svg);

  }
  .linkedin {
    background-image: url(/assets/images/icons/linkedin.svg);

  }

  .icon:hover {
    filter: invert(25%) saturate(28789%) hue-rotate(250deg) ;
  }


  .toggle {
    display: block;
    font-size: 0.9em;
    text-align: center;
    cursor: pointer;

  }
  a {
    color: #ffffff;
    text-decoration: none;
  }



  .wrapper :global(.nav) {
    color: #ffffff;
    text-decoration: none;
    z-index: 100;
  }
  a:hover {
    color: #ffffff50;
  }

  .wrapper {
    
    align-items: center;
    align-self: center;
    height: max-content;
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: max-content;
    transition: height 1s;
    z-index: 1;
  }

  .nav {
    text-align: left;

    align-content: left;
    color: #ffffff;
    text-decoration: none;
    font-size: 1em;
    padding: 0.5em 0 0.5em 0;
    grid-column: 1/2;
    height: max-content;
    width: 9em;
    border-top: solid 2px #ffffff60;
    border-bottom: solid 2px #ffffff60;
  }

  input#menu {
    display: none;
  }

  label {
    font-size: 1.5em;
    cursor: pointer;
    transform: rotate(90deg);
  }

  label:hover {
    color: rgb(169, 223, 98);
    
    transform: rotate(calc(360deg + 90deg)) scale(1.25);
    transition: 0.5s cubic-bezier(0,.51,.17,1); 
    /* animation: bounce 0.5s ease-in-out infinite alternate;  */
  }

  @keyframes bounce {
    50% {
      transform: scale(1.25) rotate(90deg);
    }
    /* 100% {
        transform: translateX(-2px);
    } */
  }

  .wrapper :global(.menu-item) {
    color: #ffffff;
    font-size: 0.75em;
    text-decoration: none;
  }

  .wrapper :global(.menu-item):hover {
    color: #555555;
    font-size: 0.75em;
    text-decoration: none;
  }

  .nav ul li a:hover {
    text-decoration: none;
    background-color: #ffffff25;
  }

  .wrapper :global(a) {
    color: #ffffff;
    text-decoration: none;
  }
  .nav :global(a:hover) {
    color:#d2e907;
    text-decoration: none;
    font-size: 0.9em;
    animation: sway 1s ease-in-out;
  }
  @keyframes sway {
    50% {
      transform: scale(40px);
    }
    /* 100% {
        transform: translateX(-2px);
    } */
  }
  input:hover {
    color: #6a721f;
  }

  .wrapper :global(.logo) {
    font-family: 'carlmarx', monospace;
    font-weight: 700;
    display: flex;
    margin: 10px;
    /* font-weight: 800; */
    font-size: 2em;
    cursor: pointer;
    text-decoration: none;
    transform-origin: center;
    transform: rotateZ(-45deg)
  }

  .letter {
    opacity: 1;
    transition: 0.8s cubic-bezier(0.08, 0.82, 0.17, 1);
  }
  .letter:hover {
    color: #d2e907;
    transform: rotateZ(360deg);
  }

.dev {
    font-weight: 400;
}

.let1 {
    animation: spin1 1s cubic-bezier(0,.51,.17,1) 0.25s 1 ;
    
}

@keyframes spin1 {
    100% {
      transform: rotateY(360deg);
    }
  }

  
</style>
