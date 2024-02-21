<script>
    import { data } from './../data/data';
    import { scaleBand, scaleLinear, extent, scaleOrdinal, mean, format } from 'd3';
    import Beeswarm from './../lib/Beeswarm.svelte';
  
    export let width;
    export let height;
    export let metrics;
    export let colors;
    export let hoveredData;
    const margin = { top: 40, right: 40, left: 20, bottom: 40 };    
    $: innerWidth = width - margin.left - margin.right;
    $: innerHeight = height - margin.top - margin.bottom;
      
    const xTicks = [0.2, 0.3, 0.4, 0.5];
    const nFormat = format(".0%");
  
    $: yScale = scaleBand()
      .domain(metrics)
      .range([0, innerHeight])
      // .paddingOuter(0.5);
      
    $: xScale = scaleLinear()
      .domain(extent(xTicks))
      .range([0, innerWidth]);

    const colorScale = scaleOrdinal()
        .domain(metrics)
        .range(colors);        
</script>
  
<g transform="translate({margin.left}, {margin.top})">
    <g>
    {#each xTicks as xTick}
        <line 
            x1={xScale(xTick)}
            x2={xScale(xTick)}
            y1={0}
            y2={innerHeight-20}
            class="y-axis-line"
        />
        <text 
            x={xScale(xTick)}            
            y={-8}
            class="axis-labels"
        >{xTick*100}%</text>
        <text 
            x={xScale(xTick)}            
            y={innerHeight-8}
            class="axis-labels"
        >{xTick*100}%</text>
    {/each}
    </g>            
    
    {#each metrics as metric} 
        <line 
            x1={0}
            x2={innerWidth}
            y1={yScale(metric) + yScale.bandwidth()/2}
            y2={yScale(metric) + yScale.bandwidth()/2}
            stroke={colorScale(metric)}
            class="x-axis-line"
        />
        <text 
            x={metric==="Midjourney" ? 24 : innerWidth-24}            
            y={yScale(metric) + yScale.bandwidth()/2 - 8}
            text-anchor={metric==="Midjourney" ? "start" : "end"}            
            stroke={colorScale(metric)}
            class="x-axis-labels"
        >{metric.toUpperCase()}</text>
        <text 
            x={metric==="Midjourney" ? 24 : innerWidth-24}            
            y={yScale(metric) + yScale.bandwidth()/2 + 18}
            text-anchor={metric==="Midjourney" ? "start" : "end"}            
            stroke={colorScale(metric)}
            class="x-axis-labels"
        >AVG: {nFormat(mean($data.filter(d => d.category === metric), d => d.value))}</text>
        <Beeswarm 
            dataset={$data.filter(d => d.category === metric)} 
            {innerWidth} {innerHeight} {metric} {metrics} {xTicks} 
            y={yScale(metric) + yScale.bandwidth()/2} 
            {hoveredData}
            on:hover
            on:mouseout
        />
    {/each}
</g>

  
<style>
    .axis-labels {
        fill: var(--y-axis-label);
        text-anchor: middle;
        font-size: 12px;
    }

    .x-axis-labels {
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 100;
    }

    .y-axis-line {
        stroke: var(--y-line-stroke);
        stroke-dasharray: 2;
        stroke-width: 0.6;
    }

    .x-axis-line {
        stroke-width: 0.6;
    }
</style>