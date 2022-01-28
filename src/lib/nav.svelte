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
      <a href="https://github.com/dikbek/360"  target="_blank" class="letter let1">360&deg;</a>   
    </div>
  </div>
   

<style>
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
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

  .logo {
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

.let1 {
    animation: spin1 1s cubic-bezier(0,.51,.17,1) 0.25s 1 ;
    
}

@keyframes spin1 {
    100% {
      transform: rotateZ(-360deg);
    }
  }

  
</style>
