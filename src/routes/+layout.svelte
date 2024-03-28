<script>
    import "../app.pcss";
    import { page } from '$app/stores'
    import { caughtMonsters } from "$lib/stores";
    import Switch from './Switch.svelte'
	  import Home from '$lib/assets/Home.png';

	 /**
   * @type {string}
   */
	  let sliderValue;
</script>

<div class='flex justify-between p-[10px] {sliderValue == 'on' ? 'active : bg-[#333] text-[#fff]' : 'bg-white text-[#333]' }'>
  <div class = 'grid-col-1'>
    <a href='/' class = 'hover:text-[#CCC] mx-auto {$page.url.pathname == '/' ? 'active : border-[1px] rounded' : '' } 
                        {sliderValue == 'on' ? 'active : border-white' : 'border_black' }'>Home</a>
    <img alt="Home logo" class= 'h-[30px] w-[30px] mx-auto' src={Home} />       
  </div>
  <div>
    <Switch bind:value={sliderValue} label="Mode" fontSize={16}/>
    <a href='/my-monster' class = 'hover:text-[#CCC] {$page.url.pathname == '/my-monster' ? 'active : border-[1px] rounded' : ''} '>
      My Monster ({$caughtMonsters.length})
    </a>
  </div>
</div>
<div class='w-full {sliderValue == 'on' ? 'active : bg-white' : 'bg-[#333]' } {$page.url.pathname == '/' ? 'active : h-full' : 'h-screen'}'>
<div class = 'max-w-[90%] mx-auto my-0 w-[1200px]'>
  <slot />
</div>
</div>
<!-- layout of routes -->