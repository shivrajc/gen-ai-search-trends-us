<script>
// @ts-nocheck

  import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
  import { scaleLinear, scaleBand, scaleOrdinal, extent } from "d3";
  import { createEventDispatcher } from 'svelte';
    
  const dispatch = createEventDispatcher();

  export let innerWidth;
  export let innerHeight;
  export let metric;
  export let metrics;
  export let y;
  export let dataset;
  export let xTicks;
  export let hoveredData;

  const radius = 10;

  const colorScale = scaleOrdinal()
    .domain(metrics)
    .range(["#007AF5", "#D6C100", "#DB3069"]);

  $: xScale = scaleLinear().domain(extent(xTicks)).range([0, innerWidth]);

  let simulation = forceSimulation(dataset);
  let nodes = [];
  simulation.on("tick", () => {
    nodes = simulation.nodes();
  });

  $: {
    simulation
      .force(
        "x",
        forceX()
          .x((d) => xScale(d.value))
          .strength(0.8)
      )
      .force("y", forceY().y(y).strength(1))
      .force("collide", forceCollide().radius(radius))
      .alpha(0.1)
      .restart();
  }
  
  function handleMouseOver(state_code) {      
        dispatch('hover', {state_code});
    }
</script>

<g>
  {#each nodes as node, i}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <circle
      cx={node.x}
      cy={node.y}
      r={radius}
      fill={colorScale(metric)}
      class="dots"
      class:hovered-dot={hoveredData === null ? false : hoveredData[0].state_code === node.state_code}
      on:mouseover={() => handleMouseOver(node.state_code)}
      on:mouseout      
    />

    <text x={node.x} y={node.y + 1}>
      {node.state_code}
    </text>
  {/each}
</g>

<style>
  .dots {
    stroke: var(--background-color);
    stroke-width: 1;
    cursor: pointer;
  }

  .hovered-dot {
    fill: white;
    transition: fill 250ms ease-out;
  }

  text {
    text-anchor: middle;
    dominant-baseline: middle;
    font-size: 12px;
    font-weight: 600;
    pointer-events: none;
  }
</style>
