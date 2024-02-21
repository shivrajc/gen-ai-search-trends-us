<script>
  import { data } from './data/data';
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import BeeSwarmChart from './lib/BeeSwarmChart.svelte';
  import Map from "./lib/Map.svelte";
  import { format } from 'd3';

  let width;
  let height = 800; 
  let hoveredData = null;

  const numberFormat = format(".0%");
  const metrics = ["Midjourney",  "DALL-E", "Stable Diffusion"];
  const colors = ["#057FFA", "#F9E10F", "#F43575"];

  function handleHover(e) {
    hoveredData = $data.filter(d => d.state_code === e.detail.state_code); 
  }

  function handleMouseOut() {
    hoveredData = null;
  }

</script>

<main>
  <div class="header">
    <Header />
  </div>
  <div class="map">

    {#if hoveredData}        
      <div class="tooltip">
        <p class="main-text">{hoveredData[0].state}</p>
        <div class="values">
        <p class="sub-text">Midjopurney: <span>{numberFormat(hoveredData.filter(d => d.category === "Midjourney")[0].value)}</span></p>
        <p class="sub-text">DALL-E: <span>{numberFormat(hoveredData.filter(d => d.category === "DALL-E")[0].value)}</span></p>
        <p class="sub-text">Stable Diffusion: <span>{numberFormat(hoveredData.filter(d => d.category === "Stable Diffusion")[0].value)}</span></p>
        </div>
      </div>
    {/if}

    <Map {metrics} {colors} {hoveredData} on:hover={handleHover} on:mouseout={handleMouseOut}/>
  </div>
  <div class="beeswarm" bind:clientWidth={width}>
    <svg {width} {height}>
      <BeeSwarmChart 
        {width} {height} {metrics} {colors} {hoveredData}
        on:hover={handleHover}  
        on:mouseout={handleMouseOut}
      />
    </svg>
  </div>
  <div class="footer">
      <Footer />
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    height: 900px;
    max-width: 1600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 140px 1fr 60px;
    grid-template-areas: 
      "header header"
      "map beeswarm"
      "footer footer"
    ;
    column-gap: 40px;
    row-gap: 40px;
  }

  svg {
    overflow: hidden;
  }

  .beeswarm {
    grid-area: beeswarm;
  }

  .map {    
    grid-area: map;
    padding: 100px 8px;
    position: relative;
  }

  .header {
    border-bottom: 0.6px solid var(--y-axis-label);  
    grid-area: header;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    padding-left: 2px;
  }

  .footer {
      border-top: 0.6px solid var(--y-axis-label);        
      padding: 8px 4px;
      grid-area: footer;
  }

  .tooltip {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    top: 28px;
    left: 150px;
    transition: all 250ms ease;
  }

  .main-text {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: flex;

  }

  .tooltip .values {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center; 
    font-size: 18px;
  }

  .tooltip .values p:nth-of-type(1) {
    color: var(--color-blue);
  }

  .tooltip .values p:nth-of-type(2) {
    color: var(--color-yellow);
  }

  .tooltip .values p:nth-of-type(3) {
    color: var(--color-red);
  }

  .tooltip .values span {
    font-weight: bold;
  }
</style>