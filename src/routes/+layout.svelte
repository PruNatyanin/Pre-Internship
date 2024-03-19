<script>
    import "../app.pcss";
    import { page } from '$app/stores'
    import { caughtMonsters } from "$lib/stores";
</script>

<div class='flex justify-between bg-[#333] text-[#fff]
            p-[10px]'>
  <a href='/' class = 'hover:text-[#CCC] {$page.url.pathname == '/' ? 'active : border-[1px] rounded' : ''}'>Home</a>
  <a href='/my-monster' class = 'hover:text-[#CCC] {$page.url.pathname == '/my-monster' ? 'active : border-[1px] rounded' : ''} '>
    My Monster ({$caughtMonsters.length})
  </a>
</div>

<div class = 'max-w-[90%] mx-auto my-0 w-[1200px]'>
  <slot />
</div>
<!-- layout of routes -->