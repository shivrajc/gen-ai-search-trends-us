<script>
  import MediaQuery from './MediaQuery.svelte';
  
  import AppMobile from './lib/mobile/AppMobile.svelte';
  import AppDesktop from './AppDesktop.svelte';

</script>


<MediaQuery query="(min-width: 700px)" let:matches>
  {#if matches}
      <AppDesktop />              
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 700px)" let:matches>
  {#if matches}
        <AppMobile />       
  {/if}
</MediaQuery>    