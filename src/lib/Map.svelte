<script>
    import { data } from './../data/data';
    import { scaleOrdinal, format } from 'd3';
    import { createEventDispatcher } from 'svelte';
    
    const numberFormat = format(".0%");
    const dispatch = createEventDispatcher();

    export let metrics;
    export let colors;
    export let hoveredData = null;

    const states = [...new Set($data.map(d => d.state_code))];
    const stateData = [];

    states.forEach(state => {
        let obj = {};
        obj.state_code = state;
        obj.row = $data.filter(d => d.state_code === state)[0].row;
        obj.col = $data.filter(d => d.state_code === state)[0].col;
        stateData.push(obj);
    });

    const colorScale = scaleOrdinal()
        .domain(metrics)
        .range(colors);           

    function handleMouseOver(state_code) {      
        dispatch('hover', {state_code});
    }

</script>

<div class="container">
    {#each stateData as state}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div 
            class="state-cell"
            class:hovered-state={hoveredData === null ? false : hoveredData[0].state_code === state.state_code}
            style="grid-row-start: {state.row};grid-column-start: {state.col}"
            on:mouseover={() => handleMouseOver(state.state_code)}
            on:mouseout
        >
            <div class="state-label">{state.state_code}</div>
            <div class="state-values">
                {#each metrics as metric}
                    <div 
                        class="state-metric"
                        style="width:{$data.filter(d => d.category === metric && d.state_code === state.state_code)[0].value/0.52*100}%; background-color: {colorScale(metric)};"    
                    >
                    {#if metric === "Midjourney"}
                        <span>{numberFormat($data.filter(d => d.category === metric && d.state_code === state.state_code)[0].value)}</span>
                    {/if}                
                </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(8, 1fr);
        gap: 8px;
    }

    .state-cell {
        display: flex;
        flex-direction: column;      
        padding: 0px 0 4px 4px; 
        cursor: pointer;
        border-radius: 4px;
    }

    .state-label {
        height: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        pointer-events: none;
    }

    .state-values {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 1px;
        pointer-events: none;
    }

    .state-metric {
        height: 100%;
        pointer-events: none;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 2px;
        border-radius: 4px;
    }

    .state-metric span {
        position: absolute;
        font-size: 10px;
        pointer-events: none;
    }

    .hovered-state {
        border: 2px solid white;                
    }

</style>